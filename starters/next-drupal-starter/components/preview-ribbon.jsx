import { useState } from "react";

export default function PreviewRibbon() {
  const [show, setShow] = useState(true);
  const [showText, setShowText] = useState(true);

  return (
    <div
      onTransitionEndCapture={(transition) => {
        if (transition.propertyName === "transform") {
          show ? setTimeout(() => setShowText(true), 150) : setShowText(false);
        }
      }}
      className={`overflow-hidden flex justify-between items-center min-h-[3.5rem] h-14 px-8 py-2 z-10 bg-[#3017A1] text-white transition-all delay-150 w-full ${
        !show ? "justify-start translate-x-[calc(100%-5rem)] pl-4" : ""
      }`}
    >
      {showText && (
        <>
          <span className="mr-auto self-center">Preview Mode Enabled</span>
          <a
            className="justify-self-end border text-black border-black w-fit max-w- px-4 py-2 mr-12 bg-yellow-300"
            href="/api/clear-preview"
          >
            Exit Preview Mode
          </a>
        </>
      )}
      <button
        className={`self-center delay-200 ${showText ? "self-end" : ""}`}
        onClick={() => setShow(!show)}
      >
        <img
          className={`w-8 transition-all ${show ? "rotate-180" : ""}`}
          src="/collapse.svg"
        />
      </button>
    </div>
  );
}
