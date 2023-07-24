import { type CreatePagesArgs } from 'gatsby';
import chunk from 'lodash/chunk';

export const createPostArchive = ({
	posts,
	createPage,
	postsPerPage,
	componentPath,
}: {
	posts: readonly Queries.WpPostEdge[];
	createPage: CreatePagesArgs['actions']['createPage'];
	postsPerPage: number;
	componentPath: string;
}) => {
	const postsChunkedIntoArchivePages = chunk(posts, postsPerPage);

	postsChunkedIntoArchivePages.forEach((_: unknown, index: number) => {
		const getPagePath = (page: number) => {
			if (page === 1) {
				return '/';
			} else {
				return `/page/${String(page)}`;
			}
		};
		const pageNumber = index + 1;
		createPage({
			path: getPagePath(pageNumber),
			component: componentPath,
			context: {
				posts,
				offset: index * postsPerPage,
				postsPerPage,
				nextPagePath: getPagePath(pageNumber + 1),
				previousPagePath: getPagePath(pageNumber - 1),
			},
		});
	});
};
