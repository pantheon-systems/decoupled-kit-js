import type { TemplateFn } from '@cli/types';
import { nextWpPageView } from '@partials/next-wp/pageView';

const jsx: TemplateFn = () => nextWpPageView();

export default jsx;
