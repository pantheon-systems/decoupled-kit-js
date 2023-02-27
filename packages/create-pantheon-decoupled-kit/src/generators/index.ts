import { nextWp } from './next-wp.generator';
import { nextDrupal } from './next-drupal.generator';
import { gatsbyWp } from './gatsby-wp.generator';
import { nextDrupalUmamiAddon } from './next-drupal-umami-addon.generator';
import { nextWpAcfAddon } from './next-wp-acf-addon.generator';
import { gatsbyWpAcfAddon } from './gatsby-wp-acf-addon.generator';

export const decoupledKitGenerators = [
	nextWp,
	gatsbyWp,
	nextDrupal,
	nextDrupalUmamiAddon,
	nextWpAcfAddon,
	gatsbyWpAcfAddon,
] as const;
