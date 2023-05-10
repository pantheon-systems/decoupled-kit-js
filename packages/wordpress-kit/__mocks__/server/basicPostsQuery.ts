//import { localhost } from './graphqlLink';
import { graphql } from 'msw';
import basicPostsQueryData from '../../__tests__/data/basicPostsQuery.json';

export const basicPostsQuery = graphql.query<typeof basicPostsQueryData>(
	'BasicPostsQuery',
	(req, res, ctx) => {
		if (req.headers.has('Fastly-Debug')) {
			return res(
				ctx.data(basicPostsQueryData),
				ctx.set(
					'Surrogate-Key',
					'oY1rHsX/3p6DpQK1dAe+ kGUbbVGynpd8ltN0W0Ce CShM/FbGRgcTR9hRB+ak Be0KFtdPtEV9mVlGh8Dq glzcfBFhDdGngbGRhqnD 2dajCGdEluE9JO0ZYeBT',
				),
			);
		}
		return res(ctx.data(basicPostsQueryData));
	},
);
