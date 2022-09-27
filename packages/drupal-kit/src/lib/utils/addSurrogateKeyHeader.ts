import { ServerResponse } from 'http';

/**
 * Adds an aggregated list of surrogate keys in the working response.
 * @param keys Value for surrogate-key header in API response.
 * @param res The active http.ServerResponse object.
 * @returns The current known unique set of surrogate keys.
 */
const addSurrogateKeyHeader = (
	keys: string | null,
	res: ServerResponse,
): string => {
	const surrogateKeyHeader = res.getHeader('Surrogate-Key-Raw');
	const surrogateKeys =
		typeof surrogateKeyHeader === 'undefined'
			? []
			: (<string>surrogateKeyHeader).split(' ');
	const newSurrogateKeys = keys?.split(' ') as string[];
	// Destructure into a new array in order to de-dupe the array
	const uniqueSurrogateKeys = [
		...new Set([...surrogateKeys, ...newSurrogateKeys]),
	];

	res.setHeader('Surrogate-Key-Raw', uniqueSurrogateKeys.join(' '));

	return uniqueSurrogateKeys.join(' ');
};

export default addSurrogateKeyHeader;
