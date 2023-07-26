import { TemplateFn } from '@cli/types';
import { layoutTemplate } from '@partials/nextjs-shared/layout';

const jsx: TemplateFn = ({ data }) =>
	/* jsx */ `${layoutTemplate({
		search: data.search,
		cmsType: data.cmsType,
	})}`;

export default jsx;
