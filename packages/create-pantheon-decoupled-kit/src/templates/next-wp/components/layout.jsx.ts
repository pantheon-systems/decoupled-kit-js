import { TemplateFn, isWpCms } from '@cli/types';
import { layoutTemplate } from '@partials/nextjs-shared/layout';

const jsx: TemplateFn = ({ data }) =>
	/* jsx */ `${layoutTemplate({
		search: data.search,
		cmsType: isWpCms(data.cmsType) ? 'wp' : 'false',
	})}`;

export default jsx;
