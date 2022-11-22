//import { localhost } from './graphqlLink';
import { graphql } from 'msw';
import basicPostsQueryData from '../../__tests__/data/basicPostsQuery.json';

export const basicPostsQuery = graphql.query<typeof basicPostsQueryData>(
	'BasicPostsQuery',
	(req, res, ctx) => {
		if (req.headers.has('pantheon-debug')) {
			return res(
				ctx.data(basicPostsQueryData),
				ctx.set('Surrogate-Key-Raw', 'post-7 post-1 user-1 graphql-collection'),
			);
		}
		return res(ctx.data(basicPostsQueryData));
	},
);
