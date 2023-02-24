---
id: 'gatsby-wordpress-add-ons'
title: 'Add Ons'
slug: '/frontend-starters/nextjs/gatsby/gatsby-wordpress/add-ons'
sidebar_position: 5
---

### Advanced Custom Fields

Advanced Custom Fields turns WordPress sites into a fully-fledged content
management system by giving you all the tools to do more with your data.

Advanced custom fields let you add, store, and display additional information
about a piece of content in WordPress. This information can easily be assessed
through GraphQL with simple adjustments to existing queries.

This add-on uses GraphQL to bring in a custom `related content` data type that
was created with Advanced Custom Fields. Your starter kit will have a related
content section that displays at the bottom of post detail pages, if related
posts are specified on the related WordPress post.

#### Before You Begin

- Install and activate the
  [WP Advanced Custom Fields Plugin](https://wordpress.org/plugins/advanced-custom-fields/).

- Install the
  [Create Pantheon Decoupled Kit CLI](https://www.npmjs.com/package/create-pantheon-decoupled-kit/).

#### Instillation Through CLI

1. Use the create command to initiate the cli
   `pnpm create pantheon-decoupled-kit`
1. Select the `gatsby-wp-acf-addon` and go through the prompts. Set the output
   to the directory that your Gatsby Wordpress Starter is located
1. Once the app is generated, add
   `https://acf-decoupled-wordpress-qa.pantheonsite.io/wp/graphql` as the
   `WPGRAPHQL_URL` in `.env.development.local`
1. Start your project locally and observe the new related content section that
   displays at the bottom of post detail pages

#### Usage

##### Creating a Custom Field

In the Advanced Custom Fields plugin dashboard:

1. Select **Add New** next to field groups
1. Name your field group
1. Select a field type, field name, and field label for your custom field
1. Ensure **Show in GraphQL** is selected for your field
1. At the bottom of the form make sure **Show in GraphQL** is selected for your
   field group and that its generated field name is correct
1. Save your changes

##### Adding Custom Field Data

Once you have created a field group, values can be assigned to your new custom
fields via the Guttenberg editor.

1. Select and existing post or page, or create a new one.
1. At the bottom of your editor, you will see the new custom fields that have
   been created, fill them in with data of your choosing
1. Save and publish your content updates

##### Querying a Custom Field

Accessing data within your custom fields is a simple process that closely
resembles a standard GraphQL query.

To query a custom field, you will reference your custom field group as an
object, then fill in that object with each individual custom field names.

Below is an example of how to query a field group that is titled
`acfDemoFields`, which has fields `acfTextField`, `acfFeaturedImage`, and
`acfContent`:

```jsx
export const pageQuery = graphql`
	query PostById($id: String!) {
		# selecting the current post by id
		post: wpPost(id: { eq: $id }) {
			id
			acfDemoFields {
				fieldGroupName
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
