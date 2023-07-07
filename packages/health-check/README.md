# Pantheon Systems Health Check

## What does it do?

The Decoupled Drupal health check will:

1. check for a BACKEND_URL and/or PANTHEON_CMS_ENDPOINT
2. If both are set, use the BACKEND_URL for checks, otherwise use whatever is
   set. Throw an error if none are set.
3. Ping the endpoint for the language settings to determine subsequent calls.
4. Ping the endpoint for the decoupled router on an article based on 3. Throw an
   error if the decoupled router can not be reached.
5. Use the set CLIENT_ID and CLIENT_SECRET to fetch an oauth token. Warnings are
   logged if these are not set.
6. Use the access_token if available to fetch preview content. Logs a warning if
   preview is not accessible.

## Usage

In the directory of your `next-drupal` project:

```bash
npx @pantheon-systems/health-check
```
