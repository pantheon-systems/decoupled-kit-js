---
id: 'add-ons'
title: 'Add-ons'
slug: '/backend-starters/decoupled-drupal/add-ons'
sidebar_position: 8
---

## Decoupled Kit Pantheon Search API

This module provides integration between Front-End sites and Drupal's Search
API, allowing you to easily search for and find content in your Front-End sites.

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

Once the Decoupled Kit Pantheon Search API module is installed, it automatically
creates an **Example Index** with the necessary configuration, such as selecting
the right entity, content type, and JSON:API endpoint for the index to return
results. Additionally, this module automatically indexes content, making it an
out-of-the-box option to start using the search data in front-end sites.

### Contributing

If you find a bug or have a feature request, please create an issue on the
[Decoupled Kit Pantheon Search API'a issues page](https://www.drupal.org/project/issues/decoupled_kit_pantheon_search?categories=All).
