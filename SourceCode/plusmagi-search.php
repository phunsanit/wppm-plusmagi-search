<?php
/**
 * Plugin Name: PlusMagi Search
 * Plugin URI:  https://wp-search.plusmagi.com
 * Description: A frontend search plugin that mimics the WordPress admin search functionality, with role-based access control.
 * Version:	 1.0.0
 * Author:	  Phunsanit
 * Author URI:  https://pitt.plusmagi.com
 * License:	 MIT
 * License URI: https://opensource.org/licenses/MIT
 * Text Domain: plusmagi-search
 */

if (!defined('ABSPATH')) {
	exit;
}

define('PLUSMAGI_SEARCH_VERSION', '1.0.0');
define('PLUSMAGI_SEARCH_FILE', __FILE__);
define('PLUSMAGI_SEARCH_URL', plugin_dir_url(__FILE__));
define('PLUSMAGI_SEARCH_PATH', plugin_dir_path(__FILE__));

class PlusMagi_Search
{

	private static $instance = null;

	public static function get_instance()
	{
		if (self::$instance === null) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	public function __construct()
	{
		add_action('wp_enqueue_scripts', [$this, 'enqueue_scripts']);
		add_shortcode('plusmagi_search', [$this, 'render_shortcode']);
		add_action('rest_api_init', [$this, 'register_rest_routes']);
		add_action('init', [$this, 'register_blocks']);

		// Admin Menu
		add_action('admin_menu', [$this, 'add_admin_menu']);
	}

	public function register_blocks()
	{
		wp_register_script(
			'plusmagi-block-js',
			PLUSMAGI_SEARCH_URL . 'assets/js/block.js',
			['wp-blocks', 'wp-element'],
			'1.0.0',
			true
		);

		register_block_type('plusmagi/search', [
			'editor_script' => 'plusmagi-block-js',
			'render_callback' => [$this, 'render_shortcode']
		]);
	}

	public function add_admin_menu()
	{
		add_menu_page(
			'PlusMagi Search',
			'PlusMagi Search',
			'manage_options',
			'plusmagi-search',
			[$this, 'render_admin_page'],
			'dashicons-search',
			100
		);
	}

	public function render_admin_page()
	{
		?>
		<div class="wrap">
			<h1>PlusMagi Search</h1>
			<p>Thank you for using PlusMagi Search! This plugin provides a frontend search experience similar to the WordPress
				admin search, with role-based access control.</p>

			<div class="card">
				<h2>About the Developer</h2>
				<p>
					For support, updates, and more information, please visit our website:
					<br>
					<a href="https://wp-search.plusmagi.com" target="_blank" style="font-size: 1.2em; text-decoration: none;">
						<strong>Visit wp-search.plusmagi.com &rarr;</strong>
					</a>
				</p>
			</div>
		</div>
		<?php
	}

	public function enqueue_scripts()
	{
		wp_enqueue_script('plusmagi-search-js', PLUSMAGI_SEARCH_URL . 'assets/js/search.js', ['jquery'], '1.0.0', true);
		wp_enqueue_style('plusmagi-search-css', PLUSMAGI_SEARCH_URL . 'assets/css/search.css', ['dashicons'], '1.0.0');

		wp_localize_script('plusmagi-search-js', 'plusMagiSearch', [
			'root' => esc_url_raw(rest_url()),
			'nonce' => wp_create_nonce('wp_rest')
		]);
	}

	public function render_shortcode()
	{
		ob_start();
		?>
		<div id="plusmagi-search-wrapper">
			<input type="text" id="plusmagi-search-input" placeholder="Search..." autocomplete="off">
			<div id="plusmagi-search-results"></div>
		</div>
		<?php
		return ob_get_clean();
	}

	public function register_rest_routes()
	{
		register_rest_route('plusmagi-search/v1', '/search', [
			'methods' => 'GET',
			'callback' => [$this, 'handle_search'],
			'permission_callback' => '__return_true', // Validation happens inside to allow public access logic
		]);
	}

	public function handle_search($request)
	{
		$raw_term = sanitize_text_field($request['term']);

		if (empty($raw_term)) {
			return rest_ensure_response([]);
		}

		$results = [];
		$search_mode = 'all'; // Default: search everything
		$search_term = $raw_term;

		// Check for prefixes
		if (strpos($raw_term, 'post:') === 0) {
			$search_mode = 'post';
			$search_term = trim(substr($raw_term, 5));
		} elseif (strpos($raw_term, 'tag:') === 0) {
			$search_mode = 'tag';
			$search_term = trim(substr($raw_term, 4));
		} elseif (strpos($raw_term, 'category:') === 0) {
			$search_mode = 'category';
			$search_term = trim(substr($raw_term, 9));
		}

		if (empty($search_term)) {
			return rest_ensure_response([]);
		}

		// 1. Search Terms (Categories, Tags)
		if ($search_mode === 'all' || $search_mode === 'tag' || $search_mode === 'category') {
			$taxonomies = [];
			if ($search_mode === 'all') {
				$taxonomies = ['category', 'post_tag'];
			} elseif ($search_mode === 'tag') {
				$taxonomies = ['post_tag'];
			} elseif ($search_mode === 'category') {
				$taxonomies = ['category'];
			}

			if (!empty($taxonomies)) {
				$terms = get_terms([
					'taxonomy' => $taxonomies,
					'search' => $search_term,
					'hide_empty' => false,
					'number' => 10
				]);

				if (!empty($terms) && !is_wp_error($terms)) {
					foreach ($terms as $term) {
						$results[] = [
							'id' => $term->term_id,
							'title' => $term->name,
							'link' => get_term_link($term),
							'status' => ucfirst($term->taxonomy === 'post_tag' ? 'Tag' : 'Category'),
							'type' => 'term',
							'original_type' => $term->taxonomy,
							'date' => ''
						];
					}
				}
			}
		}

		// 2. Search Posts
		if ($search_mode === 'all' || $search_mode === 'post') {
			$args = [
				'post_type' => ['post', 'page'],
				'posts_per_page' => 20,
				's' => $search_term,
				'post_status' => 'publish',
			];

			// Advanced Access Control Logic
			if (is_user_logged_in()) {
				$current_user_id = get_current_user_id();

				if (current_user_can('edit_others_posts')) {
					$args['post_status'] = ['publish', 'draft', 'pending', 'private', 'future'];
				} elseif (current_user_can('edit_posts')) {
					$args['post_status'] = ['publish', 'draft', 'pending', 'private'];
					add_filter('posts_where', [$this, 'filter_author_posts_where'], 10, 2);
				}
			}

			// Enable Custom Fields Search join/where
			add_filter('posts_join', [$this, 'search_join_custom_fields']);
			add_filter('posts_where', [$this, 'search_where_custom_fields']);
			add_filter('posts_distinct', [$this, 'search_distinct']);

			$query = new WP_Query($args);

			// Cleanup filters
			remove_filter('posts_join', [$this, 'search_join_custom_fields']);
			remove_filter('posts_where', [$this, 'search_where_custom_fields']);
			remove_filter('posts_distinct', [$this, 'search_distinct']);

			if (is_user_logged_in() && !current_user_can('edit_others_posts') && current_user_can('edit_posts')) {
				remove_filter('posts_where', [$this, 'filter_author_posts_where'], 10);
			}

			if ($query->have_posts()) {
				while ($query->have_posts()) {
					$query->the_post();
					$post_id = get_the_ID();

					if (get_post_status() !== 'publish' && get_the_author_meta('ID') !== get_current_user_id() && !current_user_can('edit_others_posts')) {
						continue;
					}

					$post_type_label = get_post_type_object(get_post_type())->labels->singular_name;
					$thumb_url = get_the_post_thumbnail_url($post_id, 'thumbnail');

					$results[] = [
						'id' => $post_id,
						'title' => get_the_title(),
						'link' => get_permalink(),
						'status' => get_post_status(),
						'type' => 'post',
						'original_type' => get_post_type(),
						'post_type_label' => $post_type_label,
						'date' => get_the_date(),
						'thumbnail' => $thumb_url ? $thumb_url : null
					];
				}
				wp_reset_postdata();
			}
		}

		return rest_ensure_response($results);
	}

	public function search_join_custom_fields($join)
	{
		global $wpdb;
		if (is_search()) { // Only apply if standard WP_Query 's' is present, effectively
			$join .= " LEFT JOIN {$wpdb->postmeta} ON ({$wpdb->posts}.ID = {$wpdb->postmeta}.post_id) ";
		}
		return $join;
	}

	public function search_where_custom_fields($where)
	{
		global $wpdb;
		if (is_search()) {
			// We want to extend the search to include meta_value
			// The standard search generates: AND (((post_title LIKE...) OR (post_excerpt LIKE...) OR (post_content LIKE...)))
			// We want to add OR (meta_value LIKE...)

			// Simplest way is a replace, assuming standard structure.
			// CAUTION: This looks for the closing parenthesis of the main search group.

			// A safer, more robust regex approach:
			$search_term = get_query_var('s');
			if (!empty($search_term)) {
				$like = '%' . $wpdb->esc_like($search_term) . '%';
				$meta_sql = $wpdb->prepare(" OR ({$wpdb->postmeta}.meta_value LIKE %s) ", $like);

				// Inject before the last closing parenthesis of the search clause
				// This is a bit hacky but common for "searching everything" without a dedicated engine like Relevanssi.
				// We'll replace the last "))" with ") $meta_sql )"
				$where = preg_replace('/\)\)\s*$/', ") $meta_sql )", $where);
			}
		}
		return $where;
	}

	public function search_distinct($distinct)
	{
		return "DISTINCT";
	}

	public function filter_author_posts_where($where, $query)
	{
		global $wpdb;
		$current_user_id = get_current_user_id();

		$where .= " AND ( {$wpdb->posts}.post_status = 'publish' OR {$wpdb->posts}.post_author = {$current_user_id} ) ";

		return $where;
	}
}

new PlusMagi_Search();
