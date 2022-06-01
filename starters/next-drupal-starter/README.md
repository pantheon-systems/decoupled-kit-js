# Pantheon Decoupled Kit Next Drupal Starter

There are two ways to get started with the Next Drupal Starter:

**Option 1**: Use `create-next-app`

1. In your terminal, run the following command:

```bash
npx create-next-app -e https://github.com/pantheon-systems/next-drupal-starter --use-npm
```

2. Follow the prompts in your terminal to complete the setup.

**Option 2**: Clone the repo

1. Clone this repo:

```bash
git clone git@github.com:pantheon-systems/next-drupal-starter.git
```

2. Install node modules

```bash
cd next-drupal-starter && npm install
```

For either option, create a `.env.development.local` file and update it with the following:
(See .env.example for an example)

```
BACKEND_URL=
IMAGE_DOMAIN=

# Used to set the debug mode for the DrupalState store(s)
# If not set, debug mode for the store(s) is set to false
DEBUG_MODE=

# this value can also bet set in the command line
# before running commands for example
# FRONTEND_URL=example.com npm run build
FRONTEND_URL=

# These variables are needed to enable Preview
PREVIEW_SECRET=
CLIENT_ID=
CLIENT_SECRET=
```

4. Run `lando start`

5. Open a browser and navigate to `http://drupalnext.lndo.site/`.

## Pantheon @pantheon-systems/drupal-kit

The Pantheon @pantheon-systems/drupal-kit is included as a dependency in this project. This allows developers to make use
of utility functions to simplify the process of building and maintaining a decoupled site on Pantheon,
including:

- addSurrogateKeyHeader()
- updateMaxAge()

Full documentation can be found at: https://github.com/pantheon-systems/decoupled-kit-js/tree/canary/web/docs/Packages/drupal-kit

## Example Pages

- examples/auth-api - a simple example that sources data from an endpoint that requires authorization.
- examples/pagination - an example that sources paged data from JSON:API and paginates it client side.

## Customizing the Starter

The `pages/recipes` directory can be safely removed if you are using a Drupal instance that does not
source the Umami demo data

For a guide on creating your first Next Drupal customization, see [Your First Drupal Customization](https://github.com/pantheon-systems/decoupled-kit-js/blob/canary/web/docs/Frontend%20Starters/Next%20Drupal/your-first-customization.md)
