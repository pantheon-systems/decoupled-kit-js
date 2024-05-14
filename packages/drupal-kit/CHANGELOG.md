# @pantheon-systems/drupal-kit

## 4.6.6-canary.0

### Patch Changes

- b92ea7b: Bump @types/isomorphic-fetch from 0.0.36 to 0.0.39

## 4.6.5

### Patch Changes

- 983408a2: Update dependencies
- Updated dependencies [983408a2]
  - @pantheon-systems/cms-kit@0.3.4

## 4.6.5-canary.0

### Patch Changes

- 983408a2: Update dependencies
- Updated dependencies [983408a2]
  - @pantheon-systems/cms-kit@0.3.4-canary.0

## 4.6.4

### Patch Changes

- 7d015eff: Update dependencies
- Updated dependencies [b62a6484]
  - @pantheon-systems/cms-kit@0.3.3

## 4.6.4-canary.0

### Patch Changes

- 7d015eff: Update dependencies
- Updated dependencies [b62a6484]
  - @pantheon-systems/cms-kit@0.3.3-canary.0

## 4.6.3

### Patch Changes

- da7ebb26: Use `Pantheon-SKey` instead of `Fastly-Debug` header to obtain the
  surrogate-key header
- 5cf51bed: Upgraded `vitest`
- Updated dependencies [5cf51bed]
  - @pantheon-systems/cms-kit@0.3.2

## 4.6.3-canary.1

### Patch Changes

- da7ebb26: Use `Pantheon-SKey` instead of `Fastly-Debug` header to obtain the
  surrogate-key header

## 4.6.3-canary.0

### Patch Changes

- 5cf51bed: Upgraded `vitest`
- Updated dependencies [5cf51bed]
  - @pantheon-systems/cms-kit@0.3.2-canary.0

## 4.6.2

### Patch Changes

- 53831e97: Bump `@gdwc/drupal-state` to v4.2.3 and pin the dependency

## 4.6.2-canary.0

### Patch Changes

- 53831e97: Bump `@gdwc/drupal-state` to v4.2.3 and pin the dependency

## 4.6.1

### Patch Changes

- 46f987cf: [drupal-kit] Update `getDrupalSearchResults` to use `example_index`
  as the default index to fetch.

## 4.6.1-canary.0

### Patch Changes

- 46f987cf: [drupal-kit] Update `getDrupalSearchResults` to use `example_index`
  as the default index to fetch.

## 4.6.0

### Minor Changes

- abf7fa7a: Refactored bundle. There should be no changes to consumers of this
  package

### Patch Changes

- 94373c6c: Fix package.json typo
- Updated dependencies [3fd37398]
  - @pantheon-systems/cms-kit@0.3.1

## 4.6.0-canary.1

### Patch Changes

- 94373c6c: Fix package.json typo

## 4.6.0-canary.0

### Minor Changes

- abf7fa7a: Refactored bundle. There should be no changes to consumers of this
  package

### Patch Changes

- Updated dependencies [3fd37398]
  - @pantheon-systems/cms-kit@0.3.1-canary.0

## 4.5.0

### Minor Changes

- b9a05706: The `DrupalState` `defaultFetch` now sets the `Fastly-Debug` header
  to obtain hashed surrogate keys instead of raw surrogate keys

### Patch Changes

- Updated dependencies [b9a05706]
  - @pantheon-systems/cms-kit@0.3.0

## 4.5.0-canary.0

### Minor Changes

- b9a05706: The `DrupalState` `defaultFetch` now sets the `Fastly-Debug` header
  to obtain hashed surrogate keys instead of raw surrogate keys

### Patch Changes

- Updated dependencies [b9a05706]
  - @pantheon-systems/cms-kit@0.3.0-canary.0

## 4.4.0

### Minor Changes

- 98321554: Overload getObject methods to accept a generic that will be used as
  the return type

### Patch Changes

- 79df700d: Update `getDrupalSearchResults()` function to escape more characters
  in search queries.
- Updated dependencies [98321554]
  - @pantheon-systems/cms-kit@0.2.3

## 4.4.0-canary.1

### Minor Changes

- 98321554: Overload getObject methods to accept a generic that will be used as
  the return type

### Patch Changes

- Updated dependencies [98321554]
  - @pantheon-systems/cms-kit@0.2.3-canary.0

## 4.3.1-canary.0

### Patch Changes

- 79df700d: Update `getDrupalSearchResults()` function to escape more characters
  in search queries.

## 4.3.0

### Minor Changes

- 89c6bf58: Adds a `getDrupalSearchResults` helper function to query the Drupal
  Search API.

### Patch Changes

- f50164f8: Updated dependencies
- Updated dependencies [f50164f8]
  - @pantheon-systems/cms-kit@0.2.2

## 4.3.0-canary.1

### Minor Changes

- 89c6bf58: Adds a `getDrupalSearchResults` helper function to query the Drupal
  Search API.

## 4.2.2-canary.0

### Patch Changes

- f50164f8: Updated dependencies
- Updated dependencies [f50164f8]
  - @pantheon-systems/cms-kit@0.2.2-canary.0

## 4.2.1

### Patch Changes

