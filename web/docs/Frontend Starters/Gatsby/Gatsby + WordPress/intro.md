---
id: 'gatsby-wordpress-intro'
title: 'Introduction'
slug: '/frontend-starters/gatsby/gatsby-wordpress/introduction'
sidebar_position: 0
---

## Before You Begin

The Pantheon `gatsby-wordpress-starter` uses Gatsby v4 and has been tested using
[nodejs v16 with npm v8](https://nodejs.org/en/download/). You may want to
install the gatsby cli globally, or
[use `npx`](https://www.npmjs.com/package/npx)

## Why Use The Gatsby WordPress Starter?

The `gatsby-wordpress-starter` is designed as a starting point to for a Gatsby
site that consumes data from a WordPress backend - specifically a WordPress
backend configured with the `pantheon-decoupled` and `wp-graphql` plugins
installed.

The starter has a dependency on the `@pantheon-systems/wordpress-kit`, which
includes some helpers that maximize any available features of the WordPress
backend.

## Creating A New Project With The Template

To create a project using the latest version of the Gatsby WordPress Starter,
use our `create-pantheon-decoupled-kit` npm package.

The full documentation for the `create-pantheon-decoupled-kit` can be found
[here](../../create-pantheon-decoupled-kit.md).

Before you continue, familiarize yourself with our Gatsby WordPress
[add-ons](./add-ons.md),
a suite of optional project expansions that bring new components, features, and
styling into your starter kit.

To create a new project using `create-pantheon-decoupled-kit`:

1. In your terminal, run the following command:

```bash
npm init pantheon-decoupled-kit -- gatsby-wp
```

2. Follow the prompts in your terminal to complete the setup.

## Next Steps

See the rest of the Gatsby WordPress documentation for more information on
setting environment variables and customizing your new project!
