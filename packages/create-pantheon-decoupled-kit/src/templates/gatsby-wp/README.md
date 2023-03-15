# Pantheon Decoupled Kit Gatsby WordPress Starter

## Getting Started

The preferred method of getting started with the Gatsby Wordpress Starter is
through our `create-pantheon-decoupled-kit`, or the "CLI". Full documentation
for this npm package based on
[npm init](https://docs.npmjs.com/cli/v8/commands/npm-init) can be found
[here](https://live-decoupled-kit-docs-canary.appa.pantheon.site/docs/frontend-starters/using-the-cli)
on our docs site. It is recommended that you follow
[these](https://live-decoupled-kit-docs-canary.appa.pantheon.site/docs/frontend-starters/using-the-cli)
setup instructions for a full outline of all project generation options made
available to you.

Before you continue, familiarize yourself with our Gatsby Wordpress
[add-ons](https://live-decoupled-kit-docs-canary.appa.pantheon.site/docs/frontend-starters/gatsby/gatsby-wordpress/add-ons),
a suite of optional project expansions that bring new components, features, and
styling into your starter kit.

For a quick start, follow the instructions below:

1. In your terminal, run the following command:

```bash
npm init pantheon-decoupled-kit gatsby-wp
```

2. Follow the prompts in your terminal to complete the setup.

**Option 2 - Not Preferred**: Clone the repo

1. Clone [this](https://github.com/pantheon-systems/gatsby-wordpress-starter)
   template repo:

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
