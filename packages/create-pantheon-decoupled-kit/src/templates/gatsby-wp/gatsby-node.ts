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
			componentPath: path.resolve(`./src/templates/pageTemplate.tsx`),
		});
		// page/[page]
		createPageIndex({
			pages: pagesPages,
			createPage,
			routing,
			componentPath: path.resolve(`./src/templates/pagesIndex.tsx`),
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
			componentPath: path.resolve(`./src/templates/postTemplate.tsx`),
		});
		// /post/
		createPostIndex({
			posts: postPages,
			createPage,
			routing,
			componentPath: path.resolve(`./src/templates/postsIndex.tsx`),
		});
		// /examples/pagination
		createPaginationExamplePage({
			posts: paginationPosts,
			createPage,
			routing,
			componentPath: path.resolve(`./src/templates/paginationExample.tsx`),
		});
	}
	// /examples/
	createExamplesPage({
		createPage,
		// set routing to false if there are no pagination posts to
		// avoid setting an incorrect link
		routing: paginationPosts.length > 0 ? routing : false,
		componentPath: path.resolve('./src/templates/examples.tsx'),
	});
	// /examples/auth-api
	createAuthApiPage({
		createPage,
		privatePosts,
		componentPath: path.resolve('./src/templates/authApi.tsx'),
	});
};
