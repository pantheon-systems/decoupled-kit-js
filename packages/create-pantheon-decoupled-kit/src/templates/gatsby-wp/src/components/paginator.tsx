import { Link } from 'gatsby';
import { SyntheticEvent, useEffect, useState } from 'react';
import type { PaginatorProps } from '../../lib/types';
import { usePagination } from '../../lib/usePagination';
import * as styles from './paginator.module.css';

/**
 *
 * @param props.data The data to be paginated
 * @param props.itemsPerPage The number of items to display on each page
 * @param props.breakpoints Breakpoints has 3 properties: start, end, and add. Set to {} for no breakpoint.
 * start: where to start the breakpoint
 * end: where to end the breakpoint
 * add: how many links to add when the breakpoint is clicked
 * ***
 * note: (`add` * x) + `start` = `end` where x is a number of clicks it takes to fill in all of the links
 * For example: If there are 25 links and the start = 5 and end = 25, then add should be 5 or 10.
 * ***
 * @param props.routing If true, shallow routing will be enabled. Check the examples/pagination route to see it in action
 * @param props.Component React Component that takes in currentItems as props and maps over them.
 * currentItems is a subset of data, so any component that works for data will work here.
 * @param location holds flag variable to track breakpoint state
 * @param navRoute route of the page using the paginator
 * @returns Component with data rendered by the passed in Component and page links
 */
const Paginator = <DataType,>({
	data,
	itemsPerPage,
	breakpoints,
	Component,
	routing,
	location,
}: PaginatorProps<DataType>) => {
	const {
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
	} = usePagination({ data, breakpoints, itemsPerPage, routing, location });
	useEffect(() => {
		setCurrentItems(
			data?.slice(
				(currentPageQuery - 1) * itemsPerPage,
				itemsPerPage * currentPageQuery,
			),
		);
		// If we're on page 1 or greater, set the new offset to
		// ((currentPageQuery - 1) * itemsPerPage) % totalItems
		const newOffset =
			(Math.max(currentPageQuery - 1, 0) * itemsPerPage) % totalItems;
		setOffset(Number(newOffset));
	}, [
		data,
		offset,
		itemsPerPage,
		breakStart,
		currentPageQuery,
		totalItems,
		setCurrentItems,
		setOffset,
	]);

	// track window width to appropriately hide and show links on small viewports
	const [windowWidth, setWindowWidth] = useState<number>();
	useEffect(() => {
		setWindowWidth(window.innerWidth);
		const eventListener = () => {
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener('resize', () => {
			setWindowWidth(window.innerWidth);
		});
		return () => {
			window.removeEventListener('resize', eventListener);
		};
	}, []);

	const handlePageClick = (event: SyntheticEvent<HTMLAnchorElement>) => {
		const target = event?.currentTarget;
		const { id, innerHTML } = target;

		if (id === 'next-btn') {
			// set new offset
			offset < totalItems - itemsPerPage &&
				setOffset(Number(offset) + Number(itemsPerPage));
			// set the current page
			currentPageQuery < totalPages &&
				setCurrentPageQuery(Number(currentPageQuery + 1));
		} else if (id === 'back-btn') {
			// set new offset
			offset >= 0 && setOffset(offset - itemsPerPage);
			// set the current page
			currentPageQuery > 1 && setCurrentPageQuery(Number(currentPageQuery - 1));
		} else {
			// the number of the page link clicked
			const clickedPage = Number(innerHTML);
			setCurrentPageQuery(clickedPage);
		}
	};

	const RenderLinks = () => {
		if (totalPages <= 1) {
			// if there is only one page
			// don't render any links
			return null;
		}
		const links = [];

		// Create link given the number of
		// total pages
		for (let i = 1; i <= totalPages; i++) {
			const pageNumber = i;
			const defaultLink = (
				<Link
					to={`${navRoute}${routing ? '/' + String(pageNumber) : ''}`}
					state={{ breakOpen: breakpointsOpen }}
					key={pageNumber}
					onClick={(event: SyntheticEvent<HTMLAnchorElement>) => {
						handlePageClick(event);
					}}
					className={styles.paginatorBtn}
					aria-label={
						currentPageQuery === pageNumber
							? `Current Page, Page ${pageNumber}`
							: `Go to Page ${pageNumber}`
					}
					aria-current={currentPageQuery === pageNumber ? true : false}
				>
					{pageNumber}
				</Link>
			);

			// separator link
			if (pageNumber === breakStart) {
				if (Number(breakStart) + Number(breakAdd) >= totalPages) {
					links.push(defaultLink);
					continue;
				}
				links.push(
					<button
						className={styles.separatorBtn}
						onClick={() => {
							setBreakStart(Number(breakStart) + Number(breakAdd));
							setBreakpointsOpen(true);
						}}
						key={'...'}
						aria-label="Expand Hidden Buttons"
					>
						...
					</button>,
				);
			}
			// if we have a breakStart, don't render the middle links
			if (typeof breakStart === 'number' && typeof breakEnd === 'number') {
				if (pageNumber >= breakStart && pageNumber < breakEnd) {
					if (typeof windowWidth === 'number') {
						if (windowWidth < 768) {
							links.push(defaultLink);
						}
						continue;
					}
				}
			}
			links.push(defaultLink);
		}
		const backActive = offset === 0 ? false : true;
		const nextActive = offset >= totalItems - itemsPerPage ? false : true;

		const sharedNextAndBackBtnStyles = styles.directionalBtns;
		// returns the row of links
		return (
			<nav role="navigation" aria-label="Pagination Navigation">
				<ul
					className={styles.btnList}
					data-testid={`link-wrapper ${String(nextActive)} ${String(
						backActive,
					)}`}
				>
					<li key="back">
						{/* back link */}
						<Link
							to={
								backActive
									? `${navRoute}${
											routing ? '/' + String(currentPageQuery - 1) : ''
									  }`
									: `${location.pathname}`
							}
							state={{ breakOpen: breakpointsOpen }}
							className={sharedNextAndBackBtnStyles}
							id="back-btn"
							onClick={handlePageClick}
							aria-label="Go to Previous Page"
						>
							{'<'}
						</Link>
					</li>
					{/* map links[] */}
					{links.map((lnk, i) => (
						<li key={i}>{lnk}</li>
					))}
					{/* next link */}
					<li key="next">
						<Link
							to={
								nextActive
									? `${navRoute}${
											routing ? '/' + String(currentPageQuery + 1) : ''
									  }`
									: `${location.pathname}`
							}
							state={{ breakOpen: breakpointsOpen }}
							className={sharedNextAndBackBtnStyles}
							id="next-btn"
							onClick={handlePageClick}
							aria-label="Go to Next Page"
						>
							{'>'}
						</Link>
					</li>
				</ul>
			</nav>
		);
	};

	return (
		<div>
			<span className={styles.pageCount}>
				Page {currentPageQuery}/{totalPages}
			</span>
			<section>
				{/* Component passed in that will render the data */}
				<Component currentItems={currentItems} />
			</section>
			<div className={styles.btnContainer}>
				<RenderLinks />
			</div>
		</div>
	);
};

export default Paginator;
