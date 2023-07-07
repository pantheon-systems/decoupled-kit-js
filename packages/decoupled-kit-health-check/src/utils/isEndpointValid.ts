/**
 * Checks that the endpoint returns a 200
 * @param endpoint - a URL
 * @returns true if the endpoint returns a 200, otherwise false
 */
export const isEndpointValid = async (endpoint: URL) => {
	try {
		const res = await fetch(endpoint);
		if (res.status === 200) {
			return true;
		} else {
			return false;
		}
	} catch (error) {
		return false;
	}
};
