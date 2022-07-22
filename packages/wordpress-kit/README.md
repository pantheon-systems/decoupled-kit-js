# WordPress Kit

Utilities to help simplify the process of sourcing data from a WordPress back
end for a decoupled front end hosted on Pantheon.

## Installation

To install this package to use in your application:

`npm install @pantheon-systems/wordpress-kit`

## Usage

Modules can be imported from the `@pantheon-systems/wordpress-kit` package. For
example, to use the graphql-request Client instance provided by this package

Import the module in your JavaScript application:

```
import { GraphqlClientFactory } from '@pantheon-systems/wordpress-kit';
```

### GraphqlClientFactory

Create an instance of the client and specify your API:

```
const client = new GraphqlClientFactory(
  'http://localhost:4000/graphql'
).create();
```

### TailwindcssPlugin

1. Import the plugin to your `tailwind.config.js` file

```
const { tailwindcssPlugin } = require("@pantheon-systems/wordpress-kit");
```

2. Add the plugin to your `plugins` array:

```
module.exports = {
  content: [ ... ],
  theme: { ... },
  plugins: [tailwindcssPlugin],
};
```

3. (Optional) Extend the plugin or override the theme in the `theme.extend`
   section of your tailwindcss config.

## API Reference

To see the API reference,
[visit our monorepo](https://github.com/pantheon-systems/decoupled-kit-js/blob/canary/web/docs/Packages/wordpress-kit/modules.md)

## Contributing

Please see the
[Contributing guide in our monorepo](https://github.com/pantheon-systems/decoupled-kit-js/blob/canary/CONTRIBUTING.md)
for more information on contributing to the project.
