---
"@pantheon-systems/next-drupal-starter": major
---

## Breaking Change

Removed `DrupalStateContext` that was wrapping the application. If you were using `dsContext` you will need to reimplement it after upgrading. If you were not utilizing the `dsContext`, you may need to update your imports from `drupalStateContext` to `stores`.
