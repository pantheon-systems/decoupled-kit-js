# create-pantheon-decoupled-kit

## 0.10.6-canary.0

### Patch Changes

- 9df9a05c: Update starters and `nextjs-kit` to use next 13.5.6.

## 0.10.5

### Patch Changes

- bb59183b: Update gatsby-wp dependencies
- 4517122d: Update next-drupal dependencies
- 2e8ddde0: Update next-wp dependencies

## 0.10.5-canary.0

### Patch Changes

- bb59183b: Update gatsby-wp dependencies
- 4517122d: Update next-drupal dependencies
- 2e8ddde0: Update next-wp dependencies

## 0.10.4

### Patch Changes

- da7ebb26: Bump `@pantheon-systems/wordpress-kit` and
  `@pantheon-systems/drupal-kit`
- 5cf51bed: Some internal changes to types for better API reference generation
- e791c027: Bump `@pantheon-systems/decoupled-kit-health-check` version

## 0.10.4-canary.1

### Patch Changes

- da7ebb26: Bump `@pantheon-systems/wordpress-kit` and
  `@pantheon-systems/drupal-kit`

## 0.10.4-canary.0

### Patch Changes

- 5cf51bed: Some internal changes to types for better API reference generation
- e791c027: Bump `@pantheon-systems/decoupled-kit-health-check` version

## 0.10.3

### Patch Changes

- 15d7593e: Bump `@pantheon-systems/decoupled-kit-health-check`
- 7d3513ca: [next-wp] Fixed a bug where a trailing slash on WPGRAPHQL_URL could
  break the IMAGE_DOMAIN used for the `next/image` component.
- 3e853174: [next-wp][next-drupal][gatsby-wp] Add `engines` field to
  package.json

## 0.10.3-canary.1

### Patch Changes

- 3e853174: [next-wp][next-drupal][gatsby-wp] Add `engines` field to
  package.json

## 0.10.3-canary.0

### Patch Changes

- 15d7593e: Bump `@pantheon-systems/decoupled-kit-health-check`
- 7d3513ca: [next-wp] Fixed a bug where a trailing slash on WPGRAPHQL_URL could
  break the IMAGE_DOMAIN used for the `next/image` component.

## 0.10.2

### Patch Changes

- 793e6268: Fix logo alignment in READMEs
- 6b616fb9: [next-wp][next-drupal][gatsby-wp] Update READMEs

## 0.10.2-canary.1

### Patch Changes

- 793e6268: Fix logo alignment in READMEs

## 0.10.2-canary.0

### Patch Changes

- 6b616fb9: [next-wp][next-drupal][gatsby-wp] Update READMEs

## 0.10.1

### Patch Changes

- 2fa14b06: [gatsby-wp] Update README
- bbc872eb: Bump `@pantheon-systems/decoupled-kit-health-check` version
- c7259e5e: [next-wp][gatsby-wp][next-drupal] Add comments describing each env
  var in the `.env.example`
- 78042c44: next-drupal-search-api-addon - `BACKEND_URL` not required for
  successful search queries.

## 0.10.1-canary.1

### Patch Changes

- 911a7d48: Bump `@pantheon-systems/decoupled-kit-health-check` version
- c7259e5e: [next-wp][gatsby-wp][next-drupal] Add comments describing each env
  var in the `.env.example`

## 0.10.1-canary.0

### Patch Changes

- 2fa14b06: [gatsby-wp] Update README
- 78042c44: next-drupal-search-api-addon - `BACKEND_URL` not required for
  successful search queries.

## 0.10.0

### Minor Changes

- 71c84419: [gatsby-wp] Use TypeScript by default [cli] Begin transitioning to
  tagged template literal templates away from handlebars

### Patch Changes

- 40a97692: Bump `@pantheon-systems/decoupled-kit-health-check` version
- 8527330f: Bump `@pantheon-systems/decoupled-kit-health-check` version
- bf9e7728: [next-drupal] Pagination example fails gracefully. If the mock
  content can not be reached, a message is displayed at the /examples/pagination
  route.
- ba64c8b2: Bump `@pantheon-systems/decoupled-kit-health-check` version
- 17cf4481: [next-wp] Pagination example fails gracefully. If the mock content
  can not be reached, a message is displayed at the /examples/pagination route.
