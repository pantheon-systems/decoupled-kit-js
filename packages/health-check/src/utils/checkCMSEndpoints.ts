import { CMS_ENV_VARS } from '../constants';
import { fetcher } from './fetcher';

export const checkCMSEndpoints = async (
	cmsEndpoints: { [key in keyof typeof CMS_ENV_VARS]?: string }[],
) => {
	const results = [];

	for await (const obj of cmsEndpoints) {
		const [[envVar, endpoint]] = Object.entries(obj);
		if (endpoint) {
			const url = new URL(endpoint);
			url.pathname = '/jsonapi';
			results.push({ endpoint, ...(await fetcher(url, envVar)) });
		} else {
			results.push({ endpoint, isValid: false, envVar });
		}
	}
	return results;
};
