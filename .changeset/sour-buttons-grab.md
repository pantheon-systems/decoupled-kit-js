---
"@pantheon-systems/next-drupal-starter": major
---

[next-drupal-starter] Updated starter to work with the new version of drupal-kit

### Breaking

`PantheonDrupalState` from the `drupal-kit` dependency no longer stores DrupalJsonapiParams in its state. 
See https://git.drupalcode.org/project/drupal_state#request-parameters for more information.
