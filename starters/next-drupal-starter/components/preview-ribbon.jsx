import { useState } from "react";

export default function PreviewRibbion() {
  const [show, setShow] = useState(true);

  return (
    <div
      className={`flex justify-between items-center h-14 transition-all fixed px-8 py-2 z-10 bg-[#3017A1] text-white ${
        show ? "w-full p-16 top-0 right-0" : "right-0 w-24"
      }`}
    >
      {show ? (
        <>
          <p className="mr-auto">Preview Mode Enabled</p>
          <a
            className="mr-12 border text-black border-black px-4 py-2 bg-yellow-300"
            href="/api/clear-preview"
          >
            Exit Preview Mode
          </a>
          <button onClick={() => setShow(false)}>
            <img className="w-8" src="/collapse.svg"></img>
          </button>
        </>
      ) : (
        <button onClick={() => setShow(true)}>
          <img className="w-8 rotate-180" src="/collapse.svg"></img>
        </button>
      )}
    </div>
  );
}
