# Pantheon Systems Drupal Kit

Utilities to help simplify the process of sourcing data from a Drupal backend
for a Front-End Site hosted on Pantheon.

## Installation

To install this package to use in your application:

`npm install @pantheon-systems/drupal-kit`

## Usage

Modules can be imported from the ` @pantheon-systems/drupal-kit` package. For
example, to use Drupal State to source data from your CMS backend:

### DrupalState

1. Import DrupalState in your JavaScript application:
   ```js
   import { DrupalState } from ' @pantheon-systems/drupal-kit';
   ```
1. Create an instance of the store and specify the root of your API:
   ```js
   const store = new DrupalState({
   	apiBase: 'https://dev-ds-demo.pantheonsite.io',
   });
   ```
1. Get a collection of objects:
   ```js
   const recipesFromApi = await store.getObject({ objectName: 'node--recipe' });
   ```
1. Get a single object:
   ```js
   const recipeFromStore = await store.getObject({
   	objectName: 'node--recipe',
   	id: '33386d32-a87c-44b9-b66b-3dd0bfc38dca',
   });
   ```

For more information, consult the full
[Drupal State documentation](https://project.pages.drupalcode.org/drupal_state)

## API Reference

To see the API reference for `@pantheon-systems/drupal-kit`,
[visit our monorepo](https://github.com/pantheon-systems/decoupled-kit-js/blob/canary/web/docs/Packages/drupal-kit/modules.md)

## Contributing

Please see the
[Contributing guide in our monorepo](https://github.com/pantheon-systems/decoupled-kit-js/blob/canary/CONTRIBUTING.md)
to contribute to the project.
