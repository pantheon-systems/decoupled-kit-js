# @pantheon-systems/gatsby-wordpress-starter

## 2.7.0-canary.0

### Minor Changes

- edee048: Set IS_LIVE_ENVIRONMENT Environment Variable

## 2.6.1

### Patch Changes

- 7de1da8: Ensure `gatsby-source-wordpress` is on the latest version so that new
  installs of WPGraphQL work with the starter
- 247d075: Add eslint@^7.5.0 as a dev dependency to satisfy a monorepo error

## 2.6.1-canary.1

### Patch Changes

- 7de1da8: Ensure `gatsby-source-wordpress` is on the latest version so that new
  installs of WPGraphQL work with the starter

## 2.6.1-canary.0

### Patch Changes

- 247d075: Add eslint@^7.5.0 as a dev dependency to satisfy a monorepo error

## 2.6.0

### Minor Changes

- 9347e03: Add page for gatsby auth API demo

### Patch Changes

- 6f07cbc: Fallback to PANTHEON_CMS_ENDPOINT if WPGRAPHQL_URL is not set when
  creating the graphql client to fetch private posts

## 2.6.0-canary.1

### Patch Changes

- 6f07cbc: Fallback to PANTHEON_CMS_ENDPOINT if WPGRAPHQL_URL is not set when
  creating the graphql client to fetch private posts

## 2.6.0-canary.0

### Minor Changes

- 9347e03: Add page for gatsby auth API demo

## 2.5.0

### Minor Changes

- 23217bc: Add Pagination to Page and Post Routes

### Patch Changes

- 9e68967: 404 page styles
- 046e58d: Updated gatsby-wordpress-starter to fail gracefully if used with a
  WordPress site that does not have menu data.

## 2.5.0-canary.1

### Patch Changes

- 046e58d: Updated gatsby-wordpress-starter to fail gracefully if used with a
  WordPress site that does not have menu data.

## 2.5.0-canary.0

### Minor Changes

- 23217bc: Add Pagination to Page and Post Routes

### Patch Changes

- 9e68967: 404 page styles

## 2.4.0

### Minor Changes

- c7985f8: Automatically injects PANTHEON_UPLOAD_PATH as the pathPrefix when
  using the starter on Pantheon
- 46575f5: Added snapshot tests with vitest and @testing-library/react
- 936b1b5: Added a pagination component and an example route with paginated data

## 2.4.0-canary.2

### Minor Changes

- 936b1b5: Added a pagination component and an example route with paginated data

## 2.4.0-canary.1

### Minor Changes

- 46575f5: Added snapshot tests with vitest and @testing-library/react

## 2.4.0-canary.0

### Minor Changes

- c7985f8: Automatically injects PANTHEON_UPLOAD_PATH as the pathPrefix when
  using the starter on Pantheon

## 2.3.0

### Minor Changes

- f99244a: Refactored to remove react-helmet and use the gatsby Head
- 74ce69e: Upgraded `gatsby` to v4.24.0 and bumped gatsby related plugins

## 2.3.0-canary.1

### Minor Changes

- f99244a: Refactored to remove react-helmet and use the gatsby Head

## 2.3.0-canary.0

### Minor Changes

- 74ce69e: Upgraded `gatsby` to v4.24.0 and bumped gatsby related plugins

## 2.2.0

### Minor Changes

- 2bfe07a: Remove pantheon logo for cards that don't have featured image, and
  use a generic gradient instead

### Patch Changes

- c634786: Add .nvmrc file

## 2.2.0-canary.0

### Minor Changes

- 2bfe07a: Remove pantheon logo for cards that don't have featured image, and
  use a generic gradient instead

### Patch Changes

- c634786: Add .nvmrc file

## 2.1.0

### Minor Changes

- a52944b: Removed html-react-parser and rendered the content of the posts and
  pages by insert html

### Patch Changes

- dc9e31a: Upgraded Gatsby to 4.22.0 and upgraded all Gatsby related packages.
- 5e43ec3: Upgrade Gatsby and general dependencies to resolve error running in
  develop mode.
- ee835e8: Update prettierrc and reformat spaces -> tabs for accessibility

## 2.1.0-canary.1

### Patch Changes

- ee835e8: Update prettierrc and reformat spaces -> tabs for accessibility

## 2.1.0-canary.0

### Minor Changes

- a52944b: Removed html-react-parser and rendered the content of the posts and
  pages by insert html

### Patch Changes

- dc9e31a: Upgraded Gatsby to 4.22.0 and upgraded all Gatsby related packages.
- 5e43ec3: Upgrade Gatsby and general dependencies to resolve error running in
  develop mode.

## 2.0.0

### Major Changes

- ad89e4a: Change the style to follow same guidelines than other starters

### Minor Changes

- d487850: Remove of the remaining CSS and moved tailwind to dev dependencies

### Patch Changes

- b5cd4de: Re-add the package-lock.json
- 56ec318: Added a helpful error message in case a CMS backend endpoint is not
  set

## 2.0.0-canary.1

### Patch Changes

- b5cd4de: Re-add the package-lock.json

## 2.0.0-canary.0

### Major Changes

- ad89e4a: Change the style to follow same guidelines than other starters

### Minor Changes

- d487850: Remove of the remaining CSS and moved tailwind to dev dependencies

### Patch Changes

- 56ec318: Added a helpful error message in case a CMS backend endpoint is not
  set

## 1.1.0

### Minor Changes

- f71f71e: [gatsby-wordpress-starter] Reverts upgrade to gatsby 4.16.0

### Patch Changes

- 8ddf7bf: [gatsby-wordpress-starter] Updated dependencies in the
  gatsby-wordpress-starter

## 1.0.3

### Patch Changes

- 4b390e4: Update homepage callout text and logo.

## 1.0.2

### Patch Changes

- 0b51630: Refined environment variable fallback
- f9974ac: Update READMEs and package.json metadata

## 1.0.1

### Patch Changes

- 81e00e7: Add package-lock.json to gatsby-wordpress-starter and
  next-drupal-starter for distribution.
