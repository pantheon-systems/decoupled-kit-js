/**
 * Helper function that returns the path from a URL,
 *
 * @remarks mostly used to extract the path of an image
 * from a featuredImage URL from WordPress
 *
 * @param {string | URL} url - A full URL
 * @returns {string | null} The pathname of the URL, or null if url is undefined
 */
export const getUrlPath = (url) => {
	if (typeof url === 'string') {
		return new URL(url).pathname;
	}
	if (url instanceof URL) {
		return url.pathname;
	}
	return null;
};
