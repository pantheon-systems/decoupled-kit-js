---
id: 'next-wordpress-env-vars'
title: 'Setting Environment Variables'
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
