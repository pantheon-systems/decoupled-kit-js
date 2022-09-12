import { ServerResponse } from 'http';

const defaultCacheControlValue =
	'public, s-maxage=10, stale-while-revalidate=600';

const setEdgeHeader = ({
	res,
	cacheControl = defaultCacheControlValue,
}: {
	res: ServerResponse;
	cacheControl: string;
}) => {
	res.setHeader('Cache-Control', cacheControl);
};

export default setEdgeHeader;
