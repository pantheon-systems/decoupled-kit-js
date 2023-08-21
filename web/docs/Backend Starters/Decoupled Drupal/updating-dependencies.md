---
id: 'drupal-updating-dependencies'
title: 'Updating Dependencies'
slug: '/backend-starters/decoupled-drupal/updating-dependencies'
sidebar_position: 6
---

Dependencies can be updated following two ways:

## 1. Update dependencies manually using composer

The Drupal project uses composer to manage dependencies. The dependencies can be
updated using the following composer command:

- Update Drupal core:
  `composer update drupal/core "drupal/core-*" --with-all-dependencies`
- Update Contributed module:
  `composer update drupal/modulename --with-dependencies`

For more info:

- [Updating Drupal core via Composer](https://www.drupal.org/docs/updating-drupal/updating-drupal-core-via-composer)
- [Updating Modules and Themes using Composer](https://www.drupal.org/docs/updating-drupal/updating-modules-and-themes-using-composer)

## 2. Update dependencies automatically using [terminus-clu-plugin](https://github.com/pantheon-systems/terminus-clu-plugin)

Alternatively, composer security updates can be applied automatically using the
[Terminus CLU](https://github.com/pantheon-systems/terminus-clu-plugin)
(Composer Lock Updater) Plugin. This plugin automatically creates pull requests
based on composer.lock updates. If your project was created using our
recommended terminus
[build tools project create command](creating-new-project.md) then this plugin
has been configured automatically.
