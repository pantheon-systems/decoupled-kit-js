---
sidebar_position: 2
---

# Creating a New Project

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
  terminus build:project:create --team='{My Team Name}' --template-repository="git@github.com:pantheon-systems/decoupled-drupal-recommended.git" pantheon-systems/decoupled-drupal-recommended --ci-template='git@github.com:pantheon-systems/advanced-ci-templates' --visibility private {PROJECT_NAME} --stability=dev --profile="pantheon_decoupled_profile"
  ```

  Replace `{PROJECT_NAME}` with your project name - for example `decoupled-drupal`.

  Replace {My Team Name} with your team name - for example `My Agency`. This can also be omitted.

**Note:** This will result in a Github repository being created for this new codebase, a site being created on Pantheon and a CircleCI project being created for automated deployments.

### Additional Options

_Installing with Umami demo data_

The installation command above will create a backend with limited example content. To instead create a site with Drupal's Umami demo data set, change the profile flag to:

`--profile="pantheon_decoupled_umami_demo"`

In your `terminus build:project:create` command.

_Using other git hosts or CI services_

Terminus build tools supports a number of other combinations of git hosts and CI services.

For example, to use GitHub actions as your CI service, you could add the following additional flag to your `terminus build:project:create` command:

`--ci=githubactions`

Note: if using Github Actions, your token should have the "workflow" scope.
Another example, to use Gitlab as your git host service & Gitlab CI/CD as your CI service, you could add the following additional flag to your `terminus build:project:create` command:

`--git=gitlab --ci=gitlab-pipelines`

For more information, consult the [available services section of the build tools documentation](https://github.com/pantheon-systems/terminus-build-tools-plugin#available-services)
