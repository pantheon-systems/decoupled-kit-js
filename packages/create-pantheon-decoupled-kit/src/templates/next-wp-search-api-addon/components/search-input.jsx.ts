import { TemplateFn } from '@cli/types';
import { searchInputTemplate } from '@partials/nextjs-shared/searchInput';

const jsx: TemplateFn = () => `${searchInputTemplate()}`;

export default jsx;
