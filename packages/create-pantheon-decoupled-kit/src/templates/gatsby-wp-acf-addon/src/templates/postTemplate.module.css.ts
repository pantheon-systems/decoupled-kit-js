import { TemplateFn } from '@cli/types';

const css: TemplateFn = ({ data, utils }) => /* css */ `.header {
	${utils.if(data.tailwindcss, '@apply prose;')}
	font-size: var(--6);
	margin-right: auto;
	margin-left: auto;
	margin-top: var(--20);
}

.headerTitle {
	text-align: center;
	margin-right: auto;
	margin-left: auto;
}
`;

export default css;
