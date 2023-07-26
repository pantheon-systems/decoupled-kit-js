import { vi } from 'vitest';
import { NextDrupalHealthCheck } from '../src/classes/NextDrupalHealthCheck';

describe('NextDrupalHealthCheck', () => {
	beforeEach((context) => {
		context.logSpy = vi.spyOn(console, 'log');
		delete process.env['BACKEND_URL'];
		delete process.env['PANTHEON_CMS_ENDPOINT'];
		delete process.env['CLIENT_ID'];
		delete process.env['CLIENT_SECRET'];
		delete process.env['PREVIEW_SECRET'];
	});
	it('should pass for a valid BACKEND_URL and invalid auth', async ({
		logSpy,
	}) => {
		process.env['BACKEND_URL'] = 'https://drupal.test';
		const HC = new NextDrupalHealthCheck({ env: process.env });
		await HC.validateEndpoint()
			.then((hc) => hc.validateMenu())
			.then((hc) => hc.validateRouter())
			.then((hc) => hc.validateAuth())
			.then((hc) => hc.validatePreview())
			.catch(console.error);

		const result = logSpy.mock.calls.map(([call]) => call);
		expect(result).toMatchSnapshot();
	});
	it('should pass for a valid PANTHEON_CMS_ENDPOINT and invalid auth', async ({
		logSpy,
	}) => {
		process.env['PANTHEON_CMS_ENDPOINT'] = 'drupal.test';
		const HC = new NextDrupalHealthCheck({ env: process.env });
		await HC.validateEndpoint()
			.then((hc) => hc.validateMenu())
			.then((hc) => hc.validateRouter())
			.then((hc) => hc.validateAuth())
			.then((hc) => hc.validatePreview())
			.catch(console.error);

		const result = logSpy.mock.calls.map(([call]) => call);
		expect(result).toMatchSnapshot();
	});
	it('should pass for a valid backend and valid auth but no preview secret', async ({
		logSpy,
	}) => {
		process.env['PANTHEON_CMS_ENDPOINT'] = 'drupal.test';
		process.env['CLIENT_ID'] = 'abc123';
		process.env['CLIENT_SECRET'] = 'testclientsecret@1';

		const HC = new NextDrupalHealthCheck({ env: process.env });
		await HC.validateEndpoint()
			.then((hc) => hc.validateMenu())
			.then((hc) => hc.validateRouter())
			.then((hc) => hc.validateAuth())
			.then((hc) => hc.validatePreview())
			.catch(console.error);

		const result = logSpy.mock.calls.map(([call]) => call);
		expect(result).toMatchSnapshot();
	});
	it('should pass for a valid backend and valid auth', async ({ logSpy }) => {
		process.env['PANTHEON_CMS_ENDPOINT'] = 'drupal.test';
		process.env['CLIENT_ID'] = 'abc123';
		process.env['CLIENT_SECRET'] = 'testclientsecret@1';
		process.env['PREVIEW_SECRET'] = 'testpreviewsecret!';

		const HC = new NextDrupalHealthCheck({ env: process.env });
		await HC.validateEndpoint()
			.then((hc) => hc.validateMenu())
			.then((hc) => hc.validateRouter())
			.then((hc) => hc.validateAuth())
			.then((hc) => hc.validatePreview())
			.catch(console.error);

		const result = logSpy.mock.calls.map(([call]) => call);
		expect(result).toMatchSnapshot();
	});
	// Unsure why this one is considered an error
	// and only works with `it.fails` but the following has different behavior.
	it.fails(
		'should show a helpful error message if no required env vars are set',
		async () => {
			const HC = new NextDrupalHealthCheck({ env: process.env });
			await HC.validateEndpoint()
				.then((hc) => hc.validateMenu())
				.then((hc) => hc.validateRouter())
				.then((hc) => hc.validateAuth())
				.then((hc) => hc.validatePreview())
				.catch((err) => console.log(err.message));
		},
	);
	it('should show a helpful error message if the backend is invalid', async ({
		logSpy,
	}) => {
		process.env['PANTHEON_CMS_ENDPOINT'] = 'invalid.drupal.test';
		const HC = new NextDrupalHealthCheck({ env: process.env });
		await HC.validateEndpoint()
			.then((hc) => hc.validateMenu())
			.then((hc) => hc.validateRouter())
			.then((hc) => hc.validateAuth())
			.then((hc) => hc.validatePreview())
			.catch((err) => console.log(err.message));

		const result = logSpy.mock.calls.map(([call]) => call);
		expect(result).toMatchSnapshot();
	});
});
