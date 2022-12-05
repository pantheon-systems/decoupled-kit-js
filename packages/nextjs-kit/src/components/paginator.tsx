import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { isNumber, isHTMLElement } from '../types';

/**
 * Options type for {@link Paginator}
 * @typeParam Type - type to use for the data passed in to be paginated
 */
export interface PaginationProps<Type> {
	/**
	 * The type of data to paginate
	 */
	data: Type[];
	/**
	 * Number of items per page
	 */
	itemsPerPage: number;
	/**
	 * * start: where to start the breakpoint
	 *
	 * end: where to end the breakpoint
	 *
	 * add: how many buttons to add when the breakpoint is clicked
	 *
	 * (`add` * x) + `start` = `end` where x is a number of clicks it takes to fill in all of the buttons
	 * For example: If there are 25 buttons and the start = 5 and end = 25, then add should be 5 or 10.
	 */
	breakpoints: {
		start: number;
		end: number;
		add: number;
	};
	/**
	 * If true, uses Next.js shallow routing {@link https://nextjs.org/docs/routing/shallow-routing}
	 */
	routing: boolean;
	/**
	 * The React component to render for each datum
	 */
	Component: React.ElementType;
}

/**
 * @param {PaginationProps} props - The props needed for the paginator component
 * @param props.data - An array of paginator objects
 * @param props.itemsPerPage - How many items to display per page
 * @param props.breakpoints - Breakpoints has 3 properties: start, end, and add. Set to an empty object for no breakpoint.
 * @param props.routing If true, shallow routing will be enabled. Check the examples/pagination route to see it in action
 * @param props.Component React Component that takes in currentItems as props and maps over them.
 * currentItems is a subset of `props.data`, so any component that works for data will work here.
 *
 * @see {@link https://github.com/pantheon-systems/decoupled-kit-js/tree/canary/starters/next-drupal-starter/pages/examples/pagination/[[...page]].js} for a full example implementation
 * @example
 * ```
 * <Paginator
 *   data={data}
 *   itemsPerPage={itemsPerPage}
 *   breakpoints={{ start: 6, end: 12, add: 6 }}
 *   routing
 *   Component={MyComponent}
 * />
 * ```
 *
 * @returns Component with data rendered by the passed in Component and page buttons
 */
