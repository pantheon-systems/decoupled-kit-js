---
id: "gatsby-wordpress-customization"
title: "Your First Wordpress Customization"
slug: "/Frontend Starters/Gatsby Wordpress/Your First Wordpress Customization"
---

## Introduction

> Gatsby enables developers to build fast, secure, and powerful websites using a React-based framework and innovative data layer that makes integrating different content, APIs, and services into one web experience incredibly simple.

via https://www.gatsbyjs.com/why-gatsby/

## Before You Begin

This guide assumes the reader has working knowledge of React, little to no knowledge of Gatsby.

## Gatsby's GraphQL Layer

The [`gatsby-source-wordpress` plugin](https://www.gatsbyjs.com/plugins/gatsby-source-wordpress/) makes use of the [WPGraphQL WordPress plugin](https://www.wpgraphql.com/) in order to efficently cache WordPress data in Gatsby. This plugin is configured to successuflly source data out of the box. To do so, provide your GraphQL Endpoint in `.env.local` as WPGRAPHQL_URL. For example:

```
WPGRAPHQL_URL=https://dev-my-wordpress-site.pantheon.site/wp/graphql
```

Starting the app in develop mode will fetch all the data from your WordPress instance and make it available to Gatsby's GraphQL IDE. By default this is available at http://localhost:8000/\_\_\_graphql.

Use this GraphQL IDE to construct queries to be used for [page queries](https://www.gatsbyjs.com/docs/recipes/querying-data/#querying-data-with-a-page-query), [static queries](https://www.gatsbyjs.com/docs/how-to/querying-data/static-query/) or [`createPages`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createPages)

See https://www.gatsbyjs.com/docs/reference/graphql-data-layer/ for an in depth look at Gatsby's GraphQL Data Layer.

## Sourcing Data From WordPress

Let's build a query together and use it for a new page.
The query will let us grab the last 5 posts and their associated comments.
If you're familiar with GraphQL IDEs, feel free to type in the fields in the middle pane instead of selecting them from the **Explorer** pane.

1. Start your Gatsby app with the `WPGRAPHQL_URL` environment variable set
1. Navigate to `http://localhost:8000/___graphql`
1. From the **Explorer** pane on the left side of the page, select `allWpPost`.
1. Add the **limit** variable and set it to 5.
1. Under **limit**, select **sort** > **fields** and then from the dropdown select **date**. You may type 'date' while the dropdown is open to help select it.
1. Set **order** to **DESC**
1. Select **allWpPost** > **nodes**. Select **content** and **date**.
1. Select **allWpPost** > **author** > **nodes**, and select **name**
1. Select **allWpPost** > **comments** > **nodes**. Select **content** and **author** > **node** > **name**

Now you may test the query in the editor with the play button at the top. Results will be displayed in the pane to the right.

Our query should look like this:

```graphql
query MyQuery {
  allWpPost(limit: 5, sort: { fields: date, order: DESC }) {
    nodes {
      content
      date
      author {
        node {
          name
        }
      }
      comments {
        nodes {
          content
          date
          author {
            node {
              name
            }
          }
        }
      }
    }
  }
}
```

## Consuming the Data in Gatsby

If you're recieving the data you need, you may now copy this query into a page or static query. To do so, open the **Code Exporter** tab. From here you may choose the query type of your choice - Page Query, StaticQuery, StaticQuery hook, or createPages.

Here is an example of the createPages code which can be added to `gatsby-node.js` and the pages will be fetched and created at build time

```javascript
const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allWpPost(limit: 5, sort: { fields: date, order: DESC }) {
        nodes {
          content
          date
          author {
            node {
              name
            }
          }
          comments {
            nodes {
              content
              date
              author {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  `);
  const templatePath = path.resolve(`PATH/TO/TEMPLATE.js`);

  result.data.allWpPost.forEach((node) => {
    createPage({
      path: NODE_SLUG,
      component: templatePath,
      context: {
        // set up the page context here
        content: node.content,
        date: node.date,
        author: node.author.node.name,
        comments: node.comments.nodes,
      },
    });
  });
};
```

Replace `PATH/TO/TEMPLATE.js` with the filepath to the template file that will consume this data.
See [Specifying a Template](https://www.gatsbyjs.com/docs/programmatically-create-pages-from-data/#specifying-a-template) for more information.

Replace `NODE_SLUG` with the path you want the page to be accessed at, for example `'/last-five'`

Set `context` up however you want to consume data. These props will be passed to the component specified as the `templatePath`.

For more information on Gatsby's `createPage`, see [the API reference](https://www.gatsbyjs.com/docs/reference/config-files/actions/#createPage) and [Creating Pages in `gatsby-node.js`](https://www.gatsbyjs.com/docs/creating-and-modifying-pages/#creating-pages-in-gatsby-nodejs)

:::note

The variables used in this query are not dynamic, this query may be used as a static query. If you want any variables to be dynamic, it would have to be a page query.

:::
