import { rest } from 'msw';
import indexResponse from '../../__tests__/data/apiIndex.json';
import recipes from '../../__tests__/data/collection.json';
import recipesResourceData from '../../__tests__/data/recipesResourceData.json';
import recipesResourceData1 from '../../__tests__/data/recipesResourceData1.json';
import recipesResourceData1WithParams from '../../__tests__/data/recipesResourceData1WithParams.json';
import tokenResponse from '../../__tests__/data/token.json';

const apiEndpoint = 'https://default.pantheonsite.io';

const indexResponseHandler = rest.get<typeof indexResponse>(
	`${apiEndpoint}/jsonapi`,
	(_, res, ctx) => {
		return res(ctx.status(200), ctx.json(indexResponse));
	},
);
const recipesResponseHandler = rest.get<typeof recipes>(
	`${apiEndpoint}/en/jsonapi/node/recipe`,
	(_, res, ctx) => {
		return res(ctx.status(200), ctx.json(recipes));
	},
);
const recipesResourceDataResponseHandler = rest.get<typeof recipesResourceData>(
	`${apiEndpoint}/en/jsonapi/node/recipe/50c3e7c9-64a9-453c-9289-278132beb4a2`,
	(_, res, ctx) => {
		return res(ctx.status(200), ctx.json(recipesResourceData));
	},
);
const recipesResourceData1ResponseHandler = rest.get<
	typeof recipesResourceData1WithParams | typeof recipesResourceData1
>(
	`${apiEndpoint}/en/jsonapi/node/recipe/33386d32-a87c-44b9-b66b-3dd0bfc38dca`,
	(req, res, ctx) => {
		if (req.url.searchParams.get('fields[node--recipe]')) {
			return res(ctx.status(200), ctx.json(recipesResourceData1WithParams));
		}
		return res(ctx.status(200), ctx.json(recipesResourceData1));
	},
);
const oauthTokenResponseHandler = rest.post<typeof tokenResponse>(
	`${apiEndpoint}/oauth/token`,
	(_, res, ctx) => {
		return res(ctx.status(200), ctx.json(tokenResponse));
	},
);

export const drupalStateResponseHandlers = [
	indexResponseHandler,
	recipesResponseHandler,
	recipesResourceDataResponseHandler,
	recipesResourceData1ResponseHandler,
	oauthTokenResponseHandler,
];
