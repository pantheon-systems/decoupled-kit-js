import { rest } from 'msw';

const endpoint = 'https://drupal.test';

const jsonapiIndexHandler = rest.get(`${endpoint}/jsonapi`, (_, res, ctx) =>
	res(ctx.status(200)),
);

const authHandler = rest.post(`${endpoint}/oauth/token`, (req, res, ctx) => {
	if (
		req.url.searchParams.get('client_id') &&
		req.url.searchParams.get('client_secret')
	) {
		return res(ctx.status(200), ctx.json({ access_token: 'abc123' }));
	} else {
		return res(ctx.status(401));
	}
});

const decoupledRouterHandler = rest.get(
	`${endpoint}/router/translate-path`,
	(req, res, ctx) => res(ctx.status(200)),
);

const defaultLanguageSettingsHandler = rest.get(
	`${endpoint}/jsonapi/configurable_language/configurable_language`,
	(req, res, ctx) => res(ctx.status(404)),
);

const umamiLanguageSettingsHandler = rest.get(
	`https://umami.drupal.test/jsonapi/configurable_language/configurable_language`,
	(req, res, ctx) => res(ctx.status(200)),
);

const menuItemHandler = rest.get(
	`${endpoint}/jsonapi/menu_items/footer`,
	(req, res, ctx) => res(ctx.status(200)),
);

const previewHandler = rest.get(
	`${endpoint}/node/1/preview`,
	(req, res, ctx) => {
		if (req.headers.get('Authorization')) {
			return res(ctx.status(200));
		} else {
			return res(ctx.status(401));
		}
	},
);

export const drupalRequestHandlers = [
	jsonapiIndexHandler,
	authHandler,
	decoupledRouterHandler,
	defaultLanguageSettingsHandler,
	umamiLanguageSettingsHandler,
	menuItemHandler,
	previewHandler,
];
