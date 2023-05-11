import { ServerResponse } from 'node:http';
import { vi } from 'vitest';
import { DrupalState } from '../src/lib/PantheonDrupalState.js';
import indexResponse from './data/apiIndex.json';
import recipesCollectionObject1 from './data/recipesCollectionObject1.json';
import recipesCollectionObject1WithParams from './data/recipesCollectionObject1WithParams.json';
import recipesResourceObject from './data/recipesResourceObject.json';
import recipesResourceObject1 from './data/recipesResourceObject1.json';
import tokenResponse from './data/token.json';

const mockCustomOnError = vi.fn((err: Error) => {
	console.log('There was an error!');
	console.error(err.message);
});

const mockResponse = () => {
	const res = {
		setHeader: vi.fn(),
	};
	return res;
};

describe('drupalState', () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});

	it('Fetch resource if it does not exist in state', async () => {
		const store: DrupalState = new DrupalState({
			apiBase: 'https://default.pantheonsite.io',
			apiPrefix: 'jsonapi',
			debug: true,
		});
		const fetchSpy = vi.spyOn(store, 'fetchAdapter');
		store.setState({ dsApiIndex: indexResponse.links });
		expect(
			await store.getObject({
				objectName: 'node--recipe',
				id: '33386d32-a87c-44b9-b66b-3dd0bfc38dca',
			}),
		).toEqual(recipesResourceObject1);
		expect(fetchSpy).toHaveBeenCalledTimes(1);
	});

	it('Fetch API index and object if they do not exist in local storage', async () => {
		const store: DrupalState = new DrupalState({
			apiBase: 'https://default.pantheonsite.io',
			apiPrefix: 'jsonapi',
			debug: true,
		});
		const fetchSpy = vi.spyOn(store, 'fetchAdapter');
		expect(await store.getObject({ objectName: 'node--recipe' })).toEqual(
			recipesCollectionObject1,
		);
		expect(fetchSpy).toHaveBeenCalledTimes(2);
	});

	it('Fetch resource with authentication', async () => {
		const store: DrupalState = new DrupalState({
			apiBase: 'https://default.pantheonsite.io',
			apiPrefix: 'jsonapi',
			clientId: '9adc9c69-fa3b-4c21-9cef-fbd345d1a269',
			clientSecret: 'mysecret',
			debug: true,
		});
		const fetchSpy = vi.spyOn(store, 'fetchAdapter');
		store.setState({ dsApiIndex: indexResponse.links });
		expect(await store['getAuthHeader']()).toEqual(
			`${tokenResponse.token_type} ${tokenResponse.access_token}`,
		);
		expect(
			await store.getObject({
				objectName: 'node--recipe',
				id: '33386d32-a87c-44b9-b66b-3dd0bfc38dca',
			}),
		).toEqual(recipesResourceObject1);
		expect(fetchSpy).toHaveBeenCalledTimes(2);
	});

	it('Fetch resource object if they do not exist in local storage', async () => {
		const store: DrupalState = new DrupalState({
			apiBase: 'https://default.pantheonsite.io',
			apiPrefix: 'jsonapi',
			debug: true,
		});
		const fetchSpy = vi.spyOn(store, 'fetchAdapter');
		store.setState({ dsApiIndex: indexResponse.links });
		expect(
			await store.getObject({
				objectName: 'node--recipe',
				id: '50c3e7c9-64a9-453c-9289-278132beb4a2',
			}),
		).toEqual(recipesResourceObject);
		expect(fetchSpy).toHaveBeenCalledTimes(1);
	});

	it.fails(
		'Custom onError handler should be called if an error is thrown',
		async () => {
			const store: DrupalState = new DrupalState({
				apiBase: 'https://default.pantheonsite.io',
				apiPrefix: 'jsonapi',
				debug: true,
				onError: mockCustomOnError,
			});
			const fetchSpy = vi.spyOn(store, 'fetchAdapter');
			store.setState({ dsApiIndex: indexResponse.links });
			const result = await store.getObject({
				objectName: 'node--recie',
			});
			expect(result).toThrowError();
			expect(result).toEqual(undefined);
			expect(fetchSpy).toHaveBeenCalledTimes(1);
			expect(mockCustomOnError).toBeCalledTimes(1);
		},
	);

	it('Confirm that cache control header is set if response object is provided', async () => {
		const store: DrupalState = new DrupalState({
			apiBase: 'https://default.pantheonsite.io',
			apiPrefix: 'jsonapi',
			debug: true,
		});
		const fetchSpy = vi.spyOn(store, 'fetchAdapter');
		const res = mockResponse();
		store.setState({ dsApiIndex: indexResponse.links });
		expect(
			await store.getObject({
				objectName: 'node--recipe',
				id: '33386d32-a87c-44b9-b66b-3dd0bfc38dca',
				res: res as unknown as ServerResponse,
			}),
		).toEqual(recipesResourceObject1);
		expect(res.setHeader.mock.calls[0][0]).toBe('Cache-Control');
		expect(res.setHeader.mock.calls[0][1]).toBe('public, s-maxage=600');
		expect(fetchSpy).toHaveBeenCalledTimes(1);
	});

	it('Fetch object with params', async () => {
		const store: DrupalState = new DrupalState({
			apiBase: 'https://default.pantheonsite.io',
			apiPrefix: 'jsonapi',
			debug: true,
		});
		store.setState({ dsApiIndex: indexResponse.links });
		const fetchSpy = vi.spyOn(store, 'fetchAdapter');
		expect(
			await store.getObject({
				objectName: 'node--recipe',
				id: '33386d32-a87c-44b9-b66b-3dd0bfc38dca',
				params: 'fields[node--recipe]=title',
			}),
		).toEqual(recipesCollectionObject1WithParams);
		expect(fetchSpy).toHaveBeenCalledTimes(1);
	});
});
