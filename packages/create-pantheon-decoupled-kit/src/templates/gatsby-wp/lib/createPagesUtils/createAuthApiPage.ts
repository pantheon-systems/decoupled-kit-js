import { type CreatePagesArgs } from 'gatsby';
import { type PrivatePosts } from '../types';

export const createAuthApiPage = ({
	createPage,
	privatePosts,
	componentPath,
}: {
	createPage: CreatePagesArgs['actions']['createPage'];
	privatePosts: PrivatePosts[];
	componentPath: string;
}) => {
	createPage({
		path: '/examples/auth-api',
		component: componentPath,
		context: {
			privatePosts,
		},
	});
};
