---
id: 'add-ons'
title: 'Add-ons'
slug: '/backend-starters/decoupled-wordpress/add-ons'
sidebar_position: 6
---

## Add-ons that can be used for Decoupled WordPress

### Decoupled Kit ACF Plugin

#### Installation

<!--- TODO: Update the Plugin link with WordPress.org plugin when it's hosted there --->

To install the
[Decoupled Kit ACF](https://github.com/pantheon-systems/decoupled-kit-acf)
plugin, follow these steps:

1. Log in to your Decoupled WordPress dashboard.
1. Go to **Plugins** in the left-hand menu.
1. Find the plugin Decoupled Kit ACF from list of installed plugins.
1. Click the **Activate** button under the plugin's name.

:::note

[Advanced Custom Fields](https://wordpress.org/plugins/advanced-custom-fields/)
&
[WPGraphQL for Advanced Custom Fields](https://github.com/wp-graphql/wp-graphql-acf)
will be activated too as Decoupled Kit ACF is depended on them.

:::

#### Usage

The Decoupled Kit ACF plugin provides a example ACF fields. These example field
gets created when the plugin is activated.

To view this custom field, create/edit any post. The create/edit post form will
have a new field name **Related Content**. This field can be used to refer any
other post into the current post.

All the required configuration for the **Related Content** advance custom field
is setup so that it can be used in GraphQL queries.

:::note

The Custom Field Related Content created as an example won't be listed under the
Advanced Custom Fields plugin listing page. Currently this a limitation with
Advanced Custom Fields plugin to know more about it refer the
[official documentation](https://www.advancedcustomfields.com/resources/register-fields-via-php/#getting-started)
of Advanced Custom Fields.

:::

#### Contributing

Contributions are welcome! If you find a bug or have a feature request, please
create an issue on the
[GitHub repository](https://github.com/pantheon-systems/decoupled-kit-acf).
