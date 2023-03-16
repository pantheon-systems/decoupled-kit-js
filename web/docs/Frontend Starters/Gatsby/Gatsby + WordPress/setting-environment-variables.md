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

In your projects `.env.development.local` file, add a WPGRAPHQL_URL key with
your WordPress GraphQL Endpoint as the value.

For example:

```
WPGRAPHQL_URL=https://dev-my-wordpress-site.pantheon.site/wp/graphql
```

## Connecting to Multidev Environments

To connect to a Multidev environment, the `PANTHEON_ENVIRONMENT` environment
variable can be used inside of `gatsby-config.js`.

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
`PANTHEON_ENVIRONMENT` includes a PR number or integration branch name.

This code could be added under the above logic to connect to a Multidev that is
prefixed with the branch name of my site.

```js
/**
 * PANTHEON_ENVIRONMENT is equal to `multi-demo` since that is the name of my branch.
 **/
if (process.env.PANTHEON_ENVIRONMENT !== 'live') {
	url = `https://${process.env.PANTHEON_ENVIRONMENT}-${url.replace(
		/^https?:\/\/[^-]*-/,
		'',
	)}`;
}
```
