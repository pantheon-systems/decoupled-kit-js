// import { RequestHandler, rest } from 'msw';
// import { setupServer } from 'msw/node';
import { server } from '../__mocks__/server';
// import indexResponse from '../__tests__/data/apiIndex.json';
// import recipes from '../__tests__/data/collection.json';
// import recipesCollectionObject1 from '../__tests__/data/recipesCollectionObject1.json';
// import recipesCollectionObject1WithParams from '../__tests__/data/recipesCollectionObject1WithParams.json';
// import recipesResourceData1 from '../__tests__/data/recipesResourceData1.json';
// import recipesResourceObject1 from '../__tests__/data/recipesResourceObject1.json';
// import recipesResourceData from '../__tests__/data/recipesResourceData.json';
// import recipesResourceObject from '../__tests__/data/recipesResourceObject.json';
// import tokenResponse from '../__tests__/data/token.json';
// import recipesResourceData1WithParams from '../__tests__/data/recipesResourceData1WithParams.json';
// import exampleSearchResultsDefaultIndex from '../__tests__/data/exampleSearchResultsAltIndex.json';
// import exampleSearchResultsAltIndex from '../__tests__/data/exampleSearchResultsAltIndex.json';
// const defaultProfileHandlers = [
// 	{
// 		endpoint: 'https://dev-ds-demo.pantheonsite.io/en/jsonapi/node/recipe',
// 		mockData: recipes,
// 		method: 'get',
// 		status: 200,
// 	},
// 	{
// 		endpoint:
// 			'https://dev-ds-demo.pantheonsite.io/en/jsonapi/node/recipe/50c3e7c9-64a9-453c-9289-278132beb4a2',
// 		mockData: recipesResourceData,
// 		method: 'get',
// 		status: 200,
// 	},
// 	{
// 		endpoint:
// 			'https://dev-ds-demo.pantheonsite.io/en/jsonapi/node/recipe/33386d32-a87c-44b9-b66b-3dd0bfc38dca',
// 		method: 'get',
// 		mockData: recipesResourceData1,
// 		status: 200,
// 	},
// 	{
// 		endpoint:
// 			'https://dev-ds-demo.pantheonsite.io/en/jsonapi/node/recipe/33386d32-a87c-44b9-b66b-3dd0bfc38dca',
// 		method: 'get',
// 		params: 'fields%5Bnode--recipe%5D=title',
// 		mockData: recipesResourceData1WithParams,
// 		status: 200,
// 	},
// 	{
// 		endpoint: `https://dev-ds-demo.pantheonsite.io/oauth/token`,
// 		mockData: tokenResponse,
// 		method: 'post',
// 		status: 200,
// 	},
// 	{
// 		endpoint: 'https://dev-ds-demo.pantheonsite.io/jsonapi/node/recpe',
// 		mockData: {},
// 		method: 'get',
// 		status: 404,
// 	},
// ];

// //construct restHandlers
// export const restHandlers = [...defaultProfileHandlers].map(
// 	({ endpoint, mockData, method, status, params }) => {
// 		//eslint-disable-next-line
// 		return rest[method](endpoint, (req, res, ctx) => {
// 			if (params) {
// 				console.log(params);
// 				new RegExp(params).test(req.url.searchParams.get(params));
// 			}
// 			return res(ctx.status(status), ctx.json(mockData));
// 		});
// 	},
// );

// const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => {
	server.listen({ onUnhandledRequest: 'error' });
});

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
