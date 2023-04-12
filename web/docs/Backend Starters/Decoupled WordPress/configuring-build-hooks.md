---
id: 'configuring-build-hooks'
title: 'Configuring Build Hooks'
slug: '/backend-starters/decoupled-wordpress/configuring-build-hooks'
sidebar_position: 5
---

## What Are Build Hooks?

Build hooks enable certain events in the CMS to trigger builds of a decoupled
frontend; such as content updates to post, or publishing a new page.

## Installing the WP Webhooks Plugin

If you are using the
[Decoupled WordPress Composer Managed](/docs/backend-starters/decoupled-wordpress/creating-a-new-project)
starter template, the WP Webhooks plugin will already be included as a Composer
dependency. It will need to be activated in the WordPress admin dashboard.

For other projects, install and activate the WP Webhooks Plugin as
[outlined in the plugin documentation](https://wordpress.org/plugins/wp-webhooks/#installation).

### Creating a Build Hook That Triggers When a Post Is Published

1. After generating a build hook on your build platform, navigate to your
   WordPress admin dashboard and open the **WP Webhooks settings**.
1. Click on the **Send Data** tab.
1. Select the **Post Updated** Webhook trigger.
1. Click **Add Webhook URL**, name the hook and paste the build hook URL that
   you generated in the Webhook URL field. Submit this form.
1. Under the **Action** menu for the hook you created, select **settings**.
1. Under the **Trigger on post status** setting enter **publish** and toggle the
   **fire only once per instance** option on. Save your settings.

### Testing Your Build Hook

1. Open your WordPress admin dashboard.
1. Create a new Post or update a previously existing one.
1. Observe that a new build has been triggered on your build platform.
