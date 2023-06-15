import { type CreatePagesArgs } from 'gatsby';

export const createIndividualPagePages = ({
	pages,
	createPage,
	componentPath,
}: {
	pages: readonly Queries.WpPageEdge[];
	createPage: CreatePagesArgs['actions']['createPage'];
	componentPath: string;
}) => {
	pages.forEach(({ previous, node, next }) => {
		// createPage is an action passed to createPages
		// See https://www.gatsbyjs.com/docs/actions#createPage for more info
		createPage({
			path: `/pages${String(node?.uri)}`,
			component: componentPath,
			// `context` is available in the template as a prop and
			// as a variable in GraphQL.
			context: {
				// we need to add the page id here
				// so our page template knows which page
				// the current page is (when you open it in a browser)
				id: node?.id,
				node,
				previous,
				next,
			},
		});
	});
};
