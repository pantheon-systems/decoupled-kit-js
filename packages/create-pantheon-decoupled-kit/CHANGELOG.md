# create-pantheon-decoupled-kit

## 0.3.0

### Minor Changes

- fe6bb4a: Added a new addon, `gatsby-wp-acf-addon`. It includes an example
  implementation of data sourced from WordPress with the
  [Advanced Custom Fields plugin](https://www.advancedcustomfields.com/)
  activated.
- 259cf03: Added Drupal Umami demo examples as a generator
- 8aae0b6: Removed `node-plop` as a dependency and refactored generators and
  actions to use `node-plop` replacements
- 461a863: Added a new addon, `next-wp-acf-addon`. It includes an example
  implementation of data sourced from WordPress with the
  [Advanced Custom Fields plugin](https://www.advancedcustomfields.com/)
  activated.

### Patch Changes

- c7488a5: Fix missing dependency - moved Handlebars from dev to prod
  dependencies.
- de15edb: Fix issue where .gitignores in templates were not properly published
  to npm

## 0.3.0-canary.3

### Patch Changes

- de15edb: Fix issue where .gitignores in templates were not properly published
  to npm

## 0.3.0-canary.2

### Patch Changes

- c7488a5: Fix missing dependency - moved Handlebars from dev to prod
  dependencies.

## 0.3.0-canary.1

### Minor Changes

- 8aae0b6: Removed `node-plop` as a dependency and refactored generators and
  actions to use `node-plop` replacements

## 0.3.0-canary.0

### Minor Changes

- fe6bb4a: Added a new addon, `gatsby-wp-acf-addon`. It includes an example
  implementation of data sourced from WordPress with the
  [Advanced Custom Fields plugin](https://www.advancedcustomfields.com/)
  activated.
- 259cf03: Added Drupal Umami demo examples as a generator
- 461a863: Added a new addon, `next-wp-acf-addon`. It includes an example
  implementation of data sourced from WordPress with the
  [Advanced Custom Fields plugin](https://www.advancedcustomfields.com/)
  activated.

## 0.2.0

### Minor Changes

- e0d378b: Add generator for next-drupal without recipes route Fix lint step
  when using npm
- 6a720d5: Add generator for gatsby-wordpress

### Patch Changes

- b174a5c: Added handlebars helper for the package.json name field Added help
  and version commands Add partial for shared package.json fields
- a936759: Use `GET` for GraphQL requests by default

## 0.2.0-canary.1

### Minor Changes

- e0d378b: Add generator for next-drupal without recipes route Fix lint step
  when using npm
- 6a720d5: Add generator for gatsby-wordpress

### Patch Changes

- b174a5c: Added handlebars helper for the package.json name field Added help
  and version commands Add partial for shared package.json fields

## 0.1.1-canary.0

### Patch Changes

- a936759: Use `GET` for GraphQL requests by default

## 0.1.0

### Minor Changes

- b92a30b: - Added addWithDiff, runInstall, and runESLint custom actions
  - Add pkgJson partial
  - Add partial helper
  - Add next-wordpress generator

### Patch Changes

- 56a2539: Fix missing dependency
- 3f82da7: Initialize `create-pantheon-decoupled-kit`

## 0.1.0-canary.2

### Patch Changes

- 56a2539: Fix missing dependency

## 0.1.0-canary.1

### Minor Changes

- b92a30b: - Added addWithDiff, runInstall, and runESLint custom actions
  - Add pkgJson partial
  - Add partial helper
  - Add next-wordpress generator

## 0.0.1-canary.0

### Patch Changes

- 3f82da7: Initialize `create-pantheon-decoupled-kit`
