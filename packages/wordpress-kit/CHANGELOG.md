# @pantheon-systems/wordpress-kit

## 3.1.2

### Patch Changes

- b406549f: Update dependencies
- Updated dependencies [b62a6484]
  - @pantheon-systems/cms-kit@0.3.3

## 3.1.2-canary.0

### Patch Changes

- b406549f: Update dependencies
- Updated dependencies [b62a6484]
  - @pantheon-systems/cms-kit@0.3.3-canary.0

## 3.1.1

### Patch Changes

- da7ebb26: Use `Pantheon-SKey` instead of `Fastly-Debug` header to obtain the
  surrogate-key header
- 5cf51bed: Upgraded `vitest`
- Updated dependencies [5cf51bed]
  - @pantheon-systems/cms-kit@0.3.2

## 3.1.1-canary.1

### Patch Changes

- da7ebb26: Use `Pantheon-SKey` instead of `Fastly-Debug` header to obtain the
  surrogate-key header

## 3.1.1-canary.0

### Patch Changes

- 5cf51bed: Upgraded `vitest`
- Updated dependencies [5cf51bed]
  - @pantheon-systems/cms-kit@0.3.2-canary.0

## 3.1.0

### Minor Changes

- 1a210584: Added a new function, `setOutgoingHeaders`, which combines
  `setSurrogateKeyHeader` and `setEdgeHeader` into one call.

## 3.1.0-canary.0

### Minor Changes

- 1a210584: Added a new function, `setOutgoingHeaders`, which combines
  `setSurrogateKeyHeader` and `setEdgeHeader` into one call.

## 3.0.0

### Major Changes

- 0a456069: Refactor bundle. Fix typo on export: this is a breaking change.

  ```js
  import { GraphqlClientFactory } from '@pantheon-systems/wordpress-kit';
  ```

  is now

  ```js
  import { GraphQLClientFactory } from '@pantheon-systems/wordpress-kit';
  ```

### Patch Changes

- 5a786d0a: Bump postcss and tailwindcss versions
- f6de3b80: Fix exports and vite config
- Updated dependencies [3fd37398]
  - @pantheon-systems/cms-kit@0.3.1

## 3.0.0-canary.2

### Patch Changes

- 5a786d0a: Bump postcss and tailwindcss versions

## 3.0.0-canary.1

### Patch Changes

- f6de3b80: Fix exports and vite config

## 3.0.0-canary.0

### Major Changes

- 0a456069: Refactor bundle. Fix typo on export: this is a breaking change.

  ```js
  import { GraphqlClientFactory } from '@pantheon-systems/wordpress-kit';
  ```

  is now

  ```js
  import { GraphQLClientFactory } from '@pantheon-systems/wordpress-kit';
  ```

### Patch Changes

- Updated dependencies [3fd37398]
  - @pantheon-systems/cms-kit@0.3.1-canary.0

## 2.15.0

### Minor Changes

- ea3c25b2: The `GraphqlCLientFactory` now sets the `Fastly-Debug` header to
  obtain hashed surrogate keys instead of raw surrogate keys

### Patch Changes

- b9491fd0: Add tailwindcss as a project dependency.
- Updated dependencies [b9a05706]
  - @pantheon-systems/cms-kit@0.3.0

## 2.15.0-canary.1

### Minor Changes

- ea3c25b2: The `GraphqlCLientFactory` now sets the `Fastly-Debug` header to
  obtain hashed surrogate keys instead of raw surrogate keys

### Patch Changes

- Updated dependencies [b9a05706]
  - @pantheon-systems/cms-kit@0.3.0-canary.0

## 2.14.4-canary.0

### Patch Changes

- b9491fd0: Add tailwindcss as a project dependency.

## 2.14.3

### Patch Changes

- d7e36603: Fixed the type used for GraphQLClientFactory options
- Updated dependencies [98321554]
  - @pantheon-systems/cms-kit@0.2.3

## 2.14.3-canary.1

### Patch Changes

- Updated dependencies [98321554]
  - @pantheon-systems/cms-kit@0.2.3-canary.0

## 2.14.3-canary.0

### Patch Changes

- d7e36603: Fixed the type used for GraphQLClientFactory options

## 2.14.2

### Patch Changes

- f50164f8: Updated dependencies
- Updated dependencies [f50164f8]
  - @pantheon-systems/cms-kit@0.2.2

## 2.14.2-canary.0

### Patch Changes

- f50164f8: Updated dependencies
- Updated dependencies [f50164f8]
  - @pantheon-systems/cms-kit@0.2.2-canary.0

## 2.14.1

### Patch Changes

- f434145: Update config package route.
- Updated dependencies [b44ec7a]
  - @pantheon-systems/cms-kit@0.2.1

## 2.14.1-canary.0

### Patch Changes

- f434145: Update config package route.
- Updated dependencies [b44ec7a]
  - @pantheon-systems/cms-kit@0.2.1-canary.0

## 2.14.0

### Minor Changes

- 4efe223: Updated default Cache-Control value from
  `public, s-maxage=10, stale-while-revalidate=600` to `s-public, maxage=600`

## 2.14.0-canary.0

### Minor Changes

- 4efe223: Updated default Cache-Control value from
  `public, s-maxage=10, stale-while-revalidate=600` to `s-public, maxage=600`

## 2.13.0

### Minor Changes

- 28519b2: Support GraphQL over HTTP GET

## 2.13.0-canary.0

### Minor Changes

- 28519b2: Support GraphQL over HTTP GET

## 2.12.0

### Minor Changes

- fa97a58: clients created with `GraphqlClientFactory` now set the
  `Pantheon-SKey` header instead of `Pantheon-Debug`

### Patch Changes

- Updated dependencies [6dfcb56]
  - @pantheon-systems/cms-kit@0.2.0

## 2.12.0-canary.0

### Minor Changes

- fa97a58: clients created with `GraphqlClientFactory` now set the
  `Pantheon-SKey` header instead of `Pantheon-Debug`

### Patch Changes

- Updated dependencies [6dfcb56]
  - @pantheon-systems/cms-kit@0.2.0-canary.0

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
