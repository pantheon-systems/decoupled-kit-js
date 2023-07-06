import { checkAuthentication } from '../src/utils/checkAuthentication';

describe('checkAuthentication()', async () => {
	afterEach(() => {
		delete process.env['CLIENT_ID'];
		delete process.env['CLIENT_SECRET'];
	});

	it('should return the access_token if the credentials are valid', async () => {
		process.env['CLIENT_ID'] = 'a1b2c3-d4e5g6';
		process.env['CLIENT_SECRET'] = 'mysecretsecret';

		const result = await checkAuthentication({
			env: process.env,
			cmsEndpoint: new URL('https://drupal.test'),
		});

		expect(result).toEqual({ access_token: 'abc123' });
	});

	it('should return an empty string if the CLIENT_ID is not not set', async () => {
		process.env['CLIENT_SECRET'] = 'mysecretsecret';

		const result = await checkAuthentication({
			env: process.env,
			cmsEndpoint: new URL('https://drupal.test'),
		});

		expect(result).toEqual({ access_token: '' });
	});

	it('should return an empty string if the CLIENT_SECRET is not set', async () => {
		process.env['CLIENT_ID'] = 'a1b2c3-d4e5g6';

		const result = await checkAuthentication({
			env: process.env,
			cmsEndpoint: new URL('https://drupal.test'),
		});

		expect(result).toEqual({ access_token: '' });
	});
});
