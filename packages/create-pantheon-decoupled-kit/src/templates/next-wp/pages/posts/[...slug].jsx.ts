import { nextWpPostView } from '@partials/next-wp/postView';
import type { TemplateFn } from '@cli/types';

const jsx: TemplateFn = ({ data }) =>
	data.wpAcfAddon ? nextWpPostView(true) : nextWpPostView(false);
export default jsx;
