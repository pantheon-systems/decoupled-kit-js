import { useEffect, useState, useRef } from "react";
import { DrupalState } from "@pantheon-systems/drupal-kit";
import Head from "next/head";
import { useRouter } from "next/router";
// To use your configured backend, use:
// const drupalUrl = process.env.backendUrl;

// Example paginated data set
const drupalUrl = "https://dev-ds-demo.pantheonsite.io";

export default function Pagination({
  data,
  totalPages,
  totalItems,
  itemsPerPage,
}) {
  // configurable breakpoints
  // This value will be the start of the seperator.
  const [breakStart, setBreakStart] = useState(6);
  // This value will be the button to start with after seperator
  const breakEnd = 12;
  // how many buttons to add when the seperator is clicked
  const breakAdd = 6;

  const router = useRouter();
  const currentPageQuery = Number(router.query.page);

  const [offset, setOffset] = useState((currentPageQuery - 1) * itemsPerPage);
  const [currentItems, setCurrentItems] = useState([]);

  // Loading component
  const [isLoading, setLoading] = useState(false);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);
  useEffect(() => {
    //After the component is mounted set router event handlers
    router.events.on("routeChangeStart", startLoading);
    router.events.on("routeChangeComplete", stopLoading);

    return () => {
      router.events.off("routeChangeStart", startLoading);
      router.events.off("routeChangeComplete", stopLoading);
    };
  }, []);

  // since we fetch ALL items, filtering the current items client side
  // further reduces API calls to the server
  useEffect(() => {
    setCurrentItems(
      data.slice(
        (currentPageQuery - 1) * itemsPerPage,
        itemsPerPage * currentPageQuery
      )
    );
  }, [data, offset, itemsPerPage, breakStart, currentPageQuery]);

  // Render the currentItems to the page
  const RenderData = () => {
    return currentItems.map(({ title, id, body }) => {
      return (
        <article key={id} className="flex flex-col p-3 w-fit mx-auto mb-10">
          <h2 className="justify-start my-auto text-2xl mb-2">{title}</h2>
          <p className="max-w-prose my-2">{body.value.substr(0, 150)}...</p>
        </article>
      );
    });
  };

  const handlePageClick = (event) => {
    const clickedPage = event.target.innerHTML;
    const newOffset = ((clickedPage - 1) * itemsPerPage) % totalItems;
    setOffset(Number(newOffset));
    router.push(
      `/examples/pagination/${clickedPage}`,
      `/examples/pagination/${clickedPage}`,
      { shallow: true }
    );
  };

  const RenderButtons = () => {
    if (totalPages <= 1) {
      return null;
    }
    const buttons = [];

    for (let i = 0; i < totalPages; i++) {
      const pageNumber = Number(i + 1);

      // seperator button
      if (i === breakStart) {
        if (breakStart + breakAdd >= totalPages) {
          buttons.push(
            <button
              className={`md:h-24 md:w-16 h-16 w-12 border-t-2 border-b-2 border-black bg-white hover:bg-blue-300 focus:bg-blue-200 focus:border-blue-300 transition-all duration-250 ease-in ${
                currentPageQuery === pageNumber && "border-blue-700 border-2"
              }`}
              onClick={handlePageClick}
              key={pageNumber}
            >
              {pageNumber}
            </button>
          );
          continue;
        }
        buttons.push(
          <button
            className={`md:h-24 md:w-16 h-16 w-12 border-2 border-black bg-slate-200 hover:bg-blue-300 focus:bg-blue-200 focus:border-blue-300"
          }`}
            onClick={() => setBreakStart(breakStart + breakAdd)}
            key={pageNumber}
          >
            ...
          </button>
        );
      }
      // if we have a breakStart, don't render the middle buttons
      if (pageNumber >= breakStart && pageNumber < breakEnd) {
        continue;
      }
      buttons.push(
        <button
          className={`md:h-24 md:w-16 h-16 w-12 border-t-2 border-b-2 border-black bg-white hover:bg-blue-300 focus:bg-blue-200 focus:border-blue-300 transition-all duration-250 ease-in ${
            currentPageQuery === pageNumber && "border-blue-700 border-2"
          }`}
          onClick={handlePageClick}
          key={pageNumber}
        >
          {pageNumber}
        </button>
      );
    }
    return (
      <div className="flex flex-wrap flex-row justify-center mx-auto mt-auto mb-4">
        {/* back button */}
        <button
          className="md:h-24 md:w-16 h-16 w-12 disabled:bg-gray-500 hover:bg-blue-300 focus:bg-blue-200 focus:border-blue-300 border-l-2 border-t-2 border-b-2 border-black bg-white transition-all duration-250 ease-in"
          disabled={Number(offset) === 0}
          onClick={() => {
            offset > 0 && setOffset(offset - itemsPerPage);
            currentPageQuery > 0 &&
              router.push(
                `${router.basePath}/examples/pagination/${
                  currentPageQuery - 1
                }`,
                `${router.basePath}/examples/pagination/${
                  currentPageQuery - 1
                }`,
                { shallow: true }
              );
          }}
        >
          {"<"}
        </button>
        {/* map buttons[] */}
        {buttons.map((btn) => btn)}
        {/* next button */}
        <button
          className="md:h-24 md:w-16 h-16 w-12 disabled:bg-gray-500 hover:bg-blue-300 focus:bg-blue-200 focus:border-blue-300  border-r-2 border-t-2 border-b-2 border-black bg-white transition-all duration-250 ease-in"
          disabled={offset >= totalItems - itemsPerPage}
          onClick={() => {
            offset < totalItems - itemsPerPage &&
              setOffset(offset + itemsPerPage);
            currentPageQuery < totalPages &&
              router.push(
                `${router.basePath}/examples/pagination/${
                  currentPageQuery + 1
                }`,
                `${router.basePath}/examples/pagination/${
                  currentPageQuery + 1
                }`,
                { shallow: true }
              );
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
      {isLoading ? (
        <div className="flex justify-center items-center">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full absolute top-50"
            role="status"
          ></div>
        </div>
      ) : (
        <div className="prose container min-w-full min-h-screen max-w-screen mx-auto">
          <main className="flex mx-auto flex-col">
            <section className="mx-auto">
              <h1 className="my-10">Pagination example</h1>
              <h3 className="mb-8 prose-sm">
                Page {currentPageQuery}/{totalPages}
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
      )}
    </>
  );
}

export async function getStaticPaths() {
  const store = new DrupalState({
    apiBase: drupalUrl,
    apiPrefix: "jsonapi",
    defaultLocale: "en",
    debug: true,
  });
  const data = await store.getObject({
    objectName: "node--ds_example",
    all: true,
    query: `{
      title
      id
      body {
        value
      }
    }`,
  });
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const arr = Array.from(Array(totalPages).keys());

  const paths = arr.map((page) => ({
    params: { page: (page + 1).toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { page } }) {
  const store = new DrupalState({
    apiBase: drupalUrl,
    apiPrefix: "jsonapi",
    defaultLocale: "en",
    debug: true,
  });

  // using a query here results in a payload of 641kb, down from 2.09mb without a query!
  const data = await store.getObject({
    objectName: "node--ds_example",
    query: `{
      title
      id
      body {
        value
      }
    }`,
    all: true,
  });

  // configurable itemsPerPage
  const itemsPerPage = 10;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const totalItems = data.length;

  return {
    props: {
      data,
      totalItems,
      itemsPerPage,
      totalPages,
      revalidate: 60,
    },
  };
}
