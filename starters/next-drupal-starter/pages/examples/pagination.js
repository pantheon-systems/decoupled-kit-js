import { useEffect, useState } from "react";
import { DrupalState } from "@pantheon-systems/drupal-kit";
import Head from "next/head";

const drupalUrl = "https://dev-ds-demo.pantheonsite.io";

export default function Pagination({ data }) {
  // configurable itemsPerPage
  const itemsPerPage = 10;
  // configurable breakpoints
  // This value will be the start of the seperator.
  const [breakStart, setBreakStart] = useState(6);
  // This value will be the button to start with after seperator
  const breakEnd = 12;
  // how many buttons to add when the seperator is clicked
  const breakAdd = 6;

  const [offset, setOffset] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    const endOffset = offset + itemsPerPage;
    setCurrentItems(data.slice(offset, endOffset));
    setTotalPages(Math.ceil(data.length / itemsPerPage));
  }, [data, offset, itemsPerPage, breakStart]);

  const RenderData = () => {
    return currentItems.map(({ title, id, body }) => {
      return (
        <article key={id}>
          <h2 className="text-center my-auto text-2xl transform transition-all duration-150">
            {title}
          </h2>
          <p className="max-w-prose text-center p-3 mx-auto my-2 transform transform transition-all duration-150">
            {body.value.substr(0, 150)}...
          </p>
        </article>
      );
    });
  };

  const handlePageClick = (event) => {
    const clickedPage = event.target.innerHTML;
    const newOffset = ((clickedPage - 1) * itemsPerPage) % data.length;
    setOffset(Number(newOffset));
    setCurrentPage(Number(clickedPage));
  };

  const RenderButtons = () => {
    const buttons = [];

    for (let i = 0; i < totalPages; i++) {
      const keyId = keyId || 0;
      const pageNumber = i + 1;

      // seperator button
      if (i === breakStart) {
        if (breakStart + breakAdd >= totalPages) {
          buttons.push(
            <button
              className={`h-24 w-16 sm:h-16 sm:w-12 border-t-2 border-b-2 border-black bg-white hover:bg-blue-300 focus:bg-blue-200 focus:border-blue-300 transition-all duration-250 ease-in ${
                currentPage === pageNumber && "border-blue-700 border-2"
              }`}
              onClick={handlePageClick}
              key={++keyId}
            >
              {pageNumber}
            </button>
          );
          continue;
        }
        buttons.push(
          <button
            className={`h-24 w-16 sm:h-16 sm:w-12 border-2 border-black bg-slate-200 hover:bg-blue-300 focus:bg-blue-200 focus:border-blue-300"
          }`}
            onClick={() => setBreakStart(breakStart + breakAdd)}
            key={++keyId}
          >
            ...
          </button>
        );
      }
      // if we have a breakStart, don't render the middle buttons
      if (pageNumber >= breakStart && pageNumber < breakEnd) {
        ++keyId;
        continue;
      }
      buttons.push(
        <button
          className={`h-24 w-16 sm:h-16 sm:w-12 border-t-2 border-b-2 border-black bg-white hover:bg-blue-300 focus:bg-blue-200 focus:border-blue-300 transition-all duration-250 ease-in ${
            currentPage === pageNumber && "border-blue-700 border-2"
          }`}
          onClick={handlePageClick}
          key={++keyId}
        >
          {pageNumber}
        </button>
      );
    }
    return (
      <div className="flex flex-wrap flex-row justify-center mx-auto mt-auto mb-4">
        {/* back button */}
        <button
          className="h-24 w-16 sm:h-16 sm:w-12 disabled:bg-gray-500 hover:bg-blue-300 focus:bg-blue-200 focus:border-blue-300 border-l-2 border-t-2 border-b-2 border-black bg-white transition-all duration-250 ease-in"
          disabled={Number(offset) === 0}
          onClick={() => {
            offset > 0 && setOffset(offset - itemsPerPage);
            currentPage > 0 && setCurrentPage(currentPage - 1);
          }}
        >
          {"<"}
        </button>
        {/* map buttons[] */}
        {buttons.map((btn) => btn)}
        {/* next button */}
        <button
          className="h-24 w-16 sm:h-16 sm:w-12 disabled:bg-gray-500 hover:bg-blue-300 focus:bg-blue-200 focus:border-blue-300  border-r-2 border-t-2 border-b-2 border-black bg-white transition-all duration-250 ease-in"
          disabled={offset >= data.length - itemsPerPage}
          onClick={() => {
            offset < data.length - itemsPerPage &&
              setOffset(offset + itemsPerPage);
            currentPage < totalPages && setCurrentPage(currentPage + 1);
          }}
        >
          {">"}
        </button>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Pagination example</title>
        <meta name="description" content="Powered by Pantheon Decoupled Kit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="prose container min-w-full min-h-screen max-w-screen mx-auto">
        <main className="flex mx-auto flex-col">
          <section className="mx-auto">
            <h1 className="my-10">Pagination example</h1>
            <h3 className="mb-4 prose-sm">
              Page {currentPage}/{totalPages}
            </h3>
          </section>
          <section>
            <RenderData />
          </section>
          <div className="sticky bottom-0">
            <RenderButtons />
          </div>
        </main>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const store = new DrupalState({
    apiBase: drupalUrl,
    apiPrefix: "jsonapi",
    defaultLocale: "en",
    debug: true,
  });

  const data = await store.getObject({
    objectName: "node--ds_example",
    // query only finds first 50 results here, but not in codesandbox: https://codesandbox.io/s/drupal-state-query-all-rf9y51?file=/pages/test/index.js
    // query: `{
    //   title
    //   id
    //   body {
    //     value
    //   }
    // }`,
    all: true,
  });

  return {
    props: {
      data: data,
      revalidate: 60,
    },
  };
}
