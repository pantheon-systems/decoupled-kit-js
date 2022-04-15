# Pantheon Decoupled Kit Gatsby WordPress Starter

## Gatsby Project setup

1. Clone this repo:

```bash
git clone git@github.com:pantheon-systems/gatsby-wordpress-starter.git
```

2. Install node modules

```bash
cd decoupled-wp-gatsby-frontend-demo && npm install
```

3. Save `.env.example` as `.env.local` add/update following lines:

```
WPGRAPHQL_URL=
```

4. Run `npm run develop`

5. Open a browser and navigate to `http://localhost:8000`.

## Lando

This project can also be run using [Lando](https://docs.lando.dev/basics/installation.html).
This will be especially helpful if you are also using Lando for local WordPress
development and would like to use Gatsby preview since Docker can't easily
communicate with localhost.

To use Lando run:

```
lando start
```

This will make a NodeJS server available at `http://wp-gatsby-frontend.lndo.site/`. Your preview webhook will be `http://wp-gatsby-frontend.lndo.site/__refresh`

Other commands:

- `lando node` - runs the Gatsby development server (which should also run on `lando start`).
- `lando gatsby <command>` - run Gatsby cli commands.

## Customizing the Starter

For a guide on creating your first Gatsby WordPress customization, see [Your First WordPress Customization](https://github.com/pantheon-systems/decoupled-kit-js/blob/canary/web/docs/Frontend%20Starters/Gatsby%20Wordpress/your-first-customization.md)
