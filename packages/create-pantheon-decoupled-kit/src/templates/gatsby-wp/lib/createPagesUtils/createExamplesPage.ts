import { type CreatePagesArgs } from 'gatsby';

export const createExamplesPage = ({
	createPage,
	routing,
	componentPath,
}: {
	createPage: CreatePagesArgs['actions']['createPage'];
	routing: boolean;
	componentPath: string;
}) => {
	createPage({
		path: '/examples',
		component: componentPath,
		context: {
			routing,
		},
	});
};
