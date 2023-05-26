import { type CreatePagesArgs } from 'gatsby';
import path from 'node:path';
import {
	createAuthApiPage,
	createExamplesPage,
	createIndividualPagePages,
	createIndividualPostPages,
	createPageIndex,
	createPaginationExamplePage,
	createPostArchive,
	createPostIndex,
	getPages,
	getPosts,
	getPostsPerPage,
} from './lib/createPagesUtils';
import { paginationPostsQuery } from './lib/paginationPostsQuery';
import { privatePostsQuery } from './lib/privatePostsQuery';

export const createPages = async ({
	actions: { createPage },
	graphql,
	reporter,
}: {
	actions: { createPage: CreatePagesArgs['actions']['createPage'] };
	graphql: CreatePagesArgs['graphql'];
	reporter: CreatePagesArgs['reporter'];
}) => {
	const paginationPosts = await paginationPostsQuery();
	const privatePosts = await privatePostsQuery();
	const pagesPages = await getPages({ graphql, reporter });
	const postPages = await getPosts({ graphql, reporter });
	let postsPerPage = await getPostsPerPage({ graphql, reporter });
	if (typeof postsPerPage === 'number') {
		postsPerPage = Number(postsPerPage);
	} else {
		postsPerPage = 12;
	}

	const routing = true;

	// create the pages at /pages
	if (pagesPages?.length) {
		// /page/
		createIndividualPagePages({
			pages: pagesPages,
			createPage,
			componentPath: path.resolve(`./src/templates/page.tsx`),
		});
		// page/[page]
		createPageIndex({
			pages: pagesPages,
			createPage,
			routing,
			componentPath: path.resolve(`./src/templates/pagesIndex.jsx`),
		});
	}

	// create the pages at /posts
	if (postPages?.length) {
		createPostArchive({
			posts: postPages,
			createPage,
			postsPerPage,
			componentPath: path.resolve(`./src/templates/index.tsx`),
		});
		// /post/[post]
		createIndividualPostPages({
			posts: postPages,
			createPage,
			componentPath: path.resolve(`./src/templates/post.tsx`),
		});
		// /post/
		createPostIndex({
			posts: postPages,
			createPage,
			routing,
			componentPath: path.resolve(`./src/templates/postsIndex.jsx`),
		});
		// /examples/pagination
		createPaginationExamplePage({
			posts: paginationPosts,
			createPage,
			routing,
			componentPath: path.resolve(`./src/templates/pagination.jsx`),
		});
	}
	// /examples/
	createExamplesPage({
		createPage,
		routing,
		componentPath: path.resolve('./src/templates/examples.jsx'),
	});
	// /examples/auth-api
	createAuthApiPage({
		createPage,
		privatePosts,
		componentPath: path.resolve('./src/templates/authApi.jsx'),
	});
};
