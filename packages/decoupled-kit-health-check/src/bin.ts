#!/usr/bin/env node
import { GatsbyWordPressHealthCheck } from './classes/GatsbyWordPressHealthCheck';
import { NextDrupalHealthCheck } from './classes/NextDrupalHealthCheck';
import { NextWordPressHealthCheck } from './classes/NextWordPressHealthCheck';
import { getFramework } from './utils/getFramework';

const [cms] = process.argv.slice(2, 3);

try {
	if (/(drupal|d(9|10))/.test(cms)) {
		const HC = new NextDrupalHealthCheck({ env: process.env });
		await HC.validateEndpoint()
			.then((hc) => hc.validateMenu())
			.then((hc) => hc.validateRouter())
			.then((hc) => hc.validateAuth())
			.then((hc) => hc.validatePreview());
	} else if (/(wordpress|wp)/.test(cms)) {
		const framework = getFramework();
		switch (framework) {
			case 'next': {
				const HC = new NextWordPressHealthCheck({ env: process.env });
				await HC.validateEndpoint()
					.then((hc) => hc.validateMenu())
					.then((hc) => hc.validateAuth())
					.then((hc) => hc.validatePreview());
				break;
			}
			case 'gatsby':
				{
					const HC = new GatsbyWordPressHealthCheck({ env: process.env });
					await HC.validateEndpoint()
						.then((hc) => hc.validateWPGatsbyPlugin())
						.then((hc) => hc.validateMenu())
						.then((hc) => hc.validateAuth());
				}
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
	console.log('🚀 Ready to build!');
	process.exit(0);
} catch (error) {
	if (error instanceof Error) {
		console.log(error.message);
	}
	process.exit(1);
}
