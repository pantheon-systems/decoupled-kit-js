import { TemplateFn } from '@cli/types';
import { postQueryTemplate } from '@partials/next-wp/Posts';

const js: TemplateFn = ({ data }) =>
	/* js */ `${postQueryTemplate({
		search: data.search,
		wpAcfAddon: data.wpAcfAddon,
	})}`;

export default js;
