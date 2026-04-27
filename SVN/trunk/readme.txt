=== PlusMagi Site Search ===
Contributors: phunsanit
Tags: search, frontend, admin-search, post-search, role-based
Requires at least: 5.8
Tested up to: 6.9
Requires PHP: 7.2
Stable tag: 1.0.0
License: MIT
License URI: https://opensource.org/licenses/MIT
Text Domain: plusmagi-site-search

A WordPress plugin that enables detailed and powerful search capabilities for your site.

== Description ==

PlusMagi Site Search is a powerful plugin that enhances your site's search functionality, allowing users to perform detailed searches across posts, categories, and tags with ease. It includes smart role-based access control and advanced filtering options.

= Features =

*   **Strict Access Control**:
	*   Public Users: See only published content.
	*   Authors: See their drafts/pending posts + all published content.
	*   Editors/Admins: See all content (Drafts, Private, Future, etc.).
*   **Deep Search**:
	*   **Custom Fields**: Automatically searches post meta (e.g., SKUs, internal codes).
	*   **Taxonomies**: Searches Categories and Tags alongside posts.
*   **Search Prefixes**:
	*   `post:` - Search specific pages/posts.
	*   `tag:` - Search specific tags.
	*   `category:` - Search specific categories.
*   **Rich UI**:
	*   **Tabs**: Results organized into "Posts", "Category", "Tag".
	*   **Thumbnails**: Shows featured images if available.
	*   **Theme Integration**: Inherits site colors automatically.
*   **High Performance**: AJAX-powered, lightweight, no bloat.
*   **Developer Friendly**: Simple shortcode `[plusmagi_search]` and Block support.

For more information, visit [https://pitt.plusmagi.com](https://pitt.plusmagi.com).

== Installation ==

1.  Upload the `plusmagi-site-search` directory to the `/wp-content/plugins/` directory.
2.  Activate the plugin through the 'Plugins' menu in WordPress.
3.  Place `[plusmagi_search]` in your page or post content.

== Frequently Asked Questions ==

= Can I customize the search results? =

The search results are styled via CSS which you can override in your theme or custom CSS plugin.

= Is it free? =

Yes, this plugin is released under the MIT license.

== Changelog ==

= 1.0.0 =
*   Initial release.
