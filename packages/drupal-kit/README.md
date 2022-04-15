# Pantheon Systems Drupal Kit

Decoupling Drupal is hard. The goal for this package is to provide helpers to
make it easier for customers to integrate backends into their node.js frontends
regardless of the frontend framework. If you use Next or Nuxt or the next big
thing you can use this to make the hook up to your backend.

## Installation

To install this package to use in your application:

`npm install @pantheon-systems/drupal-kit`

## Usage

Modules can be imported from the ` @pantheon-systems/drupal-kit` package. For
example, to use Drupal State to source data from your CMS backend:

Import DrupalState in your JavaScript application:

```
import { DrupalState } from ' @pantheon-systems/drupal-kit';
```

Create an instance of the store and specify the root of your API:

```
const store = new DrupalState({
  apiBase: 'https://dev-ds-demo.pantheonsite.io',
});
```

Get a collection of objects:

```
const recipesFromApi = await store.getObject({ objectName: 'node--recipe' });
```

Get a single object:

```
const recipeFromStore = await store.getObject({
  objectName: 'node--recipe',
  id: '33386d32-a87c-44b9-b66b-3dd0bfc38dca',
});
```

For more information, consult the full
[Drupal State documentation](https://project.pages.drupalcode.org/drupal_state)

To use `addApiRouteHeader`, you would first import it like so:

`import { addApiRouteHeader } from ' @pantheon-systems/drupal-kit';`

Once the function is imported, you can use it as needed:

`addApiRouteHeader(response.url, context.res);`

## API Reference

To see the API reference,
[visit our monorepo](https://github.com/pantheon-systems/decoupled-kit-js/blob/canary/web/docs/Packages/drupal-kit/modules.md)

## Contributing

Please see the
[Contributing guide in our monorepo](https://github.com/pantheon-systems/decoupled-kit-js/blob/canary/CONTRIBUTING.md)
to contribute to the project.
