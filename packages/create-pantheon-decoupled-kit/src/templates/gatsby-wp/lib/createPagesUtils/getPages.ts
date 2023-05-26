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
	const graphqlResult = await graphql<Queries.WpPageConnection>(/* GraphQL */ `
		query WpPages {
			allWpPage(sort: { fields: [date], order: DESC }) {
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
										gatsbyImageData
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

	if (graphqlResult?.data?.allWpPage) {
		return graphqlResult.data.allWpPage.edges;
	} else {
		reporter.error('No Pages data found.');
		return;
	}
};
