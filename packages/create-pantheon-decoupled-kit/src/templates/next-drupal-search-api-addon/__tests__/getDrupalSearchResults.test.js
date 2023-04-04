import { getDrupalSearchResults } from '../lib/getDrupalSearchResults';
import exampleSearchResultsDefaultIndex from './data/exampleSearchResultsDefaultIndex.json';
import exampleSearchResultsAltIndex from './data/exampleSearchResultsAltIndex.json';

describe('getDrupalSearchResults()', () => {
	const mockContextDefault = {
		locale: 'en',
		params: { alias: ['milk'] },
	};
	const mockContextAlt = {
		locale: 'en',
		params: { alias: ['chocolate'] },
	};
	it('should return matching search results from the default index', async () => {
		const data = await getDrupalSearchResults(mockContextDefault);

		expect(data).toEqual(exampleSearchResultsDefaultIndex);
	});
	it('should return matching search results from a unique index', async () => {
		const data = await getDrupalSearchResults(mockContextAlt, 'example_index');

		expect(data).toEqual(exampleSearchResultsAltIndex);
	});
	it('should throw an error if the query fails', async () => {
		try {
			await getDrupalSearchResults(mockContextAlt, 'invalid_index');
		} catch (error) {
			expect(error.message).toEqual(`Failed to fetch data`);
		}
	});
});
