import { TemplateFn } from '@cli/src/types';
const ts: TemplateFn = ({ data, utils }) =>
	/* ts */ `${utils.if(!data.empty, `console.log('Hello world');`)}`;

export default ts;
