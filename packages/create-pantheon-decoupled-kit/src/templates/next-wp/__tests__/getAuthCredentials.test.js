import { getAuthCredentials } from '../lib/WordPressClient';

describe('getAuthCredentials', () => {
	it('should return the encoded credentials', () => {
		process.env.WP_APPLICATION_USERNAME = 'test-decoupled-wp-mock-data';
		process.env.WP_APPLICATION_PASSWORD = 'test-password';

		const result = getAuthCredentials();

		expect(result).toEqual(
			'dGVzdC1kZWNvdXBsZWQtd3AtbW9jay1kYXRhOnRlc3QtcGFzc3dvcmQ=',
		);
	});
});
