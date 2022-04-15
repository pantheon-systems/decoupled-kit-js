---
id: "gatsby-wordpress-env-vars"
title: "Setting Environment Variables"
slug: "/Frontend Starters/Gatsby Wordpress/Setting Environment Variables"
---

## Local Development

In order to fetch data from the WordPress instance, Gatsby needs to know the endpoint
at build time. For local development, the starter kit uses [dotenv](https://www.npmjs.com/package/dotenv).

When a new project is cloned down, a `.env.local` file should be created.
In this file, update the WPGRAPHQL_URL with your WordPress GraphQL Endpoint.

For example:

```
WPGRAPHQL_URL=https://my-wordpress-site.pantheon.site/wp/graphql
```

## Multi-Dev

In the Pantheon Dashboard, link your CMS site to your decoupled site and you won't need
to set any environment variables.


If for some reason you are unable to link your CMS site through the dashboard,
the `WPGRAPHQL_URL` can be set manually in the __Build__ section of the dashboard.