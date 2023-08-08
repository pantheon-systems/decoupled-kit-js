---
id: 'add-ons'
title: 'Add-ons'
slug: '/backend-starters/decoupled-wordpress/add-ons'
sidebar_position: 7
---

## Decoupled Kit ACF Plugin

### Installation

<!--- TODO: Update the Plugin link with WordPress.org plugin when it's hosted there --->

To install the
[Decoupled Kit ACF](https://github.com/pantheon-systems/decoupled-kit-acf)
plugin, follow these steps:

1. Log in to your WordPress dashboard.
1. Go to **Plugins** in the left-hand menu.
1. Find Decoupled Kit ACF in the list of installed plugins.
1. Click the **Activate** button under the plugin's name.

:::note

The
[Advanced Custom Fields](https://wordpress.org/plugins/advanced-custom-fields/)
&
[WPGraphQL for Advanced Custom Fields](https://github.com/wp-graphql/wp-graphql-acf)
plugins will also be activated since this plugin depends on them.

:::

### Usage

The Decoupled Kit ACF plugin provides an example ACF field group called
**Related Content**. This field group will be created when the plugin is
activated.

To view this custom field, create or edit any post. The post form will have a
new field named **Related Content**. This field can be used to associate any
other post with the current post.

All the required configuration for the **Related Content** advanced custom field
group is configured so that it can be used in GraphQL queries.

:::note

Field groups registered via code are not visible in the Advanced Custom Fields
admin page. As a result, the Related Content field group provided by the plugin
will not display. More information can be found in the
[official documentation](https://www.advancedcustomfields.com/resources/register-fields-via-php/#getting-started)
of Advanced Custom Fields.

:::

### Contributing

If you find a bug or have a feature request, please create an issue on the
[GitHub repository](https://github.com/pantheon-systems/decoupled-kit-acf).
