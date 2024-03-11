"use client";

import { useRef, useState } from "react";

export default function EmailButton() {
  const [isPressed, setIsPressed] = useState(false);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  useRef(() => () => {
    if (timeout.current) clearTimeout(timeout.current);
  });

  const copyToClipboard = () => {
    setIsPressed(true);
    navigator.clipboard.writeText("p.karczewsk@gmail.com");
  };

  const resetText = () => {
    timeout.current = setTimeout(() => setIsPressed(false), 500);
  };

  return (
    <div
      id="cta"
      role="button"
      tabIndex={0}
      onClick={copyToClipboard}
      onKeyDown={(e) => {
        if (e.key === "Enter") copyToClipboard();
      }}
      onBlur={resetText}
      onMouseLeave={resetText}
      className="group mt-8 flex items-center space-x-3 rounded-xl border border-neutral-500 px-3 text-start font-sans text-var-base font-semibold transition-colors duration-500 hover:bg-cyan-950/45 focus:bg-cyan-950/45"
    >
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="none"
        className="my-3 inline-block flex-shrink-0"
      >
        <path
          d="M2.00004 2H14C14.3682 2 14.6667 2.29848 14.6667 2.66667V13.3333C14.6667 13.7015 14.3682 14 14 14H2.00004C1.63185 14 1.33337 13.7015 1.33337 13.3333V2.66667C1.33337 2.29848 1.63185 2 2.00004 2ZM8.04044 7.7886L3.76485 4.15847L2.90189 5.17487L8.04877 9.54473L13.103 5.17077L12.2304 4.16256L8.04044 7.7886Z"
          className="transition-fill fill-neutral-50 duration-500 group-hover:fill-cyan-200 group-focus:fill-cyan-200"
        />
      </svg>
      <div className="inline-block h-full w-px bg-neutral-500" />
      <div className="grid flex-auto text-center">
        <span className="col-start-1 col-end-1 row-start-1 row-end-1 text-neutral-50 opacity-100 duration-500 group-hover:opacity-0 group-hover:delay-0 group-hover:duration-300 group-focus:opacity-0 group-focus:delay-0 group-focus:duration-300">
          p.karczewsk@gmail.com
        </span>
        <span className="col-start-1 col-end-1 row-start-1 row-end-1 text-cyan-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus:opacity-100">
          {!isPressed ? "Click to copy!" : "Copied to clipboard!"}
        </span>
      </div>
    </div>
  );
}
