---
id: 'next-wordpress-add-ons'
title: 'Add-ons'
slug: '/frontend-starters/nextjs/nextjs-wordpress/add-ons'
sidebar_position: 8
---

## Before You Begin

- Install and activate the
  [WP Advanced Custom Fields Plugin](https://wordpress.org/plugins/advanced-custom-fields/).

- Familiarize yourself with the
  [Create Pantheon Decoupled Kit CLI](https://www.npmjs.com/package/create-pantheon-decoupled-kit/).
  Any package manager can be used with the CLI **[npm, pnpm, yarn]**.

## Advanced Custom Fields WordPress Plugin

The Advanced Custom Fields WordPress plugin, or ACF, turns WordPress sites into
a fully-fledged content management system by giving you all the tools to do more
with your data.

ACF lets you add, store, and display additional information about a piece of
content in WordPress. This information can easily be assessed through GraphQL
with simple adjustments to existing queries.

This add-on uses GraphQL to bring in a custom related content data type that was
created with ACF. After adding the `next-wp-acf-addon`, our starter kit will
have a related content section that displays at the bottom of post detail pages,
if related posts are specified on the related WordPress post.

## Usage

### Adding the `next-wp-acf-addon` to an Existing Project

1. Use the create command to initiate the cli with the `next-wp-acf-addon`
   generator
   ```bash
   npm create pantheon-decoupled-kit next-wp-acf-addon
   ```
1. When prompted for an output directory, set the output to the root directory
   of your existing Next Wordpress Starter
1. Start your project locally and observe the new related content section that
   displays at the bottom of post detail pages

### Building a New Project with the `next-wp-acf-addon`

1. Use the create command to initiate the cli with both the `next-wp` and
   `next-wp-acf-addon` generators
   ```bash
   npm create pantheon-decoupled-kit next-wp next-wp-acf-addon
   ```
1. Continue through the prompts until all actions finish running
1. Add the necessary environment variables in `.env.development.local` and start
   your project locally. Observe the new related content section that displays
   at the bottom of post detail pages

### Fetching Data From a Custom Field

Accessing data within your custom fields is a simple process that closely
resembles a standard GraphQL query.

To query a custom field, you will reference your custom field group as an
object, then fill in that object with each individual custom field name.

Below is an example of how to query a `Post` which has a custom field data. In
this case, the custom field group is titled `acfDemoFields`, and has fields
`acfTextField`, `acfFeaturedImage`, and `acfContent`:

```jsx
const query = gql`
	query PostBySlugQuery($uriString: ID!) {
		post(id: $uriString, idType: URI) {
			acfDemoFields {
				acfTextField
				acfFeaturedImage {
					altText
					sourceUrl
				}
				acfContent
			}
		}
	}
`;
```
