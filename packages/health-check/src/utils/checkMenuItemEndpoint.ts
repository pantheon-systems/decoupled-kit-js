import { fetcher } from './fetcher';
export const checkMenuItemEndpoints = async (
	cmsEndpoints: {
		[key in 'endpoint' | 'envVar']: string;
	}[],
) => {
	const results = [];

	for await (const { endpoint, envVar } of cmsEndpoints) {
		const url = new URL(endpoint);
		url.pathname = '/jsonapi/menu_items/footer';
		results.push({ endpoint, ...(await fetcher(url, envVar)) });
	}
	return results;
};
