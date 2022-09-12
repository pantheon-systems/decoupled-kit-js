jest.mock('isomorphic-fetch', () => require('fetch-mock-jest').sandbox());
const fetchMock = require('isomorphic-fetch');
fetchMock.config.overwriteRoutes = true;
global.Headers = fetchMock.Headers;

import DrupalState from '../PantheonDrupalState';

import indexResponse from './data/apiIndex.json';
import recipes from './data/collection.json';
import recipesCollectionObject1 from './data/recipesCollectionObject1.json';
import recipesCollectionObject1WithParams from './data/recipesCollectionObject1WithParams.json';
import recipesResourceData1 from './data/recipesResourceData1.json';
import recipesResourceObject1 from './data/recipesResourceObject1.json';
import recipesResourceData from './data/recipesResourceData.json';
import recipesResourceObject from './data/recipesResourceObject.json';
import tokenResponse from './data/token.json';
import recipesResourceData1WithParams from './data/recipesResourceData1WithParams.json';

const mockCustomOnError = jest.fn((err: Error) => {
	console.log('There was an error!');
	console.error(err.message);
});

const mockResponse: any = () => {
	const res = {
		setHeader: jest.fn(),
	};
	return res;
};

describe('drupalState', () => {
	beforeEach(() => {
		fetchMock.mockClear();
	});

  test('Fetch resource if it does not exist in state', async () => {
    const store: DrupalState = new DrupalState({
      apiBase: 'https://dev-ds-demo.pantheonsite.io',
      apiPrefix: 'jsonapi',
      debug: true,
    });
    store.setState({ dsApiIndex: indexResponse.links });
    fetchMock.mock(
      'https://dev-ds-demo.pantheonsite.io/en/jsonapi/node/recipe/33386d32-a87c-44b9-b66b-3dd0bfc38dca',
      {
        status: 200,
        body: recipesResourceData1,
      }
    );
    expect(
      await store.getObject({
        objectName: 'node--recipe',
        id: '33386d32-a87c-44b9-b66b-3dd0bfc38dca',
      })
    ).toEqual(recipesResourceObject1);
    expect(fetchMock).toBeCalledTimes(1);
  });

	test('Fetch API index and object if they do not exist in local storage', async () => {
		const store: DrupalState = new DrupalState({
			apiBase: 'https://dev-ds-demo.pantheonsite.io',
			apiPrefix: 'jsonapi',
			debug: true,
		});
		fetchMock.mock('https://dev-ds-demo.pantheonsite.io/jsonapi/', {
			status: 200,
			body: indexResponse,
		});
		fetchMock.mock(
      'https://dev-ds-demo.pantheonsite.io/en/jsonapi/node/recipe',
      {
  			status: 200,
  			body: recipes,
  		}
    );
		expect(await store.getObject({ objectName: 'node--recipe' })).toEqual(
			recipesCollectionObject1,
		);
		expect(fetchMock).toBeCalledTimes(2);
	});

	test('Fetch resource with authentication', async () => {
		const store: DrupalState = new DrupalState({
			apiBase: 'https://dev-ds-demo.pantheonsite.io',
			apiPrefix: 'jsonapi',
			clientId: '9adc9c69-fa3b-4c21-9cef-fbd345d1a269',
			clientSecret: 'mysecret',
			debug: true,
		});
		store.setState({ dsApiIndex: indexResponse.links });
		fetchMock.mock(
			'https://dev-ds-demo.pantheonsite.io/en/jsonapi/node/recipe/33386d32-a87c-44b9-b66b-3dd0bfc38dca',
			{
				status: 200,
				body: recipesResourceData1,
			},
			{ overwriteRoutes: true },
		);
		fetchMock.mock(
			{
				url: 'https://dev-ds-demo.pantheonsite.io/oauth/token',
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			},
			{
				status: 200,
				body: tokenResponse,
			},
		);
		expect(await store['getAuthHeader']()).toEqual(
			`${tokenResponse.token_type} ${tokenResponse.access_token}`,
		);
		expect(
			await store.getObject({
				objectName: 'node--recipe',
				id: '33386d32-a87c-44b9-b66b-3dd0bfc38dca',
			}),
		).toEqual(recipesResourceObject1);
		expect(fetchMock).toBeCalledTimes(2);
	});

	test('Fetch resource if it does not exist in state', async () => {
		const store: DrupalState = new DrupalState({
			apiBase: 'https://live-contentacms.pantheonsite.io',
			apiPrefix: 'api',
			debug: true,
		});
		store.setState({ dsApiIndex: indexResponse.links });
		fetchMock.mock(
			'https://live-contentacms.pantheonsite.io/api/recipes/912e092f-a7d5-41ae-9e92-e23ffa357b28?fields%5Brecipes%5D=title%2Cdifficulty%2Cid',
			{
				status: 200,
				body: recipesResourceQueryData1,
			},
		);
		expect(
			await store.getObject({
				objectName: 'recipes',
				id: '912e092f-a7d5-41ae-9e92-e23ffa357b28',
				query: `{
          title
          difficulty
          id
        }`,
			}),
		).toEqual(recipesResourceQueryObject1);
		expect(fetchMock).toBeCalledTimes(1);
	});

	test('Fetch resource object if they do not exist in local storage', async () => {
		const store: DrupalState = new DrupalState({
			apiBase: 'https://live-contentacms.pantheonsite.io',
			apiPrefix: 'api',
			debug: true,
		});
		store.setState({ dsApiIndex: indexResponse.links });
		fetchMock.mock(
			'https://live-contentacms.pantheonsite.io/api/categories?fields%5Bcategories%5D=name%2Cid',
			{
				status: 200,
				body: categoriesCollectionQueryResponse,
			},
			{ overwriteRoutes: true },
		);
		expect(
			await store.getObject({
				objectName: 'categories',
				query: `{
          name
          id
        }`,
			}),
		).toEqual(categoriesCollectionObjectQuery);
		expect(fetchMock).toBeCalledTimes(1);
	});

	test('Fetch resource using query and authentication', async () => {
		const store: DrupalState = new DrupalState({
			apiBase: 'https://live-contentacms.pantheonsite.io',
			apiPrefix: 'api',
			clientId: '9adc9c69-fa3b-4c21-9cef-fbd345d1a269',
			clientSecret: 'mysecret',
			debug: true,
		});
		store.setState({ dsApiIndex: indexResponse.links });
		fetchMock.mock(
			'https://live-contentacms.pantheonsite.io/api/recipes/912e092f-a7d5-41ae-9e92-e23ffa357b28?fields%5Brecipes%5D=title%2Cdifficulty%2Cid',
			{
				status: 200,
				body: recipesResourceQueryData1,
			},
		);
		fetchMock.mock(
			{
				url: 'https://live-contentacms.pantheonsite.io/oauth/token',
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			},
			{
				status: 200,
				body: tokenResponse,
			},
		);
		expect(await store['getAuthHeader']()).toEqual(
			`${tokenResponse.token_type} ${tokenResponse.access_token}`,
		);
		expect(
			await store.getObject({
				objectName: 'recipes',
				id: '912e092f-a7d5-41ae-9e92-e23ffa357b28',
				query: `{
          title
          difficulty
          id
        }`,
			}),
		).toEqual(recipesResourceQueryObject1);
		expect(fetchMock).toBeCalledTimes(2);
	});

  test('Custom onError handler should be called if an error is thrown', async () => {
    const store: DrupalState = new DrupalState({
      apiBase: 'https://dev-ds-demo.pantheonsite.io',
      apiPrefix: 'jsonapi',
      debug: true,
      onError: mockCustomOnError,
    });
    store.setState({ dsApiIndex: indexResponse.links });
    fetchMock.mock(
      'https://dev-ds-demo.pantheonsite.io/jsonapi/node/recpe',
      {
        status: 404,
        body: {},
      },
      { overwriteRoutes: true }
    );
    const result = await store.getObject({
      objectName: 'node--recie',
    });
    try {
      expect(result).toThrowError();
      expect(result).toEqual(undefined);
    } catch (error) {
      expect(mockCustomOnError).toBeCalledTimes(1);
    }
  });

  test('Confirm that cache control header is set if response object is provided', async () => {
    const store: DrupalState = new DrupalState({
      apiBase: 'https://dev-ds-demo.pantheonsite.io',
      apiPrefix: 'jsonapi',
      debug: true,
    });
    const res = mockResponse();
    store.setState({ dsApiIndex: indexResponse.links });
    fetchMock.mock(
      'https://dev-ds-demo.pantheonsite.io/en/jsonapi/node/recipe/33386d32-a87c-44b9-b66b-3dd0bfc38dca',
      {
        status: 200,
        body: recipesResourceData1,
      }
    );
    expect(
      await store.getObject({
        objectName: 'node--recipe',
        id: '33386d32-a87c-44b9-b66b-3dd0bfc38dca',
        res: res,
      })
    ).toEqual(recipesResourceObject1);
    expect(fetchMock).toBeCalledTimes(1);
    expect(res.setHeader.mock.calls[0][0]).toBe('Cache-Control');
    expect(res.setHeader.mock.calls[0][1]).toBe(
      'public, s-maxage=10, stale-while-revalidate=600'
    );
  });

  test('Fetch object with params', async () => {
    const store: DrupalState = new DrupalState({
      apiBase: 'https://dev-ds-demo.pantheonsite.io',
      apiPrefix: 'jsonapi',
      debug: true,
    });
    store.setState({ dsApiIndex: indexResponse.links });
    fetchMock.mock(
      'https://dev-ds-demo.pantheonsite.io/en/jsonapi/node/recipe/33386d32-a87c-44b9-b66b-3dd0bfc38dca?fields%5Bnode--recipe%5D=title',
      {
        status: 200,
        body: recipesResourceData1WithParams,
      }
    );
    expect(
      await store.getObject({
        objectName: 'node--recipe',
        id: '33386d32-a87c-44b9-b66b-3dd0bfc38dca',
        params: 'fields[node--recipe]=title',
      })
    ).toEqual(recipesCollectionObject1WithParams);
    expect(fetchMock).toBeCalledTimes(1);
  });
});
