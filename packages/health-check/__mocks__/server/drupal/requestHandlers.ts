import { rest } from 'msw';

const endpoint = 'https://drupal.test';
const umamiEndpoint = 'https://umami.drupal.test';
const invalidEndpoint = 'https://invalid.drupal.test';

const jsonapiIndexHandler = rest.get(
	`${endpoint}/jsonapi`,
	() => new Response(null, { status: 200 }),
);

const invalidJsonapiIndexHandler = rest.get(
	`${invalidEndpoint}/jsonapi`,
	() => new Response(null, { status: 404 }),
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

const umamiDecoupledRouterHandler = rest.get(
	`${umamiEndpoint}/router/translate-path`,
	() => new Response(null, { status: 200 }),
);

const invalidDecoupledRouterHandler = rest.get(
	`${invalidEndpoint}/router/translate-path`,
	() => new Response(null, { status: 404 }),
);

const defaultLanguageSettingsHandler = rest.get(
	`${endpoint}/jsonapi/configurable_language/configurable_language`,
	() => new Response(null, { status: 404 }),
);

const umamiLanguageSettingsHandler = rest.get(
	`${umamiEndpoint}/jsonapi/configurable_language/configurable_language`,
	() => new Response(null, { status: 200 }),
);

const menuItemHandler = rest.get(
	`${endpoint}/jsonapi/menu_items/footer`,
	() => new Response(null, { status: 200 }),
);

const invalidMenuItemHandler = rest.get(
	`${invalidEndpoint}/jsonapi/menu_items/footer`,
	() => new Response(null, { status: 404 }),
);

const previewHandler = rest.get(`${endpoint}/node/1/preview`, ({ request }) => {
	if (request.headers.get('Authorization')?.endsWith('Bearer')) {
		return new Response(null, { status: 401 });
	} else {
		return new Response(null, { status: 200 });
	}
});

export const drupalRequestHandlers = [
	jsonapiIndexHandler,
	invalidJsonapiIndexHandler,
	authHandler,
	decoupledRouterHandler,
	umamiDecoupledRouterHandler,
	invalidDecoupledRouterHandler,
	invalidMenuItemHandler,
	defaultLanguageSettingsHandler,
	umamiLanguageSettingsHandler,
	menuItemHandler,
	previewHandler,
];
