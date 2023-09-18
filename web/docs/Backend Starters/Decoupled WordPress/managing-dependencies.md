---
id: 'wordpress-managing-dependencies'
title: 'Managing WordPress Dependencies'
slug: '/backend-starters/decoupled-wordpress/managing-wordpress-dependencies'
sidebar_position: 6
---

This WordPress Project uses [composer](https://getcomposer.org) to manage
dependencies.

## 1. Adding a new plugin/theme:

A new plugin/theme can be added using the following composer require command:

```
composer require <namespace>/<packagename>
```

For example:

```
composer require wpackagist-plugin/akismet
```

For more info:

- https://docs.roots.io/bedrock/master/composer/

## 2. Update dependencies manually using composer

The dependencies can be updated using the following composer update command: For
updating any plugin/theme:

```
composer update <namespace>/<packagename> --with-dependencies
```

For example:

```
composer update wpackagist-plugin/akismet --with-dependencies
```

For more info:

- https://docs.roots.io/bedrock/master/composer/#updating-wp-and-plugin-versions

## 3. Update dependencies automatically using [terminus-clu-plugin](https://github.com/pantheon-systems/terminus-clu-plugin)

Alternatively, composer security updates can be applied automatically using the
[Terminus CLU](https://github.com/pantheon-systems/terminus-clu-plugin)
(Composer Lock Updater) Plugin. This plugin automatically creates pull requests
based on composer.lock updates. If your project was created using our
recommended terminus
[build tools project create command](./creating-a-new-project.md) then this
plugin has been configured automatically.
