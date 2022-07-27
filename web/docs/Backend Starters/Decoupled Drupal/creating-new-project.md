---
id: "creating-new-drupal-project"
title: "Creating a New Drupal Project"
slug: "/Backend Starters/Decoupled Drupal/Creating a New Project"
sidebar_position: 2
---

## Choosing an Approach

### Use Build Tools if:

- Testing is an important part of your workflow

- You don’t want to manually push changes to your code repo.

### Use Dashboard Upstream if:

- You require a simpler setup

- The Pantheon repository is your source of truth

### Installing using Dashboard Upstream

- Create an empty upstream site one of two ways:

  - Via the Pantheon Dashboard at this link:

    - [Empty Upstream](https://dashboard.pantheon.io/sites/create?upstream_id=4c7176de-e079-eed1-154d-44d5a9945b65)

  - Or Alternatively via Terminus:

    ```
    terminus site:create my-new-site "Describe Site" empty --org='My Team Name'
    ```

  - Replace `'{My Team Name}'` with your team name - for example `My Agency`. This can also be omitted.

#### In the Pantheon Admin Dashboard:

Switch **Development Mode** to **Git**

We recommend that you upgrade from the sandbox version of the site plan to one that's appropriate for you using the **Upgrade** button, and change the site plan.

- Clone your site's repository on your local

- Change into the newly cloned directory

- Add remote for the decoupled upstream: `git remote add upstream https://github.com/pantheon-systems/decoupled-drupal-composer-managed`

- Checkout the main branch from upstream:

```

git fetch upstream main

git checkout -t upstream/main

```

- Reset the master branch to match main, then force push that to the Dev environment:

```

git branch -D master

git checkout -b master

git push origin master --force

```

:::note
Make sure code has synced and all active workflows are complete in the UI.
Click on the **Visit Development Site** button to Install via the UI—selecting either the Pantheon Decoupled Profile, or Pantheon Decoupled Umami Demo profiles.
:::

## Installing using Build Tools

### Prerequisites

- Composer (required for CMS backends): [Install Globally](https://getcomposer.org/download/)
- [Generate machine token](https://pantheon.io/docs/machine-tokens#create-a-machine-token) & [Authenticate into Terminus](https://pantheon.io/docs/machine-tokens#authenticate-into-terminus)
- [Install Terminus](https://pantheon.io/docs/terminus/install) (3.0.0 above required)
- Also install the following plugins:
  - `terminus self:plugin:install terminus-build-tools-plugin`
  - `terminus self:plugin:install terminus-secrets-plugin`
  - Reload the terminus plugins: `terminus self:plugin:reload`
  - Clear cache for composer: `composer clear-cache`
  - Validate that the required plugins are installed: `terminus self:plugin:list`

### Installation

- For all steps below

  - Replace `{PROJECT_NAME}` with your project name - for example `decoupled-drupal`.

  - Replace `'{My Team Name}'` with your team name - for example `My Agency`. This can also be omitted.
  
  - Build Tools should prompt you for the credentials it needs to create these assets. While GitHub and CircleCI are the defaults, other providers are supported as well. See [available services](https://github.com/pantheon-systems/terminus-build-tools-plugin#available-services) for details.

-  Create your project using the `build:project:create` command as shown below:

```
terminus build:project:create \
  --team='{My Team Name}' \
  --template-repository="git@github.com:pantheon-systems/decoupled-drupal-composer-managed.git" pantheon-upstreams/decoupled-drupal-composer-managed \
  --visibility private {PROJECT_NAME} \
  --profile="pantheon_decoupled_profile" \
  --stability=dev
```
- This command will create:
   - A Pantheon site
   - A GitHub repository
   - A CircleCI test configuration

- For additional options on various repository or CI providers please refer to [Commands are available as part of the Build Tools plugin](https://github.com/pantheon-systems/terminus-build-tools-plugin#commands)

#### Known Issues

- If you encounter errors during the [Installation](#installation) process, please check if you have the `terminus-power-tools` plugin installed. If so you should remove the terminus-power-tools plugin and go through Installation again.

### Additional Options

#### Installing with Umami Demo Data

The installation command above will create a backend with limited example content. To instead create a site with Drupal's Umami demo data set, change the profile flag to:

`--profile="pantheon_decoupled_umami_demo"`

In your `terminus build:project:create` command.

#### Using Other Git Hosts or CI Services

Terminus build tools supports a number of other combinations of git hosts and CI services.

For example, to use GitHub actions as your CI service, you could add the following additional flag to your `terminus build:project:create` command:

`--ci=githubactions`

Other possible values are `circleci`, `gitlab-pipelines` and `bitbucket-pipelines`.

Note: if using Github Actions, your token should have the "workflow" scope.

For more information, consult the [available services section of the build tools documentation](https://github.com/pantheon-systems/terminus-build-tools-plugin#available-services).

#### Using a GitHub Organization

`--org="{My Organization Name}"`

If you would like the repo created to be under a GitHub organization instead of the authenticated user's namespace, you can use the `--org` option.

For information on additional options, consult the [command options section of the build tools documentation](https://github.com/pantheon-systems/terminus-build-tools-plugin#command-options).

## Deprecated

### Installation

- Run the `terminus build:project:create` as follows:

  ```
  terminus build:project:create \
    --team='{My Team Name}' \
    --template-repository="git@github.com:pantheon-systems/decoupled-drupal-recommended.git" pantheon-systems/decoupled-drupal-recommended \
    --ci-template='git@github.com:pantheon-systems/advanced-ci-templates' \
    --visibility private {PROJECT_NAME} \
    --stability=dev \
    --profile="pantheon_decoupled_profile"
  ```

  Replace `{PROJECT_NAME}` with your project name - for example `decoupled-drupal`.

  Replace `'{My Team Name}'` with your team name - for example `My Agency`. This can also be omitted.

**Note:** This will result in a Github repository being created for this new codebase under the authenticated user's namespace (unless the `--org` option is used), a site being created on Pantheon and a CircleCI project being created for automated deployments.

