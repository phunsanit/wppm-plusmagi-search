(function (blocks, element) {
    var el = element.createElement;
    var registerBlockType = blocks.registerBlockType;

    registerBlockType('plusmagi/search', {
        title: 'PlusMagi Search',
        icon: 'search',
        category: 'widgets',
        description: 'A dedicated search box with role-based access control.',
        keywords: ['search', 'plusmagi', 'find'],
        example: {},
        edit: function () {
            return el('div', { className: 'plusmagi-search-editor-wrapper' },
                el('div', { style: { padding: '15px', border: '1px solid #ccc', background: '#f9f9f9' } },
                    el('strong', {}, 'PlusMagi Search'),
                    el('input', {
                        type: 'text',
                        placeholder: 'Search...',
                        disabled: true,
                        style: {
                            width: '100%',
                            marginTop: '10px',
                            padding: '8px',
                            borderRadius: '4px',
                            border: '1px solid #ddd'
                        }
                    })
                )
            );
        },
        save: function () {
            return null; // Return null to render via PHP
        },
    });
})(window.wp.blocks, window.wp.element);
