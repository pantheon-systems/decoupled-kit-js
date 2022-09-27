# @pantheon-systems/nextjs-kit

## 1.2.0-canary.0

### Minor Changes

- 6671402: Added the prefix option in the tailwindcss config so the styles
  generated from nextjs-kit will not override default tailwindcss classes in a
  project

### Patch Changes

- 8b9cb28: Added ContentWithImage component to be used for a WP Post or Drupal
  Article
- c36d501: Add Recipe Component into nextjs-kit

## 1.1.0

### Minor Changes

- 547ee6e: Added Paginator component, added TSDoc comments to exported types and
  interfaces

### Patch Changes

- 66aeea3: Upgraded next to latest version, changed starter kits to build and
  start using standalone output mode.
- ee835e8: Update prettierrc and reformat spaces -> tabs for accessibility

## 1.1.0-canary.2

### Patch Changes

- ee835e8: Update prettierrc and reformat spaces -> tabs for accessibility

## 1.1.0-canary.1

### Minor Changes

- 547ee6e: Added Paginator component, added TSDoc comments to exported types and
  interfaces

## 1.0.1-canary.0

### Patch Changes

- 66aeea3: Upgraded next to latest version, changed starter kits to build and
  start using standalone output mode.

## 1.0.0

### Major Changes

- 598f7ca: ## Breaking Change

  Fixed published bundle so that it includes types and necessary css. To
  upgrade, if you were importing from a subpath like
  `@pantheon-systems/nextjs-kit/sortChar`, remove the subpath so you are
  importing from `@pantheon-systems/nextjs-kit` instead.

  For components, exports are now named and also no longer using subpaths.

  To use styles exported from the `nextjs-kit`, import
  `@patheon-systems/nextjs-kit/style.css` into your `_app.jsx` file

### Patch Changes

- 0158d9d: Added `sortChar` and `sortDate` helper functions

## 1.0.0-canary.1

### Major Changes

- 598f7ca: ## Breaking Change

  Fixed published bundle so that it includes types and necessary css. To
  upgrade, if you were importing from a subpath like
  `@pantheon-systems/nextjs-kit/sortChar`, remove the subpath so you are
  importing from `@pantheon-systems/nextjs-kit` instead.

  For components, exports are now named and also no longer using subpaths.

  To use styles exported from the `nextjs-kit`, import
  `@patheon-systems/nextjs-kit/style.css` into your `_app.jsx` file

## 0.1.1-canary.0

### Patch Changes

- 0158d9d: Added `sortChar` and `sortDate` helper functions
