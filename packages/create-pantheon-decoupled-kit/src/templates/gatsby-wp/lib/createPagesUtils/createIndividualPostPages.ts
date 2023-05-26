import { type CreatePagesArgs } from 'gatsby';

export const createIndividualPostPages = ({
	posts,
	createPage,
	componentPath,
}: {
	posts: readonly Queries.WpPostEdge[];
	createPage: CreatePagesArgs['actions']['createPage'];
	componentPath: string;
}) => {
	posts.forEach(({ previous, node, next }) => {
		createPage({
			path: `/posts${String(node?.uri)}`,
			component: componentPath,
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
