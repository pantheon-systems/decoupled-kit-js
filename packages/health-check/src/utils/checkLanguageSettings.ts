import { CMSEndpointObject } from '../types';

export const checkLanguageSettings = async (
	cmsEndpoints: CMSEndpointObject<'isValid'>[],
) => {
	const results = [];
	for await (const { endpoint, envVar } of cmsEndpoints) {
		try {
			const url = new URL(endpoint);
			url.pathname = '/jsonapi/configurable_language/configurable_language';
			const res = await fetch(url);
			if (res.status === 200) {
				results.push({ endpoint, hasUmami: true, envVar });
			} else {
				results.push({ endpoint, hasUmami: false, envVar });
			}
		} catch (error) {
			results.push({ endpoint, hasUmami: false, envVar });
		}
	}
	return results;
};
