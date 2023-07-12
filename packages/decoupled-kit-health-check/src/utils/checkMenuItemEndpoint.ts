import { isEndpointValid } from './isEndpointValid';

/**
 * Checks for the default menu on the cmsEndpoint depending on the type
 * @param cmsEndpoint - the cmsEndpoint
 * @param type - graphql or rest
 * @returns true if the endpoint is valid
 */
export const checkMenuItemEndpoint = async ({
	cmsEndpoint,
	type,
}: {
	cmsEndpoint: URL;
	type: 'graphql' | 'rest';
}) => {
	if (type === 'rest') {
		cmsEndpoint.pathname = '/jsonapi/menu_items/footer';
		return await isEndpointValid({ cmsEndpoint, type });
	} else if (type === 'graphql') {
		const footerMenuQuery = /* graphql */ `query FooterMenuQuery {
			menu(idType: NAME, id: "Example Menu") {
				menuItems {
					edges {
						node {
							id
							path
							label
						}
					}
				}
			}
		}`;
		cmsEndpoint.searchParams.set('query', footerMenuQuery);
		return await isEndpointValid({ cmsEndpoint, type });
	}
	throw new Error('type "graphql" or "rest" is required.');
};
