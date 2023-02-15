import { nextWp } from './next-wp.generator';
import { nextDrupal } from './next-drupal.generator';
import { gatsbyWp } from './gatsby-wp.generator';
import { nextDrupalUmamiAddon } from './next-drupal-umami-addon.generator';

export const decoupledKitGenerators = [
	nextWp,
	gatsbyWp,
	nextDrupal,
	nextDrupalUmamiAddon,
];
