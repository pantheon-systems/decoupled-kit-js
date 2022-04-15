# WordPress Kit

Utilities to help simplify the process of sourcing data from a WordPress back
end for a decoupled front end hosted on Pantheon.

## Installation

To install this package to use in your application:

`npm install @pantheon-systems/wordpress-kit`

## Usage

Modules can be imported from the `@pantheon-systems/wordpress-kit` package. For
example, to use the Apollo Client instance provided by this package

Import the module in your JavaScript application:

```
import { ApolloClientFactory } from '@pantheon-systems/wordpress-kit';
```

Create an instance of the client and specify your API:

```
const client = new ApolloClientFactory(
  'http://localhost:4000/graphql'
).create();
```

## API Reference

To see the API reference,
[visit our monorepo](https://github.com/pantheon-systems/decoupled-kit-js/blob/canary/web/docs/Packages/drupal-kit/modules.md)

## Contributing

Please see the
[Contributing guide in our monorepo](https://github.com/pantheon-systems/decoupled-kit-js/blob/canary/CONTRIBUTING.md)
for more information on contributing to the project.
