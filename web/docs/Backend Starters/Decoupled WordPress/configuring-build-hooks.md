---
id: 'configuring-build-hooks'
title: 'Configuring Build Hooks'
slug: '/backend-starters/decoupled-wordpress/configuring-build-hooks'
sidebar_position: 2
---

For a decoupled technology stack, build hooks bring back a way to kick off and
provide updates to a user’s site that is often lost when moving away from
tightly coupled ecosystems. This feature allow user's to quickly trigger new
builds of a site when updates are made on their blog, CMS or other data source.
With build hooks, when a configured source of data is updated a deployment is
triggered for it's corresponding front-end site.

## Install and Activate WP Webhooks Plugin

- Install and activate the
  [WP-Webhooks Plugin](https://wordpress.org/plugins/wp-webhooks/).

## Creating a Build Hook That Triggers When a Post Is Created Or Updated.

First, navigate to your Pantheon Dashboard and select the site you would like to
generate a build hook for. Open your site's settings, under the **Builds** tab,
click **Add Build Hook**. Name your hook and select a branch to target using the
**Branch to Build** dropdown. Copy the generated build hook URL.

Next, navigate to your WordPress development site and open the WP Webhooks
plugin dashboard, click on the **Send Data** tab. From here, select the **Post
Created** Webhook trigger. Click **Add Webhook URL**, name the hook and paste
the build hook URL that you generated earlier, submit this form. Repeat this
process for the **Post Updated** trigger.

To test the functionality of this new build hook, create a new Post or update a
previously existing one. Once either of these actions are completed, navigate to
your sites **Site Overview** page in the Pantheon Dashboard and observe that a
new build has been triggered following these actions.

## Creating Build Hooks For Multiple Frontend Environments.

The WP Webhooks plugin allows multiple build hooks to be added under a single
action. This feature can be used to trigger builds in multiple feature branches
based off of content updates in one WordPress instance.

To accomplish this, navigate to your sites settings in the Pantheon Dashboard.
Under the **Builds** tab, click **Add Build Hook**. In the modal, name your hook
and use the **Branch to Build** dropdown to select the feature branch you would
like this hook to target. Repeat this build hook creation process for all
frontend environments you would like an action rebuild.

Once all of your build hooks are created, navigate to your WordPress development
site and open the WP Webhooks plugin dashboard. Click on the **Send Data** tab
and select your desired Webhook trigger. Click **Add Webhook URL**, name the
hook and add one of your previously generated build hook URL's before submitting
this form. Repeat this process for each of your generated build hooks.

These hooks will start a new build of your chosen project branches once the
specified trigger is fired.
