import { isEndpointValid } from './isEndpointValid';

/**
 * Checks the path `/jsonapi/menu_items/footer` on the cmsEndpoint
 * @param cmsEndpoint - the cmsEndpoint
 * @returns true if the endpoint is valid
 */
export const checkMenuItemEndpoint = async (cmsEndpoint: URL) => {
	cmsEndpoint.pathname = '/jsonapi/menu_items/footer';
	return await isEndpointValid(cmsEndpoint);
};
