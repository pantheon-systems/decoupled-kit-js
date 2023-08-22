import { TemplateFn } from '@cli/types';
import { searchPageCSSModules } from '@partials/nextjs-shared/searchPageCSSModules';

const css: TemplateFn = () => searchPageCSSModules();

export default css;
