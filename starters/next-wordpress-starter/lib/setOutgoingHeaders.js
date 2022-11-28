import {
	setSurrogateKeyHeader,
	setEdgeHeader,
} from '@pantheon-systems/wordpress-kit';
/**
 * Helper function to get all unique keys from multiple surrogate-key-raw headers
 * @param {Response['headers']} headers headers from a fetch request
 * @returns {string} a string of unique keys from all surrogate-key-raw headers
 */
const getSurrogateKeys = ({ headers }) => {
	const keys = headers
		.map((header) => header.get('surrogate-key-raw'))
		.join(' ')
		.split(' ');
	const uniqueKeys = [...new Set(keys)].join(' ');
	return uniqueKeys;
};

/**
 * Sets headers on outgoing responses which are necessary for managing cached content
 * @param {Response['headers']} headers headers from a fetch request
 * @param {import('next').NextPageContext['res']} res Next ServerResponse
 * @returns void
 */
export const setOutgoingHeaders = ({ headers, res }) => {
	const keys = getSurrogateKeys({ headers });
	keys && setSurrogateKeyHeader(keys, res);
	setEdgeHeader({ res });
};
