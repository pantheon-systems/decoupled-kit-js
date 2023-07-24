import { TemplateFn } from '@cli/types';
const ts: TemplateFn = ({ data, utils }) =>
	/* ts */ `${utils.if(!data.empty, `console.log('Hello world');`)}`;

export default ts;
