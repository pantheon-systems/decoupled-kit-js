/**
 *
 * @param args.page - the page number
 * @param args.route - the route
 * @returns If the page number is > 0, `/{route}/{page}` else `/{route}`
 */
export const getPaginationPaths = ({
	page,
	route,
}: {
	page: number;
	route: string;
}) => {
	if (page > 0) {
		return `/${route}/${String(page)}`;
	} else {
		return `/${route}`;
	}
};
