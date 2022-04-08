# Creating a new Project

## Prerequisites
- Composer (required for CMS backends): [Install Globally](https://getcomposer.org/download/)
- [Generate machine token](https://pantheon.io/docs/machine-tokens#create-a-machine-token) & [Authenticate into Terminus](https://pantheon.io/docs/machine-tokens#authenticate-into-terminus)
- [Install Terminus](https://pantheon.io/docs/terminus/install) (3.0.0 above required)
- Also install the following plugins:
  - `terminus self:plugin:install terminus-build-tools-plugin`
  - `terminus self:plugin:install terminus-power-tools`
  - `terminus self:plugin:install terminus-secrets-plugin`
  - Reload the terminus plugins: `terminus self:plugin:reload`
  - Clear cache for composer: `composer clear-cache`
  - Validate that the required plugins are installed: `terminus self:plugin:list`
- Create [Github Personal access tokens](https://github.com/settings/tokens)
- Create [CircleCI Personal API Tokens](https://app.circleci.com/settings/user/tokens)

## Installation
- Run the `terminus build:project:create` as follows:
    ```
    terminus build:project:create --team='Decoupled Demo' --template-repository="git@github.com:pantheon-systems/decoupled-drupal.git" pantheon-systems/decoupled-drupal --ci-template='git@github.com:pantheon-systems/advanced-ci-templates' --visibility private {PROJECT_NAME} --stability=dev --profile="pantheon_decoupled_profile"
    ```
    This will create Replace `{PROJECT_NAME}` with a Project name for example `decoupled-drupal`

**Note:** This will result in a Github repository being created for this new codebase, a site being created on Pantheon and a CircleCI project being created for automated deployments with the `{PROJECT_NAME}`.