import { TemplateFn } from '@cli/types';
import { searchPageCSSModules } from '@partials/nextjs-shared/searchPageCSSModules';

const css: TemplateFn = () => /* css */ searchPageCSSModules();

export default css;
