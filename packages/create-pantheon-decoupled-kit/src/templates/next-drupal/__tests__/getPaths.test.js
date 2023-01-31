import { getPaths } from '../lib/getPaths';
import { globalDrupalStateStores } from '../lib/stores';

import umamiPaths from './data/umamiPaths.json';
import defaultProfilePaths from './data/defaultProfilePaths.json';

describe('getPaths()', () => {
	const mockContext = {
		locales: process.env.locales,
	};
	it('should return an array of paths', async () => {
		const paths = await getPaths(
			mockContext,
			globalDrupalStateStores,
			'node--article',
			'slug',
			'articles',
			false,
		);

		if (PROFILE === 'umami') {
			expect(paths).toEqual(umamiPaths);
		} else if (PROFILE === 'default') {
			expect(paths).toEqual(defaultProfilePaths);
		}
	});
	it('should return an empty array if failGracefully is true', async () => {
		const paths = await getPaths(
			mockContext,
			globalDrupalStateStores,
			'node--x',
			'slug',
			'pages',
			true,
		);

		expect(paths).toEqual([]);
	});
	it('should throw an error if the node is invalid and failGracefully is false', async () => {
		try {
			await getPaths(
				mockContext,
				globalDrupalStateStores,
				'node--x',
				'slug',
				'pages',
				false,
			);
		} catch (error) {
			expect(error.message).toEqual(
				`Invalid objectName.\nCheck that node--x is a valid node in your Drupal instance`,
			);
		}
	});
});
