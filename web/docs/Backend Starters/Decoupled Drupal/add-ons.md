---
id: 'add-ons'
title: 'Add-ons'
slug: '/backend-starters/decoupled-drupal/add-ons'
sidebar_position: 8
---

## Decoupled Kit Pantheon Search API

This module automatically configures a Solr search API server for use on
Pantheon environments and creates an example search index that can be accessed
via a JSON:API. It can also be used with the Next Drupal Search API add-on to
simplify the process of configuring search for your decoupled front-end.

### Installation

To install the Decoupled Kit Pantheon Search API module, you can follow these
steps:

1. Log in to your **Drupal admin dashboard**.
1. Go to the **Extend page (admin/modules)**.
1. Search for **Decoupled Kit Pantheon Search API** in the list of available
   modules.
1. Check the box next to the module and click the **Install** button or run the
   command `drush en decoupled_kit_pantheon_search` in the terminal.

That's it! The Decoupled Kit Pantheon Search API module should now be installed.

:::note

The [Search API Pantheon](https://www.drupal.org/project/search_api_pantheon) &
[JSON:API Search API](https://www.drupal.org/project/jsonapi_search_api) modules
will also be installed too, since Decoupled Kit Pantheon Search API depends on
them.

:::

### Usage

Once installed, the module automatically creates an **Example Index** with the
following configuration:

- Datasources: Content
- Server: Pantheon Search
- Bundles: Article & Basic page
- Index Languages: All
- Fields:

  - Body:
    - Type: Fulltext
    - Boost: 1.00
  - Title:
    - Type: Fulltext
    - Boost: 1.50

The module also adds a JSON:API endpoint for the index to return results.
Additionally, it automatically indexes content, making it an out-of-the-box
option to start using the search data in front-end sites.

### Contributing

If you find a bug or have a feature request, please create an issue on the
[Decoupled Kit Pantheon Search API'a issues page](https://www.drupal.org/project/issues/decoupled_kit_pantheon_search?categories=All).
