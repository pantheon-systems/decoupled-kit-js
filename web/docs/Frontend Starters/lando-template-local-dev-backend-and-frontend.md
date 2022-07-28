# Instructions for Local Development of Decoupled Front End and CMS Backend using Lando

## Prerequisites

- Install [docker](https://docs.docker.com/get-docker/)
- Install [lando](https://docs.lando.dev/getting-started/installation.html)
- [Generate Pantheon Machine Token](https://pantheon.io/docs/machine-tokens#create-a-machine-token) & [Authenticate into Terminus](https://pantheon.io/docs/machine-tokens#authenticate-into-terminus)

## Local Development with Lando for -

1. Your NextJS frontend site

- Clone this repo [next-drupal-starter](https://github.com/pantheon-systems/next-drupal-starter)

- Follow these [instructions](https://github.com/pantheon-systems/next-drupal-starter#pantheon-decoupled-kit-next-drupal-starter) there to start your local lando environment

2. Your CMS Backend
- Follow these [instructions](https://github.com/pantheon-systems/decoupled-kit-js/tree/canary/web/docs/Backend%20Starters/Decoupled%20Drupal/lando-template-for-local-dev-backend-only.md)
- lando will update your `.lando.yml` file with the backend CMS site name and site id

### Known Issues

- If your lando site is inaccessible after step 1, it could be because `npm install` didn't run inside your container. Follow the following steps -
    - Log into your container by running `lando ssh`
    - Run `npm install` inside the container
    - Exit the container and run `lando start` again
