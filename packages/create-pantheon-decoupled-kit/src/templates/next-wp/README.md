# Pantheon Decoupled Kit Next WordPress Starter

## Getting Started

There are two ways to get started with the Next WordPress Starter:

**Option 1**: Use `create-next-app`

1. In your terminal, run the following command:

```bash
npx create-next-app -e https://github.com/pantheon-systems/next-wordpress-starter --use-npm
```

2. Follow the prompts in your terminal to complete the setup.

**Option 2**: Clone the repo

1. Clone this repo:

```bash
git clone git@github.com:pantheon-systems/next-wordpress-starter.git
```

2. Install node modules

```bash
cd next-wordpress-starter && npm install
```

For either option, create a `.env.development.local` file and update it with the
following: (See .env.example for an example)

```
WPGRAPHQL_URL=
IMAGE_DOMAIN=
```

3. Run `npm run dev` to start in dev mode, or `npm run build && npm start` to
   start in production mode.

4. Open a browser and navigate to `http://localhost:3000`.

## Pantheon @pantheon-systems/wordpress-kit

The Pantheon @pantheon-systems/wordpress-kit is included as a dependency in this
project. This allows developers to make use of utility functions to simplify the
process of building and maintaining a Front-End site on Pantheon.

The `tailwindcssPlugin` is included in this project and is used to map WordPress
Block Editor styles to Tailwind styles.

Full documentation can be found at:
https://github.com/pantheon-systems/decoupled-kit-js/tree/canary/web/docs/Packages/wordpress-kit

## Tests

Tests are written with [`vitest`](https://vitest.dev/). All new functionality
should have unit tests or snapshot tests where applicable. Snapshot tests are
using
[`@testing-library/react`](https://testing-library.com/docs/react-testing-library/intro/).

### Commands

This section assumes the package manager in use is `npm`. If you are not using
`npm`, replace `npm` with the name of your package manager.

To run the tests:

```bash
npm test
```

To run the tests in watch mode:

```bash
npm run test:watch
```

### Updating Snapshots

Snapshots should be updated when presentational changes are made. If a new page
route is added, create a new snapshot test for it, and include any data needed
to run that test successfully. Please commit the updated snapshots along with
your changes.

To update a snapshot:

Run the following helper command:

```bash
npm run update-snapshots
```

Or, run the test for a single profile in watch mode (see above), then in the
terminal press the **u** key. This will update the snapshot for the running
profile Be sure to update the snapshot for both profiles.

### Use `POST` for GraphQL requests

This starter uses `GET` for GraphQL requests by default. Editing this
configuration to use `POST` requests can be done in `/lib/WordPressClient.js`.

To achieve this, set each `GraphqlClientFactory` constructors `method` parameter
to equal `POST`.

```js
export const client = new GraphqlClientFactory(process.env.backendUrl, {
	method: 'POST',
}).create();
```
