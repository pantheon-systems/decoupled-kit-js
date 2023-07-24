import { useState } from 'react';
import type { PaginatorProps } from './types';

export const usePagination = <DataType>({
	data,
	breakpoints,
	itemsPerPage,
	routing,
	location,
}: Omit<PaginatorProps<DataType[]>, 'Component'>) => {
	// Track if breakpoint links have been opened
	const openStart = location?.state?.breakOpen
		? Number(breakpoints?.start) + Number(breakpoints?.add)
		: undefined;

	const [breakStart, setBreakStart] = useState<number | null>(
		openStart ?? (breakpoints?.start || null),
	);
	const [breakpointsOpen, setBreakpointsOpen] = useState<boolean>(
		location?.state?.breakOpen || false,
	);
	// This value will be the link to start with after separator
	const breakEnd = breakpoints?.end || null;
	// how many links to add when the separator is clicked
	const breakAdd = breakpoints?.add || null;

	const [pathname] = location?.pathname?.match(/\d+$/) || [];

	const [currentPageQuery, setCurrentPageQuery] = useState(
		routing && pathname ? Number(pathname) : 1,
	);

	// account for extra forward slash added to url on hard refresh
	const currentPath = location?.pathname?.endsWith('/')
		? location?.pathname?.replace(/.$/, '')
		: location?.pathname;
	const navRoute = routing ? currentPath?.replace(/\/\d+$/, '') : currentPath;

	const [offset, setOffset] = useState((currentPageQuery - 1) * itemsPerPage);
	const [currentItems, setCurrentItems] = useState(data);
	const totalItems = Number(data?.length);
	const totalPages = Math.ceil(data?.length / itemsPerPage);

	return {
		breakStart,
		setBreakStart,
		breakpointsOpen,
		setBreakpointsOpen,
		breakEnd,
		breakAdd,
		currentPageQuery,
		setCurrentPageQuery,
		navRoute,
		offset,
		setOffset,
		currentItems,
		setCurrentItems,
		totalItems,
		totalPages,
	};
};
