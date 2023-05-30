import { ServerResponse } from 'http';

const defaultCacheControlValue = 'public, s-maxage=600';

/**
 * Sets response headers for edge caching.
 * @param options.res response object
 * @param options.cacheControl optional value to override cache control header, defaults to 'public, s-maxage=600'
 */
export const setEdgeHeader = ({
	res,
	cacheControl = defaultCacheControlValue,
}: {
	res: ServerResponse;
	cacheControl?: string;
}) => {
	res.setHeader('Cache-Control', cacheControl);
};
