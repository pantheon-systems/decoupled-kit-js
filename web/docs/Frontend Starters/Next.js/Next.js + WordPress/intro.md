---
id: 'next-wordpress-intro'
title: 'Introduction'
slug: '/Frontend Starters/Next.js/Next.js + WordPress/Introduction'
---

## Before You Begin

The Pantheon `next-wordpress-starter` uses Next.js and has been tested using
[nodejs v16 with npm v8](https://nodejs.org/en/download/).

## Why Use The Next.js WordPress Starter?

The `next-wordpress-starter` is designed as a starting point to for a Next.js
site that consumes data from a WordPress backend - specifically a WordPress
backend configured with the `pantheon-decoupled` and `wp-graphql` plugins
installed.

The starter has a dependency on the `@pantheon-systems/wordpress-kit`, which
includes some helpers that maximize any available features of the WordPress
backend.

## Creating A New Project With The Template

There are two methods to creating a new project based on the
`next-wordpress-starter`:`

1. Clone the starter repo directly
2. Use `create-next-app`

To clone the starter directly from GitHub, Visit the repo link
https://github.com/pantheon-systems/next-wordpress-starter and click on the
**Code** button to open the clone dropdown and select your preferred method.

To create a new project using `create-next-app`:

```bash
npx create-next-app -e https://github.com/pantheon-systems/next-wordpress-starter --use-npm
```

`create-next-app` uses the `yarn` package manager by default. Omit the
`--use-npm` flag to use `yarn`, or keep it to use `npm`.

## Next Steps

See the rest of the `next-wordpress-starter` documentation for more information
on setting environment variables and customizing your new project!
