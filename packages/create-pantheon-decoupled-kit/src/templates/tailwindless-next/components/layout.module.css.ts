import { TemplateFn } from '@cli/types';
import { layoutCSSModules } from '@partials/nextjs-shared/layoutCSSModules';

const css: TemplateFn = ({ data }) =>
	/* css */ `${layoutCSSModules(data.search)}`;

export default css;
