---
id: 'configuring-build-hooks'
title: 'Configuring Build Hooks'
slug: '/backend-starters/decoupled-wordpress/configuring-build-hooks'
sidebar_position: 5
---

## Create Your First Build Hook

### What Are Build Hooks?

Build hooks enable certain events in the CMS to trigger builds of a decoupled
frontend; such as content updates to post, or publishing a new page.

### Install and Activate WP Webhooks Plugin

- Install and activate the
  [WP-Webhooks Plugin](https://wordpress.org/plugins/wp-webhooks/).

### Creating a Build Hook That Triggers When a Post Is Created Or Updated

1. Navigate to the Pantheon Dashboard
1. Open the site's settings
1. Click **Builds** >> **Add Build Hook**
1. Name your hook and select a branch to target using the **Branch to Build**
   dropdown. Copy this URL
1. Navigate to your WordPress development site and open the WP Webhooks plugin
   dashboard
1. Click on the **Send Data** tab
1. Select the **Post Created** Webhook trigger
1. Click **Add Webhook URL**, name the hook and paste the build hook URL that
   you generated earlier, submit this form
1. Repeat steps 7 and 8 to create a hook for the **Post Updated** trigger

#### Testing The Post Build Hook

1. Open your WordPress development site
1. Create a new Post or update a previously existing one
1. Navigate to your sites **Site Overview** page in the Pantheon Dashboard
1. Observe that a new build has been triggered

### Creating Build Hooks For Multiple Frontend Environments

The WP Webhooks plugin allows multiple build hooks to be added under a single
action. This feature can be used to trigger builds in multiple feature branches
based off of content updates in one WordPress instance.

1. Navigate to the Pantheon Dashboard
1. Open the site's settings
1. Click **Builds** >> **Add Build Hook**
1. Name your hook and use the **Branch to Build** dropdown to select the feature
   branch you would like this hook to target

###### Repeat these 4 steps for all frontend environments you would like to create a build hook for

1. Navigate to your WordPress development site
1. Open the WP Webhooks plugin dashboard
1. Click on the **Send Data** tab and select your desired Webhook trigger
1. Click **Add Webhook URL**, name the hook and add one of your previously
   generated build hook URL's before submitting this form
1. Repeat step 8 for each of the build hooks previously generated
