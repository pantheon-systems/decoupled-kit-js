import { checkCMSEndpoint } from '../src/utils/checkCMSEndpoint';

describe('checkCMSEndpoint() - rest', async () => {
	it('should return true if the cmsEndpoint is valid', async () => {
		const cmsEndpoint = new URL('https://drupal.test');
		const result = await checkCMSEndpoint({ cmsEndpoint, type: 'rest' });

		expect(result).toEqual(true);
	});

	it('should return false if the cmsEndpoint is not valid', async () => {
		const cmsEndpoint = new URL('https://invalid.drupal.test');
		const result = await checkCMSEndpoint({ cmsEndpoint, type: 'rest' });

		expect(result).toEqual(false);
	});
});

describe('checkCMSEndpoint() - graphql', async () => {
	it('should return true if the cmsEndpoint is valid', async () => {
		const cmsEndpoint = new URL('https://wordpress.test');
		const result = await checkCMSEndpoint({ cmsEndpoint, type: 'graphql' });

		expect(result).toEqual(true);
	});

	it('should return false if the cmsEndpoint is not valid', async () => {
		const cmsEndpoint = new URL('https://invalid.wordpress.test');
		const result = await checkCMSEndpoint({ cmsEndpoint, type: 'graphql' });

		expect(result).toEqual(false);
	});
});
