# Drupal State

A simple data store to manage application state sourced from Drupal's JSON:API.

## Usage

Install Drupal State via npm:

```
npm i @gdwc/drupal-state
```

Create a new instance of Drupal State:

```js
import { DrupalState } from '@gdwc/drupal-state';

const store = new DrupalState({
  apiBase: 'https://dev-ds-demo.pantheonsite.io',
  defaultLocale: 'en', // optional
  apiPrefix: 'jsonapi', // optional, defaults to jsonapi
});
```

Use the {@link DrupalState.default.getObject | getObject method} to retrieve an
object (think collection or resource in JSON:API terms) from your Drupal API. By
default this will be a simplified deserialized version of the object. If you
provide only the first argument of objectName, a collection of all objects of
that type will be returned.

```js
// If the object doesn't exist in local state, it will be fetched from the API,
// and then added to the store
const recipesFromApi = await store.getObject({ objectName: 'node--recipe' });

// If the object does exist in local state, it will be returned from the store
// without requiring a fetch from the API
const recipesFromStore = await store.getObject({ objectName: 'node--recipe' });
```

It is also possible to provide a second argument of ID in order to retrieve a
single object of that type:

```js
// If the object doesn't exist in local state, it will be fetched from the API,
// and then added to the store
await store.getObject({
  objectName: 'node--recipe',
  id: 'a542e833-edfe-44a3-a6f1-7358b115af4b',
});

// If the object does exist in local state, it will be returned from the store
// without requiring a fetch from the API
await store.getObject({
  objectName: 'node--recipe',
  id: 'a542e833-edfe-44a3-a6f1-7358b115af4b',
});
```

