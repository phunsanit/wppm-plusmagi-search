jQuery(document).ready(function ($) {
	var $input = $('#wppm-search-input');
	var $results = $('#wppm-search-results');
	var timer;
	var activeTab = 'posts'; // Default tab

	// 1. Move results to body so z-index / overflow:hidden in parent themes
	//	cannot clip the dropdown.
	if ($results.length > 0 && !$results.parent().is('body')) {
		$('body').append($results);
	}

	// 2. Position dropdown beneath the input.
	//	Uses position:fixed + getBoundingClientRect() so the coordinates are
	//	relative to the viewport and never need updating on scroll.
	//	This avoids the Firefox "scroll-linked positioning effect" warning
	//	caused by reading layout information inside a scroll event handler.
	function repositionDropdown() {
		if (!$input.is(':visible')) return;
		var rect = $input[0].getBoundingClientRect();

		$results.css({
			'top': (rect.bottom + 4) + 'px',
			'left': rect.left + 'px',
			'width': rect.width + 'px',
			'position': 'fixed',
			'z-index': 999999
		});
	}

	// Only reposition on resize (not scroll — fixed positioning handles that).
	$(window).on('resize', function () {
		if ($results.is(':visible')) repositionDropdown();
	});

	// 3. Build a safe anchor element for a single result item.
	//	All dynamic content is set via .text() / .attr() to prevent XSS.
	function buildItem(item, mode) {
		var $li = $('<li>');
		var $a = $('<a>').attr('href', item.link);
		var $icon = $('<div>').addClass('wppm-item-icon');

		if (item.thumbnail) {
			$('<img>')
				.addClass('wppm-item-thumb')
				.attr('src', item.thumbnail)
				.attr('alt', '')
				.appendTo($icon);
		} else {
			var iconClass = 'dashicons-admin-post';
			if (mode === 'term') {
				iconClass = (item.original_type === 'category') ? 'dashicons-category' : 'dashicons-tag';
			} else if (item.original_type === 'page') {
				iconClass = 'dashicons-admin-page';
			}
			$('<span>')
				.addClass('dashicons ' + iconClass)
				.css({ 'font-size': '20px', 'width': '20px', 'height': '20px', 'line-height': '20px' })
				.appendTo($icon);
		}

		var $details = $('<div>').addClass('wppm-item-details');
		var $title = $('<span>').addClass('wppm-item-title').text(item.title);

		// Append status pill for non-published posts (text only, no raw HTML)
		if (mode !== 'term' && item.status && item.status !== 'publish') {
			$('<span>').addClass('wppm-search-status-pill').text(item.status).appendTo($title);
		}

		$details.append($title);

		if (mode === 'post') {
			$('<span>').addClass('wppm-item-info').text(item.date).appendTo($details);
		}

		$a.append($icon).append($details);
		$li.append($a);
		return $li;
	}

	// 4. Render a list of items into a <ul>
	function renderList(items, mode) {
		if (items.length === 0) {
			return $('<div>').addClass('no-results').text('No results found.');
		}
		var $ul = $('<ul>');
		$.each(items, function (i, item) {
			$ul.append(buildItem(item, mode));
		});
		return $ul;
	}

	// 5. Render the full tab UI and inject it into the results container
	function renderTabs(buckets) {
		$results.empty();

		// Tab headers
		var $tabs = $('<div>').addClass('wppm-search-tabs');
		$('<div>').addClass('wppm-tab').attr('data-tab', 'posts').text('Posts (' + buckets.posts.length + ')').appendTo($tabs);
		$('<div>').addClass('wppm-tab').attr('data-tab', 'categories').text('Category (' + buckets.categories.length + ')').appendTo($tabs);
		$('<div>').addClass('wppm-tab').attr('data-tab', 'tags').text('Tag (' + buckets.tags.length + ')').appendTo($tabs);

		// Tab panels
		var $panelPosts = $('<div>').addClass('wppm-tab-content').attr('id', 'tab-content-posts').hide().append(renderList(buckets.posts, 'post'));
		var $panelCats = $('<div>').addClass('wppm-tab-content').attr('id', 'tab-content-categories').hide().append(renderList(buckets.categories, 'term'));
		var $panelTags = $('<div>').addClass('wppm-tab-content').attr('id', 'tab-content-tags').hide().append(renderList(buckets.tags, 'term'));

		$results.append($tabs).append($panelPosts).append($panelCats).append($panelTags).show();

		switchTab(activeTab);
	}

	function switchTab(tabName) {
		activeTab = tabName;
		$results.find('.wppm-tab').removeClass('active');
		$results.find('.wppm-tab[data-tab="' + tabName + '"]').addClass('active');

		$results.find('.wppm-tab-content').hide();
		$results.find('#tab-content-' + tabName).show();
		repositionDropdown();
	}

	// 6. Event delegation for tab clicks
	$results.on('mousedown', '.wppm-tab', function (e) {
		e.preventDefault(); // Prevent input blur before the click registers
		switchTab($(this).data('tab'));
	});

	$input.on('focus', function () {
		if ($(this).val().length >= 2 && $results.children().length > 0) {
			$results.show();
			repositionDropdown();
		}
	});

	// 7. Main search handler
	$input.on('input', function () {
		var term = $(this).val();
		clearTimeout(timer);

		if (term.length < 2) {
			$results.hide().empty();
			return;
		}

		repositionDropdown();

		timer = setTimeout(function () {
			$.ajax({
				url: wppmSearch.root + 'wppm-search/v1/search',
				method: 'GET',
				data: { term: term },
				beforeSend: function (xhr) {
					xhr.setRequestHeader('X-WP-Nonce', wppmSearch.nonce);
				},
				success: function (response) {
					var buckets = { posts: [], categories: [], tags: [] };

					$.each(response, function (i, item) {
						if (item.type === 'post') {
							buckets.posts.push(item);
						} else if (item.original_type === 'category') {
							buckets.categories.push(item);
						} else if (item.original_type === 'post_tag') {
							buckets.tags.push(item);
						}
					});

					renderTabs(buckets);
				},
				error: function () {
					$results.empty()
						.append($('<div>').addClass('error').text('Error retrieving results.'))
						.show();
					repositionDropdown();
				}
			});
		}, 300);
	});

	// 8. Close dropdown when clicking outside the widget
	$(document).on('click', function (e) {
		if (
			!$(e.target).closest('#wppm-search-input').length &&
			!$(e.target).closest('#wppm-search-results').length
		) {
			$results.hide();
		}
	});
});
