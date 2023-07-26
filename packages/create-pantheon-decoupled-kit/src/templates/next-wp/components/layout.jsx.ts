import { layoutTemplate } from '@cli/templates/partials/nextjs-shared/layout';
import { TemplateFn } from '@cli/types';

const jsx: TemplateFn = ({ data }) =>
	/* jsx */ `${layoutTemplate({
		search: data.search,
		cmsType: data.cmsType,
	})}`;

export default jsx;
