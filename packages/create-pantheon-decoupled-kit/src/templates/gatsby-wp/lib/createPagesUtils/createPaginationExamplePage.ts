import { type CreatePagesArgs } from 'gatsby';
import chunk from 'lodash/chunk';
import { type Post } from '../types';

export const createPaginationExamplePage = ({
	posts,
	createPage,
	routing,
	componentPath,
}: {
	posts: Post[];
	createPage: CreatePagesArgs['actions']['createPage'];
	routing: boolean;
	componentPath: string;
}) => {
	if (!posts.length) {
		createPage({
			path: '/examples/pagination',
			component: componentPath,
			context: {
				posts,
				postsPerPage: 0,
				routing: false,
				breakpoints: {},
			},
		});
		return;
	}
	const postsPerPage = 5;
	const postsChunkedIntoArchivePages = chunk(posts, postsPerPage);

	postsChunkedIntoArchivePages.forEach((_: unknown, index: number) => {
		const pageNumber = index + 1;
		const getPagePath = (page: number) => {
			return `/examples/pagination/${String(page)}`;
		};

		createPage({
			path: routing ? getPagePath(pageNumber) : '/examples/pagination',
			component: componentPath,
			context: {
				posts,
				postsPerPage,
				routing,
				breakpoints: { start: 4, end: 8, add: 4 },
			},
		});
	});
};
