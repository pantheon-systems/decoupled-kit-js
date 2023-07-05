import { isEndpointValid } from './isEndpointValid';

/**
 * Checks the path `/jsonapi/configurable_language/configurable_language` on the cmsEndpoint
 * @param cmsEndpoint - the cmsEndpoint
 * @returns true if the endpoint is valid
 */
export const checkLanguageSettings = async (cmsEndpoint: URL) => {
	const url = new URL(cmsEndpoint);
	url.pathname = '/jsonapi/configurable_language/configurable_language';
	return await isEndpointValid(url);
};
