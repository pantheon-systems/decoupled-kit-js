import { rest } from 'msw';

const endpoint = 'https://drupal.test';
const invalidEndpoint = 'https://invalid.drupal.test';

const jsonapiIndexHandler = rest.get(
	`${endpoint}/jsonapi`,
	() => new Response(null, { status: 200 }),
);
const invalidJsonapiIndexHandler = rest.get(
	`${endpoint}/jsonapi`,
	() => new Response(null, { status: 200 }),
);

const authHandler = rest.post(`${endpoint}/oauth/token`, ({ request }) => {
	const url = new URL(request.url);
	if (
		url.searchParams.get('client_id') &&
		url.searchParams.get('client_secret')
	) {
		return new Response(JSON.stringify({ access_token: 'abc123' }), {
			status: 200,
		});
	} else {
		return new Response(null, {
			status: 401,
		});
	}
});

const decoupledRouterHandler = rest.get(
	`${endpoint}/router/translate-path`,
	() => new Response(null, { status: 200 }),
);

const defaultLanguageSettingsHandler = rest.get(
	`${endpoint}/jsonapi/configurable_language/configurable_language`,
	() => new Response(null, { status: 404 }),
);

const umamiLanguageSettingsHandler = rest.get(
	`https://umami.drupal.test/jsonapi/configurable_language/configurable_language`,
	() => new Response(null, { status: 200 }),
);

const menuItemHandler = rest.get(
	`${endpoint}/jsonapi/menu_items/footer`,
	() => new Response(null, { status: 200 }),
);

const previewHandler = rest.get(`${endpoint}/node/1/preview`, ({ request }) => {
	if (request.headers.get('Authorization')) {
		return new Response(null, { status: 200 });
	} else {
		return new Response(null, { status: 401 });
	}
});

export const drupalRequestHandlers = [
	jsonapiIndexHandler,
	authHandler,
	decoupledRouterHandler,
	defaultLanguageSettingsHandler,
	umamiLanguageSettingsHandler,
	menuItemHandler,
	previewHandler,
];
