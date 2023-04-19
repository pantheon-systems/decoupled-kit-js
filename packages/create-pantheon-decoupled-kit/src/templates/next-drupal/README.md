# Pantheon Decoupled Kit Next Drupal Starter

## Getting Started

To get started with the Next Drupal Starter, use our
`create-pantheon-decoupled-kit`, or the "CLI". Full documentation for this npm
package based on [npm init](https://docs.npmjs.com/cli/v8/commands/npm-init) can
be found
[here](https://decoupledkit.pantheon.io/docs/frontend-starters/using-the-cli) on
our docs site.

For a quick start, follow the instructions below:

1. In your terminal, run the following command:

```bash
npm init pantheon-decoupled-kit -- next-drupal
```

2. Follow the prompts in your terminal to complete the setup.

## Pantheon npm Packages

The `@pantheon-systems/drupal-kit` and `@pantheon-systems/nextjs-kit` are
included as dependencies in this project. This allows developers to make use of
utility functions and components to simplify the process of building and
maintaining a Front-End site on Pantheon.

Full documentation can be found at:
https://github.com/pantheon-systems/decoupled-kit-js/tree/canary/web/docs/Packages

## Example Pages

- examples/auth-api - a simple example that sources data from an endpoint that
  requires authorization.
- examples/pagination - an example that sources paged data from JSON:API and
  paginates it client side.
- examples/ssg-isr - an example that is build with using ISR as the rendering
  method. The content is identical to the /posts page.

## Customizing the Starter

For a guide on creating your first Next Drupal customization, see
[Your First Drupal Customization](https://github.com/pantheon-systems/decoupled-kit-js/blob/canary/web/docs/Frontend%20Starters/Next.js/Next.js%20%2B%20Drupal/your-first-customization.md)

## Tests

Tests are written with [`vitest`](https://vitest.dev/). All new functionality
should have unit tests or snapshot tests where applicable. Snapshot tests are
using
[`@testing-library/react`](https://testing-library.com/docs/react-testing-library/intro/).

Any fetch calls should be mocked with
[`msw`](https://mswjs.io/docs/basics/request-matching) in
[setupFile.js](./__tests__/setupFile.js).

### Commands

This section assumes the package manager in use is `npm`. If you are not using
`npm`, replace `npm` with the name of your package manager.

To run all tests for both profiles sequentially:

```bash
npm test
```

To run the tests for a single profile in watch mode:

```bash
# test against the umami profile data
npm run test:umami
# tests against the default profile data
npm run test:default
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
