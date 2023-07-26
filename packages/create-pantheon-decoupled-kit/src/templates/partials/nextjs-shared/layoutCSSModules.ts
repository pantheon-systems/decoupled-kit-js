import { taggedTemplateHelpers as utils } from '@cli/utils';

export const layoutCSSModules = (search: boolean) => /* css */ `.layout {
	display: flex;
	flex-direction: column;
	min-height: 100dvh;
	min-width: inherit;
}

.layoutMain {
	margin-bottom: auto;
}

.footerCopy {
	margin-top: 0;
	margin-bottom: 0;
	margin-left: auto;
	margin-right: auto;
}

.footerCopy > a {
	text-decoration-line: underline;
}

.footerCopy > a:first-child {
	color: var(--white);
}

.footerCopy > a:last-child {
	color: var(--blue);
}

.footerCopy > a:hover {
	color: var(--blue-100);
}

${utils.if(
	search,
	`.searchHeaderContainer {
    display: flex; 
    margin: var(--x-auto);
    flex-direction: row; 
    flex-wrap: wrap; 
    justify-content: center; 
}`,
)}
`;
