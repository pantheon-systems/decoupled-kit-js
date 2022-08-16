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

- Copy & rename [template.lando.yml](https://gist.github.com/abhisekmazumdar/649fd0937574a61becf083fc4979843a) to `.lando.yml` into the root of the project.
  Note: Replace `%SITE-NAME%`, `%PORT-NUMBER%` with site name and required port number for the frontend site.
- `lando start`
