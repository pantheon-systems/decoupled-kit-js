---
id: 'next-drupal-add-ons'
title: 'Add-ons'
slug: '/frontend-starters/nextjs/nextjs-drupal/add-ons'
sidebar_position: 8
---

## Drupal Umami Demo Data Add-on

This add-on adds necessary components and routes to your Pantheon Decoupled Kit
Next.js Starter Kit to display data from Drupal's Umami demo site. This includes
a route for `recipes`, as well as a link in the footer menu to the `recipes`
page.

### Before You Begin

- Create a Drupal site with our
  [Backend Starter](/backend-starters/decoupled-drupal/creating-a-new-project).
  Use the "Installing with Umami Demo Data" section to ensure you have the
  correct dataset
- Familiarize yourself with the
  [Create Pantheon Decoupled Kit CLI](https://www.npmjs.com/package/create-pantheon-decoupled-kit/).
  Any package manager can be used with the CLI **[npm, pnpm, yarn]**.

### Usage

#### Adding the `next-drupal-umami-addon` to an Existing Project

1. Use the create command to initiate the cli with the `next-drupal-umami-addon`
   generator
   ```bash
   # set the `outDir` to the root directory of your existing Next Drupal Starter
   npm create pantheon-decoupled-kit next-drupal-umami-addon --outDir ./my-app-dir
   ```
1. Follow the terminal prompts, accept the project diff changes
1. Start your project locally and observe the new related content section that
   displays at the bottom of post detail pages

#### Building a New Project with the `next-drupal-umami-addon`

1. Use the create command to initiate the cli with both the `next-drupal` and
   `next-drupal-umami-addon` generators
   ```bash
   npm create pantheon-decoupled-kit next-drupal next-drupal-umami-addon
   ```
1. Continue through the prompts until all actions finish running
1. Add the necessary environment variables in `.env.development.local` and start
   your project locally. Observe the new related content section that displays
   at the bottom of post detail pages
