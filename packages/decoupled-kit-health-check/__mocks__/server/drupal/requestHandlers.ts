import { http } from 'msw';

const endpoint = 'https://drupal.test';
const umamiEndpoint = 'https://umami.drupal.test';
const invalidEndpoint = 'https://invalid.drupal.test';

const jsonapiIndexHandler = http.get(
	`${endpoint}/jsonapi`,
	() => new Response(null, { status: 200 }),
);

const invalidJsonapiIndexHandler = http.get(
	`${invalidEndpoint}/jsonapi`,
	() => new Response(null, { status: 404 }),
);

const authHandler = http.post(`${endpoint}/oauth/token`, ({ request }) => {
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

const decoupledRouterHandler = http.get(
	`${endpoint}/router/translate-path`,
	() =>
		new Response(
			JSON.stringify({
				message:
					'unable to translate empty path. Please send a ?path query string parameter with your request.',
			}),
			{ status: 404 },
		),
);

const umamiDecoupledRouterHandler = http.get(
	`${umamiEndpoint}/router/translate-path`,
	() =>
		new Response(
			JSON.stringify({
				message:
					'Unable to translate empty path. Please send a ?path query string parameter with your request.',
			}),
			{ status: 404 },
		),
);

const invalidDecoupledRouterHandler = http.get(
	`${invalidEndpoint}/router/translate-path`,
	() =>
		new Response(
			'<html><body><h1>Some html to mock the 404 response without decoupled router</h1></body></html>',
			{ status: 404 },
		),
);

const defaultLanguageSettingsHandler = http.get(
	`${endpoint}/jsonapi/configurable_language/configurable_language`,
	() => new Response(null, { status: 404 }),
);
const invalidLanguageSettingsHandler = http.get(
	`${invalidEndpoint}/jsonapi/configurable_language/configurable_language`,
	() => new Response(null, { status: 404 }),
);

const umamiLanguageSettingsHandler = http.get(
	`${umamiEndpoint}/jsonapi/configurable_language/configurable_language`,
	() => new Response(null, { status: 200 }),
);

const menuItemHandler = http.get(
	`${endpoint}/jsonapi/menu_items/footer`,
	() => new Response(null, { status: 200 }),
);

const invalidMenuItemHandler = http.get(
	`${invalidEndpoint}/jsonapi/menu_items/footer`,
	() => new Response(null, { status: 404 }),
);

const previewHandler = http.get(`${endpoint}/node/1/preview`, ({ request }) => {
	if (request.headers.get('Authorization')?.endsWith('Bearer')) {
		return new Response(null, { status: 401 });
	} else {
		return new Response(null, { status: 200 });
	}
});

export const drupalRequestHandlers = [
	jsonapiIndexHandler,
	invalidJsonapiIndexHandler,
	invalidLanguageSettingsHandler,
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
