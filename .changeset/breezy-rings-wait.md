---
'@pantheon-systems/drupal-kit': major
---

## Breaking Changes

Removed the `query` option from `DrupalState`. This reflects the same upstream
change in `@gdwc/drupal-state`.

If you are still using a query after updating, you will receive a warning in the
console and the full payload for the requested object.
