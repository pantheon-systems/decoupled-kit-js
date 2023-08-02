# @pantheon-systems/decoupled-kit-health-check

## 0.1.0

### Minor Changes

- 7bf7e5f3: Added logic to run the health-check against wordpress
- 40a97692: Support node >=14
- 868dab9e: Initial release
- d0ff8fa4: Add support for the Gatsby + WordPress starter

### Patch Changes

- a0dce89a: Ensure the pathname is set to `/wp/graphql` by default for the
  wordpress health-check
- 8527330f: Fix case where PANTHEON_CMS_ENDPOINT is set but does not have
  include the protocol
- 86d23e83: No external facing changes, but the internals for this package have
  been refactored.
- ba64c8b2: Ensure .env vars are loaded if NODE_ENV is not production

## 0.1.0-canary.7

### Patch Changes

- ba64c8b2: Ensure .env vars are loaded if NODE_ENV is not production

## 0.1.0-canary.6

### Minor Changes

- 40a97692: Support node >=14

## 0.1.0-canary.5

### Minor Changes

- d0ff8fa4: Add support for the Gatsby + WordPress starter

## 0.1.0-canary.4

### Patch Changes

- 86d23e83: No external facing changes, but the interals for this package have
  been refactored.

## 0.1.0-canary.3

### Patch Changes

- a0dce89a: Ensure the pathname is set to `/wp/graphql` by default for the
  wordpress health-check

## 0.1.0-canary.2

### Minor Changes

- 7bf7e5f3: Added logic to run the health-check against wordpress

## 0.1.0-canary.1

### Patch Changes

- 8527330f: Fix case where PANTHEON_CMS_ENDPOINT is set but does not have
  include the protocol

## 0.1.0-canary.0

### Minor Changes

- 868dab9e: Initial release
