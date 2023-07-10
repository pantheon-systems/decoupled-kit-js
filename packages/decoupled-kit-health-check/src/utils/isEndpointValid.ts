/**
 * Checks that the endpoint returns a 200 or a valid payload
 * @param endpoint - a URL
 * @param type - graphql or rest
 * @returns true if the endpoint returns a 200, otherwise false
 */
export const isEndpointValid = async ({
	cmsEndpoint,
	type,
}: {
	cmsEndpoint: URL;
	type: 'graphql' | 'rest';
}) => {
	try {
		const res = await fetch(cmsEndpoint);
		if (type === 'rest') {
			if (res.status === 200) {
				return true;
			} else {
				return false;
			}
		} else if (type === 'graphql') {
			const payload = (await res.json()) as {
				errors?: unknown[];
				data?: unknown;
			};
			if (payload.errors) {
				return false;
			} else if (payload.data) {
				return true;
			}
		}
	} catch (error) {
		return false;
	}
	throw new Error('type "graphql" or "rest" is required.');
};
