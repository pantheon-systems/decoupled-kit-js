# Local Development Documentation

## Backend Setup

- Copy the below line into `.lando.yml` in the root of the project:

```
name: %SITE_NAME%
recipe: pantheon
config:
  framework: wordpress
  site: %SITE_NAME%

```

Note: Replace `%SITE-NAME%` with site name.

- `lando start`

## Frontend + Backend Setup

### lando setup for [decoupled-wordpress-composer-managed](https://github.com/pantheon-systems/decoupled-wordpress-composer-managed)

- Create `.lando.yml` into the root of the project.
- Copy the following config into `.lando.yml`

```
name: %SITE_NAME%
recipe: pantheon
config:
  framework: wordpress
  site: %SITE_NAME%

proxy:
  frontend:
    - %SITE_NAME%-fe.lndo.site:%PORT-NUMBER%

excludes:
  - frontend/node_modules
  - node_modules

services:
  frontend:
    type: node:16
    globals:
      npm: latest
    build:
      - "npm install --prefix ./frontend"
    port: %PORT-NUMBER%
    ssl: true
    scanner: false

tooling:
  node:
    service: frontend
  npm:
    service: frontend
    cmd:
      - "npm --prefix ./frontend"
  yarn:
    service: frontend
    cmd:
      - "yarn --cwd=/app/frontend"
```

Note: Replace `%SITE-NAME%`, `%PORT-NUMBER%` with site name and required port number for the frontend site.

- Clone the Frontend site code base into `./frontend` directory.
  ```
  cd frontend
  git clone git@github.com:pantheon-systems/example-fe-site.git .
  ```
- Create the required environment variables files for the Frontend site.
- Do `lando start` to start the containers.
- Install the WordPress site and activate the plugin `WP Gatsby` if your Frontend site is Gatsby.
- To start the Frontend site run `lando npm run develop`. The frontend site will be available at `%SITE_NAME%-fe.lndo.site:%PORT-NUMBER%`
