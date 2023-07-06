import { vi } from 'vitest';
import { checkCMSEndpoint } from '../src/utils/checkCMSEndpoint';

describe('checkCMSEndpoint()', async () => {
	beforeEach(() => {
		vi.restoreAllMocks();
	});
	it('should return true if the cmsEndpoint is valid', async () => {
		const cmsEndpoint = new URL('https://drupal.test');
		const result = await checkCMSEndpoint(cmsEndpoint);

		expect(result).toEqual(true);
	});
	it('should return false if the cmsEndpoint is not valid', async () => {
		const cmsEndpoint = new URL('https://invalid.drupal.test');
		const result = await checkCMSEndpoint(cmsEndpoint);

		expect(result).toEqual(false);
	});
});
