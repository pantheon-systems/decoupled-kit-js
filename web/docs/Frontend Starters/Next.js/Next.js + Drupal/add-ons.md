---
id: 'next-drupal-add-ons'
title: 'Add-ons'
slug: '/frontend-starters/nextjs/nextjs-drupal/add-ons'
sidebar_position: 8
---

## Drupal Umami Demo Data Add-on

This add-on adds necessary components and routes to your Pantheon Decoupled Kit
Next.js Starter Kit to display data from Drupal's Umami demo site. This includes
a routes for all individual recipes, as well as an index page with a grid which
displays all recipes.

### Before You Begin

- Create a Drupal site with our
  [Backend Starter](../../../Backend%20Starters/Decoupled%20Drupal/creating-new-project.md).
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
1. Start your project locally. Observe the new related content section that
   displays at the bottom of post detail pages

## Drupal Search API Add-on

This add-on adds necessary components and routes to your Pantheon Decoupled Kit
Next.js Starter Kit to query the Drupal Search API and display its response.
This includes the addition of a search bar component and dedicated search
results page.

### Before You Begin

- Create a Drupal site with our
  [Backend Starter](../../../Backend%20Starters/Decoupled%20Drupal/creating-new-project.md).
- Enable the
  [Decoupled Kit Pantheon Search API](../../../Backend%20Starters/Decoupled%20Drupal/add-ons#decoupled-kit-pantheon-search-api)
- Familiarize yourself with the
  [Create Pantheon Decoupled Kit CLI](https://www.npmjs.com/package/create-pantheon-decoupled-kit/).
  Any package manager can be used with the CLI **[npm, pnpm, yarn]**.

### Usage

#### Adding the `next-drupal-search-api-addon` to an Existing Project

1. Use the create command to initiate the cli with the
   `next-drupal-search-api-addon` generator
   ```bash
   # set the `outDir` to the root directory of your existing Next Drupal Starter
   npm create pantheon-decoupled-kit next-drupal-search-api-addon --outDir ./my-app-dir
   ```
1. Follow the terminal prompts, accept the project diff changes
1. Start your project locally. Observe the new search input in the site header
   along with added content under the `/search` route

#### Building a New Project with the `next-drupal-search-api-addon`

1. Use the create command to initiate the cli with both the `next-drupal` and
   `next-drupal-search-api-addon` generators
   ```bash
   npm create pantheon-decoupled-kit next-drupal next-drupal-search-api-addon
   ```
1. Continue through the prompts until all actions finish running
1. Start your project locally. Observe the new search input in the site header
   along with added content under the `/search` route
