---
id: 'next-drupal-intro'
title: 'Introduction'
slug: '/frontend-starters/nextjs/nextjs-drupal/introduction'
sidebar_position: 0
---

## Before You Begin

The Pantheon `next-drupal-starter` uses Next.js and has been tested using
[nodejs v16 with npm v8](https://nodejs.org/en/download/).

## Why Use The Next.js Drupal Starter?

The `next-drupal-starter` is designed as a starting point to for a Next.js site
that consumes data from a Drupal backend - specifically a Drupal backend
configured with the
[`pantheon_decoupled` module](https://www.drupal.org/project/pantheon_decoupled)
installed.

The starter has a dependency on the `@pantheon-systems/drupal-kit`, which
includes some helpers that maximize any available features of the Drupal
backend.

## Creating A New Project With The Template

To create a project using the latest version of the Next Drupal Starter, use our
`create-pantheon-decoupled-kit` npm package.

The full documentation for the `create-pantheon-decoupled-kit` can be found
[here](https://decoupledkit.pantheon.io/docs/frontend-starters/using-the-cli).

Before you continue, familiarize yourself with our Next Drupal
[add-ons](https://live-decoupled-kit-docs-canary.appa.pantheon.site/docs/frontend-starters/nextjs/nextjs-drupal/add-ons),
a suite of optional project expansions that bring new components, features, and
styling into your starter kit.

To create a new project using `create-pantheon-decoupled-kit`:

1. In your terminal, run the following command:

```bash
npm init pantheon-decoupled-kit -- next-drupal
```

2. Follow the prompts in your terminal to complete the setup.

## Next Steps

See the rest of the Next.js + Drupal documentation for more information on
setting environment variables and customizing your new project!