- b075c12: Update config package route.
- Updated dependencies [b44ec7a]
  - @pantheon-systems/cms-kit@0.2.1

## 4.2.1-canary.0

### Patch Changes

- b075c12: Update config package route.
- Updated dependencies [b44ec7a]
  - @pantheon-systems/cms-kit@0.2.1-canary.0

## 4.2.0

### Minor Changes

- 4efe223: Updated default Cache-Control value from
  `public, s-maxage=10, stale-while-revalidate=600` to `s-public, maxage=600`

## 4.2.0-canary.0

### Minor Changes

- 4efe223: Updated default Cache-Control value from
  `public, s-maxage=10, stale-while-revalidate=600` to `s-public, maxage=600`

## 4.1.0

### Minor Changes

- 4188395: `defaultFetch` now sets the `Pantheon-SKey` header instead of
  `Pantheon-Debug`

### Patch Changes

- Updated dependencies [6dfcb56]
  - @pantheon-systems/cms-kit@0.2.0

## 4.1.0-canary.0

### Minor Changes

- 4188395: `defaultFetch` now sets the `Pantheon-SKey` header instead of
  `Pantheon-Debug`

### Patch Changes

- Updated dependencies [6dfcb56]
  - @pantheon-systems/cms-kit@0.2.0-canary.0

## 4.0.0

### Major Changes

- a5c4275: Breaking: Moved addSurrogateKeyHeader to a new package and renamed it
  setSurrogateKeyHeader. setSurrogateKeyHeader is exported from drupal-kit

### Patch Changes

- cd286c6: Update to latest version of DrupalState, v4.2.0
- Updated dependencies [a5c4275]
  - @pantheon-systems/cms-kit@0.1.0

## 4.0.0-canary.0

### Major Changes

- a5c4275: Breaking: Moved addSurrogateKeyHeader to a new package and renamed it
  setSurrogateKeyHeader. setSurrogateKeyHeader is exported from drupal-kit

### Patch Changes

- cd286c6: Update to latest version of DrupalState, v4.2.0
- Updated dependencies [a5c4275]
  - @pantheon-systems/cms-kit@0.1.0-canary.0

## 3.1.0

### Minor Changes

- 74ce69e: Remove unused dependencies and clean up versions in package.json

### Patch Changes

- aea42f5: Fix types field in package.json

## 3.1.0-canary.0

### Minor Changes

- 74ce69e: Remove unused dependencies and clean up versions in package.json

### Patch Changes

- aea42f5: Fix types field in package.json

## 3.0.1

### Patch Changes

- 9dbbc6b: Updated dist bundle to include generated d.ts files

## 3.0.1-canary.0

### Patch Changes

- 9dbbc6b: Updated dist bundle to include generated d.ts files

## 3.0.0

### Major Changes

- 3ffcbbe: ## Breaking Changes

  Removed the `query` option from `DrupalState`. This reflects the same upstream
  change in `@gdwc/drupal-state`.

  If you are still using a query after updating, you will receive a warning in
  the console and the full payload for the requested object.

### Patch Changes

- ee835e8: Update prettierrc and reformat spaces -> tabs for accessibility

## 3.0.0-canary.0

### Major Changes

- 3ffcbbe: ## Breaking Changes

  Removed the `query` option from `DrupalState`. This reflects the same upstream
  change in `@gdwc/drupal-state`.

  If you are still using a query after updating, you will receive a warning in
  the console and the full payload for the requested object.

### Patch Changes

- ee835e8: Update prettierrc and reformat spaces -> tabs for accessibility

## 2.2.0

### Minor Changes

- 52e470a: drupal-kit's defaultFetch was updated to set a cache control header
  of `cache-control: public, s-maxage=10, stale-while-revalidate=600` if a
  response object is passed.

## 2.2.0-canary.0

### Minor Changes

- 52e470a: drupal-kit's defaultFetch was updated to set a cache control header
  of `cache-control: public, s-maxage=10, stale-while-revalidate=600` if a
  response object is passed.

## 2.1.0

### Minor Changes

- 92d0c44: [drupal-kit] Upgrade DrupalState dependency to 3.1.0

### Patch Changes

- 88671a4: [drupal-kit] Added `translatePath` to drupal-kit exports

## 2.0.0

### Major Changes

- de12430: [drupal-kit] Upgraded `@gdwc/drupal-state` to version 3.0.0

  ### Breaking

  `PantheonDrupalState` no longer stores DrupalJsonapiParams in its state. See
  https://git.drupalcode.org/project/drupal_state#request-parameters for more
  information.

## 1.1.5

### Patch Changes

- bde6a66: [next-drupal-starter] Small fixes to `getStaticProps` on some pages

## 1.1.4

### Patch Changes

- 0fb93d0: [drupal-kit] Upgrade @gdwc/drupal-state to v2.7.0
  [next-drupal-starter] Use the new refresh option when preview is true

## 1.1.1

### Patch Changes

- Re-publishing after a CI error

## 1.1.0

### Minor Changes

- 64b63dc: [drupal-kit][next-drupal-starter] Update DrupalState version

## 1.0.2

### Patch Changes

- f9974ac: Update READMEs and package.json metadata
