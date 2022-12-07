---
id: 'next-base-path'
title: 'Setting Path Prefix For Testing Locally'
sidebar_position: 1
slug: '/frontend-starters/nextjs/setting-base-path'
---

## Before You Begin

This guide assumes you are testing a Next.js site locally which is to be hosted at a subpath of the root, for example `/docs`, by using the [Next.js `basePath` feature](https://nextjs.org/docs/api-reference/next.config.js/basepath).

## Setting The Path Prefix
See the Next.js guide on [Adding a Base Path](https://nextjs.org/docs/api-reference/next.config.js/basepath) for information on setting the `basePrefix` if you are not using the starter kit.

If you are using the `@pantheon-systems/next-drupal-starter` or the `@pantheon-systems/next-wordpress-starter`, the environment variable `process.env.PANTHEON_UPLOAD_PATH` will be automatically set as the `basePath` in the `next.config.js`. To test this locally, set the `PANTHEON_UPLOAD_PATH` in your `.env.development.local` to the path you would like to test.


## Verify Links And Assets
If you are adding the `basePath` to an app that did not previously use it, you may need to refactor some in app links and paths to static assets. [Links using the `next/link` component will automatically use the `basePath`](https://nextjs.org/docs/api-reference/next.config.js/basepath#links). You will need to update the `src` if using the `next/image` component for static assets. See the [Next.js docs on images and `basePath`](https://nextjs.org/docs/api-reference/next.config.js/basepath#images) for more information.