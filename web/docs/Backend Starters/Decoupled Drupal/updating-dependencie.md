# Updating Drupal dependencies

Dependencies can be update by the following two ways:

## 1. Update dependencies manually using composer

The Drupal project uses composer to manage dependencies. The dependencies can be updated using the following composer command:

- Update Drupal core: `composer update drupal/core "drupal/core-*" --with-all-dependencies`
- Update Contributed module: `composer update drupal/modulename --with-dependencies`

For more info:
- [Updating Drupal core via Composer](https://www.drupal.org/docs/updating-drupal/updating-drupal-core-via-composer)
- [Updating Modules and Themes using Composer](https://www.drupal.org/docs/updating-drupal/updating-modules-and-themes-using-composer)

## 2. Update dependencies automatically using [terminus-clu-plugin](https://github.com/pantheon-systems/terminus-clu-plugin)

This plugin create pull requests based on composer.lock updates and it will be enabled automatically if the project was created using our recommended terminus [build tools project create command](https://getpantheon.atlassian.net/wiki/spaces/VULCAN/pages/2296610966/Testing+Decoupled+Kit#Installing-decoupled-drupal-(CMS-Backend-only)-on-Pantheon-with-CI).