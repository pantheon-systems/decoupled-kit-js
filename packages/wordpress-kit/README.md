# WordPress Kit

Utilities to help simplify the process of sourcing data from a WordPress back
end for a decoupled front end hosted on Pantheon.

## Installation

To install this package to use in your application:

`npm install @pantheon-systems/wordpress-kit`

## Usage

Modules can be imported or required from the `@pantheon-systems/wordpress-kit`
package.

### GraphqlClientFactory

1. Import the module in your JavaScript application:
   ```
   import { GraphqlClientFactory } from '@pantheon-systems/wordpress-kit';
   ```
2. Create an instance of the client and specify your API:
   ```
   const client = new GraphqlClientFactory(
     'http://localhost:4000/graphql'
   ).create();
   ```

### TailwindcssPlugin

1.  Import the plugin to your `tailwind.config.js` file
    ```
    const { tailwindcssPlugin } = require("@pantheon-systems/wordpress-kit");
    ```
1.  Add the plugin to your `plugins` array:
    ```
    /** @type {import('@pantheon-systems/wordpress-kit').TailwindcssConfig} */
    module.exports = {
      content: [ ... ],
      theme: { ... },
      plugins: [tailwindcssPlugin],
    };
    ```
1.  (Optional) Extend the plugin or override the theme. See
    [Extending the Default Theme](https://tailwindcss.com/docs/theme#extending-the-default-theme)
    for more information.

## API Reference

To see the API reference,
[visit our monorepo](https://github.com/pantheon-systems/decoupled-kit-js/blob/canary/web/docs/Packages/wordpress-kit/modules.md)

## Contributing

Please see the
[Contributing guide in our monorepo](https://github.com/pantheon-systems/decoupled-kit-js/blob/canary/CONTRIBUTING.md)
for more information on contributing to the project.
