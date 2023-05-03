import { vi } from 'vitest';
import { getDrupalSearchResults } from '../src';
import exampleSearchResultsAltIndex from './data/exampleSearchResultsAltIndex.json';
import exampleSearchResultsDefaultIndex from './data/exampleSearchResultsDefaultIndex.json';

const mockResponse: any = () => {
	const res = {
		setHeader: vi.fn(),
	};
	return res;
};

describe('getDrupalSearchResults()', () => {
	beforeEach(() => {
		vi.restoreAllMocks();
	});
	const mockContextDefault = {
		locale: 'en',
		query: 'milk',
		apiUrl: 'https://default.pantheonsite.io',
		response: mockResponse(),
	};
	const mockContextAlt = {
		locale: 'en',
		query: 'chocolate',
		apiUrl: 'https://default.pantheonsite.io',
		response: mockResponse(),
		index: 'example_index',
	};
	it('should return matching search results from the default index', async () => {
		const { locale, query, apiUrl, response } = mockContextDefault;
		const data = await getDrupalSearchResults({
			apiUrl,
			locale,
			query,
			response,
		});
		expect(data).toEqual(exampleSearchResultsDefaultIndex);
	});
	it('should return matching search results from a unique index', async () => {
		const { locale, query, apiUrl, response, index } = mockContextAlt;

		const data = await getDrupalSearchResults({
			apiUrl,
			locale,
			query,
			response,
			index,
		});

		expect(data).toEqual(exampleSearchResultsAltIndex);
	});
	it.fails('should throw an error if the query fails', async () => {
		const { locale, query, apiUrl, response } = mockContextAlt;
		const invalidIndex = 'invalid_index';
		const result = await getDrupalSearchResults({
			apiUrl,
			locale,
			query,
			response,
			index: invalidIndex,
		});

		expect(result).toThrowError(new Error('Failed to fetch data'));
	});
	it('Confirm that cache control header is set', async () => {
		const { locale, query, apiUrl, response } = mockContextDefault;
		await getDrupalSearchResults({ apiUrl, locale, query, response });
		expect(response.setHeader.mock.calls[0][0]).toBe('Cache-Control');
		expect(response.setHeader.mock.calls[0][1]).toBe('public, s-maxage=600');
	});
});
