import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { isNumber } from '../types';

/**
 *
 * @param props - The props needed for the paginator component
 * @param props.data - An array of paginator objects
 * @param props.itemsPerPage - How many items to display per page
 * @param props.breakpoints - Breakpoints has 3 properties: start, end, and add. Set to {} for no breakpoint.
 * @remarks
 *
 * start: where to start the breakpoint
 * end: where to end the breakpoint
 * add: how many buttons to add when the breakpoint is clicked
 * ***
 * note: (`add` * x) + `start` = `end` where x is a number of clicks it takes to fill in all of the buttons
 * For example: If there are 25 buttons and the start = 5 and end = 25, then add should be 5 or 10.
 * ***
 *
 * @param props.routing If true, shallow routing will be enabled. Check the examples/pagination route to see it in action
 * @param props.Component React Component that takes in currentItems as props and maps over them.
 * currentItems is a subset of data, so any component that works for data will work here.
 * @see {@link https://github.com/pantheon-systems/decoupled-kit-js/tree/canary/starters/next-drupal-starter/pages/examples/pagination/[[...page]].js} for an example implementation
 * @returns Component with data rendered by the passed in Component and page buttons
 */

interface PaginationProps {
  data: Array<object>;
  itemsPerPage: number;
  breakpoints: {
    start: number;
    end: number;
    add: number;
  };
  routing: boolean;
  Component: React.ElementType;
}

const Paginator: React.FC<PaginationProps> = ({
  data,
  breakpoints,
  itemsPerPage,
  routing,
  Component,
}: PaginationProps) => {
  // configurable breakpoints
  // This value will be the start of the separator.
  const [breakStart, setBreakStart] = useState<number | null>(
    breakpoints?.start || null
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
    Number(router.query[routeKey]) || 1
  );

  const [offset, setOffset] = useState<number>(
    (currentPageQuery - 1) * itemsPerPage
  );
  const [currentItems, setCurrentItems] = useState<Array<object>>([]);
  const [totalItems] = useState<number>(data.length);

  const [totalPages] = useState<number>(Math.ceil(data.length / itemsPerPage));

  // since we fetch ALL items, filtering the current items client side
  // further reduces API calls to the server
  useEffect(() => {
    setCurrentItems(
      data.slice(
        (currentPageQuery - 1) * itemsPerPage,
        itemsPerPage * currentPageQuery
      )
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
        }
      );
  }, [data, offset, itemsPerPage, breakStart, currentPageQuery, totalItems]);

  // track window width to appropriately hide and show buttons on small viewports
  const [windowWidth, setWindowWidth] = useState<number>();
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  const handlePageClick: React.MouseEventHandler<HTMLButtonElement> = event => {
    if ((event.target as Element).id === 'next-btn') {
      // set new offset
      offset < totalItems - itemsPerPage &&
        setOffset(Number(offset) + Number(itemsPerPage));
      // set the current page
      currentPageQuery < totalPages &&
        setCurrentPageQuery(Number(currentPageQuery + 1));
    } else if ((event.target as Element).id === 'back-btn') {
      // set new offset
      offset >= 0 && setOffset(offset - itemsPerPage);
      // set the current page
      currentPageQuery > 1 && setCurrentPageQuery(Number(currentPageQuery - 1));
    } else {
      // the number of the page button clicked
      const clickedPage = Number((event.target as Element).innerHTML);
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
          ${currentPageQuery === pageNumber ? 'block' : 'hidden md:block'}
          h-16 w-12 border-t-2 border-b-2 border-black bg-white hover:bg-blue-300 focus:bg-blue-200 focus:border-blue-300 ${
            currentPageQuery === pageNumber ? 'border-blue-700 border-2' : ''
          }
          `}
          onClick={handlePageClick}
          key={pageNumber}
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
            className={`hidden md:block h-16 w-12 border-2 border-black bg-slate-200 hover:bg-blue-300 focus:bg-blue-200 focus:border-blue-300"
            }`}
            onClick={() => {
              if (isNumber(breakAdd)) {
                setBreakStart(breakStart + breakAdd);
              }
            }}
            key={'...'}
          >
            ...
          </button>
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
    // returns the row of buttons
    return (
      <div className="flex flex-row justify-center mx-auto mt-auto mb-4">
        {/* back button */}
        <button
          className="h-16 w-12 disabled:bg-gray-500 hover:bg-blue-300 focus:bg-blue-200 focus:border-blue-300 border-l-2 border-t-2 border-b-2 border-black bg-white"
          id="back-btn"
          disabled={offset === 0}
          onClick={handlePageClick}
        >
          {'<'}
        </button>
        {/* map buttons[] */}
        {buttons.map(btn => btn)}
        {/* next button */}
        <button
          className="h-16 w-12 disabled:bg-gray-500 hover:bg-blue-300 focus:bg-blue-200 focus:border-blue-300  border-r-2 border-t-2 border-b-2 border-black bg-white"
          id="next-btn"
          disabled={offset >= totalItems - itemsPerPage}
          onClick={handlePageClick}
        >
          {'>'}
        </button>
      </div>
    );
  };
  return (
    <div className="max-w-screen-md">
      <h3 className="mb-8 prose-sm">
        Page {currentPageQuery}/{totalPages}
      </h3>
      <section>
        {/* Component passed in that will render the data */}
        <Component currentItems={currentItems} />
      </section>
      <div className="sticky lg:bottom-12 bottom-4">
        <RenderButtons />
      </div>
    </div>
  );
};

export default Paginator;
