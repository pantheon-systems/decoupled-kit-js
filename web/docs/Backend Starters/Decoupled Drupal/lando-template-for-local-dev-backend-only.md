# Instructions for Local Development of CMS Backend using Lando

## Prerequisites

- Install [docker](https://docs.docker.com/get-docker/)
- Install [lando](https://docs.lando.dev/getting-started/installation.html)
- [Generate Pantheon Machine Token](https://pantheon.io/docs/machine-tokens#create-a-machine-token) & [Authenticate into Terminus](https://pantheon.io/docs/machine-tokens#authenticate-into-terminus)

## Local Development with Lando

```
    lando init
```

- This should prompt the following selections

```
    lando init
    ? From where should we get your app's codebase? pantheon
    ? Select a Pantheon account <Your email-id with Pantheon>
    ? Which site? <Name of your Pantheon site>
    Creating landoinitcigitsite7221_init_1 ...
```

- Next start your local environment

```
    lando start
```

- Next sync your code, db, and files with your local environment

```
    lando pull
    ? Choose a Pantheon account bhaskar.jayaraman@pantheon.io
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

- You may use any of the following urls from the 'lando start' command output on your shell to access your site in your browser
  - APPSERVER_NGINX URLS
  - EDGE_SSL URLS
  - EDGE URLS