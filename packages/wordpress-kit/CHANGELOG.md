# @pantheon-systems/wordpress-kit

## 2.11.0

### Minor Changes

- 6e00a98: Use max-width to images

## 2.11.0-canary.0

### Minor Changes

- 6e00a98: Use max-width to images

## 2.10.0

### Minor Changes

- a5c4275: Bubble up surrogate-key-raw headers on outgoing responses
- a5c4275: Add pantheon-debug header to outgoing requests

### Patch Changes

- Updated dependencies [a5c4275]
  - @pantheon-systems/cms-kit@0.1.0

## 2.10.0-canary.0

### Minor Changes

- a5c4275: Bubble up surrogate-key-raw headers on outgoing responses
- a5c4275: Add pantheon-debug header to outgoing requests

### Patch Changes

- Updated dependencies [a5c4275]
  - @pantheon-systems/cms-kit@0.1.0-canary.0

## 2.9.0

### Minor Changes

- 906e3c5: Adds media queries to every component and base styles to follow
  actual layout implementation
- 01a06e6: Add block separator styles
- a65c9d9: Block separator style adjustment
- 29ad4c7: Block spacer styles
- 824a01b: Modified every component on the Wordpress-Kit tailwind plugin to
  respect the full width options. Added base utilities on tailwind plugin to
  modify headings and paragraphs width.
- 4f8659f: Adds Columns layout component to tailwind plugin

## 2.9.0-canary.1

### Minor Changes

- a65c9d9: Block separator style adjustment
- 4f8659f: Adds Columns layout component to tailwind plugin

## 2.9.0-canary.0

### Minor Changes

- 906e3c5: Adds media queries to every component and base styles to follow
  actual layout implementation
- 01a06e6: Add block separator styles
- 29ad4c7: Block spacer styles
- 824a01b: Modified every component on the Wordpress-Kit tailwind plugin to
  respect the full width options. Added base utilities on tailwind plugin to
  modify headings and paragraphs width.

## 2.8.0

### Minor Changes

- 0a3df6e: Block Editor Video Styles

### Patch Changes

- 178d9c9: Revert block editor alignment options.

## 2.8.0-canary.2

### Patch Changes

- 178d9c9: Revert block editor alignment options.

## 2.8.0-canary.1

### Minor Changes

- 19259ac: Modified every component on the Wordpress-Kit tailwind plugin to
  respect the full width options. Added base utilities on tailwind plugin to
  modify headings and paragraphs width.

## 2.8.0-canary.0

### Minor Changes

- 0a3df6e: Block Editor Video Styles

## 2.7.0

### Minor Changes

- c91515b: Refactor block styles to follow WordPress 6
- 74ce69e: Upgraded `graphql-request` to v5.0.0. This is not a breaking change
  for `wordpress-kit`
- dc33f30: Added support for MediaFile block and extracted general styles for
  buttons

### Patch Changes

- aea42f5: Fix types field in package.json

## 2.7.0-canary.0

### Minor Changes

- c91515b: Refactor block styles to follow WordPress 6
- 74ce69e: Upgraded `graphql-request` to v5.0.0. This is not a breaking change
  for `wordpress-kit`
- dc33f30: Added support for MediaFile block and extracted general styles for
  buttons

### Patch Changes

- aea42f5: Fix types field in package.json

## 2.6.0

### Minor Changes

- 7b14e2d: Add support to Media Text block, and fixed color with strong text
- 09fb74f: Added buttons component, and a function to get color by name in the
  Color utility class

### Patch Changes

- 6656b11: Added some missing TSDoc comments and updated dist bundle to include
  generated d.ts files

## 2.6.0-canary.1

### Minor Changes

- 7b14e2d: Add support to Media Text block, and fixed color with strong text
- 09fb74f: Added buttons component, and a function to get color by name in the
  Color utility class

## 2.5.1-canary.0

### Patch Changes

- 6656b11: Added some missing TSDoc comments and updated dist bundle to include
  generated d.ts files

## 2.5.0

### Minor Changes

- e9901e5: Add support for cover component from WordPress
- f9d5697: Create setEdgeHeader lib in wordpress-kit and use this in
  next-wordpress-starter to set cache control headers.

### Patch Changes

- ee835e8: Update prettierrc and reformat spaces -> tabs for accessibility

## 2.5.0-canary.0

### Minor Changes

- e9901e5: Add support for cover component from WordPress
- f9d5697: Create setEdgeHeader lib in wordpress-kit and use this in
  next-wordpress-starter to set cache control headers.

### Patch Changes

- ee835e8: Update prettierrc and reformat spaces -> tabs for accessibility

## 2.4.0

### Minor Changes

- 62ba36b: Added audio block support

## 2.4.0-canary.0

### Minor Changes

- 62ba36b: Added audio block support

## 2.3.0

### Minor Changes

- 68a2d36: Add support for gradient backgrounds, and moved utitlities to
  separated folder
- ba2a226: Add support for Gallery block from WP block editor
- a940098: Add styles for image blocks

### Patch Changes

- 960e2e8: Change the default colors to follow WP6 and fix border styles in
  tables

## 2.2.0

### Minor Changes

- d96e395: Added support for classes in WP6, and added support for quotes blocks
- d4f9c8a: Added table styles
- 3683ced: Added text alignment classes from WP to the tailwind plugin, and
  fixed empty quotes
- 31e9144: Add support for Pullquote and split types for tailwind plugin

### Patch Changes

- 7380376: Fix style error on large pullquotes

## 2.1.0

### Minor Changes

- 0db7b52: Created a plugin for tailwind, that supports the block editor classes

## 2.0.0

### Major Changes

- 5dfbb69: [wordpress-kit] We move to use graphql-request instead of apollo
  client, updated the test for that, the main example and the exports

  ### Breaking

  Remove the apollo dependency in favor of graphql-request

## 1.0.2

### Patch Changes

- f9974ac: Update READMEs and package.json metadata
