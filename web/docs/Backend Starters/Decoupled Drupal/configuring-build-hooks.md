---
id: 'configuring-build-hooks'
title: 'Configuring Build Hooks'
slug: '/backend-starters/decoupled-drupal/configuring-build-hooks'
sidebar_position: 5
---

## Setting Up Your First Build Hook

### What Are Build Hooks?

The Build Hooks module, available at https://www.drupal.org/project/build_hooks,
allows CMS events like creating, updating, or deleting content to trigger builds
in a decoupled frontend site.

### Installing the Build Hooks Module

To add Build Hooks as a composer dependency, run the following command:

```
composer require 'drupal/build_hooks:^3.3'
```

### Creating a Build Hook for Content Creation/Modification

1. After generating a build hook on your build platform, go to Configuration >>
   Frontend environment >> Add Frontend environment >> Add new environment.
1. Fill out the form with the Label, URL, Deployment strategy, Weight, and Build
   hook URL.
1. Save the form.

### Choose a Deployment Strategies

1. **_Manually only_**: Deployment will only occur when manually triggered.
1. **_On cron_**: Deployment is dependent on Drupal's cron job.
1. **_When content is updated_**: Deployment occurs automatically upon content
   creation, modification, or deletion.

### Testing the Build Hook

1. Access your Drupal admin dashboard.
1. Create a new piece of content, such as an article.
1. Depending on your selected Deployment strategy, a deployment will occur.

### Setting Up Build Hooks for Multiple Frontend Environments

Build Hooks supports multiple build hooks, allowing you to trigger builds in
different environments such as dev, test, and prod. Before proceeding, generate
separate build hooks for each frontend environment in your build platform.
