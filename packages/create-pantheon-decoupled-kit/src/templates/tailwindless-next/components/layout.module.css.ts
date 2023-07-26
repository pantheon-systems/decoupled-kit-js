import { layoutCSSModules } from '@cli/templates/partials/nextjs-shared/layoutCSSModules';
import { TemplateFn } from '@cli/types';

const css: TemplateFn = ({ data }) =>
	/* css */ `${layoutCSSModules(data.search)}`;

export default css;