Drupal Store extends [Zustand](https://github.com/pmndrs/zustand), so you also
have access to
[Zustand's Vanilla JS API](https://github.com/pmndrs/zustand#using-zustand-without-react)
if needed:

```js
store.setState({ custom: 'My custom state' });
const myCustomState = store.getState().custom; // Returns 'My custom state'
```

### Request Parameters

Parameters can be added to requests using methods on the param property. For
example, to include image relationships in the response:

```js
const store = new DrupalState({
  apiBase: 'https://dev-ds-demo.pantheonsite.io',
  apiPrefix: 'jsonapi',
});

store.params.addInclude(['field_media_image']);
const recipes = await store.getObject({ objectName: 'node--recipe' });

// The resulting JSON:API request will be https://dev-ds-demo.pantheonsite.io/en/jsonapi/node/recipe?include=field_media_image
```

All helper methods provided by the excellent
[Drupal JSON:API Params package](https://www.npmjs.com/package/drupal-jsonapi-params)
are available so it is possible to filter, sort, use sparse fieldsets,
pagination, and so on.

The param object persists for the life of the data store, so it may also be
cleared if necessary in order to structure a new query string.

```js
store.params.clear();
```

### GraphQL Queries (Experimental)

Drupal State also uses
[apollo-link-json-api](https://github.com/rsullivan00/apollo-link-json-api) to
allow for GraphQL queries to be made against Drupal's JSON:API endpoints. Drupal
State will derive the necessary fields from the query and use
[sparse fieldsets](https://jsonapi.org/format/#fetching-sparse-fieldsets) when
making a request to the JSON:API endpoint.

```js
await store.getObject({
  objectName: 'node--page',
  id: '912e092f-a7d5-41ae-9e92-e23ffa357b28',
  query: `
    {
      id
      title
      body
      path {
        alias
      }
    }
  `,
});
```

### Getting Objects by Path

Use getObjectByPath to get data for the object that
[Decoupled Router](https://www.drupal.org/project/decoupled_router) resolves to
the provided path

```js
const recipeByPath = await store.getObjectByPath({
  objectName: 'node--recipe',
  path: '/recipes/fiery-chili-sauce',
});
```

When getObjectByPath is called, Drupal State will make a request to Decoupled
Router’s translate-path endpoint in order to determine the id of the object
associated with the requested path. It will then return data for that object.
The result of the translate-path request is stored in state, so subsequent calls
to getObjectByPath will not make additional requests to Decoupled Router.

Use of this feature requires installing the
[Decoupled Router](https://www.drupal.org/project/decoupled_router) module on
your Drupal site.

### Authorization

By providing values for `clientId` and `clientSecret`, Drupal State can make
requests to JSON:API endpoints that require authorization. The library currently
supports [Simple OAuth](https://www.drupal.org/project/simple_oauth) using the
`client_credentials` grant type, but we expect to support other authorization
methods in the future.

```js
const store = new DrupalState({
  apiBase: 'https://dev-ds-demo.pantheonsite.io',
  apiPrefix: 'jsonapi', // apiPrefix defaults to 'jsonapi'
  clientId: 'my-client-id',
  clientSecret: 'my-client-secret',
});

// The following API request will automatically be made with an authorization
// header containing a valid token:
const recipes = await store.getObject({ objectName: 'node--recipe' });
```

(Note: in most cases sensitive information like secrets should be provided to
Drupal State via environment variables.)

Drupal State will request an access token and provide it in the Authorization
header when making requests to your API. It will also reuse this access token
while valid, and automatically request a new token when expired.

### Utilities

Drupal State also exposes a few utility functions that can be used to interact
with JSON:API endpoints even if you'd prefer to use an alternative state
management solution.

- {@link fetch/fetchApiIndex}: Retrieves index of resource links for the API
- {@link fetch/fetchJsonapiEndpoint}: Retrieves either a collection of objects
  or an individual object from the API
- {@link fetch/fetchToken}: Retrieves a token using provided credentials.
- {@link fetch/translatePath}: helper function to make it easier to resolve a
  path to an entity. Requires installing the
  [Decoupled Router](https://www.drupal.org/project/decoupled_router) module on
  your Drupal site.

```js
import {
  fetchApiIndex,
  fetchJsonapiEndpoint,
  fetchToken,
  translatePath,
} from '@gdwc/drupal-state';

const apiIndexData = await fetchApiIndex('https://dev-ds-demo.pantheonsite.io');

const recipes = await fetchJsonapiEndpoint(
  'https://dev-ds-demo.pantheonsite.io/en/jsonapi/node/recipe'
);

const tokenRequestBody = {
  grant_type: 'client_credentials',
  client_id: 'MY_ID',
  client_secret: 'MY_SECRET',
};
const tokenPayload = await fetchtoken(
  'https://ds-demo.lndo.site/oauth/token',
  tokenRequestBody
);

const translatedPath = await translatePath(
  'https://dev-ds-demo.pantheonsite.io/router/translate-path',
  '/recipes/fiery-chili-sauce'
);
```

### Using a custom fetch function

The `fetchAdapter` option can be used to provide a custom fetch-compatible
function to Drupal State. This function will be used instead of Drupal State's
default isomorphic-fetch.

```js
const store = new DrupalState({
  apiBase: 'https://dev-ds-demo.pantheonsite.io',
  fetchAdapter: myFetchFunction,
});
```

### Debug mode

A Drupal State instance can be configured to run in debug mode. Currently this
results in some additional logging to the console.

```js
const store = new DrupalState({
  apiBase: 'https://dev-ds-demo.pantheonsite.io',
  apiPrefix: 'jsonapi',
  debug: true,
});
```

## Contributing

### Prerequisites

Steps below assume that you have [NodeJS](https://nodejs.org/) installed. We
recommend using [NVM](https://github.com/nvm-sh/nvm) to manage the NodeJS
version on your local system.

In order to prepare your system for contribution you'll need to complete this
checklist:

1. Run `nvm use` to switch to the expected version of npm. Run `nvm install` if
   you need to update your npm.
2. Run `npm i` to install dependencies.

### Running A Local Development Server

The npm run dev script can be run for local development. It will watch for
changes and launch index.html at http://localhost:3000. index.html loads
src/main.ts which can be used for demonstration purposes and local development.

### Formatting and Linting

Linting and formatting will run for all staged files as a pre-commit hook.

VSCode users can format code on save using the
[Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
and
[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
extensions. These extensions will be suggested when loading the project if they
have not already been installed. An example settings file is included in
`.vscode/example.settings.json`. Save this file as `.vscode/settings.json` or
incorporate the contents into your existing settings.json file to enable format
on save in your project.

Formatting on save is highly recommended as it should resolve most formatting
issues before the pre-commit hook runs.

Formatting and linting can also be run manually using the following commands:

- `npm run eslint` - checks linting
- `npm run eslint:fix` - attempts to fix any linting issues
- `npm run prettier` - checks formatting
- `npm run prettier:fix` - attempts to fix any formatting issues

## Debugging

For VSCode users, an example launch file is included in An example settings file
is included in `.vscode/example.launch.json`. Save this file as
`.vscode/launchs.json` or incorporate the contents into your existing
launch.json file to enable a Chrome debugging configuration.

## Testing

This project is configured to run [Jest](https://facebook.github.io/jest/) tests
via `npm run test`. All new code is expected to be covered by tests and these
tests will run as part of our CI process.

Tests should be added in a `__tests__` directory adjacent to the file they are
testing and the files should be named `<fileName>.test.ts`.

## Documentation

All new code should be documented. Documentation is provided by
[TypeDoc](https://typedoc.org/).

To generate documentation run `npm run typedoc` The result will be in the `docs`
folder.

## FAQ

- **Why use the term 'object' instead of 'resource' or 'collection'?** This is
  partially an effort to abstract away things that may be Drupal or JSON:API
  specific in order to make this API friendlier to JS developers who may not be
  familiar with these concepts. It is also driven by a long term desire to for
  this library to support other query languages like GraphQL for which the
  concept of collections or resources may not apply.
