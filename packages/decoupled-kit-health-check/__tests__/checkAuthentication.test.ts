import {
	checkDrupalAuthentication,
	checkWPAuthentication,
} from '../src/utils/checkAuthentication';

describe('checkDrupalAuthentication()', async () => {
	afterEach(() => {
		delete process.env['CLIENT_ID'];
		delete process.env['CLIENT_SECRET'];
	});

	it('should return the access_token if the credentials are valid', async () => {
		process.env['CLIENT_ID'] = 'a1b2c3-d4e5g6';
		process.env['CLIENT_SECRET'] = 'mysecretsecret';

		const result = await checkDrupalAuthentication({
			env: process.env,
			cmsEndpoint: new URL('https://drupal.test'),
		});

		expect(result).toEqual({ access_token: 'abc123' });
	});

	it('should return an empty string if the CLIENT_ID is not not set', async () => {
		process.env['CLIENT_SECRET'] = 'mysecretsecret';

		const result = await checkDrupalAuthentication({
			env: process.env,
			cmsEndpoint: new URL('https://drupal.test'),
		});

		expect(result).toEqual({ access_token: '' });
	});

	it('should return an empty string if the CLIENT_SECRET is not set', async () => {
		process.env['CLIENT_ID'] = 'a1b2c3-d4e5g6';

		const result = await checkDrupalAuthentication({
			env: process.env,
			cmsEndpoint: new URL('https://drupal.test'),
		});

		expect(result).toEqual({ access_token: '' });
	});
});

describe('checkWPAuthentication()', async () => {
	afterEach(() => {
		delete process.env['WP_APPLICATION_USERNAME'];
		delete process.env['WP_APPLICATION_PASSWORD'];
	});

	it('should return the credentials if the credentials are valid', async () => {
		process.env['WP_APPLICATION_USERNAME'] = 'a1b2c3-d4e5g6';
		process.env['WP_APPLICATION_PASSWORD'] = 'mysecretsecret';

		const credentials = `${process.env['WP_APPLICATION_USERNAME']}:${process.env['WP_APPLICATION_PASSWORD']}`;
		const encodedCredentials = Buffer.from(credentials, 'binary').toString(
			'base64',
		);
		const result = await checkWPAuthentication({
			env: process.env,
			cmsEndpoint: new URL('https://wordpress.test/auth'),
		});
		expect(result).toEqual({ credentials: encodedCredentials });
	});

	it('should return an empty string if the WP_APPLICATION_USERNAME is not not set', async () => {
		process.env['WP_APPLICATION_PASSWORD'] = 'mysecretsecret';

		const result = await checkWPAuthentication({
			env: process.env,
			cmsEndpoint: new URL('https://wordpress.test/auth'),
		});

		expect(result).toEqual({ credentials: '' });
	});

	it('should return an empty string if the WP_APPLICATION_PASSWORD is not set', async () => {
		process.env['WP_APPLICATION_USERNAME'] = 'a1b2c3-d4e5g6';

		const result = await checkWPAuthentication({
			env: process.env,
			cmsEndpoint: new URL('https://wordpress.test/auth'),
		});

		expect(result).toEqual({ credentials: '' });
	});
});
