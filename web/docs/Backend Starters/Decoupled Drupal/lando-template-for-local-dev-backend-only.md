# Local Development with Lando

## Prerequisites

- Install [docker](https://docs.docker.com/get-docker/)
- Install [lando](https://docs.lando.dev/getting-started/installation.html)
- [Generate Pantheon Machine Token](https://pantheon.io/docs/machine-tokens#create-a-machine-token)

## Local Development with Lando

```
lando init \
  --source pantheon \
  --pantheon-auth "$PANTHEON_MACHINE_TOKEN" \
  --pantheon-site "$PANTHEON_SITE_NAME"
```

- Running `lando init` will create a .lando.yml file (or will update the file if  already present in the current directory) with your backend CMS site name and site-id

- Next start your local environment

```
    lando start
```

- Next sync your code, db, and files with your local environment

```
    lando pull
    ? Choose a Pantheon account <Your email-id with Pantheon>
    ? Pull code from? dev
    ? Pull database from? dev
    ? Pull files from? dev
    Attempting to login via terminus...
    [notice] Logging in via machine token.
    [notice] Found a machine token for <Your email-id with Pantheon>.
    [notice] Logged in via machine token.
    Logged in as <Your email-id with Pantheon>
    Verifying that you have access to <Name of your Pantheon site>...
```

- In order to access your site running locally in a lando container, you may use any of the following urls from the 'lando start' command output on your shell to access your site in your browser
  - APPSERVER_NGINX URLS
  - EDGE_SSL URLS
  - EDGE URLS