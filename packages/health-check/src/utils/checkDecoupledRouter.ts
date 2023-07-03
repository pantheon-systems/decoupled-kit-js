import { fetcher } from './fetcher';
import { CMSEndpointObject } from '../types';

export const checkDecoupledRouter = async (
	cmsEndpoints: CMSEndpointObject<'hasUmami'>[],
) => {
	const results = [];

	for await (const { hasUmami, endpoint, envVar } of cmsEndpoints) {
		if (endpoint && envVar) {
			const url = new URL(endpoint);
			url.pathname = '/router/translate-path';
			url.searchParams.set('format', '_json');
			hasUmami
				? url.searchParams.set('path', 'articles/lets-hear-it-for-carrots')
				: url.searchParams.set('path', 'articles/example-article');

			results.push({ endpoint: url, ...(await fetcher(url, envVar)) });
		} else {
			results.push({ endpoint, isValid: false, envVar });
		}
	}
	return results;
};
