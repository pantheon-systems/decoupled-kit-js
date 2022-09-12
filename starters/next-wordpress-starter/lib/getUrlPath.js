/**
 *
 * @param {string} url - The full url of an image
 * @returns The src of the Image URL, or null if no matches were found
 */
export const getUrlPath = (url) => {
	const rxPath = new RegExp(
		'http[s]?:\\/\\/?[^\\/]+\\/(?<imageSrc>.*[/]{1}.*/.+.+$)',
	);
	const matches = url?.match(rxPath);
	if (matches?.groups.imageSrc) {
		return `/${matches?.groups.imageSrc}`;
	}
	return null;
};
