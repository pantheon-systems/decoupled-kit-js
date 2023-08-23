import { TemplateFn } from '@cli/types';
import { postQueryTemplate } from '@partials/next-wp/Posts';

const js: TemplateFn = ({ data }) =>
	/* js */ postQueryTemplate({
		wpAcfAddon: data.wpAcfAddon,
	});

export default js;
