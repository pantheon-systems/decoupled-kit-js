# Pantheon Systems Next.js Kit

The `@pantheon-systems/nextjs-kit` is a collection of utilities and Next.js
components for use in a Pantheon Decoupled Site built with Next.js.

## Installation

To install this package to use in your application:

`npm install @pantheon-systems/nextjs-kit`

## Usage

`@pantheon-systems/nextjs-kit` is available as an ES or UMD module. The ES
module includes submodules. Components use default exports while utilities use
named exports. If using ES Modules import the submodules directly. Otherwise,
all imports will be from `@pantheon-systems/nextjs-kit`

To import a component:

```js
// ES Modules
import Component from '@pantheon-systems/nextjs-kit/component';
// UMD
import Component from '@pantheon-systems/nextjs-kit';
```

To import a helper utility:

```js
// ES Modules
import { utility } from '@pantheon-systems/nextjs-kit/utility';
// UMD
import { utility } from '@pantheon-systems/nextjs-kit';
```

<!-- ## API Reference -->

<!-- Add a link to the API Reference that is build with TypeDoc when it is relevant. -->

## Contributing

- Components should be created in the `src/components` folder and should include
  a default export.
- Utilities for use in a Next.js app should be created in the `src/lib`
  directory and should include named AND default exports.
- Utilities for use in this Library that are not exposed as part of the API
  should be created in the `utils` directory
- There are multiple entry points for building the library. Follow the
  established pattern to maintain proper code splitting and module resolution.

Please see the
[Contributing guide in our monorepo](https://github.com/pantheon-systems/decoupled-kit-js/blob/canary/CONTRIBUTING.md)
to contribute to the project.
