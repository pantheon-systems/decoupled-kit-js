import { isEndpointValid } from './isEndpointValid';

/**
 * Checks the path `/jsonapi` of the cmsEndpoint
 * @param cmsEndpoint - the cmsEndpoint
 * @returns true if the cmsEndpoint is valid
 */
export const checkCMSEndpoint = async (cmsEndpoint: URL) => {
	cmsEndpoint.pathname = '/jsonapi';
	return await isEndpointValid(cmsEndpoint);
};
