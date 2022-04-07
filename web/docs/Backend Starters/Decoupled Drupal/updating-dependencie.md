# Updating Drupal dependencies

The Drupal project uses composer to manage dependencies. The dependencies can be updated using the following composer command:

- Update Drupal core: `composer update drupal/core "drupal/core-*" --with-all-dependencies`
- Update Contributed module: `composer update drupal/modulename --with-dependencies`

For more info:
- [Updating Drupal core via Composer](https://www.drupal.org/docs/updating-drupal/updating-drupal-core-via-composer)
- [Updating Modules and Themes using Composer](https://www.drupal.org/docs/updating-drupal/updating-modules-and-themes-using-composer)