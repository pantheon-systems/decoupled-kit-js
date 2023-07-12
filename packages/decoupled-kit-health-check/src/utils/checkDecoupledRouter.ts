import { isEndpointValid } from './isEndpointValid';

/**
 * Checks the path `/router/translate-path?path={some article}` on the cmsEndpoint.
 * The article fetched depends on the hasUmami boolean.
 * @param cmsEndpoint - the cmsEndpoint
 * @param hasUmami - boolean indicating that the cms has the umami demo data
 * @returns true if the decoupled router exists on the cmsEndpoint
 */
export const checkDecoupledRouter = async ({
	cmsEndpoint,
	hasUmami,
}: {
	cmsEndpoint: URL;
	hasUmami: boolean;
}) => {
	cmsEndpoint.pathname = '/router/translate-path';
	cmsEndpoint.searchParams.set('format', '_json');
	hasUmami
		? cmsEndpoint.searchParams.set('path', 'articles/lets-hear-it-for-carrots')
		: cmsEndpoint.searchParams.set('path', 'articles/example-article');

	return await isEndpointValid({ cmsEndpoint, type: 'rest' });
};
