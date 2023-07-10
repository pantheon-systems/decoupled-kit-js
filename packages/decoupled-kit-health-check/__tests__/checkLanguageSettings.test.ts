import { checkLanguageSettings } from '../src/utils/checkLanguageSettings';

describe('checkLanguageSettings()', async () => {
	it('should return false if the endpoint returns anything other than a 200', async () => {
		const result = await checkLanguageSettings(new URL('https://drupal.test'));

		expect(result).toEqual(false);
	});

	it('should return true if the endpoint returns a 200', async () => {
		const result = await checkLanguageSettings(
			new URL('https://umami.drupal.test'),
		);

		expect(result).toEqual(true);
	});
});
