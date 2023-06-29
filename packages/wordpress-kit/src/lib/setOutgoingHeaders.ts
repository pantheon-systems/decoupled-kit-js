import { setEdgeHeader } from './setEdgeHeader';
import { setSurrogateKeyHeader } from '@pantheon-systems/cms-kit';
import { ServerResponse } from 'http';
/**
 * Helper function to get all unique keys from multiple surrogate-key headers
 * @param headers - headers from a fetch request
 * @returns a string of unique keys from all surrogate-key headers
 */
export const getSurrogateKeys = ({ headers }: { headers: Headers[] }) => {
	const keys = headers
		.map((header) => header.get('Surrogate-Key'))
		.join(' ')
		.split(' ');
	const uniqueKeys = [...new Set(keys)].join(' ');
	return uniqueKeys;
};

/**
 * Sets headers on outgoing responses which are necessary for managing cached content
 * @param headers headers from a fetch request
 * @param res a ServerResponse
 */
export const setOutgoingHeaders = ({
	headers,
	res,
}: {
	headers: Headers[];
	res: ServerResponse;
}) => {
	const keys = getSurrogateKeys({ headers });
	if (keys) {
		setSurrogateKeyHeader(keys, res);
	}
	setEdgeHeader({ res });
};
