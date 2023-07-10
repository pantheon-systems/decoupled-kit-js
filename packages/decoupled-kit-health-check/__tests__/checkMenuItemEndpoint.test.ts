import { checkMenuItemEndpoint } from '../src/utils/checkMenuItemEndpoint';

describe('checkMenuItemEndpoint() - rest', async () => {
	it('should return true if the menu item endpoint is valid', async () => {
		const result = await checkMenuItemEndpoint({
			cmsEndpoint: new URL('https://drupal.test'),
			type: 'rest',
		});

		expect(result).toEqual(true);
	});

	it('should return false if the menu item endpoint is invalid', async () => {
		const result = await checkMenuItemEndpoint({
			cmsEndpoint: new URL('https://invalid.drupal.test'),
			type: 'rest',
		});

		expect(result).toEqual(false);
	});
});

describe('checkMenuItemEndpoint() - graphql', async () => {
	it('should return true if the menu item endpoint is valid', async () => {
		const result = await checkMenuItemEndpoint({
			cmsEndpoint: new URL('https://wordpress.test/menu'),
			type: 'graphql',
		});

		expect(result).toEqual(true);
	});

	it('should return false if the menu item endpoint is invalid', async () => {
		const result = await checkMenuItemEndpoint({
			cmsEndpoint: new URL('https://invalid.wordpress.test/menu'),
			type: 'graphql',
		});

		expect(result).toEqual(false);
	});
});
