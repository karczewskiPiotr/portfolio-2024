"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Navigation() {
  const nav = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        "[data-animate='fade']",
        { opacity: 0, translateY: -10 },
        { opacity: 1, translateY: 0, stagger: 0.1 },
      );
    },
    { scope: nav },
  );

  return (
    <nav
      ref={nav}
      className="col-start-2 col-end-8 flex h-fit w-fit flex-row items-center space-x-2 py-4 max-md:hidden"
    >
      <a
        data-animate="fade"
        className="mr-[2px] font-sans text-var-base font-bold leading-none text-neutral-500 opacity-0 transition-colors duration-500 hover:text-cyan-200 focus:text-cyan-200"
        href="#works"
      >
        selected work
      </a>
      <div
        data-animate="fade"
        className="mx-auto h-1 w-1 rounded-full bg-neutral-500 opacity-0"
      />
      <a
        data-animate="fade"
        className="mr-[2px] font-sans text-var-base font-bold leading-none text-neutral-500 opacity-0 transition-colors duration-500 hover:text-cyan-200 focus:text-cyan-200"
        href="#experience"
      >
        experience
      </a>
      <div
        data-animate="fade"
        className="mx-auto h-1 w-1 rounded-full bg-neutral-500 opacity-0"
      />
      <a
        data-animate="fade"
        className="mr-[2px] font-sans text-var-base font-bold leading-none text-neutral-500 opacity-0 transition-colors duration-500 hover:text-cyan-200 focus:text-cyan-200"
        href="#education"
      >
        education
      </a>
    </nav>
  );
}
