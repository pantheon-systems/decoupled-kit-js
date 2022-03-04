jest.mock('isomorphic-fetch', () => require('fetch-mock-jest').sandbox());
const fetchMock = require('isomorphic-fetch');
fetchMock.config.overwriteRoutes = true;
global.Headers = fetchMock.Headers;

import DrupalState from '../PantheonDrupalState';

import indexResponse from './data/apiIndex.json';
import categoriesCollectionObjectQuery from './data/categoriesCollectionObjectQuery.json';
import categoriesCollectionQueryResponse from './data/categoriesCollectionQueryResponse.json';
import recipes from './data/collection.json';
import recipesCollectionObject1 from './data/recipesCollectionObject1.json';
import recipesResourceData1 from './data/recipesResourceData1.json';
import recipesResourceObject1 from './data/recipesResourceObject1.json';
import recipesResourceQueryData1 from './data/recipesResourceQueryData1.json';
import recipesResourceQueryObject1 from './data/recipesResourceQueryObject1.json';
import tokenResponse from './data/token.json';

describe('drupalState', () => {
  beforeEach(() => {
    fetchMock.mockClear();
  });

  test('Fetch resource if it does not exist in state', async () => {
    const store: DrupalState = new DrupalState({
      apiBase: 'https://live-contentacms.pantheonsite.io',
      apiPrefix: 'api',
      debug: true,
    });
    store.setState({ dsApiIndex: indexResponse.links });
    fetchMock.mock(
      'https://live-contentacms.pantheonsite.io/api/recipes/a542e833-edfe-44a3-a6f1-7358b115af4b',
      {
        status: 200,
        body: recipesResourceData1,
      }
    );
    expect(
      await store.getObject({
        objectName: 'recipes',
        id: 'a542e833-edfe-44a3-a6f1-7358b115af4b',
      })
    ).toEqual(recipesResourceObject1);
    expect(fetchMock).toBeCalledTimes(1);
  });

  test('Fetch API index and object if they do not exist in local storage', async () => {
    const store: DrupalState = new DrupalState({
      apiBase: 'https://live-contentacms.pantheonsite.io',
      apiPrefix: 'api',
      debug: true,
    });
    fetchMock.mock('https://live-contentacms.pantheonsite.io/api/', {
      status: 200,
      body: indexResponse,
    });
    fetchMock.mock('https://live-contentacms.pantheonsite.io/api/recipes', {
      status: 200,
      body: recipes,
    });
    expect(await store.getObject({ objectName: 'recipes' })).toEqual(
      recipesCollectionObject1
    );
    expect(fetchMock).toBeCalledTimes(2);
  });

  test('Fetch resource with authentication', async () => {
    const store: DrupalState = new DrupalState({
      apiBase: 'https://live-contentacms.pantheonsite.io',
      apiPrefix: 'api',
      clientId: '9adc9c69-fa3b-4c21-9cef-fbd345d1a269',
      clientSecret: 'mysecret',
      debug: true,
    });
    store.setState({ dsApiIndex: indexResponse.links });
    fetchMock.mock(
      'https://live-contentacms.pantheonsite.io/api/recipes/a542e833-edfe-44a3-a6f1-7358b115af4b',
      {
        status: 200,
        body: recipesResourceData1,
      },
      { overwriteRoutes: true }
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
      }
    );
    expect(await store['getAuthHeader']()).toEqual(
      `${tokenResponse.token_type} ${tokenResponse.access_token}`
    );
    expect(
      await store.getObject({
        objectName: 'recipes',
        id: 'a542e833-edfe-44a3-a6f1-7358b115af4b',
      })
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
      }
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
      })
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
      { overwriteRoutes: true }
    );
    expect(
      await store.getObject({
        objectName: 'categories',
        query: `{
          name
          id
        }`,
      })
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
      }
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
      }
    );
    expect(await store['getAuthHeader']()).toEqual(
      `${tokenResponse.token_type} ${tokenResponse.access_token}`
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
      })
    ).toEqual(recipesResourceQueryObject1);
    expect(fetchMock).toBeCalledTimes(2);
  });
});
