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
