import { isEndpointValid } from './isEndpointValid';

/**
 * Checks the `/jsonapi` or __typename query depending on the type of endpoint
 * @param cmsEndpoint - the cmsEndpoint
 * @param type - graphql or rest
 * @returns true if the cmsEndpoint is valid
 */
export const checkCMSEndpoint = async ({
	cmsEndpoint,
	type,
}: {
	cmsEndpoint: URL;
	type: 'graphql' | 'rest';
}) => {
	if (type === 'rest') {
		cmsEndpoint.pathname = '/jsonapi';
		return await isEndpointValid({ cmsEndpoint, type });
	} else if (type === 'graphql') {
		cmsEndpoint.searchParams.set('query', '{__typename}');
		return await isEndpointValid({ cmsEndpoint, type });
	}
	throw new Error('type "graphql" or "rest" required.');
};
