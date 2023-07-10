import { checkCMSEnvVars } from '../src/utils/checkCMSEnvVars';

const cmsEndpoint = 'https://drupal.test';

describe('checkCMSEnvVars()', () => {
	afterEach(() => {
		delete process.env['BACKEND_URL'];
		delete process.env['PANTHEON_CMS_ENDPOINT'];
	});
	it('returns an object { isSet: true, endpoints, } if BACKEND_URL is set', () => {
		process.env['BACKEND_URL'] = cmsEndpoint;

		const result = checkCMSEnvVars(process.env);

		expect(result.isSet).toEqual(true);
		expect(result.endpoints['BACKEND_URL']).toEqual(cmsEndpoint);
	});

	it('returns an object { isSet: true, endpoints, } if PANTHEON_CMS_ENDPOINT is set', () => {
		process.env['PANTHEON_CMS_ENDPOINT'] = cmsEndpoint;

		const result = checkCMSEnvVars(process.env);

		expect(result.isSet).toEqual(true);
		expect(result.endpoints['PANTHEON_CMS_ENDPOINT']).toEqual(cmsEndpoint);
	});

	it('returns an object { isSet: true, endpoints, } if both required env vars are set', () => {
		process.env['BACKEND_URL'] = cmsEndpoint;
		process.env['PANTHEON_CMS_ENDPOINT'] = cmsEndpoint;

		const result = checkCMSEnvVars(process.env);

		expect(result.isSet).toEqual(true);
		expect(result.endpoints).toEqual({
			BACKEND_URL: cmsEndpoint,
			PANTHEON_CMS_ENDPOINT: cmsEndpoint,
		});
	});

	it('returns an object { isSet: false, endpoints, } if no required env vars are set', () => {
		const result = checkCMSEnvVars(process.env);

		expect(result.isSet).toEqual(false);
		expect(result.endpoints).toEqual({});
	});
});
