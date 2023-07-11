#!/usr/bin/env node
import { nextDrupalHealthCheck } from './next-drupal';
import { nextWPHealthCheck } from './next-wp';
import { getFramework } from './utils/getFramework';

const [cms] = process.argv.slice(2, 3);

try {
	if (/(drupal|d(9|10))/.test(cms)) {
		await nextDrupalHealthCheck();
	} else if (/(wordpress|wp)/.test(cms)) {
		const framework = getFramework();
		switch (framework) {
			case 'next':
				await nextWPHealthCheck();
				break;
			case 'gatsby':
				console.log('running gatsby-wp');
				break;
			case 'none':
			default:
				console.log('No valid framework detected. Exiting 👋');
		}
	} else {
		throw new Error(
			'No cms selected. Expected "drupal" or "wordpress" as an argument',
		);
	}
} catch (error) {
	if (error instanceof Error) {
		console.log(error.message);
	}
	process.exit(1);
}
