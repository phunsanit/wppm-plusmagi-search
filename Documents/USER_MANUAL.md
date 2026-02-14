# PlusMagi Search User Manual

## Introduction
PlusMagi Search is a powerful frontend search plugin designed to mimic the WordPress admin search functionality. It provides role-based access control, ensuring that users only see content they are authorized to view.

## Features
-   **Public Search**: Visitors can search all published posts.
-   **Author Search**: Authors can search their own draft and pending posts, in addition to all published content.
-   **Admin/Editor Search**: Privileged users can search across all post statuses including private and future posts.
-   **AJAX Powered**: Instant search results without page reloads.

## Installation
1.  Download the `plusmagi-search.zip` file.
2.  Go to your WordPress Admin Dashboard -> Plugins -> Add New.
3.  Click "Upload Plugin" and select the zip file.
4.  Activate the plugin.

## Usage
To display the search bar, insert the following shortcode into any post, page, or widget:

```
[plusmagi_search]
```

## Styling
The plugin comes with a default clean style. You can override it by adding custom CSS to your theme.
The main wrapper ID is `#plusmagi-search-wrapper`.

## Support
For more information, please visit [https://pitt.plusmagi.com](https://pitt.plusmagi.com).
