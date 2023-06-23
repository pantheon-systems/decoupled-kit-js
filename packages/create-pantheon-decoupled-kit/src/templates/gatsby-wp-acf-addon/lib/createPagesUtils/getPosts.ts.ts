import type { TemplateFn } from '@cli/types';
import { wpPostsQuery } from '@partials/gatsby-wp/wpPostsQuery';

const ts: TemplateFn = ({
	utils,
}) => /* ts */ `import { type GatsbyGraphQLHelper } from '../types';

/**
 * Query the Gatsby GraphQL layer for WordPress Posts
 * @param args.graphql - {@link CreatePagesArgs['graphql']}
 * @param args.reporter - {@link CreatePagesArgs['reporter']}
 * @returns - {@link Queries.WpPostConnection['edges']}
 */
export const getPosts = async ({
	graphql,
	reporter,
}: GatsbyGraphQLHelper): Promise<Queries.WpPostConnection['edges'] | void> => {
	const graphqlResult = await graphql<{
		allWpPost: Queries.WpPostConnection;
	}>(/* GraphQL */ ${utils.backticks(wpPostsQuery(true))});

	if (graphqlResult.errors) {
		reporter.panicOnBuild(
			'There was an error loading your posts',
			graphqlResult.errors as Error,
		);
		return;
	}

	if (graphqlResult?.data?.allWpPost?.edges) {
		return graphqlResult.data?.allWpPost?.edges;
	} else {
		reporter.error('No Posts data found.');
		return;
	}
};
`;

export default ts;
