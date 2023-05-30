import { ServerResponse } from 'http';
import { vi } from 'vitest';
import { setEdgeHeader } from '../src/lib/setEdgeHeader';

// Mock the response object
const mockResponse = vi.fn().mockImplementation(() => ({
	getHeader: () => vi.fn(),
	setHeader: () => vi.fn(),
}));

test('set using default cache-control header', () => {
	// Pass only a response object and default cache-control headers are set.
	const res = mockResponse() as ServerResponse;
	const setHeaderSpy = vi.spyOn(res, 'setHeader');
	setEdgeHeader({ res });
	expect(setHeaderSpy.mock.calls[0][0]).toBe('Cache-Control');
	expect(setHeaderSpy.mock.calls[0][1]).toBe('public, s-maxage=600');
});

test('set a custom cache control header', () => {
	// A custom cache control header is set if provided.
	const res = mockResponse() as ServerResponse;
	const setHeaderSpy = vi.spyOn(res, 'setHeader');
	setEdgeHeader({
		res,
		cacheControl: 'public, s-maxage=123, stale-while-revalidate=1234',
	});
	expect(setHeaderSpy.mock.calls[0][0]).toBe('Cache-Control');
	expect(setHeaderSpy.mock.calls[0][1]).toBe(
		'public, s-maxage=123, stale-while-revalidate=1234',
	);
});
