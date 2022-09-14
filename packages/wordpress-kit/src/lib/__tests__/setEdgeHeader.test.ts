import setEdgeHeader from '../setEdgeHeader';

// Mock the response object
const mockResponse: any = () => {
	const res = {
		setHeader: () => {},
	};
	res.setHeader = jest.fn();
	return res;
};

test('set using default cache-control header', () => {
	// Pass only a response object and default cache-control headers are set.
	const res = mockResponse();
	setEdgeHeader({ res });
	expect(res.setHeader.mock.calls[0][0]).toBe('Cache-Control');
	expect(res.setHeader.mock.calls[0][1]).toBe(
		'public, s-maxage=10, stale-while-revalidate=600',
	);
});

test('set a custom cache control header', () => {
	// A custom cache control header is set if provided.
	const res = mockResponse();
	setEdgeHeader({
		res,
		cacheControl: 'public, s-maxage=123, stale-while-revalidate=1234',
	});
	expect(res.setHeader.mock.calls[0][0]).toBe('Cache-Control');
	expect(res.setHeader.mock.calls[0][1]).toBe(
		'public, s-maxage=123, stale-while-revalidate=1234',
	);
});
