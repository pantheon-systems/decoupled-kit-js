/**
 * Helper function to get all unique keys from multiple surrogate-key-raw headers
 * @param {Response['headers']} headers headers from a fetch request
 * @returns {string} a string of unique keys from all surrogate-key-raw headers
 */
export const getSurrogateKeys = ({ headers }) => {
	const keys = headers
		.map((header) => header.get('surrogate-key-raw'))
		.join(' ')
		.split(' ');
	const uniqueKeys = [...new Set(keys)].join(' ');
	return [...new Set(keys)].join(' ');
};
