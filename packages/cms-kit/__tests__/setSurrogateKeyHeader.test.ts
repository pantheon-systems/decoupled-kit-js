import { setSurrogateKeyHeader } from '../src/lib/setSurrogateKeyHeader';
import { vi } from 'vitest';
// Mock the response object
const mockResponse = vi.fn().mockImplementation(({ surrogateKeyRaw }) => ({
	getHeader: () => surrogateKeyRaw,
	setHeader: () => vi.fn(),
}));

const collectionKeys =
	'config:filter.format.basic_html config:user.role.anonymous file:19 file:21 file:23 file:25 file:27 file:29 file:31 file:33 http_response media:10 media:11 media:12 media:13 media:14 media:15 media:16 media:17 node:10 node:11 node:12 node:13 node:14 node:15 node:16 node:17 node_list';
const resourceKeys =
	'config:filter.format.basic_html config:user.role.anonymous http_response node:10';
const uniqueKeys =
	'config:filter.format.basic_html config:user.role.anonymous file:19 file:21 file:23 file:25 file:27 file:29 file:31 file:33 http_response media:10 media:11 media:12 media:13 media:14 media:15 media:16 media:17 node:10 node:11 node:12 node:13 node:14 node:15 node:16 node:17 node_list';

test('add headers for a single API request', () => {
	// If the surrogate-key header is not set, you get back what you put in.
	const res = mockResponse({ surrogateKeyRaw: undefined });
	const setHeaderSpy = vi.spyOn(res, 'setHeader');

	expect(setSurrogateKeyHeader(collectionKeys, res)).toBe(collectionKeys);
	expect(setHeaderSpy).toHaveBeenCalledTimes(1);
});

test('add headers for a second API request', () => {
	// If the surrogate-key header is set, new keys will be appended.
	const res = mockResponse({
		surrogateKeyRaw: collectionKeys,
	});
	expect(setSurrogateKeyHeader('node:100', res)).toBe(
		`${collectionKeys} node:100`,
	);
});

test('ensure keys are unique', () => {
	// If a key is already in the header, we don't add it again.
	const res = mockResponse({
		surrogateKeyRaw: collectionKeys,
	});
	expect(setSurrogateKeyHeader(resourceKeys, res)).toBe(uniqueKeys);
});
