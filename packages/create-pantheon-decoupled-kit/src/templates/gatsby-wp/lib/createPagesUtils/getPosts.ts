import { type GatsbyGraphQLHelper } from '../types';

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
	}>(/* GraphQL */ `
		query WpPosts {
			# Query all WordPress posts sorted by date
			allWpPost(sort: { date: DESC }) {
				edges {
					previous {
						id
						title
						uri
					}
					node {
						id
						uri
						title
						content
						date
						excerpt
						featuredImage {
							node {
								localFile {
									childImageSharp {
										gatsbyImageData(
											placeholder: TRACED_SVG
											aspectRatio: 1.77778 # 16/9
										)
									}
								}
							}
						}
					}
					next {
						id
						title
						uri
					}
				}
			}
		}
	`);

	if (graphqlResult.errors) {
		reporter.panicOnBuild(
			`There was an error loading your posts`,
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