- 71c84419: [gatsby-wp] Upgraded the gatsby-wp templates to use gatsby v5
- a328f582: [gatsby-wp] Use new tagged template for .env.development.local and
  fix typo in gatsby-config
- 3c064545: [next-drupal] Added the
  `@pantheon-systems/decoupled-kit-health-check` package as a dev dependency to
  the `next-drupal` template. The health check will run before a build to check
  critical endpoints for availability
- e3817f2b: [gatsby-wp] Pagination example fails gracefully. If the mock content
  can not be reached, a message is displayed at the /examples/pagination route.
- e4c17b86: [gatsby-wp] Add healthcheck script, bump
  `@pantheon-systems/decoupled-kit-healthcheck` version
- 7bf7e5f3: [next-wp] Added the `@pantheon-systems/decoupled-kit-health-check`
  package as a dev dependency to the `next-wp` template. The health check will
  run before a build to check critical endpoints for availability

  [next-wp, next-drupal] Updated the README to include information about the
  `@pantheon-systems/decoupled-kit-health-check`

- a0dce89a: Bump `@pantheon-systems/decoupled-kit-health-check` version
- 71c84419: [gatsby-wp-acf-addon] Rewrite templates in TypeScript

  [gatsby-wp] Move some templates to partials

- 104f0057: [next-wp] Added logic to `api/preview.js` that returns JSON which
  indicates if there are any issues with the preview route or secret if the
  `test=true` queryparam exists on the request URL.
- c85ddced: [next-wp] Fix missing comma in package.json
- 71c84419: Add support for tagged template literal templates in addition to
  handlebars templates. This is in effort to smooth out developer experience
  when writing templates for the generators. This change is meant to be
  backwards compatible so handlebars templates should still work.
- 2cd84152: [next-drupal] Added logic to `api/preview.js` that returns JSON
  which indicates if there are any issues with the preview route or secret if
  the `test=true` query param exists on the request URL.

## 0.10.0-canary.14

### Patch Changes

- e3817f2b: [gatsby-wp] Pagination example fails gracefully. If the mock content
  can not be reached, a message is displayed at the /examples/pagination route.

## 0.10.0-canary.13

### Patch Changes

- 17cf4481: [next-wp] Pagination example fails gracefully. If the mock content
  can not be reached, a message is displayed at the /examples/pagination route.

## 0.10.0-canary.12

### Patch Changes

- bf9e7728: [next-drupal] Pagination example fails gracefully. If the mock
  content can not be reached, a message is displayed at the /examples/pagination
  route.

## 0.10.0-canary.11

### Patch Changes

- f9756fbc: [next-wp-search-api-addon] Add Search Results page

## 0.10.0-canary.10

### Patch Changes

- ba64c8b2: Bump `@pantheon-systems/decoupled-kit-health-check` version

## 0.10.0-canary.9

### Minor Changes

- 7f18b23e: [cli] - Add generator for a next-wp-search-api-add-on
  [next-wp-search-api-add-on] - Add's <SearchInput /> component to the layout
  and header of the next-wp starter.

### Patch Changes

- 40a97692: Bump `@pantheon-systems/decoupled-kit-health-check` version

## 0.10.0-canary.8

### Patch Changes

- e4c17b86: [gatsby-wp] Add healthcheck script, bump
  `@pantheon-systems/decoupled-kit-healthcheck` version

## 0.10.0-canary.7

### Patch Changes

- a328f582: [gatsby-wp] Use new tagged template for .env.development.local and
  fix typo in gatsby-config

## 0.10.0-canary.6

### Minor Changes

- 71c84419: [gatsby-wp] Use TypeScript by default [cli] Begin transitioning to
  tagged template literal templates away from handlebars
- 71c84419: [gatsby-wp] Starters created using the `gatsby-wp` generator are now
  in TypeScript

### Patch Changes

- 71c84419: [gatsby-wp] Upgraded the gatsby-wp templates to use gatsby v5
- 71c84419: [gatsby-wp-acf-addon] Rewrite templates in TypeScript

  [gatsby-wp] Move some templates to partials

- 71c84419: Add support for tagged template literal templates in addition to
  handlebars templates. This is in effort to smooth out developer experience
  when writing templates for the generators. This change is meant to be
  backwards compatible so handlebars templates should still work.

