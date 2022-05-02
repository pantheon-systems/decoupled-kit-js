# Updating Drupal Dependencies

Dependencies can be updated following two ways:

## 1. Update dependencies manually using composer

The Wordpress(Bedrock) project uses composer to manage dependencies. The dependencies can be updated using the following composer command:

- Update Contributed plugin/theme: `composer update pantheon-systems/plugin-name --with-dependencies`

For more info:

- [Updating WP and plugin versions](https://docs.roots.io/bedrock/master/composer/#updating-wp-and-plugin-versions)

## 2. Update dependencies automatically using [terminus-clu-plugin](https://github.com/pantheon-systems/terminus-clu-plugin)

Alternatively, composer security updates can be applied automatically using the [Terminus CLU](https://github.com/pantheon-systems/terminus-clu-plugin) (Composer Lock Updater) Plugin. This plugin automatically creates pull requests based on composer.lock updates. If your project was created using our recommended terminus [build tools project create command](creating-new-project.md) then this plugin has been configured automatically.
