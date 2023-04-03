import { getDrupalSearchResults } from '../lib/getDrupalSearchResults';
import exampleSearchResultsDefaultIndex from './data/exampleSearchResultsDefaultIndex.json';
import exampleSearchResultsAltIndex from './data/exampleSearchResultsAltIndex.json';

describe('getDrupalSearchResults()', () => {
	it('should return matching search results from the default index', async () => {
		const data = await getDrupalSearchResults('milk');

		expect(data).toEqual(exampleSearchResultsDefaultIndex);
	});
	it('should return matching search results from a unique index', async () => {
		const data = await getDrupalSearchResults('chocolate', 'example_index');

		expect(data).toEqual(exampleSearchResultsAltIndex);
	});
	it('should throw an error if the query fails', async () => {
		try {
			await getDrupalSearchResults('invalid', 'invalid_index');
		} catch (error) {
			expect(error.message).toEqual(`Failed to fetch data`);
		}
	});
});
