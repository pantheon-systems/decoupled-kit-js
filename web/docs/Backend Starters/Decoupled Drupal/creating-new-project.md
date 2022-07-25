---
sidebar_position: 2
---

# Creating a New Project

## Choosing an Approach

### Use Build Tools if:

- Testing is an important part of your workflow

- You don’t want to worry about manually pushing changes to your GH repo.

### Use Dashboard Upstream if:

- The simplest possible setup

- Pantheon repo is your source of truth

- GitHub is your default VCS and CircleCI is your CI provider then this approach will automatically default to both these options. For other options use the build tools approach

### Installing using Dashboard Upstream
- Create an empty upstream site:

#### Via the Pantheon Dashboard at this link: 
- https://dashboard.pantheon.io/sites/create?upstream_id=4c7176de-e079-eed1-154d-44d5a9945b65

#### Or Alternatively via Terminus:

```
terminus site:create my-new-site "Describe Site" empty --org='My Team Name'
```

Replace `'{My Team Name}'` with your team name - for example `My Agency`. This can also be omitted.

#### In the Pantheon Admin Dashboard:

Switch **Development Mode** to **Git**

Click the **Upgrade** button, and change the site plan to **Performance** > **Medium**. 

** Clone your sites repo on your local

** Change into the newly cloned directory

** Add remote for the decoupled upstream: `git remote add upstream https://github.com/pantheon-systems/decoupled-drupal-composer-managed`

** Checkout the main branch from upstream:

```

git fetch upstream main

git checkout -t upstream/main

```

** Reset the master branch to match main, then force push that to the Dev environment:

```

git branch -D master

git checkout -b master

git push origin master --force

```

:::Note
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
  - `terminus self:plugin:remove terminus-power-tools`
  - `terminus self:plugin:install terminus-secrets-plugin`
  - Reload the terminus plugins: `terminus self:plugin:reload`
  - Clear cache for composer: `composer clear-cache`
  - Validate that the required plugins are installed: `terminus self:plugin:list`
- Create [Github Personal access tokens](https://github.com/settings/tokens)
- Create [CircleCI Personal API Tokens](https://app.circleci.com/settings/user/tokens)
- Create [Bitbucket app password](https://bitbucket.org/account/settings/app-passwords/)  for your [username](https://bitbucket.org/account/settings/username/change/)
- Create [GitLab Personal API Tokens](https://gitlab.com/-/profile/personal_access_tokens)

### Installation
1.  Run the `terminus build:project:create` as follows for Github with CircleCI: 
  ```
  terminus build:project:create \
    --team='Pantheon Employees' \
    --template-repository="git@github.com:pantheon-systems/decoupled-drupal-composer-managed.git" pantheon-upstreams/decoupled-drupal-composer-managed \
    --visibility private {PROJECT_NAME} \
    --profile="pantheon_decoupled_profile" \
    --stability=dev
  ```

  Replace `{PROJECT_NAME}` with your project name - for example `decoupled-drupal`.

  Replace `'{My Team Name}'` with your team name - for example `My Agency`. This can also be omitted.

2. Run the `terminus build:project:create` as follows for Github with Github Actions:
  ```
  terminus build:project:create \
    --team='{My Team Name}' \
    --ci=githubactions \
    --template-repository="git@github.com:pantheon-systems/decoupled-drupal-composer-managed.git" pantheon-upstreams/decoupled-drupal-composer-managed \
    --visibility private {PROJECT_NAME} \
    --profile="pantheon_decoupled_profile" \
    --stability=dev
  ```

  Replace `{PROJECT_NAME}` with your project name - for example `decoupled-drupal`.

  Replace `'{My Team Name}'` with your team name - for example `My Agency`. This can also be omitted.

3. Run the `terminus build:project:create` as follows for Bitbucket with Bitbucket pipelines:
  ```
  terminus build:project:create \
    --team='{My Team Name}' \
    --git=bitbucket \
    --ci=bitbucketpipelines \
    --template-repository="git@github.com:pantheon-systems/decoupled-drupal-composer-managed.git" pantheon-upstreams/decoupled-drupal-composer-managed \
    --visibility private {PROJECT_NAME} \
    --profile="pantheon_decoupled_profile" \
    --stability=dev
  ```

  Replace `{PROJECT_NAME}` with your project name - for example `decoupled-drupal`.

  Replace `'{My Team Name}'` with your team name - for example `My Agency`. This can also be omitted.

4. Run the `terminus build:project:create` as follows for Gitlab with gitlabci:
  ```
  terminus build:project:create \
    --team='{My Team Name}' \
    --git=gitlab \
    --ci=gitlabci \
    --template-repository="git@github.com:pantheon-systems/decoupled-  drupal-composer-managed.git" pantheon-upstreams/decoupled-drupal-composer-managed \
    --visibility private {PROJECT_NAME} \
    --profile="pantheon_decoupled_profile" \
    --stability=dev
  ```

  Replace `{PROJECT_NAME}` with your project name - for example `decoupled-drupal`.

  Replace `'{My Team Name}'` with your team name - for example `My Agency`. This can also be omitted.

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

