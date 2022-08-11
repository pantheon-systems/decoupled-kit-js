---
"@pantheon-systems/next-drupal-starter": major
---

## Breaking Change

Removed `DrupalStateContext` that was wrapping the application. If you were using `dsContext`, this change will break your app and you will need to reimplement it. If you were not utilizing the `dsContext`, you may need to update your imports from `drupalStateContext` to `stores`.
