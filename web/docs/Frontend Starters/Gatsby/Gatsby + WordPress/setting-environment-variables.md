---
id: 'gatsby-wordpress-env-vars'
title: 'Setting Environment Variables'
sidebar_position: 1
slug: '/Frontend Starters/Gatsby WordPress/Setting Environment Variables'
---

## Local Development

In order to fetch data from the WordPress instance, Gatsby needs to know the
endpoint at build time. For local development, the starter kit uses
[dotenv](https://www.npmjs.com/package/dotenv).

After creating a new project with the gatsby-wordpress-starter, create a
`.env.local` file at the root of the project directory. In this file, add a
WPGRAPHQL_URL key with your WordPress GraphQL Endpoint as the value.

For example:

```
WPGRAPHQL_URL=https://my-wordpress-site.pantheon.site/wp/graphql
```
