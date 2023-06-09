import { rest } from 'msw';
import exampleSearchResultsAltIndex from '../../__tests__/data/exampleSearchResultsAltIndex.json';
import exampleSearchResultsDefaultIndex from '../../__tests__/data/exampleSearchResultsDefaultIndex.json';

const apiEndpoint = 'https://default.pantheonsite.io';

const defaultSearchResultsResponseHandler = rest.get<
	typeof exampleSearchResultsDefaultIndex
>(`${apiEndpoint}/en/jsonapi/index/example_index`, (req, res, ctx) => {
	if (req.url.searchParams.get('filter[fulltext]') === 'chocolate') {
		return res(ctx.status(200), ctx.json(exampleSearchResultsDefaultIndex));
	}
	return;
});
const exampleSearchResultsResponseHandler = rest.get<
	typeof exampleSearchResultsAltIndex
>(`${apiEndpoint}/en/jsonapi/index/articles_index`, (req, res, ctx) => {
	if (req.url.searchParams.get('filter[fulltext]') === 'milk') {
		return res(ctx.status(200), ctx.json(exampleSearchResultsAltIndex));
	}
	return;
});

const invalidSearchResultsResponseHandler = rest.get<{}>(
	`${apiEndpoint}/en/jsonapi/index/invalid_index`,
	(req, res, ctx) => {
		if (req.url.searchParams.get('filter[fulltext]') === 'chocolate') {
			return res(ctx.status(404), ctx.json({}));
		}
		return;
	},
);

export const getDrupalSearchResultsResponseHandlers = [
	defaultSearchResultsResponseHandler,
	exampleSearchResultsResponseHandler,
	invalidSearchResultsResponseHandler,
];
