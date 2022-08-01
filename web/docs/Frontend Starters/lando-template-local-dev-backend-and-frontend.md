# Instructions for Local Development of Decoupled Front End and CMS Backend using Lando

## Prerequisites

- Install [docker](https://docs.docker.com/get-docker/)
- Install [lando](https://docs.lando.dev/getting-started/installation.html)
- [Generate Pantheon Machine Token](https://pantheon.io/docs/machine-tokens#create-a-machine-token) & [Authenticate into Terminus](https://pantheon.io/docs/machine-tokens#authenticate-into-terminus)

## Local Development with Lando for -

1. Your NextJS front end site

- In your current directory create a new sub-directory e.g. "fe". Clone this front end repo into the "fe" sub-directory [next-drupal-starter](https://github.com/pantheon-systems/next-drupal-starter):
        
```
mkdir fe;\
> cd fe;\
> git clone https://github.com/pantheon-systems/next-drupal-starter .
```    

- Create a lando file similar to the one below:
        
```
name: your-lando-project-name
services:
node:
    type: 'node:16'
    build:
    - npm install -g pnpm@7.1.0
    - pnpm install --prefix ./fe
    port: 3000
    command: npm run dev --prefix ./fe
proxy:
node:
    - 'your-decoupled-frontend-site.lndo.site:3000'
tooling:
yarn:
    service: node
node:
    service: node
npm:
    service: node
``` 

- Create an environment file for the lando front end node.js site, similar to the one below:
        
```
# Copy as .env.development.local to override envars for local development
BACKEND_URL=https://your-pantheon-CMS-backend-site.pantheonsite.io
#FRONTEND_URL=
IMAGE_DOMAIN=your-pantheon-CMS-backend-site.pantheonsite.io
CLIENT_ID=
CLIENT_SECRET=
PREVIEW_SECRET=
#NEXT_PUBLIC_FRONTEND_URL=$FRONTEND_URL

# Sets debug mode for instance of DrupalState.
# Leave empty to turn off debug mode
DEBUG_MODE=
```

- For more details please refer to these instructions [instructions](https://github.com/pantheon-systems/next-drupal-starter#pantheon-decoupled-kit-next-drupal-starter)

- Run `lando start` [known-issues]

2. Your CMS Backend
- If your current directory is `fe`, switch into the parent directory e.g. `cd ..`

- Follow these [instructions](https://github.com/pantheon-systems/decoupled-kit-js/tree/canary/web/docs/Backend%20Starters/Decoupled%20Drupal/lando-template-for-local-dev-backend-only.md)

- lando will update your previously created `.lando.yml` file in step 1. with the backend CMS site name and site id

3. Now you should be able to preview both the backend and front end sites in the same lando environment

### Known Issues

- If your lando site is inaccessible after step 1, it could be because `npm install` didn't run inside your container. Follow these steps -
    - Log into your container by running `lando ssh`
    - Switch into the `fe` directory inside the container and run `npm install`
    - Exit the container and run `lando start` again
