import { TemplateFn, isDrupalCms } from '@cli/types';
import { layoutTemplate } from '@partials/nextjs-shared/layout';

const jsx: TemplateFn = ({ data }) =>
	/* jsx */ `${layoutTemplate({
		search: data.search,
		cmsType: isDrupalCms(data.cmsType) ? 'drupal' : 'false',
	})}`;

export default jsx;
