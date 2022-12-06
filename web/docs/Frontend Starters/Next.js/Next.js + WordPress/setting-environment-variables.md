---
id: 'next-wordpress-env-vars'
title: 'Setting Environment Variables'
sidebar_position: 1
slug:
  '/Frontend Starters/Next.js/Next.js + WordPress/Setting Environment Variables'
---

## Local Development

In order to fetch data from the WordPress instance, Next.js needs to know the
endpoint at build time. For local development, the starter kit uses
[dotenv](https://www.npmjs.com/package/dotenv).

When you clone your decoupled frontend repo, create a `.env.development.local`
file. In this file, update the `WPGRAPHQL_URL` and `IMAGE_DOMAIN` with your
WordPress GraphQL endpoint, and the `IMAGE_DOMAIN`. If the `WPGRAPHQL_URL` and
`IMAGE_DOMAIN` are the same, you can omit setting the `IMAGE_DOMAIN`.

For example:

```
WPGRAPHQL_URL=https://my-wordpress-site.pantheon.site/wp/graphql
IMAGE_DOMAIN=my-image-cdn.site
```

## Connecting to Multidev Cloud Environments

To connect to a Multidev environment, the following helper environment variable
can be used inside of `next.config.js`.

- `IS_LIVE_ENVIRONMENT` - Automatically set to true if
  `PANTHEON_ENVIRONMENT_URL` is live and false otherwise

Either the `PANTHEON_CMS_ENDPOINT` or `WPGRAPHQL_URL` will need to be set.

The `PANTHEON_CMS_ENDPOINT` can be mocked for local development by defining it
in the `.env.development.local`

```
PANTHEON_CMS_ENDPOINT=
```

Taking a look at how the `next.config.js` works, there is this logic which sets
the `backendUrl`

```
let backendUrl, imageDomain;
if (process.env.WPGRAPHQL_URL === undefined) {
	backendUrl = `https://${process.env.PANTHEON_CMS_ENDPOINT}/wp/graphql`;
	imageDomain = process.env.IMAGE_DOMAIN || process.env.PANTHEON_CMS_ENDPOINT;

	// populate WPGRAPHQL_URL as a fallback and for build scripts
	process.env.WPGRAPHQL_URL = `https://${process.env.PANTHEON_CMS_ENDPOINT}/wp/graphql`;
} else {
	backendUrl = process.env.WPGRAPHQL_URL;
	imageDomain =
		process.env.IMAGE_DOMAIN ||
		process.env.WPGRAPHQL_URL.replace(/\/wp\/graphql$/, '').replace(
			/^https?:\/\//,
			'',
		);
}
```

In order to connect to a Multidev backend, this backendUrl will need to be
updated. `PANTHEON_ENVIRONMENT_URL` has the data needed to source your backend
and will need to be parsed according to your needs.

This code could be added under the above logic to connect to a Multidev that is
prefixed with the branch name of my site.

```
/**
* My branch is named `multi-demo`. I will parse the environment url for that substring
* and use that, along with the `WPGRAPHQL_URL`, to create a `backendUrl` which points
to my Multidev backend.
**/
const PREFIX = process.env.PANTHEON_ENVIRONMENT_URL.match(/^([^-]*-)[^-]*/)[0];
if (!process.env.IS_LIVE_ENVIRONMENT) {
	backendUrl = `https://${PREFIX}-${process.env.WPGRAPHQL_URL.replace(/^https?:\/\//,'',)}`
}
```