## 0.9.3-canary.5

### Patch Changes

- 104f0057: [next-wp] Added logic to `api/preview.js` that returns JSON which
  indicates if there are any issues with the preview route or secret if the
  `test=true` queryparam exists on the request URL.
- 2cd84152: [next-drupal] Added logic to `api/preview.js` that returns JSON
  which indicates if there are any issues with the preview route or secret if
  the `test=true` query param exists on the request URL.

## 0.9.3-canary.4

### Patch Changes

- a0dce89a: Bump `@pantheon-systems/decoupled-kit-health-check` version

## 0.9.3-canary.3

### Patch Changes

- c85ddced: [next-wp] Fix missing comma in package.json

## 0.9.3-canary.2

### Patch Changes

- 7bf7e5f3: [next-wp] Added the `@pantheon-systems/decoupled-kit-health-check`
  package as a dev dependency to the `next-wp` template. The health check will
  run before a build to check critical endpoints for availability

  [next-wp, next-drupal] Updated the README to include information about the
  `@pantheon-systems/decoupled-kit-health-check` and

## 0.9.3-canary.1

### Patch Changes

- 8527330f: Bump `@pantheon-systems/decoupled-kit-health-check` version

## 0.9.3-canary.0

### Patch Changes

- 3c064545: [next-drupal] Added the
  `@pantheon-systems/decoupled-kit-health-check` package as a dev dependency to
  the `next-drupal` template. The health check will run before a build to check
  critical endpoints for availability

## 0.9.2

### Patch Changes

- 1a210584: [next-wp] Bump `@pantheon-systems/wordpress-kit` version and moved
  `setOutgoingHeaders` to `@pantheon-systems/wordpress-kit`. Updated imports to
  reflect this change.
- a14bb97e: [next-drupal, next-wp] Pin `next` to `13.4.7` for stability
- 53831e97: Bump `@pantheon-systems/drupal-kit` version
- 22b9b841: Bump `@pantheon-systems/nextjs-kit` version

## 0.9.2-canary.2

### Patch Changes

- a14bb97e: [next-drupal, next-wp] Pin `next` to `13.4.7` for stability

## 0.9.2-canary.1

### Patch Changes

- 1a210584: [next-wp] Bump `@pantheon-systems/wordpress-kit` version and moved
  `setOutgoingHeaders` to `@pantheon-systems/wordpress-kit`. Updated imports to
  reflect this change.

## 0.9.2-canary.0

### Patch Changes

- 53831e97: Bump `@pantheon-systems/drupal-kit` version
- 22b9b841: Bump `@pantheon-systems/nextjs-kit` version

## 0.9.1

### Patch Changes

- 38dac70f: [next-drupal] Fix broken search result links
- 2e9032db: [cli] Add aliases for wordpress and drupal CMS types.

## 0.9.1-canary.1

### Patch Changes

- 38dac70f: [next-drupal] Fix broken search result links

## 0.9.1-canary.0

### Patch Changes

- 2e9032db: [cli] Add aliases for wordpress and drupal CMS types.

## 0.9.0

### Minor Changes

- e042730c: - [next-wp] Uses css modules by default, retain tailwindcss option
  - [next-druapl] Uses css modules by default, retain tailwindcss option
- ddacd2a5: Use css modules by default for the next-drupal-umami-addon, retain
  tailwindcss option
- 7da989b0: Added a new action: `convertCssModules`. This action allows CSS
  modules to be converted into Tailwind syntax.
- ab24262f: [gatsby-wp] Use the convertCSSModules action for the tailwindcss
  version

  Bump eslint-config version

### Patch Changes

- 5a786d0a: Bump nextjs-kit and wordpress-kit versions
- aea5653d: Bump nextjs-kit version
- 65689a68: - [next-wp] Update imports for Pagination example
- 0cb2a7ac: Bump nextjs-kit version
- abf7fa7a: [next-drupal] Bump `drupal-kit` version
- 5dd257c9: [next-wp-acf-addon] Use convertCSSModules action for the tailwindcss
  option. [next-drupal] Add prettier as devDependency and prettier scripts to
  package.json
