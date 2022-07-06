# @pantheon-systems/next-drupal-starter

## 2.0.1

### Patch Changes

- 05573a8: [next-drupal-starter] Remove query from getPaths call to store.getObject to prevent subsequent calls from getting incorrect data from the store

## 2.0.0

### Major Changes

- de12430: [next-drupal-starter] Updated starter to work with the new version of drupal-kit

  ### Breaking

  `PantheonDrupalState` from the `drupal-kit` dependency no longer stores DrupalJsonapiParams in its state.
  See https://git.drupalcode.org/project/drupal_state#request-parameters for more information.

### Patch Changes

- Updated dependencies [de12430]
  - @pantheon-systems/drupal-kit@2.0.0

## 1.1.5

### Patch Changes

- 4fd56af: [next-drupal-starter] Bugfixes to page path
- c8d3127: [next-drupal-starter] Added helper function to consolidate code from getStaticPaths
- 27ee3e1: Resolved regression preventing footer menu from rendering.
- 62595b7: [next-drupal-starter] Minor bugfixes to grid component and more robust handling of href locale
- Updated dependencies [bde6a66]
  - @pantheon-systems/drupal-kit@1.1.5

## 1.1.4

### Patch Changes

- 0fb93d0: [drupal-kit] Upgrade @gdwc/drupal-state to v2.7.0
  [next-drupal-starter] Use the new refresh option when preview is true
- 3f35b8a: [next-drupal-starter] Refactor examples/auth-api
- 9483b9e: [next-drupal-starter] Added helper function for handling preview data and preview implemented on all content types
- Updated dependencies [0fb93d0]
  - @pantheon-systems/drupal-kit@1.1.4

## 1.1.3

### Patch Changes

- 40c4a56: [next-drupal-starter] Created components based on pages to DRY up code

## 1.1.2

### Patch Changes

- fdae978: [next-drupal-starter] Extract DrupalState stores into React Context
- ce38441: [next-drupal-starter] Preview redirects based on data and better error handling for preview

## 1.1.0

### Patch Changes

- 64b63dc: [drupal-kit][next-drupal-starter] Update DrupalState version
- Updated dependencies [64b63dc]
  - @pantheon-systems/drupal-kit@1.1.0

## 1.0.5

### Patch Changes

- f684b85: Expose FRONTEND_URL to properly set hrefLang
- 4b390e4: Update homepage callout text and logo.
- 86f5025: Adds `sharp` to next-drupal-starter for production image processing

## 1.0.4

### Patch Changes

- 8a13bf2: [next-drupal] Remove postinstall script, refine readme for .env configuration

## 1.0.3

### Patch Changes

- 9f7bc9a: [next-drupal] Change .env.local to .env.development.local so it does not load in production

## 1.0.2

### Patch Changes

- 8b69fad: Further refined env variable config
- f9974ac: Update READMEs and package.json metadata
- Updated dependencies [f9974ac]
  - @pantheon-systems/drupal-kit@1.0.2

## 1.0.1

### Patch Changes

- 81e00e7: Add package-lock.json to gatsby-wordpress-starter and next-drupal-starter for distribution.
- e304470: Reconfigure env vars so empty BACKEND_URL does not fail builds on infra
