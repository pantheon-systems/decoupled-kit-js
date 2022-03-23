# Next Drupal Starter

## Demo Next.js Project setup

1. Clone this repo:
```
git clone git@github.com:pantheon-systems/decoupled-drupal-frontend-demo.git
```

2. Install node modules
```
cd decoupled-drupal-frontend-demo && npm install
```

3. update following lines in `.env.local`
```
BACKEND_URL=
FRONTEND_URL=
IMG_DOMAIN=
PREVIEW_SECRET=
CLIENT_ID=
CLIENT_SECRET=
# this value can also bet set in the command line
# before running commands for example
# FRONTEND_URL=example.com npm run build
FRONTEND_URL=
```

4. run `lando start`

5. open browser and type `http://drupalnext.lndo.site/`.

## Pantheon @pantheon-systems/drupal-kit

The Pantheon @pantheon-systems/drupal-kit is included as a dependency in this project. This allows developers to make use
of utility functions to simplify the process of building and maintaining a decoupled site on Pantheon,
including:

* addSurrogateKeyHeader()
* updateMaxAge()

Full documentation can be found at: https://github.com/pantheon-systems/decoupled-kit-js/packages/drupal-kit

## Example Pages

* examples/auth-api - a simple example that sources data from an endpoint that requires authorization.