- e0f1a510: Bump nextjs-kit version
- fe847220: [next-wp] Fix global css template
- c6beaeb1: Fix prettier scripts
- 703a2663: [next-wp] Add .prettierrc
- 05d75735: Use `lint --fix` for nextjs generators
- dffc487c: [gatsby-wp-acf-addon] Use css modules by default, retain tailwindcss
  option
- 0a456069: [next-wp][gatsby-wp] Bump `wordpress-kit` version, update import for
  `GraphQLClientFactory`
- f6de3b80: Bump wordpress-kit version
- 14ce5a27: Fix incorrect dependencies
- 94373c6c: Bump drupal-kit version
- 293d3fc7: [next-drupal] Handle encoded URI components in /api/preview

## 0.9.0-canary.13

### Patch Changes

- e0f1a510: Bump nextjs-kit version

## 0.9.0-canary.12

### Patch Changes

- 703a2663: [next-wp] Add .prettierrc

## 0.9.0-canary.11

### Patch Changes

- 5a786d0a: Bump nextjs-kit and wordpress-kit versions
- 5dd257c9: [next-wp-acf-addon] Use convertCSSModules action for the tailwindcss
  option. [next-drupal] Add prettier as devDependency and prettier scripts to
  package.json
- c6beaeb1: Fix prettier scripts

## 0.9.0-canary.10

### Patch Changes

- 293d3fc7: [next-drupal] Handle encoded URI components in /api/preview

## 0.9.0-canary.9

### Patch Changes

- 0cb2a7ac: Bump nextjs-kit version

## 0.9.0-canary.8

### Minor Changes

- ddacd2a5: Use css modules by default for the next-drupal-umami-addon, retain
  tailwindcss option

### Patch Changes

- 65689a68: - [next-wp] Update imports for Pagination example

## 0.9.0-canary.7

### Patch Changes

- aea5653d: Bump nextjs-kit version
- 05d75735: Use `lint --fix` for nextjs generators
- 94373c6c: Bump drupal-kit version

## 0.9.0-canary.6

### Minor Changes

- e042730c: - [next-wp] Uses css modules by default, retain tailwindcss option
  - [next-druapl] Uses css modules by default, retain tailwindcss option

## 0.9.0-canary.5

### Patch Changes

- dffc487c: [gatsby-wp-acf-addon] Use css modules by default, retain tailwindcss
  option

## 0.9.0-canary.4

### Patch Changes

- fe847220: [next-wp] Fix global css template

## 0.9.0-canary.3

### Minor Changes

- ab24262f: [gatsby-wp] Use the convertCSSModules action for the tailwindcss
  version

  Bump eslint-config version

## 0.9.0-canary.2

### Patch Changes

- f6de3b80: Bump wordpress-kit version

## 0.9.0-canary.1

### Patch Changes

- 14ce5a27: Fix incorrect dependencies

## 0.9.0-canary.0

### Minor Changes

- 7da989b0: Added a new action: `convertCssModules`. This action allows CSS
  modules to be converted into Tailwind syntax.

### Patch Changes

- abf7fa7a: [next-drupal] Bump `drupal-kit` version
- 0a456069: [next-wp][gatsby-wp] Bump `wordpress-kit` version, update import for
  `GraphQLClientFactory`

## 0.8.0

### Minor Changes

- ad7b2b33: [cli] The cli now accepts a `--cmsType` argument which filters the
  suggested generators to only those that are compatible with the provided type.

### Patch Changes

- af0f203c: [next-drupal] Added CSS module based styling to the
  `next-drupal-search-api-addon`
- ea3c25b2: [next-wp][gatsby-wp] Bump `wordpress-kit` version
- b9a05706: [next-drupal] Bump `drupal-kit` version
- 5e8b7212: [gatsby-wp], [next-wp]: Remove tailwind as a dependency for
  tailwindless wp starters.

## 0.8.0-canary.3

### Patch Changes

- ea3c25b2: [next-wp][gatsby-wp] Bump `wordpress-kit` version
- b9a05706: [next-drupal] Bump `drupal-kit` version

## 0.8.0-canary.2

### Patch Changes

- af0f203c: [next-drupal] Added CSS module based styling to the
  `next-drupal-search-api-addon`

## 0.8.0-canary.1

### Patch Changes

- 5e8b7212: [gatsby-wp], [next-wp]: Remove tailwind as a dependency for
  tailwindless wp starters.

