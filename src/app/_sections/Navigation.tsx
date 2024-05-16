"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Link from "next/link";

export default function Navigation() {
  const nav = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const conditions = {
        prefersMotion: "(prefers-reduced-motion: no-preference)",
        preferesReducedMotion: "(prefers-reduced-motion: reduce)",
      };

      mm.add(conditions, (context) => {
        if (!context.conditions) {
          throw new Error("No media query conditions provided.");
        }

        if (context.conditions.preferesReducedMotion) return;

        gsap.fromTo(
          "[data-animate='fade']",
          { opacity: 0, translateY: -10 },
          { opacity: 1, translateY: 0, stagger: 0.1 },
        );
      });
    },
    { scope: nav },
  );

  return (
    <nav
      ref={nav}
      className="z-0 col-start-2 col-end-8 flex h-fit w-fit flex-row items-center space-x-2 py-4 max-md:hidden"
    >
      <Link
        data-animate="fade"
        className="mr-[2px] font-sans text-var-sm font-bold leading-none text-neutral-500 transition-colors duration-500 hover:text-cyan-200 focus:text-cyan-200 motion-safe:opacity-0"
        href="#works"
      >
        selected work
      </Link>
      <div
        data-animate="fade"
        className="mx-auto h-1 w-1 rounded-full bg-neutral-500 motion-safe:opacity-0"
      />
      <Link
        data-animate="fade"
        className="mr-[2px] font-sans text-var-sm font-bold leading-none text-neutral-500 transition-colors duration-500 hover:text-cyan-200 focus:text-cyan-200 motion-safe:opacity-0"
        href="#experience"
      >
        experience
      </Link>
      <div
        data-animate="fade"
        className="mx-auto h-1 w-1 rounded-full bg-neutral-500 motion-safe:opacity-0"
      />
      <Link
        data-animate="fade"
        className="mr-[2px] font-sans text-var-sm font-bold leading-none text-neutral-500 transition-colors duration-500 hover:text-cyan-200 focus:text-cyan-200 motion-safe:opacity-0"
        href="#education"
      >
        education
      </Link>
    </nav>
  );
}
