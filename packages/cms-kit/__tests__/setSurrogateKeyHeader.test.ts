import setSurrogateKeyHeader from '../src/utils/setSurrogateKeyHeader';
import { vi } from 'vitest';
// Mock the response object
const mockResponse = vi.fn().mockImplementation(({ surrogateKeyHeader }) => ({
	getHeader: () => surrogateKeyHeader,
	setHeader: () => vi.fn(),
}));

const collectionKeys =
	'config:filter.format.basic_html config:user.role.anonymous file:19 file:21 file:23 file:25 file:27 file:29 file:31 file:33 http_response media:10 media:11 media:12 media:13 media:14 media:15 media:16 media:17 node:10 node:11 node:12 node:13 node:14 node:15 node:16 node:17 node_list';
const resourceKeys =
	'config:filter.format.basic_html config:user.role.anonymous http_response node:10';
const uniqueKeys =
	'config:filter.format.basic_html config:user.role.anonymous file:19 file:21 file:23 file:25 file:27 file:29 file:31 file:33 http_response media:10 media:11 media:12 media:13 media:14 media:15 media:16 media:17 node:10 node:11 node:12 node:13 node:14 node:15 node:16 node:17 node_list';

const removeFirstTwo = (str: string) => str.split(' ').slice(2).join(' ');

test('add headers for a single API request', () => {
	// If the surrogate-key header is not set, you get back what you put in.
	const res = mockResponse({ surrogateKeyHeader: undefined });
	const setHeaderSpy = vi.spyOn(res, 'setHeader');

	expect(setSurrogateKeyHeader(collectionKeys, res)).toBe(
		removeFirstTwo(collectionKeys),
	);
	expect(setHeaderSpy).toHaveBeenCalledTimes(1);
});

test('add headers for a second API request', () => {
	// If the surrogate-key header is set, new keys will be appended.
	const res = mockResponse({
		surrogateKeyHeader: collectionKeys,
	});
	const setHeaderSpy = vi.spyOn(res, 'setHeader');

	expect(setSurrogateKeyHeader('node:100', res)).toBe(
		removeFirstTwo(`${collectionKeys} node:100`),
	);
	expect(setHeaderSpy).toHaveBeenCalledTimes(1);
});

test('ensure keys are unique', () => {
	// If a key is already in the header, we don't add it again.
	const res = mockResponse({
		surrogateKeyHeader: collectionKeys,
	});
	const setHeaderSpy = vi.spyOn(res, 'setHeader');

	expect(setSurrogateKeyHeader(resourceKeys, res)).toBe(
		removeFirstTwo(uniqueKeys),
	);
	expect(setHeaderSpy).toHaveBeenCalledTimes(1);
});
