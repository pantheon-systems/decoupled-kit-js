import {
	checkDrupalPreviewEndpoint,
	checkWPPreviewEndpoint,
} from '../src/utils/checkPreviewEndpoint';

describe('checkDrupalPreviewEndpoint()', async () => {
	const cmsEndpoint = new URL('https://drupal.test');
	it('should return true if preview is successfully fetched', async () => {
		const result = await checkDrupalPreviewEndpoint({
			access_token: 'abc123',
			cmsEndpoint,
		});

		expect(result.preview).toEqual(true);
	});

	it('should return false if preview can not be fetched', async () => {
		const result = await checkDrupalPreviewEndpoint({
			access_token: '',
			cmsEndpoint,
		});

		expect(result.preview).toEqual(false);
	});
});

describe('checkWPPreviewEndpoint()', async () => {
	const cmsEndpoint = new URL('https://wordpress.test/preview');
	it('should return true if preview is successfully fetched', async () => {
		const wpUsername = 'a1b2c3-d4e5g6';
		const wpPassword = 'mysecretsecret';
		const encodedCredentials = Buffer.from(
			`${wpUsername}:${wpPassword}`,
			'binary',
		).toString('base64');
		const result = await checkWPPreviewEndpoint({
			credentials: encodedCredentials,
			cmsEndpoint,
		});

		expect(result).toEqual(true);
	});

	it('should return false if preview can not be fetched', async () => {
		const result = await checkWPPreviewEndpoint({
			credentials: '',
			cmsEndpoint: new URL('https://wordpress.test/preview'),
		});

		expect(result).toEqual(false);
	});
});
