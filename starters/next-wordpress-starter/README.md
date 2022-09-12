# Pantheon Decoupled Kit Next WordPress Starter

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
process of building and maintaining a decoupled site on Pantheon, including:

- GraphqlClientFactory()
- tailwindcssPlugin

The `tailwindcssPlugin` is included in this project and is used to map WordPress
Block Editor styles to Tailwind styles.

Full documentation can be found at:
https://github.com/pantheon-systems/decoupled-kit-js/tree/canary/web/docs/Packages/wordpress-kit
