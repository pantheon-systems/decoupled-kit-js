---
id: 'next-wordpress-intro'
title: 'Introduction'
slug: '/frontend-starters/nextjs/nextjs-wordpress/introduction'
sidebar_position: 0
---

## Before You Begin

The Pantheon `next-wordpress-starter` uses Next.js and has been tested using
[nodejs v20 with npm v10](https://nodejs.org/en/download/).

## Why Use The Next.js WordPress Starter?

The `next-wordpress-starter` is designed as a starting point to for a Next.js
site that consumes data from a WordPress backend - specifically a WordPress
backend configured with the `pantheon-decoupled` and `wp-graphql` plugins
installed.

The starter has a dependency on the `@pantheon-systems/wordpress-kit`, which
includes some helpers that maximize any available features of the WordPress
backend.

## Creating A New Project With The Template

To create a project using the latest version of the Next WordPress Starter, use
our `create-pantheon-decoupled-kit` npm package.

The full documentation for the `create-pantheon-decoupled-kit` can be found
[here](https://decoupledkit.pantheon.io/docs/frontend-starters/using-the-cli).

Before you continue, familiarize yourself with our Next Wordpress
[add-ons](https://live-decoupled-kit-docs-canary.appa.pantheon.site/docs/frontend-starters/nextjs/nextjs-wordpress/add-ons),
a suite of optional project expansions that bring new components, features, and
styling into your starter kit.

To create a new project using `create-pantheon-decoupled-kit`:

1. In your terminal, run the following command:

```bash
npm init pantheon-decoupled-kit -- next-wp
```

2. Follow the prompts in your terminal to complete the setup.

## Next Steps

See the rest of the Next.js + WordPress documentation for more information on
setting environment variables and customizing your new project!
