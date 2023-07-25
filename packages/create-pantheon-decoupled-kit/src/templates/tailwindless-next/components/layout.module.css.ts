import { layoutCSSModules } from '@cli/templates/partials/nextjs-shared/layoutCSSModulesT';
import { TemplateFn } from '@cli/types';

const css: TemplateFn = ({ data, utils }) =>
	/* css */ `${utils.if(data.search, layoutCSSModules(true))} ${utils.if(
		!data.search,
		layoutCSSModules(false),
	)}`;

export default css;
