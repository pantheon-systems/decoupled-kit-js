---
id: 'configuring-existing-project'
title: 'Configuring an Existing Drupal Project'
slug: '/backend-starters/decoupled-drupal/configuring-an-existing-project'
sidebar_position: 3
---

While we offer a back-end starter project to simplify the process of configuring
a Drupal site for use with our front-end starter kits, you may instead prefer to
use an existing Drupal project. Follow the steps below to configure an existing
Drupal project to work with one of our front-end starter kits.

## Before You Begin

These instructions assume that you have already installed Drupal using your
preferred method.

The amount of necessary configuration will vary depending on the features you
intend to use within your front-end starter kit. As a result, the instructions
below are broken down into three related sections.

## 1. Configuring Basic Builds

If you only need to source content anonymously from your Drupal site, follow the
steps below.

### Add and Enable Dependencies

- Run the following Composer commands:

```
composer config minimum-stability beta
composer require drupal/jsonapi_menu_items drupal/jsonapi_hypermedia drupal/decoupled_router
```

- Enable the media_library, jsonapi, jsonapi_menu_items_hypermedia, and
  decoupled_router modules, which will also enable a number of dependencies.
- Clear the Drupal cache.

### Configure Images

Our starter kits assume that you are using Drupal's core Media module to manage
images. If you are instead using the default image field, you will need to make
one of two possible adjustments:

- Add a new field of type 'Media' to the Article content type. The resulting
  field should have the label 'Media Image' which will result in the machine
  name `field_media_image`.
- Update your starter kit to use the default image field instead of the Media
  field. Consult the
  [adapting for use with existing Drupal sites](../../frontend-starters/nextjs/nextjs-drupal/troubleshooting#adapting-for-use-with-existing-drupal-sites)
  entry within the Next.js + Drupal documentation for further instructions.

### Ensure That Your Content Uses URL Aliases

The starter kit uses the Decoupled Router module to determine the path at which
your Drupal content should display. As a result, while the pattern used to
define your paths does not matter, your page and article content must have a
path alias of some kind. This can be defined manually during content creation,
or automatically using the
[Pathauto module](https://www.drupal.org/project/pathauto).

### Create Supporting Content

Our starter kits assume that there is at least one published article and page in
your Drupal back-end. If your site does not have any article or page content,
you should create some before proceeding.

### Set the Necessary Front-End Environment Variables

At this point, your Drupal site should be configured to allow data to be sourced
anonymously by the front-end starter kit. Within your front-end project you will
also need to set the necessary environment variables to source data from your
Drupal back-end. For anonymous data sourcing you will need to set at least the
`BACKEND_URL` and `IMAGE_DOMAIN` variables.

- [Instructions for the Next.js and Drupal starter kit](../../frontend-starters/nextjs/nextjs-drupal/setting-environment-variables)