export const Paginator = <Type extends object>({
	data,
	itemsPerPage,
	breakpoints,
	routing,
	Component,
}: PaginationProps<Type>) => {
	// configurable breakpoints
	// This value will be the start of the separator.
	const [breakStart, setBreakStart] = useState<number | null>(
		breakpoints?.start || null,
	);

	// This value will be the button to start with after separator
	const breakEnd = breakpoints?.end || null;
	// how many buttons to add when the separator is clicked
	const breakAdd = breakpoints?.add || null;

	const router = useRouter();
	// get current path from router.pathname
	// and trim off catchalls
	const currentRoute = router.pathname.replace(/\/{1}\[{1,2}.*\]{1,2}$/, '');
	const routeKey = Object.keys(router.query)[0];
	const [currentPageQuery, setCurrentPageQuery] = useState<number>(
		Number(router.query[routeKey]) || 1,
	);

	const [offset, setOffset] = useState<number>(
		(currentPageQuery - 1) * itemsPerPage,
	);
	const [currentItems, setCurrentItems] = useState<Type[]>([]);
	const [totalItems] = useState<number>(data.length);

	const [totalPages] = useState<number>(Math.ceil(data.length / itemsPerPage));

	// since we fetch ALL items, filtering the current items client side
	// further reduces API calls to the server
	useEffect(() => {
		setCurrentItems(
			data.slice(
				(currentPageQuery - 1) * itemsPerPage,
				itemsPerPage * currentPageQuery,
			),
		);
		// set the new offset
		const newOffset = ((currentPageQuery - 1) * itemsPerPage) % totalItems;
		if (currentPageQuery > 0) {
			setOffset(Number(newOffset));
		}

		routing &&
			router.push(
				`${currentRoute}/${currentPageQuery}`,
				`${currentRoute}/${currentPageQuery}`,
				{
					shallow: true,
				},
			);
	}, [data, offset, itemsPerPage, breakStart, currentPageQuery, totalItems]);

	// track window width to appropriately hide and show buttons on small viewports
	const [windowWidth, setWindowWidth] = useState<number>();
	useEffect(() => {
		const eventListener = () => {
			setWindowWidth(window.innerWidth);
		};
		setWindowWidth(window.innerWidth);
		window.addEventListener('resize', () => eventListener);

		return () => {
			window.removeEventListener('resize', eventListener);
		};
	}, []);

	const handlePageClick: React.MouseEventHandler<HTMLButtonElement> = (
		event,
	) => {
		if (!isHTMLElement(event.target)) return;
		if (event.target.id === 'next-btn') {
			// set new offset
			offset < totalItems - itemsPerPage &&
				setOffset(Number(offset) + Number(itemsPerPage));
			// set the current page
			currentPageQuery < totalPages &&
				setCurrentPageQuery(Number(currentPageQuery + 1));
		} else if (event.target.id === 'back-btn') {
			// set new offset
			offset >= 0 && setOffset(offset - itemsPerPage);
			// set the current page
			currentPageQuery > 1 && setCurrentPageQuery(Number(currentPageQuery - 1));
		} else {
			// the number of the page button clicked
			const clickedPage = Number(event.target.innerHTML);
			setCurrentPageQuery(clickedPage);
		}
	};

	const RenderButtons = () => {
		if (totalPages <= 1) {
			// if there is only one page
			// don't render any buttons
			return null;
		}
		const buttons = [];

		// Create buttons given the number of
		// total pages
		for (let i = 0; i < totalPages; i++) {
			const pageNumber = Number(i + 1);
			const defaultButton = (
				<button
					className={`
          ${
						currentPageQuery === pageNumber
							? 'ps-block'
							: 'ps-hidden md:ps-block'
					}
          ps-h-16 ps-w-12 ps-border-t-2 ps-border-b-2 ps-border-black ps-bg-white hover:ps-bg-blue-300 focus:ps-bg-blue-200 focus:ps-border-blue-300 ${
						currentPageQuery === pageNumber
							? 'ps-border-blue-700 ps-border-2'
							: ''
					}
          `}
					onClick={handlePageClick}
					key={pageNumber}
					aria-label={
						currentPageQuery === pageNumber
							? `Current Page, Page ${pageNumber}`
							: `Go to Page ${pageNumber}`
					}
					aria-current={currentPageQuery === pageNumber ? true : false}
				>
					{pageNumber}
				</button>
			);

			// separator button
			if (i === breakStart) {
				if (isNumber(breakAdd)) {
					if (breakStart + breakAdd >= totalPages) {
						buttons.push(defaultButton);
						continue;
					}
				}
				buttons.push(
					<button
						className={`ps-hidden md:ps-block ps-h-16 ps-w-12 ps-border-2 ps-border-black ps-bg-slate-200 hover:ps-bg-blue-300 focus:ps-bg-blue-200 focus:ps-border-blue-300`}
						onClick={() => {
							if (isNumber(breakAdd)) {
								setBreakStart(breakStart + breakAdd);
							}
						}}
						key={'...'}
						aria-label="Expand Hidden Buttons"
					>
						...
					</button>,
				);
			}
			// if we have a breakStart, don't render the middle buttons
			if (isNumber(breakStart) && isNumber(breakEnd)) {
				if (pageNumber >= breakStart && pageNumber < breakEnd) {
					if (isNumber(windowWidth)) {
						if (windowWidth < 768) {
							buttons.push(defaultButton);
						}
						continue;
					}
				}
			}
			buttons.push(defaultButton);
		}
		const sharedNextAndBackBtnStyles =
			'ps-h-16 ps-w-12 disabled:ps-bg-gray-500 hover:ps-bg-blue-300 focus:ps-bg-blue-200 focus:ps-border-blue-300 ps-border-y-2 ps-border-black ps-bg-white';
		// returns the row of buttons
		return (
			<nav role="navigation" aria-label="Pagination Navigation">
				{/* back button */}
				<ul className="ps-list-none ps-flex ps-flex-row ps-justify-center ps-mx-auto ps-mt-auto ps-mb-4 [&>li]:ps-p-0">
					<li key="back">
						{/* TODO: For improved accessibility, these buttons should be refactored to anchor tags. */}
						<button
							className={`${sharedNextAndBackBtnStyles} ps-border-l-2`}
							id="back-btn"
							disabled={offset === 0}
							onClick={handlePageClick}
							aria-label="Go to Previous Page"
						>
							{'<'}
						</button>
					</li>
					{/* map buttons[] */}
					{buttons.map((btn, i) => (
						<li key={i}>{btn}</li>
					))}
					{/* next button */}
					<li key="next">
						<button
							className={`${sharedNextAndBackBtnStyles} ps-border-r-2`}
							id="next-btn"
							disabled={offset >= totalItems - itemsPerPage}
							onClick={handlePageClick}
							aria-label="Go to Next Page"
						>
							{'>'}
						</button>
					</li>
				</ul>
			</nav>
		);
	};
	return (
		<div className="ps-max-w-full">
			{totalPages > 1 ? (
				<h3 className="ps-mb-8 ps-prose-sm ps-font-bold">
					Page {currentPageQuery}/{totalPages}
				</h3>
			) : null}
			<section>
				{/* Component passed in that will render the data */}
				<Component currentItems={currentItems} />
			</section>
			<div className="ps-sticky lg:ps-bottom-12 ps-bottom-4 ps-mt-10">
				<RenderButtons />
			</div>
		</div>
	);
};
