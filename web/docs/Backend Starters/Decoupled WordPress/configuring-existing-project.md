---
id: 'configuring-existing-project'
title: 'Configuring an Existing WordPress Project'
slug: '/Backend Starters/Decoupled WordPress/Creating Existing Project'
sidebar_position: 4
---

While we offer a back-end starter project for use with our front-end starter kits,
you may instead prefer to use an existing WordPress project. Follow the steps
below to configure an existing WordPress project to work with one of our
front-end starter kits.

## Before You begin

These instructions assume that you have already installed WordPress using your
preferred method.

## Install and Activate Plugins

- Install and activate the [WPGraphQL Plugin](https://wordpress.org/plugins/wp-graphql/).
- If you are planning on using the Gatsby WordPress front-end starter kit,
install and activate the [WPGatsby Plugin](https://wordpress.org/plugins/wp-gatsby/).
This plugin is not required for the Next.js and WordPress starter kit.
## Create Supporting Content

Our starter kits assume that there is at least one published post and page in your
WordPress back-end. A default WordPress install will have a sample of each, but
if your site does not have any page or post content, you should create some
before proceeding.

The footer in our starter kit sources menu data from a classic WordPress menu
with the name 'Example Menu'. If a menu with this name does not exist, the
footer menu will not display. The footer component in the starter kit can be
customized to source data from a different menu.

## Set the Necessary Front-End Environment Variables

At this point, your WordPress site should be configured to work with one of our
front-end starter kits. Within your front-end project you will also need to set
the necessary environment variables to source data from your WordPress back-end.

* [Instructions for the Next.js and WordPress starter kit](/docs/Frontend%20Starters/Next.js/Next.js%20+%20WordPress/Setting%20Environment%20Variables)
* [Instructions for the Gatsby WordPress starter kit](docs/Frontend%20Starters/Gatsby%20WordPress/Setting%20Environment%20Variables)