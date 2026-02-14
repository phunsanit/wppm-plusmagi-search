# PlusMagi Search

A frontend search plugin mimicking WordPress admin search with strict role-based access control.

## Features

- **Strict Access Control**:
  - **Public**: Only published posts.
  - **Author**: Own drafts/pending + all published.
  - **Admin/Editor**: Everything.
- **Advanced Filtering & Search Logic**:
  - **Custom Fields (Meta)**: Automatically searches all custom fields (e.g., SKUs, internal codes) linked to posts.
  - **Search Prefixes**:
    - `post: keyword` - Search specific pages/posts.
    - `tag: keyword` - Search specific tags.
    - `category: keyword` - Search specific categories.
    - `keyword` (no prefix) - Smart search across all types.
- **Rich Results**:
  - **Thumbnails**: Displays featured images in results if available.
  - **Tabs**: Results are automatically organized into Posts, Categories, and Tags tabs.
- **Admin-Like UI**: Matches the WordPress link inserter style with icons and metadata.
- **Theme Integration**: Automatically inherits theme colors via CSS variables.

## Installation

1. Download the latest release from the `build/` directory or build it yourself.
2. Upload `plusmagi-search.zip` to your WordPress plugins page.
3. Activate the plugin.

## Build Instructions

To build the plugin zip file:

```bash
cd SourceCode
./scripts/build.sh
```

The output file will be located at `../build/plusmagi-search.zip`.

## Usage

Use the shortcode anywhere on your site:

```
[plusmagi_search]
```

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add some amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
