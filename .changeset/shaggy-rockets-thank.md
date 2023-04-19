---
'create-pantheon-decoupled-kit': minor
---

[next-wp][next-drupal][gatsby-wp] These generators now accept a `--cmsEndpoint`
argument which sets the appropriate variable in .env.development.local for local
development. These generators will prompt for the endpoint if it is not set when
calling the generator.
