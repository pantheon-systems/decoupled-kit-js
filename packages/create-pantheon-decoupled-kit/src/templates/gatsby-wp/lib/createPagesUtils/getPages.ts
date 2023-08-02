import { GatsbyGraphQLHelper } from '../types';

/**
 * Query the Gatsby GraphQL layer for WordPress Pages
 * @param args.graphql - {@link CreatePagesArgs['graphql']}
 * @returns - {@link Queries.WpPageConnection['edges']}
 */
export const getPages = async ({
	graphql,
	reporter,
}: GatsbyGraphQLHelper): Promise<Queries.WpPageConnection['edges'] | void> => {
	const graphqlResult = await graphql<{
		allWpPage: Queries.WpPageConnection;
	}>(/* GraphQL */ `
		query WpPages {
			allWpPage(sort: { date: DESC }) {
				edges {
					previous {
						id
						title
						uri
					}
					node {
						id
						title
						uri
						content
						date
						featuredImage {
							node {
								localFile {
									childImageSharp {
										gatsbyImageData(
											layout: CONSTRAINED
											placeholder: DOMINANT_COLOR
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
			'There was an error loading your pages',
			graphqlResult.errors as Error,
		);
		return;
	}

	if (graphqlResult?.data?.allWpPage?.edges) {
		return graphqlResult.data.allWpPage.edges;
	} else {
		reporter.error('No Pages data found.');
		return;
	}
};
