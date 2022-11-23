# Pantheon Decoupled Kit Gatsby WordPress Starter

## Getting Started

[See the getting started guide](https://github.com/pantheon-systems/decoupled-kit-js/blob/canary/web/docs/Frontend%20Starters/Gatsby/Gatsby%20%2B%20WordPress/intro.md)
for a more options to create a new Gatsby + WordPress project from this
template.

1. Clone the template repo:

```bash
git clone git@github.com:pantheon-systems/gatsby-wordpress-starter.git
```

2. Install node modules

```bash
cd gatsby-wordpress-starter && npm install
```

3. Save `.env.example` as `.env.development.local` update following lines:

```
WPGRAPHQL_URL=
WP_APPLICATION_USERNAME=
WP_APPLICATION_PASSWORD=
```

4. Run `npm run develop`

5. Open a browser and navigate to `http://localhost:8000`.

## Lando

This project can also be run using
[Lando](https://docs.lando.dev/basics/installation.html). This will be
especially helpful if you are also using Lando for local WordPress development
and would like to use Gatsby preview since Docker can't easily communicate with
localhost.

To use Lando run:

```
lando start
```

This will make a NodeJS server available at
`http://wp-gatsby-frontend.lndo.site/`. Your preview webhook will be
`http://wp-gatsby-frontend.lndo.site/__refresh`

Other commands:

- `lando node` - runs the Gatsby development server (which should also run on
  `lando start`).
- `lando gatsby <command>` - run Gatsby cli commands.

## Pantheon @pantheon-systems/wordpress-kit

The Pantheon `@pantheon-systems/wordpress-kit` is included as a dependency in
this project. This allows developers to make use of utility functions to
simplify the process of building and maintaining a Front-End site on Pantheon.

The `tailwindcssPlugin` is included in this project and is used to map WordPress
Block Editor styles to Tailwind styles.

For more information, see
https://github.com/pantheon-systems/decoupled-kit-js/tree/canary/web/docs/Packages/wordpress-kit

## Customizing the Starter

For a guide on creating your first Gatsby WordPress customization, see
[Your First Gatsby + WordPress Customization](https://github.com/pantheon-systems/decoupled-kit-js/blob/canary/web/docs/Frontend%20Starters/Gatsby/Gatsby%20%2B%20WordPress/your-first-customization.md)

## Tests

Tests are written with [`vitest`](https://vitest.dev/). Snapshot tests are using
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

To see the test coverage:

```bash
npm run coverage
```

### Updating Snapshots

Snapshots should be updated when presentational changes are made. If a new page
route is added, create a new snapshot test for it, and include any data needed
to run that test successfully. Please commit the updated snapshots along with
your changes.

To update a snapshot:

```bash
npm run update-snapshots
```

Or, run the test for a single profile in watch mode (see above), then in the
terminal press the **u** key. This will update the snapshot for the running
profile Be sure to update the snapshot for both profiles.
