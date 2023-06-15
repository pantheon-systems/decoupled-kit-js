import { GatsbyGraphQLHelper } from '../types';

/**
 *
 * @param args.graphql - {@link CreatePagesArgs['graphql']}
 * @param args.reporter - {@link CreatePagesArgs['reporter']}
 * @returns - {@link Queries.WpReadingSettings['postsPerPage']}
 */
export const getPostsPerPage = async ({
	graphql,
	reporter,
}: GatsbyGraphQLHelper): Promise<
	Queries.WpReadingSettings['postsPerPage'] | void
> => {
	const graphqlResult = await graphql<{
		wp: {
			readingSettings: {
				postsPerPage: Queries.WpReadingSettings['postsPerPage'];
			};
		};
	}>(/* GraphQL */ `
		{
			wp {
				readingSettings {
					postsPerPage
				}
			}
		}
	`);

	if (graphqlResult.errors) {
		reporter.panicOnBuild(
			'There was an error querying for WpReadingSettings',
			graphqlResult.errors as Error,
		);
		return;
	}

	if (graphqlResult?.data?.wp?.readingSettings?.postsPerPage) {
		return graphqlResult.data.wp.readingSettings.postsPerPage;
	} else {
		reporter.error('Data for postsPerPage not found.');
		return;
	}
};
