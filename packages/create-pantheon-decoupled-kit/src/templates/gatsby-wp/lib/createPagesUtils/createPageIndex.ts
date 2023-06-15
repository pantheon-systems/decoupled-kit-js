import { type CreatePagesArgs } from 'gatsby';
import { getPaginationPaths } from './getPaginationPaths';

export const createPageIndex = ({
	pages,
	createPage,
	routing,
	componentPath,
}: {
	pages: readonly Queries.WpPageEdge[];
	createPage: CreatePagesArgs['actions']['createPage'];
	routing: boolean;
	componentPath: string;
}) => {
	const itemsPerPage = 12;

	const totalPages = Math.ceil(pages.length / itemsPerPage);
	// creates an array of length `totalPages + 1`
	Array.from({ length: totalPages + 1 }).forEach((_, i) => {
		createPage({
			path: routing
				? getPaginationPaths({ page: i, route: 'pages' })
				: '/pages',
			component: componentPath,
			context: {
				pages,
				itemsPerPage,
				routing,
			},
		});
	});
};
