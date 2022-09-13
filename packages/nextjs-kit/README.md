# Pantheon Systems Next.js Kit

The `@pantheon-systems/nextjs-kit` is a collection of utilities and Next.js
components for use in a Pantheon Decoupled Site built with Next.js.

## Installation

To install this package to use in your application:

`npm install @pantheon-systems/nextjs-kit`

## Usage

`@pantheon-systems/nextjs-kit` is available as an ES or UMD module. Components
and utility functions are available as named exports with type declarations and
TSDoc comments included.

To import a component:

```js
import { Component } from '@pantheon-systems/nextjs-kit';
```

To apply the styles from the `nextjs-kit`, import the css into your main `_app`
component

```js
// pages/_app.jsx

import '@pantheon-systems/nextjs-kit/style.css'

...
```

To import a helper utility:

```js
import { utility } from '@pantheon-systems/nextjs-kit';
```

## API Reference

To see the API reference for `@pantheon-systems/nextjs-kit`,
[visit our monorepo](https://github.com/pantheon-systems/decoupled-kit-js/blob/canary/web/docs/Packages/nextjs-kit/modules.md)

## Contributing

Please see the
[Contributing guide in our monorepo](https://github.com/pantheon-systems/decoupled-kit-js/blob/canary/CONTRIBUTING.md)
to contribute to the project.

- Components should be created in the `src/components`.
- Utilities for use in a Next.js app should be created in the `src/lib`
  directory.
- Utilities for use in this Library that are not exposed as part of the API
  should be created in the `utils` directory
- Follow the established export pattern to maintain proper module resolution.
