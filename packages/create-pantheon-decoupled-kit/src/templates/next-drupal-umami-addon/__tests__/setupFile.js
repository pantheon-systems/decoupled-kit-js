import { setupServer } from 'msw/node';
import { rest } from 'msw';

import umamiEnApiIndex from './data/umamiEnApiIndex.json';
import umamiEnArticles from './data/umamiEnArticles.json';
import umamiEsApiIndex from './data/umamiEsApiIndex.json';
import umamiEsArticles from './data/umamiEsArticles.json';
import umamiPreview from './data/umamiPreview.json';
import umamiEsPreview from './data/umamiEsPreview.json';

import oauthToken from './data/oauthToken.json';

const umamiProfileHandlers = [
	{
		endpoint: 'https://umami/en/jsonapi/',
		mockData: umamiEnApiIndex,
		method: 'get',
		status: 200,
	},
	{
		endpoint: 'https://umami/es/jsonapi/',
		mockData: umamiEsApiIndex,
		method: 'get',
		status: 200,
	},
	{
		endpoint: 'https://umami/en/jsonapi/node/article',
		mockData: umamiEnArticles,
		method: 'get',
		status: 200,
	},
	{
		endpoint: 'https://umami/es/jsonapi/node/article',
		mockData: umamiEsArticles,
		method: 'get',
		status: 200,
	},
	{
		endpoint:
			'https://umami/en/jsonapi/decoupled-preview/1_00517b73-f66c-43eb-93b1-444a68ab97d8',
		mockData: umamiPreview,
		method: 'get',
		status: 200,
	},
	{
		endpoint: 'https://umami/es/jsonapi/decoupled-preview/12',
		mockData: umamiEsPreview,
		method: 'get',
		status: 200,
	},
	{
		endpoint: 'https://umami/en/jsonapi/decoupled-preview/xxxx',
		method: 'get',
		status: 404,
	},
];

const sharedHandlers = [
	{
		endpoint: `https://umami/oauth/token`,
		mockData: oauthToken,
		method: 'post',
		status: 200,
	},
];

//construct restHandlers
export const restHandlers = [...umamiProfileHandlers, ...sharedHandlers].map(
	({ endpoint, mockData, method, status }) => {
		return rest[method](endpoint, (req, res, ctx) => {
			return res(ctx.status(status), ctx.json(mockData));
		});
	},
);

process.env = {
	...process.env,
	__NEXT_IMAGE_OPTS: {
		deviceSizes: [320, 420, 768, 1024, 1200],
		imageSizes: [],
		domains: 'umami',
		path: '/_next/image',
		loader: 'default',
	},
};

const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
