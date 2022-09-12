import { ServerResponse } from 'http';

const defaultCacheControlValue =
	'public, s-maxage=10, stale-while-revalidate=600';

/**
 * Sets response headers for edge caching.
 * @param options.res response object
 * @param options.cacheControl optional value to override cache control header, defaults to 'public, s-maxage=10, stale-while-revalidate=600'
 */
const setEdgeHeader = ({
	res,
	cacheControl = defaultCacheControlValue,
}: {
	res: ServerResponse;
	cacheControl?: string;
}) => {
	res.setHeader('Cache-Control', cacheControl);
};

export default setEdgeHeader;
