---
id: 'next-drupal-env-vars'
title: 'Setting Environment Variables'
slug:
  '/Frontend Starters/Next.js/Next.js + Drupal/Setting Environment Variables'
---

## Local Development

In order to fetch data from the Drupal instance, Next.js needs to know the
endpoint at build time. For local development, the starter kit uses
[dotenv](https://www.npmjs.com/package/dotenv).

When you clone your decoupled frontend repo, create a `.env.development.local`
file. In this file, update the `BACKEND_URL` and `IMAGE_DOMAIN` with your Drupal
CMS URL, and the `IMAGE_DOMAIN`. If the `BACKEND_URL` and `IMAGE_DOMAIN` are the
same, you can omit setting the `IMAGE_DOMAIN`.

For example:

```
BACKEND_URL=https://my-drupal-site.pantheon.site/
IMAGE_DOMAIN=my-image-cdn.site
```

If your site is translated and you would like the hreflang metadata set
correctly, you may set `FRONTEND_URL` to the URL of your frontend site:

```
FRONTEND_URL=https://my-frontend-site.pantheon.site
```

For development, this value can be set to any string, or `http://localhost:3000`

## Decoupled Preview

To enable Decoupled Preview, the following environment variables must be set in
the `.env.development.local` for local dev and in the Pantheon dashboard for
production or Multidev environments.

```
PREVIEW_SECRET
CLIENT_ID
CLIENT_SECRET
```

- `PREVIEW_SECRET` - Set the Preview Secret here: {your Backend
  URL}/admin/structure/dp-preview-site/example_nextjs_preview
- `CLIENT_ID` - Visible as the UUID for the “Example Consumer” here: {your
  Backend URL}/en/admin/config/services/consumer
- `CLIENT_SECRET` - Set the Client Secret here: {your Backend
  URL}/admin/config/services/consumer/2/edit

See [Implementing Preview](./implementing-preview.md) for more information on
how to implement Decoupled Preview with Next.js and Drupal.
