import { useEffect, useState } from "react";
import { DrupalState } from "@pantheon-systems/drupal-kit";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const drupalUrl = "https://dev-ds-demo.pantheonsite.io";

export default function Pagination({ data }) {
  // console.log("data:", data);
  // blur pixel for Next image component
  const base64TransparentPixel =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

  // configurable itemsPerPage
  const itemsPerPage = 1;
  // breakpoint
  
  
  const [offset, setOffset] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const [breakStart, setBreakStart] = useState(0)
  
  useEffect(() => {
    const endOffset = offset + itemsPerPage;
    setCurrentItems(data.slice(offset, endOffset));
    setTotalPages(Math.ceil(data.length / itemsPerPage));
    console.log(totalPages/3)
  }, [data, offset, itemsPerPage]);
  console.log('breakStart:', breakStart)
  
  const RenderData = () => {
    // render data as images if they exist or the filename
    return currentItems.map(({ title, id, body }, i) => {
      return (
        <div>
        <h2 className="transition-all ease-in text-center my-auto text-2xl" key={id}>
          {title}
        </h2>
        <p className="max-w-prose text-center p-3 mx-auto my-2">
          {body.value.substr(0, 150)}...
        </p>
        </div>
      );
    });
  };

  const handlePageClick = (event) => {
    const clickedPage = event.target.innerHTML;
    const newOffset = ((clickedPage - 1) * itemsPerPage) % data.length;
    setOffset(Number(newOffset));
    setCurrentPage(Number(clickedPage));
    console.log('totalPages:', totalPages)
    
  };

  const RenderButtons = () => {
    // the logic for the buttons will have to change if we want
    // a 'break' like 1 2 3 ... 7 8 9
    const buttons = [];
    for (let i = 0; i < totalPages; i++) {
      buttons.push(
        <button
          className={`h-24 w-16 sm:h-16 sm:w-12 border-t-2 border-b-2 border-black bg-white hover:bg-blue-300 focus:bg-blue-200 focus:border-blue-300 ${
            currentPage === i + 1 && "border-blue-700 border-2"
          }`}
          onClick={handlePageClick}
          key={i + 1 + offset}
        >
          {i + 1}
        </button>
      );
    }
    return (
      <div className="flex flex-wrap flex-row justify-center mx-auto mt-auto mb-4">
        {/* back button */}
        <button
          className="h-24 w-16 sm:h-16 sm:w-12 disabled:bg-gray-500 hover:bg-blue-300 focus:bg-blue-200 focus:border-blue-300  border-l-2 border-t-2 border-b-2 border-black bg-white"
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
          className="h-24 w-16 sm:h-16 sm:w-12 disabled:bg-gray-500 hover:bg-blue-300 focus:bg-blue-200 focus:border-blue-300  border-r-2 border-t-2 border-b-2 border-black bg-white"
          disabled={offset > data.length - itemsPerPage}
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
        <div className="max-h-screen w-max max-w-full mx-auto">
      <main className="flex mx-auto flex-col">
        <h1 className="text-4xl mx-auto my-4">Pagination example</h1>
        <div className="flex flex-col min-h-4/5">
          <RenderData />
        </div>
        <RenderButtons />
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

  // using a query here reduces data fetched from 2.09 mb to 185kb
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
  // console.log('data:', data)
  

  return {
    props: {
      data: data,
      revalidate: 60,
    },
  };
}
