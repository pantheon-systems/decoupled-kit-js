---
id: 'next-wordpress-env-vars'
title: 'Setting Environment Variables'
sidebar_position: 1
slug: '/frontend-starters/nextjs/nextjs-wordpress/setting-environment-variables'
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

## Connecting to Multidev Environments

To connect to a Multidev environment, the following helper environment variable
can be used inside of `next.config.js`.

- `IS_LIVE_ENVIRONMENT` - True if `PANTHEON_ENVIRONMENT_URL` is live.

Either the `PANTHEON_CMS_ENDPOINT` or `WPGRAPHQL_URL` will need to be set.

The `PANTHEON_CMS_ENDPOINT` can be mocked for local development by defining it
in the `.env.development.local`.

```
PANTHEON_CMS_ENDPOINT=dev-my-wordpress-site.pantheonsite.io
```

Taking a look at how the `next.config.js` works, there is this logic which sets
the `backendUrl`.

```js
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
updated. `PANTHEON_ENVIRONMENT_URL` includes the PR number or integration branch
name and you can parse it to your needs.

This code could be added under the above logic to connect to a Multidev that is
prefixed with the branch name of my site.

```js
/**
* My branch is named `multi-demo`. I will parse the environment url for that substring
* and use that, along with the `WPGRAPHQL_URL`, to create a `backendUrl` which points
to my Multidev backend.
**/
const PREFIX = process.env.PANTHEON_ENVIRONMENT_URL.match(/^([^-]*-)[^-]*/)[0];
if (!process.env.IS_LIVE_ENVIRONMENT) {
	backendUrl = `https://${PREFIX}-${process.env.WPGRAPHQL_URL.replace(
		/^https?:\/\/[^-]*-/,
		'',
	)}`;
}
```

## Decoupled Preview

To enable Decoupled Preview, the following environment variables must be set in
the `.env.development.local` for local dev and in the Pantheon dashboard for
production or Multidev environments.

```
PREVIEW_SECRET
WP_APPLICATION_USERNAME
WP_APPLICATION_PASSWORD
```

- `PREVIEW_SECRET` - The secret used on creation of a new preview site in the WP
  dashboard
- `WP_APPLICATION_USERNAME` - To be set as the username found and set in the
  **Users** tab of the WP dashboard
- `WP_APPLICATION_PASSWORD` - To be set as the password created for the WP
  application user. Passwords can be set through selecting a user inside the
  **Users** tab of the WP dashboard

## Setting The Path Prefix

See the Next.js guide on
[Adding a Base Path](https://nextjs.org/docs/api-reference/next.config.js/basepath)
for information on setting the `basePrefix` if you are not using the starter
kit.

```
PANTHEON_UPLOAD_PATH
```

- `PANTHEON_UPLOAD_PATH` - Used to deploy a your application under a sub-path of
  a domain. This will be automatically set as the `basePath` in the
  `next.config.js`. To test this locally, set the `PANTHEON_UPLOAD_PATH` in your
  `.env.development.local` to the path you would like to test.
