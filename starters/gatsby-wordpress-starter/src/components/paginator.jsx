import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'gatsby'

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
const Paginator = ({
	data,
	itemsPerPage,
	breakpoints,
	Component,
	routing,
	location,
}) => {
	// Track if breakpoint links have been opened
	const openStart = location.state?.breakOpen
		? breakpoints?.start + breakpoints?.add
		: undefined

	const [breakStart, setBreakStart] = useState(
		openStart || breakpoints?.start || null,
	)
	const [breakpointsOpen, setBreakpointsOpen] = useState(
		location.state?.breakOpen || false,
	)
	// This value will be the link to start with after separator
	const breakEnd = breakpoints?.end || null
	// how many links to add when the separator is clicked
	const breakAdd = breakpoints?.add || null
	const [currentPageQuery, setCurrentPageQuery] = useState(
		routing && location.pathname.match(/\d+$/) !== null
			? Number(location.pathname.match(/\d+$/)[0])
			: 1,
	)

	// account for extra forward slash added to url on hard refresh
	const currentPath = location.pathname.endsWith('/')
		? location.pathname.replace(/.$/, '')
		: location.pathname
	const navRoute = routing ? currentPath.replace(/\/\d+$/, '') : currentPath

	const [offset, setOffset] = useState((currentPageQuery - 1) * itemsPerPage)
	const [currentItems, setCurrentItems] = useState([])
	const [totalItems] = useState(data.length)
	const [totalPages] = useState(Math.ceil(data.length / itemsPerPage))

	// since we fetch ALL items, filtering the current items client side
	// further reduces API calls to the server
	useEffect(() => {
		setCurrentItems(
			data.slice(
				(currentPageQuery - 1) * itemsPerPage,
				itemsPerPage * currentPageQuery,
			),
		)

		// set the new offset
		const newOffset =
			((currentPageQuery > 0 && currentPageQuery - 1) * itemsPerPage) %
			totalItems
		setOffset(Number(newOffset))
	}, [data, offset, itemsPerPage, breakStart, currentPageQuery, totalItems])

	// track window width to appropriately hide and show links on small viewports
	const [windowWidth, setWindowWidth] = useState()
	useEffect(() => {
		setWindowWidth(window.innerWidth)
		window.addEventListener('resize', () => {
			setWindowWidth(window.innerWidth)
		})
	}, [])

	const handlePageClick = event => {
		const {
			target: { id },
		} = event

		if (id === 'next-btn') {
			// set new offset
			offset < totalItems - itemsPerPage &&
				setOffset(Number(offset) + Number(itemsPerPage))
			// set the current page
			currentPageQuery < totalPages &&
				setCurrentPageQuery(Number(currentPageQuery + 1))
		} else if (id === 'back-btn') {
			// set new offset
			offset >= 0 && setOffset(offset - itemsPerPage)
			// set the current page
			currentPageQuery > 1 && setCurrentPageQuery(Number(currentPageQuery - 1))
		} else {
			// the number of the page link clicked
			const clickedPage = Number(event.target.innerHTML)
			setCurrentPageQuery(clickedPage)
		}
	}

	const RenderLinks = () => {
		if (totalPages <= 1) {
			// if there is only one page
			// don't render any links
			return null
		}
		const links = []

		// Create link given the number of
		// total pages
		for (let i = 0; i < totalPages; i++) {
			const pageNumber = Number(i + 1)
			const defaultLink = (
				<Link
					to={`${navRoute}${routing ? '/' + pageNumber : ''}`}
					state={{ breakOpen: breakpointsOpen }}
					key={pageNumber}
					onClick={function (event) {
						handlePageClick(event)
					}}
					className={`flex flex-col justify-center text-center no-underline
          h-16 w-12 border-t-2 border-b-2 border-black bg-white hover:bg-blue-300 focus:bg-blue-200 focus:border-blue-300 ${
						currentPageQuery === pageNumber && 'border-blue-700 border-2'
					}
          `}
					aria-label={
						currentPageQuery === pageNumber
							? `Current Page, Page ${pageNumber}`
							: `Go to Page ${pageNumber}`
					}
					aria-current={currentPageQuery === pageNumber ? true : false}
				>
					{pageNumber}
				</Link>
			)

			// separator link
			if (i === breakStart) {
				if (breakStart + breakAdd >= totalPages) {
					links.push(defaultLink)
					continue
				}
				links.push(
					<button
						className={`hidden md:block h-16 w-12 border-2 border-black bg-slate-200 hover:bg-blue-300 focus:bg-blue-200 focus:border-blue-300`}
						onClick={function () {
							setBreakStart(breakStart + breakAdd)
							setBreakpointsOpen(true)
						}}
						key={'...'}
						aria-label="Expand Hidden Buttons"
					>
						...
					</button>,
				)
			}
			// if we have a breakStart, don't render the middle links
			if (typeof breakStart === 'number' && typeof breakEnd === 'number') {
				if (pageNumber >= breakStart && pageNumber < breakEnd) {
					if (typeof windowWidth === 'number') {
						if (windowWidth < 768) {
							links.push(defaultLink)
						}
						continue
					}
				}
			}
			links.push(defaultLink)
		}
		const backActive = offset === 0 ? false : true
		const nextActive = offset >= totalItems - itemsPerPage ? false : true
		const sharedNextAndBackBtnStyles =
			'flex flex-col justify-center text-center h-16 w-12 no-underline hover:bg-blue-300 focus:bg-blue-200 focus:border-blue-300 border-t-2 border-b-2 border-black bg-white'
		// returns the row of links
		return (
			<nav role="navigation" aria-label="Pagination Navigation">
				<ul
					className="list-none flex flex-row justify-center mx-auto mt-auto mb-4 [&>li]:p-0"
					data-testid={`link-wrapper ${nextActive} ${backActive}`}
				>
					<li key="back">
						{/* back link */}
						<Link
							to={
								backActive
									? `${navRoute}${routing ? '/' + (currentPageQuery - 1) : ''}`
									: `${location.pathname}`
							}
							state={{ breakOpen: breakpointsOpen }}
							className={`${sharedNextAndBackBtnStyles} ${
								backActive ? '' : 'bg-gray-500'
							}  border-l-2`}
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
									? `${navRoute}${routing ? '/' + (currentPageQuery + 1) : ''}`
									: `${location.pathname}`
							}
							state={{ breakOpen: breakpointsOpen }}
							className={`${sharedNextAndBackBtnStyles} ${
								nextActive ? '' : 'bg-gray-500'
							} border-r-2`}
							id="next-btn"
							onClick={handlePageClick}
							aria-label="Go to Next Page"
						>
							{'>'}
						</Link>
					</li>
				</ul>
			</nav>
		)
	}
	return (
		<div className="max-w-full">
			<span className="mb-8 prose-sm font-bold">
				Page {currentPageQuery}/{totalPages}
			</span>

			<section>
				{/* Component passed in that will render the data */}
				<Component currentItems={currentItems} />
			</section>
			<div className="sticky lg:bottom-12 bottom-4 mt-10">
				<RenderLinks />
			</div>
		</div>
	)
}

export default Paginator
