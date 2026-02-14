jQuery(document).ready(function ($) {
    var $input = $('#plusmagi-search-input');
    var $results = $('#plusmagi-search-results');
    var timer;
    var activeTab = 'posts'; // Default tab

    // 1. Move results to body
    if ($results.length > 0 && $results.parent().not('body').length) {
        $('body').append($results);
    }

    // 2. Position dropdown
    function repositionDropdown() {
        if (!$input.is(':visible')) return;
        var offset = $input.offset();
        var width = $input.outerWidth();
        var height = $input.outerHeight();

        $results.css({
            'top': (offset.top + height + 4) + 'px',
            'left': offset.left + 'px',
            'width': width + 'px',
            'position': 'absolute',
            'z-index': 999999
        });
    }

    $(window).on('resize scroll', function () {
        if ($results.is(':visible')) repositionDropdown();
    });

    // 3. Render Tabs and Content
    function renderTabs(buckets) {
        var html = '<div class="plusmagi-search-tabs">';
        html += '<div class="plusmagi-tab" data-tab="posts">Posts (' + buckets.posts.length + ')</div>';
        html += '<div class="plusmagi-tab" data-tab="categories">Category (' + buckets.categories.length + ')</div>';
        html += '<div class="plusmagi-tab" data-tab="tags">Tag (' + buckets.tags.length + ')</div>';
        html += '</div>';

        html += '<div class="plusmagi-tab-content" id="tab-content-posts" style="display:none;">' + renderList(buckets.posts, 'post') + '</div>';
        html += '<div class="plusmagi-tab-content" id="tab-content-categories" style="display:none;">' + renderList(buckets.categories, 'term') + '</div>';
        html += '<div class="plusmagi-tab-content" id="tab-content-tags" style="display:none;">' + renderList(buckets.tags, 'term') + '</div>';

        $results.html(html).show();

        // Activate current tab
        switchTab(activeTab);
    }

    function renderList(items, mode) {
        if (items.length === 0) return '<div class="no-results">No results found.</div>';

        var ul = '<ul>';
        $.each(items, function (i, item) {
            var statusLabel = '';
            var iconClass = 'dashicons-admin-post';

            if (mode === 'term') {
                iconClass = (item.original_type === 'category') ? 'dashicons-category' : 'dashicons-tag';
                // For terms we might not need status label unless we want to show 'Category' text
            } else {
                if (item.status !== 'publish') {
                    statusLabel = ' <span class="plusmagi-search-status-pill">' + item.status + '</span>';
                }
                if (item.original_type === 'page') iconClass = 'dashicons-admin-page';
            }

            var icon = '';
            if (item.thumbnail) {
                icon = '<img src="' + item.thumbnail + '" class="plusmagi-item-thumb" alt="" />';
            } else {
                icon = '<span class="dashicons ' + iconClass + '" style="font-size: 20px; width: 20px; height: 20px; line-height: 20px;"></span>';
            }

            ul += '<li>';
            ul += '<a href="' + item.link + '">';
            ul += '<div class="plusmagi-item-icon">' + icon + '</div>';
            ul += '<div class="plusmagi-item-details">';
            ul += '<span class="plusmagi-item-title">' + item.title + statusLabel + '</span>';
            if (mode === 'post') {
                ul += '<span class="plusmagi-item-info">' + item.date + '</span>';
            }
            ul += '</div>';
            ul += '</a>';
            ul += '</li>';
        });
        ul += '</ul>';
        return ul;
    }

    function switchTab(tabName) {
        activeTab = tabName;
        $results.find('.plusmagi-tab').removeClass('active');
        $results.find('.plusmagi-tab[data-tab="' + tabName + '"]').addClass('active');

        $results.find('.plusmagi-tab-content').hide();
        $results.find('#tab-content-' + tabName).show();
        repositionDropdown();
    }

    // Event Delegation for Tabs
    $results.on('mousedown', '.plusmagi-tab', function (e) {
        e.preventDefault(); // Prevent input blur
        var tab = $(this).data('tab');
        switchTab(tab);
    });

    $input.on('focus', function () {
        if ($(this).val().length >= 2 && $results.text().trim() !== '') {
            $results.show();
            repositionDropdown();
        }
    });

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
                url: plusMagiSearch.root + 'plusmagi-search/v1/search',
                method: 'GET',
                data: { term: term },
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('X-WP-Nonce', plusMagiSearch.nonce);
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
                    $results.html('<div class="error">Error retrieving results.</div>').show();
                    repositionDropdown();
                }
            });
        }, 300);
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('#plusmagi-search-input').length &&
            !$(e.target).closest('#plusmagi-search-results').length) {
            $results.hide();
        }
    });
});
