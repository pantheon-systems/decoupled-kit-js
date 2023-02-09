---
id: 'configuring-build-hooks'
title: 'Configuring Build Hooks'
slug: '/backend-starters/decoupled-drupal/configuring-build-hooks'
sidebar_position: 5
---

## What Are Build Hooks?

The [Build Hooks](https://www.drupal.org/project/build_hooks) module has the
capability to trigger builds in one or more frontend sites when any content
changes occur, such as creating, updating, or deleting.

For example, setting up the
[Decoupled Drupal Composer Managed](https://github.com/pantheon-systems/drupal-composer-managed)
to use as the backend CMS with a Gatsby as the frontend site. When content
changes are made in the backend, those changes need to be pushed to the frontend
sites. In this case, the Build Hook module is used to trigger a deployment,
either manually, automatically, or depending on a cron job.

The Build Hook module also supports triggering workflows for GitHub, Circle CI,
and Bitbucket. For further information, please refer to the module's
[README.txt](https://git.drupalcode.org/project/build_hooks).

:::note

By default the module will only log changes for content entity. If you'd like to
trigger build hooks based on other entity updates, go to **Administration** >>
**Configuration** >> **Build hooks** >> **Build Hooks Settings**.

:::

## Installing the Build Hooks Module

Using the
[Decoupled Drupal Composer Managed](https://github.com/pantheon-systems/drupal-composer-managed)
starter template, add the
[Build Hooks](https://www.drupal.org/project/build_hooks) module as a composer
dependency. To do so, run the following command:

```
composer require 'drupal/build_hooks:^3.3'

```

Once it is a composer dependency, it must be installed. This can be done either
through the Drupal admin dashboard or using
[drush pm-enable](https://drushcommands.com/drush-8x/pm/pm-enable/).

## Setting Up a Build Hook

### Trigger a Deployment Automatically When Content Changes

1. After generating a build hook on your build platform, go to
   **Configuration** >> **Build hooks** >> **Frontend environment**.
2. Click on the **Add Frontend environment** button.
3. Fill out the form with the required information including Label, URL,
   Deployment strategy (for this use-case, select **When content is updated**),
   Weight, and Build hook URL.
4. Save the form.

This will automatically trigger a build hook when content changes.

### Trigger a Deployment Manually

Following the same steps as "Trigger a Deployment Automatically" to create a
Build Hook Frontend Environment but select **Deployment strategy** as **Manually
only**.

![Drupal Build Hook Trigger Deployment Manually](../../../static/img/drupal-trigger-deployment-manually.gif)

1. After a content is created/updated, go to
   `admin/build_hooks/deployments/<BUILD_HOOK_MACHINE_NAME>`.
2. Click on **Start a new deployment to the <BUILD_HOOK_NAME> environment**.
   Which will trigger the Build Hook on the frontend site.

:::note

The deployment strategy can also be set to Cron Job, which will trigger the
build hook automatically at a specified interval.

:::
