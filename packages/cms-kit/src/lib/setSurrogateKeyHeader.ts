import { ServerResponse } from 'node:http';
/**
 * Type guard to determine if a response is a ServerResponse
 * @param res
 * @returns true if the argument provided has headers or is a ServerResponse
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const hasHeaders = (res: any): res is ServerResponse =>
	res instanceof ServerResponse || ('getHeader' in res && 'setHeader' in res);

/**
 * Adds an aggregated list of surrogate keys in the working response.
 * @param keys Value for surrogate-key header in API response.
 * @param res The active http.ServerResponse object.
 * @returns The current known unique set of surrogate keys.
 */
export const setSurrogateKeyHeader = (
	keys: string | null,
	res: ServerResponse,
): string | void => {
	if (hasHeaders(res)) {
		const surrogateKeyHeader = res.getHeader('Surrogate-Key-Raw');

		if (typeof surrogateKeyHeader === 'string') {
			const surrogateKeys = surrogateKeyHeader?.split(' ');
			const newSurrogateKeys = keys?.split(' ') as string[];
			// Destructure into a new array in order to de-dupe the array
			const uniqueKeysArr = [];
			uniqueKeysArr.push(...new Set([...surrogateKeys, ...newSurrogateKeys]));
			const uniqueSurrogateKeys = uniqueKeysArr.join(' ');
			res.setHeader('Surrogate-Key', uniqueSurrogateKeys);
			return uniqueSurrogateKeys;
		} else if (typeof keys === 'string') {
			// if the header is not present already and we have keys, set the header
			res.setHeader('Surrogate-Key', keys);
			return keys;
		}
	}
};
