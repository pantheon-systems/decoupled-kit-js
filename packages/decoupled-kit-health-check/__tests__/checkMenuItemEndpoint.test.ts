import { checkMenuItemEndpoint } from '../src/utils/checkMenuItemEndpoint';

describe('checkMenuItemEndpoint()', async () => {
	it('should return true if the menu item endpoint is valid', async () => {
		const result = await checkMenuItemEndpoint(new URL('https://drupal.test'));

		expect(result).toEqual(true);
	});

	it('should return false if the menu item endpoint is invalid', async () => {
		const result = await checkMenuItemEndpoint(
			new URL('https://invalid.drupal.test'),
		);

		expect(result).toEqual(false);
	});
});
