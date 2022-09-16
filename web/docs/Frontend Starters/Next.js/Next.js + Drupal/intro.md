---
id: 'next-drupal-intro'
title: 'Introduction'
sidebar_position: 0
slug: '/Frontend Starters/Next.js/Next.js + Drupal/Introduction'
---

## Before You Begin

The Pantheon `next-drupal-starter` uses Next.js and has been tested using
[nodejs v16 with npm v8](https://nodejs.org/en/download/).

## Why Use The Next.js drupal Starter?

The `next-drupal-starter` is designed as a starting point to for a Next.js site
that consumes data from a Drupal backend - specifically a Drupal backend
configured with the
[`pantheon_decoupled` module](https://www.drupal.org/project/pantheon_decoupled)
installed.

The starter has a dependency on the `@pantheon-systems/drupal-kit`, which
includes some helpers that maximize any available features of the Drupal
backend.

## Creating A New Project With The Template

There are two methods to creating a new project based on the
`next-drupal-starter`:

1. Clone the starter repo directly
2. Use `create-next-app`

To clone the starter directly from GitHub, Visit the repo link
https://github.com/pantheon-systems/next-drupal-starter and click on the
**Code** button to open the clone dropdown and select your preferred method.

To create a new project using `create-next-app`:

```bash
npx create-next-app -e https://github.com/pantheon-systems/next-drupal-starter --use-npm
```

`create-next-app` uses the `yarn` package manager by default. Omit the
`--use-npm` flag to use `yarn`, or keep it to use `npm`.

## Next Steps

See the rest of the Next.js + Drupal documentation for more information on
setting environment variables and customizing your new project!
