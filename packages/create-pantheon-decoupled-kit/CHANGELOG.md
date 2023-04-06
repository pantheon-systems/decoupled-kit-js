# create-pantheon-decoupled-kit

## 0.6.0-canary.1

### Minor Changes

- 63b50619: [next-drupal] Added css modules for `next-drupal` templates.
  `next-drupal` and

  `next-drupal-umami-addon` may now be generated with css modules instead of

  tailwindcss.

## 0.5.1-canary.0

### Patch Changes

- f50164f8: [gatsby-wp] Update dependencies

## 0.5.0

### Minor Changes

- 34348b43: [next-drupal-search-api-addon] Added a placeholder search route and
  app layout to the next-drupal app directory.
- d207fc3a: [next-wp] Added option to create a next-wp starter without
  tailwindcss [next-wp-acf-addon] Removed explicit templates in favor of
  handlebars conditional rendering inside of the `next-wp` templates. Also added
  CSS so this add-on will work with the tailwindless next-wp option
- 5e486b73: Added a new addon, `next-drupal-search-api-addon`. It includes the
  beginning of an example implementation of the Drupal Search API
- 5b330046: Added a new action: `addDependencies`. This action allows a
  generator to add dependencies to the `package.json` at the specified `outDir`.

  Added a new add-on generator: `tailwindcss-addon`. This generator adds
  necessary dependencies and configs to use with `@pantheon-systems` dependency
  that rely on `tailwindcss`.

### Patch Changes

- 6c770bfa: [next-wp] Re-add `tailwindcss` as a dependency as it is required for
  `@pantheon-systems/wordpress-kit`
- c6e5ba86: Refined the `DecoupledKitGenerator` type generics to provide
  stronger types on arbitrary data
- 9c81c0f5: Update project generator READMEs to recommend the
  `create-pantheon-decoupled-kit` CLI as the default way to create a project

## 0.5.0-canary.2

### Patch Changes

- 6c770bfa: [next-wp] Re-add `tailwindcss` as a dependency as it is required for
  `@pantheon-systems/wordpress-kit`

## 0.5.0-canary.1

### Minor Changes

- 34348b43: [next-drupal-search-api-addon] Added a placeholder search route and
  app layout to the next-drupal app directory.
- d207fc3a: [next-wp] Added option to create a next-wp starter without
  tailwindcss [next-wp-acf-addon] Removed explicit templates in favor of
  handlebars conditional rendering inside of the `next-wp` templates. Also added
  CSS so this add-on will work with the tailwindless next-wp option
- 5e486b73: Added a new addon, `next-drupal-search-api-addon`. It includes the
  beginning of an example implementation of the Drupal Search API

### Patch Changes

- c6e5ba86: Refined the `DecoupledKitGenerator` type generics to provide
  stronger types on arbitrary data

## 0.5.0-canary.0

### Minor Changes

- 5b33004: Added a new action: `addDependencies`. This action allows a generator
  to add dependencies to the `package.json` at the specified `outDir`.

  Added a new add-on generator: `tailwindcss-addon`. This generator adds
  necessary dependencies and configs to use with `@pantheon-systems` dependency
  that rely on `tailwindcss`.

### Patch Changes

- 9c81c0f: Update project generator READMEs to recommend the
  `create-pantheon-decoupled-kit` CLI as the default way to create a project

## 0.4.0

### Minor Changes

- 981825d: [gatsby-wp] Add Published `eslint` Configs to Gatsby Generator

### Patch Changes

- 2cc371a: Updates to watch script
- 1218c02: [gatsby-wp] Add conditinal to gatsby-config to avoid loading missing
  plugins
- b719c1c: Add dynamic versioning for @pantheon-systems dependencies
- c31795b: Rename gitignore template on write to workaround npm
- 9ede7c8: Update config package route.
- 4dd905b: [next-wp] Update post and page date
- d38e923: Removed .npmignore from project templates

## 0.4.0-canary.3

### Patch Changes

- 2cc371a: Updates to watch script
- b719c1c: Add dynamic versioning for @pantheon-systems dependencies
- d38e923: Removed .npmignore from project templates

## 0.4.0-canary.2

### Patch Changes

- 1218c02: [gatsby-wp] Add conditinal to gatsby-config to avoid loading missing
  plugins

## 0.4.0-canary.1

### Minor Changes

- 981825d: [gatsby-wp] Add Published `eslint` Configs to Gatsby Generator

### Patch Changes

- c31795b: Rename gitignore template on write to workaround npm

## 0.3.1-canary.0

### Patch Changes

- 9ede7c8: Update config package route.
- 4dd905b: [next-wp] Update post and page date

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
