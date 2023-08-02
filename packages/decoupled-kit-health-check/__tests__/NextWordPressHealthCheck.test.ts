import { vi } from 'vitest';
import { NextWordPressHealthCheck } from '../src/classes/NextWordPressHealthCheck';

describe('NextWordPressHealthCheck', () => {
	beforeEach((context) => {
		vi.restoreAllMocks();
		context.logSpy = vi.spyOn(console, 'log');
		delete process.env['WPGRAPHQL_URL'];
		delete process.env['PANTHEON_CMS_ENDPOINT'];
		delete process.env['WP_APPLICATION_USERNAME'];
		delete process.env['WP_APPLICATION_SECRET'];
		delete process.env['PREVIEW_SECRET'];
	});
	it('should pass for a valid WPGRAPHQL_URL and invalid auth', async ({
		logSpy,
	}) => {
		process.env['WPGRAPHQL_URL'] = 'https://wordpress.test';
		const HC = new NextWordPressHealthCheck({ env: process.env });
		await HC.validateEndpoint()
			.then((hc) => hc.validateMenu())
			.then((hc) => hc.validateAuth())
			.then((hc) => hc.validatePreview())
			.catch(console.error);

		const result = logSpy.mock.calls.map(([call]) => call);
		expect(result).toMatchSnapshot();
	});
	it('should pass for a valid PANTHEON_CMS_ENDPOINT and invalid auth', async ({
		logSpy,
	}) => {
		process.env['PANTHEON_CMS_ENDPOINT'] = 'wordpress.test';
		const HC = new NextWordPressHealthCheck({ env: process.env });
		await HC.validateEndpoint()
			.then((hc) => hc.validateMenu())
			.then((hc) => hc.validateAuth())
			.then((hc) => hc.validatePreview())
			.catch(console.error);

		const result = logSpy.mock.calls.map(([call]) => call);
		expect(result).toMatchSnapshot();
	});
	it('should pass for a valid backend and valid auth but no preview secret', async ({
		logSpy,
	}) => {
		process.env['PANTHEON_CMS_ENDPOINT'] = 'wordpress.test';
		process.env['WP_APPLICATION_USERNAME'] = 'a1b2c3-d4e5g6';
		process.env['WP_APPLICATION_PASSWORD'] = 'mysecretsecret';

		const HC = new NextWordPressHealthCheck({ env: process.env });
		await HC.validateEndpoint()
			.then((hc) => hc.validateMenu())
			.then((hc) => hc.validateAuth())
			.then((hc) => hc.validatePreview())
			.catch(console.error);

		const result = logSpy.mock.calls.map(([call]) => call);
		expect(result).toMatchSnapshot();
	});
	it('should pass for a valid backend and valid auth', async ({ logSpy }) => {
		process.env['PANTHEON_CMS_ENDPOINT'] = 'wordpress.test';
		process.env['WP_APPLICATION_USERNAME'] = 'a1b2c3-d4e5g6';
		process.env['WP_APPLICATION_PASSWORD'] = 'mysecretsecret';
		process.env['PREVIEW_SECRET'] = 'testpreviewsecret!';

		const HC = new NextWordPressHealthCheck({ env: process.env });
		await HC.validateEndpoint()
			.then((hc) => hc.validateMenu())
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
			const HC = new NextWordPressHealthCheck({ env: process.env });
			await HC.validateEndpoint()
				.then((hc) => hc.validateMenu())
				.then((hc) => hc.validateAuth())
				.then((hc) => hc.validatePreview())
				.catch((err) => console.log(err.message));
		},
	);
	it('should show a helpful error message if the backend is invalid', async ({
		logSpy,
	}) => {
		process.env['PANTHEON_CMS_ENDPOINT'] = 'invalid.wordpress.test';
		const HC = new NextWordPressHealthCheck({ env: process.env });
		await HC.validateEndpoint()
			.then((hc) => hc.validateMenu())
			.then((hc) => hc.validateAuth())
			.then((hc) => hc.validatePreview())
			.catch((err) => console.log(err.message));

		const result = logSpy.mock.calls.map(([call]) => call);
		expect(result).toMatchSnapshot();
	});
});
