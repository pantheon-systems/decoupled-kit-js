# Pantheon Systems Drupal Kit

Decoupling Drupal and Wordpress is hard. The goal for this SDK is to provider
helpers to make it easier for customers to integrate backends into their node.js
frontends regardless of the frontend framework. If you use Next or Nuxt or the
next big thing you can use this to make the hook up to your backend.

We hope to solve common use cases in this space. It will grow with time. The
repo will have includes for WP and for Drupal

## Installation

Short term, this package exists in a private Pantheon repository and can be
installed as a dependency using:

`npm install https://github.com/pantheon-systems/decoupled-kit-js/packages/drupal-kit`

You will be asked to authenticate with your Github credentials. All users who
are part of the github decoupled team should have permission to install this
package.

Long term this package will be public and available on npm. At that point it
will be possible to install it using:

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
[Drupal State documentation](https://drupal-state.netlify.app/)

To use `addApiRouteHeader`, you would first import it like so:

`import { addApiRouteHeader } from ' @pantheon-systems/drupal-kit';`

Once the function is imported, you can use it as needed:

`addApiRouteHeader(response.url, context.res);`

## MVP Helpers

- Api Calls
- Caching (Cache Tag/Surrogate Key Bubbling)
  - [addApiRouteHeader](modules/utils_addApiRouteHeader.html)
- Routing
- Redirects
- Hello world

## Aspirational Helpers

- Forms
- Webforms
- Preview
- Revisions
- Taxonomy
- Menu

## Contributing

### Prerequisites

Prerequisites: steps below assume that you have [NodeJS](https://nodejs.org/)
installed. We recommend using [NVM](https://github.com/nvm-sh/nvm) to manage the
NodeJS version on your local system.

In order to prepare your system for contribution you'll need to complete this
checklist:

1. Run `nvm use` to switch to the expected version of npm. Run `nvm install` if
   you need to update your npm.
2. Run `npm i` to install dependencies.

### Adding New Modules

New modules can be created in `src`. Utilities should be created in `src/utils`.
CMS specific modules should be created in `src/drupal` or `src/wp` respectively.
Note: CMS specific modules will eventually be split into their own packages.

Exports for any modules that are intended to be available within the distributed
package should be added to `index.js`.

All module code should be written in TypeScript.

### Running A Local Development Server

The `npm run dev` script can be run for local development. It will watch for
changes and launch `index.html` at http://localhost:3000. `index.html` loads
`src/main.ts` which can be used for demonstration purposes and local
development.

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

## Testing

This project is configured to run [Jest](https://facebook.github.io/jest/) tests
via `npm run test`. All new code is expected to be covered by tests and these
tests will run as part of our CI process and will also be run locally as a
pre-commit hook.

Tests should be added in a `__tests__` directory adjacent to the file they are
testing and the files should be named `<fileName>.test.ts`.

## Documentation

All new code should be documented. Documentation is provided by
[TypeDoc](https://typedoc.org/).

To generate documentation run `npm run typedoc` The result will be in the `docs`
folder.

TODOS:

- Confirm that this package provides types for all exported functions when used
  as an NPM package.
- Allow individual import of modules rather than requiring imports from the main
  bundle.
