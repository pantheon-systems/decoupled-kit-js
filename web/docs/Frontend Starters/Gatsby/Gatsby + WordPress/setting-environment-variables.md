---
id: 'gatsby-wordpress-env-vars'
title: 'Setting Environment Variables'
slug: '/frontend-starters/gatsby/gatsby-wordpress/setting-environment-variables'
sidebar_position: 1
---

## Local Development

In order to fetch data from the WordPress instance, Gatsby needs to know the
endpoint at build time. For local development, the starter kit uses
[dotenv](https://www.npmjs.com/package/dotenv).

After creating a new project with the gatsby-wordpress-starter, create a
`.env.development.local` file at the root of the project directory. In this
file, add a WPGRAPHQL_URL key with your WordPress GraphQL Endpoint as the value.

For example:

```
WPGRAPHQL_URL=https://dev-my-wordpress-site.pantheon.site/wp/graphql
```

## Connecting to Multidev Environments

To connect to a Multidev environment, the following helper environment variable
can be used inside of `gatsby-config.js`.

- `IS_LIVE_ENVIRONMENT` - True if `PANTHEON_ENVIRONMENT_URL` is live.

Either the `PANTHEON_CMS_ENDPOINT` or `WPGRAPHQL_URL` will need to be set.

The `PANTHEON_CMS_ENDPOINT` can be mocked for local development by defining it
in the `.env.development.local`.

```
PANTHEON_CMS_ENDPOINT=dev-my-wordpress-site.pantheonsite.io
```

Taking a look at how the `gatsby-config.js` works, there is this logic which
sets the `url`.

```js
let url = process.env.WPGRAPHQL_URL || process.env.PANTHEON_CMS_ENDPOINT;
```

In order to connect to a Multidev backend, this url will need to be updated.
`PANTHEON_ENVIRONMENT_URL` includes the PR number or integration branch name and
you can parse it to your needs.

This code could be added under the above logic to connect to a Multidev that is
prefixed with the branch name of my site.

```js
/**
* My branch is named `multi-demo`. I will parse the environment url for that substring
* and use that, along with the `url`, to create a variable which points
to my Multidev backend.
**/
const PREFIX = process.env.PANTHEON_ENVIRONMENT_URL.match(/^([^-]*-)[^-]*/)[0];
if (!process.env.IS_LIVE_ENVIRONMENT) {
	url = `https://${PREFIX}-${url.replace(/^https?:\/\/[^-]*-/, '')}`;
}
```
