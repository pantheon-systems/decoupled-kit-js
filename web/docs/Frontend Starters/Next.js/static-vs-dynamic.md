---
id: 'next-static-vs-dynamic'
title: 'Differences Between Static And Dynamic Pages'
slug: '/Frontend Starters/Next.js/Next.js Static vs Dynamic'
---

## Before You Begin

This document is meant to supplement
[Next.js documentation](https://nextjs.org/docs) as a quick comparison of
Next.js's static and dynamic rendering modes in the context of Pantheon, and
some common use cases for each. This document will not cover client side
rendering (CSR).

See the
[Next.js overview on data fetching](https://nextjs.org/docs/basic-features/data-fetching/overview)
for more information on each rendering mode.

## What Is A Static Page?

A static page in Next.js is a React component exported from a file under the
`pages` directory that has data fetching inside of `getStaticProps`—which is
also exported from the same file—or no data fetching at all. Static pages are
generated at build time. Static pages utilizing dynamic routing and
`getStaticProps` must also export a `getStaticPaths` function, which is used to
specify the exact path for the static content. See the
[official `getStaticPaths` documentation](https://nextjs.org/docs/basic-features/data-fetching/get-static-paths)
for more information.

It is possible to update static pages with
[Incremental Static Regeneration (ISR)](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration),
which will rerun `getStaticProps` on request after a set amount of time has
elapsed.

Static pages can be served with `next export` without a Node.js server, however,
many of the features that make Next.js worth using are not enabled this way and
we do not recommend it.

### Common Use Cases

- Pages with content that is the same for all users
- Pages that can be publicly cached
- Pages that does not require data from an outside source

## What Is A Dynamic Page?

A dynamic page in Next.js is a React component exported from a file under the
`pages` directory that has data fetching inside of `getServerSideProps`. Dynamic
pages are generated at request time.

### Common Use Cases

- Pages that are user specific
- Pages that require authentication
- Pages requiring data fetched at request time

## Summary Of Differences

- Next.js pages components can export an additional function, `getStaticProps`
  or `getServerSideProps`, which runs on a server context and returns props to
  the component
- Static pages have no data fetching, or data fetching at build time
  - Static pages using `getStaticProps` also need to export `getStaticPaths` to
    determine which paths to render the pages
  - Static pages can be revalidated at request time by using ISR. Pages using
    ISR are revalidated after a provided amount of seconds has elapsed
- Dynamic pages fetch data at request time

## Implementing Static and Dynamic Pages

For a walk-through of fetching data with `getStaticProps` and
`getServerSideProps`, see
[Your First Next.js & Drupal Customization](./Next%20Drupal/your-first-customization.md)
or
[Your First Next.js & WordPress Customization](./Next%20WordPress/your-first-customization.md),
or look through
[our `next-drupal-starter`](https://github.com/pantheon-systems/decoupled-kit-js/tree/canary/starters/next-drupal-starter/)
or
[`next-wordpress-starter](https://github.com/pantheon-systems/decoupled-kit-js/tree/canary/starters/next-wordpress-starter)
for a starting point or inspiration
