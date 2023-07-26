import { TemplateFn } from '@cli/types';
import { searchInputCSSModules } from '@partials/nextjs-shared/searchInputCSSModules';

const css: TemplateFn = () => `${searchInputCSSModules()}`;

export default css;
