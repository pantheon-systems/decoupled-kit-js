import { type CreatePagesArgs } from 'gatsby';
import { getPaginationPaths } from './getPaginationPaths';

export const createPostIndex = ({
	posts,
	createPage,
	routing,
	componentPath,
}: {
	posts: readonly Queries.WpPostEdge[];
	createPage: CreatePagesArgs['actions']['createPage'];
	routing: boolean;
	componentPath: string;
}) => {
	const itemsPerPage = 12;
	const totalPages = Math.ceil(posts.length / itemsPerPage);
	// creates an array of length `totalPages + 1`
	Array.from({ length: totalPages + 1 }).map((_, pageNumber) => {
		createPage({
			path: routing
				? getPaginationPaths({ page: pageNumber, route: 'posts' })
				: '/posts',
			component: componentPath,
			context: {
				posts,
				itemsPerPage,
				routing,
			},
		});
	});
};
