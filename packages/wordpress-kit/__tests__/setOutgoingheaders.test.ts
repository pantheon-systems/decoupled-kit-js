import { vi } from 'vitest';
import * as lib from '../src/lib/setEdgeHeader';
import {
	setOutgoingHeaders,
	getSurrogateKeys,
} from '../src/lib/setOutgoingHeaders';

// Mock the response object
const mockResponse = vi.fn().mockImplementation(() => ({
	getHeader: () => vi.fn(),
	setHeader: () => vi.fn(),
	getHeaders: () => vi.fn(),
}));

describe('getSurrogateKeys()', () => {
	it('should dedupe surrogate keys', () => {
		const headers = [new Headers(), new Headers()];
		// 2 identical surrogate-key headers
		headers.forEach((h) =>
			h.set(
				'Surrogate-Key',
				'oY1rHsX/3p6DpQK1dAe+ kGUbbVGynpd8ltN0W0Ce CShM/FbGRgcTR9hRB+ak Be0KFtdPtEV9mVlGh8Dq glzcfBFhDdGngbGRhqnD 2dajCGdEluE9JO0ZYeBT 2dajCGdEluE9JO0ZYeBT',
			),
		);

		const result = getSurrogateKeys({ headers });

		expect(result).toEqual(
			'oY1rHsX/3p6DpQK1dAe+ kGUbbVGynpd8ltN0W0Ce CShM/FbGRgcTR9hRB+ak Be0KFtdPtEV9mVlGh8Dq glzcfBFhDdGngbGRhqnD 2dajCGdEluE9JO0ZYeBT',
		);
	});
});

describe('setOutgoingHeader()', () => {
	it('should set the headers on the passed in response', () => {
		const res = mockResponse();
		vi.spyOn(res, 'getHeaders').mockImplementationOnce(() => ({
			'Surrogate-Key':
				'oY1rHsX/3p6DpQK1dAe+ kGUbbVGynpd8ltN0W0Ce CShM/FbGRgcTR9hRB+ak Be0KFtdPtEV9mVlGh8Dq glzcfBFhDdGngbGRhqnD 2dajCGdEluE9JO0ZYeBT',
		}));
		const setHeaderSpy = vi.spyOn(res, 'setHeader');
		const setEdgeHeaderSpy = vi.spyOn(lib, 'setEdgeHeader');
		// the shape of node's OutgoingHttpHeaders
		// basically the same as HeadersInit but different
		// enough that we need to let TypeScript know that
		const headers = [new Headers(res.getHeaders() as HeadersInit)];

		setOutgoingHeaders({
			headers,
			res,
		});

		// first 2 keys are removed by setSurrogateKeyHeader
		expect(setHeaderSpy).toHaveBeenNthCalledWith(
			1,
			'Surrogate-Key',
			'CShM/FbGRgcTR9hRB+ak Be0KFtdPtEV9mVlGh8Dq glzcfBFhDdGngbGRhqnD 2dajCGdEluE9JO0ZYeBT',
		);
		expect(setEdgeHeaderSpy).toHaveBeenCalled();
		expect(res.getHeaders());
	});
});
