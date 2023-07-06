import { checkPreviewEndpoint } from '../src/utils/checkPreviewEndpoint';

const cmsEndpoint = new URL('https://drupal.test');

describe('checkPreviewEndpoint()', async () => {
	it('should return true if preview is successfully fetched', async () => {
		const result = await checkPreviewEndpoint({
			access_token: 'abc123',
			cmsEndpoint,
		});

		expect(result.preview).toEqual(true);
	});

	it('should return false if preview can not be fetched', async () => {
		const result = await checkPreviewEndpoint({
			access_token: '',
			cmsEndpoint,
		});

		expect(result.preview).toEqual(false);
	});
});
