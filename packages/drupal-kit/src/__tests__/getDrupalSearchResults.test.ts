jest.mock('isomorphic-fetch', () => require('fetch-mock-jest').sandbox());
const fetchMock = require('isomorphic-fetch');
fetchMock.config.overwriteRoutes = true;
global.Headers = fetchMock.Headers;

import getDrupalSearchResults from '../lib/getDrupalSearchResults';
import exampleSearchResultsDefaultIndex from './data/exampleSearchResultsDefaultIndex.json';
import exampleSearchResultsAltIndex from './data/exampleSearchResultsAltIndex.json';

const mockResponse: any = () => {
	const res = {
		setHeader: jest.fn(),
	};
	return res;
};

describe('getDrupalSearchResults()', () => {
	beforeEach(() => {
		fetchMock.mockClear();
	});
	const mockContextDefault = {
		locale: 'en',
		query: 'milk',
		apiUrl: 'https://default',
		response: mockResponse(),
	};
	const mockContextAlt = {
		locale: 'en',
		query: 'chocolate',
		apiUrl: 'https://default',
		response: mockResponse(),
		index: 'example_index',
	};
	it('should return matching search results from the default index', async () => {
		const { locale, query, apiUrl, response } = mockContextDefault;

		fetchMock.mock(
			'https://default/en/jsonapi/index/articles_index?filter[fulltext]=milk',
			{
				status: 200,
				body: exampleSearchResultsDefaultIndex,
			},
		);
		const data = await getDrupalSearchResults(apiUrl, locale, query, response);
		expect(data).toEqual(exampleSearchResultsDefaultIndex);
	});
	it('should return matching search results from a unique index', async () => {
		const { locale, query, apiUrl, response, index } = mockContextAlt;

		fetchMock.mock(
			'https://default/en/jsonapi/index/example_index?filter[fulltext]=chocolate',
			{
				status: 200,
				body: exampleSearchResultsAltIndex,
			},
			{ overwriteRoutes: true },
		);

		const data = await getDrupalSearchResults(
			apiUrl,
			locale,
			query,
			response,
			index,
		);

		expect(data).toEqual(exampleSearchResultsAltIndex);
	});
	it('should throw an error if the query fails', async () => {
		const { locale, query, apiUrl, response } = mockContextAlt;
		const invalidIndex = 'invalid_index';
		fetchMock.mock(
			'https://default/en/jsonapi/index/invalid_index?filter[fulltext]=chocolate',
			{
				status: 404,
				body: {},
			},
		);
		try {
			expect(
				await getDrupalSearchResults(
					apiUrl,
					locale,
					query,
					response,
					invalidIndex,
				),
			).toThrowError();
		} catch (error) {
			expect(error).toEqual(new Error('Failed to fetch data'));
		}
	});
	it('Confirm that cache control header is set', async () => {
		const { locale, query, apiUrl, response } = mockContextDefault;
		fetchMock.mock(
			'https://default/en/jsonapi/index/articles_index?filter[fulltext]=milk',
			{
				status: 200,
				body: exampleSearchResultsDefaultIndex,
			},
		);
		await getDrupalSearchResults(apiUrl, locale, query, response);
		expect(response.setHeader.mock.calls[0][0]).toBe('Cache-Control');
		expect(response.setHeader.mock.calls[0][1]).toBe('public, s-maxage=600');
	});
});