## 0.8.0-canary.0

### Minor Changes

- ad7b2b33: [cli] The cli now accepts a `--cmsType` argument which filters the
  suggested generators to only those that are compatible with the provided type.

## 0.7.0

### Minor Changes

- fbb80853: [next-drupal-search-api-addon] Search page returns an article gird
  based off search results.
- 5ef6dfe5: [gatsby-wp] Added tailwindless option for the gatsby-wp generator.

  [cli] Some refinements made to the `addWithDiff` action which should no longer
  leave behind files in case abort is chosen. `runLint` will now use the `--fix`
  option.

- 27642e12: [next-wp][next-drupal][gatsby-wp] These generators now accept a
  `--cmsEndpoint` argument which sets the appropriate variable in
  .env.development.local for local development. These generators will prompt for
  the endpoint if it is not set when calling the generator.

### Patch Changes

- a4f18173: - [next-wp-acf-addon] Adjustments to comply with a generated WP
  backend with ACF enabled for new front end sites projects
  - [gatsby-wp-acf-addon] Adjustments to comply with a generated WP backend with
    ACF enabled for new front end sites projects
- 98321554: Bump `@pantheon-systems/drupal-kit` and `@pantheon-systems/cms-kit`
- d7e36603: [next-wp][gatsby-wp] Bump `@pantheon-systems/wordpress-kit` version
- bf2215e7: [next-drupal-search-api-addon] Updated `<SearchInput />` component
  styling.
- 24906587: [next-drupal][next-drupal-umami-addon] Remove extraneous css file

## 0.7.0-canary.5

### Patch Changes

- 98321554: Bump `@pantheon-systems/drupal-kit` and `@pantheon-systems/cms-kit`

## 0.7.0-canary.4

### Patch Changes

- d7e36603: [next-wp][gatsby-wp] Bump `@pantheon-systems/wordpress-kit` version
- bf2215e7: [next-drupal-search-api-addon] Updated `<SearchInput />` component
  styling.

## 0.7.0-canary.3

### Minor Changes

- 27642e12: [next-wp][next-drupal][gatsby-wp] These generators now accept a
  `--cmsEndpoint` argument which sets the appropriate variable in
  .env.development.local for local development. These generators will prompt for
  the endpoint if it is not set when calling the generator.

## 0.7.0-canary.2

### Patch Changes

- a4f18173: - [next-wp-acf-addon] Adjustments to comply with a generated WP
  backend with ACF enabled for new front end sites projects
  - [gatsby-wp-acf-addon] Adjustments to comply with a generated WP backend with
    ACF enabled for new front end sites projects
- 24906587: [next-drupal][next-drupal-umami-addon] Remove extraneous css file

## 0.7.0-canary.1

### Minor Changes

- fbb80853: [next-druapl-search-api-addon] Search page returns an article gird
  based off search results.

## 0.7.0-canary.0

### Minor Changes

- 5ef6dfe5: [gatsby-wp] Added tailwindless option for the gatsby-wp generator.

  [cli] Some refinements made to the `addWithDiff` action which should no longer
  leave behind files in case abort is chosen. `runLint` will now use the `--fix`
  option.

## 0.6.0

### Minor Changes

- 31b84996: [gatsby-wp-acf-addon] Adjust formatting to satisfy lint
- 63b50619: [next-drupal] Added css modules for `next-drupal` templates.
  `next-drupal` and

  `next-drupal-umami-addon` may now be generated with css modules instead of

  tailwindcss.

- 822529ee: [next-druapl-search-api-addon] User entered search term persists on
  search results page.

### Patch Changes

- f50164f8: [gatsby-wp] Update dependencies
- f16708d6: [next-drupal] A revised search page in the
  `next-druapl-search-api-addon` that incorporates the new
  `getDrupalSearchResultsFunction`

## 0.6.0-canary.3

### Minor Changes

- 31b84996: [gatsby-wp-acf-addon] Adjust formatting to satisfy lint
- 822529ee: [next-druapl-search-api-addon] User entered search term persists on
  search results page.

## 0.6.0-canary.2

### Patch Changes

- f16708d6: [next-drupal] A revised search page in the
  `next-druapl-search-api-addon` that incorporates the new
  `getDrupalSearchResultsFunction`

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
