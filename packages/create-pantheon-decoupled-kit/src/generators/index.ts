import { gatsbyWpAcfAddon } from './gatsby-wp-acf-addon.generator';
import { gatsbyWp } from './gatsby-wp.generator';
import { nextDrupalApp } from './next-drupal-app.generator';
import { nextDrupalSearchApiAddon } from './next-drupal-search-api-addon.generator';
import { nextDrupalUmamiAddon } from './next-drupal-umami-addon.generator';
import { nextDrupal } from './next-drupal.generator';
import { nextWpAcfAddon } from './next-wp-acf-addon.generator';
import { nextWp } from './next-wp.generator';
import { tailwindcssAddon } from './tailwindcss-addon.generator';

export const decoupledKitGenerators = [
	nextWp,
	gatsbyWp,
	nextDrupal,
	nextDrupalUmamiAddon,
	nextWpAcfAddon,
	gatsbyWpAcfAddon,
	tailwindcssAddon,
	nextDrupalSearchApiAddon,
	nextDrupalApp,
];
