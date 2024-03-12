"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export default function Line() {
  const ref = useRef<SVGPathElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  });

  useGSAP(() => {
    if (!ref.current) return;

    const length = Math.ceil(ref.current.getTotalLength());

    gsap.set(ref.current, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top center",
        end: "bottom center",
        markers: true,
        scrub: true,
        immediateRender: false,
      },
    });

    timeline.fromTo(
      ref.current,
      { strokeDashoffset: length },
      { strokeDashoffset: 0 },
    );
  });

  return (
    <svg viewBox="0 0 10 10" height="100%" width="60%">
      <path
        d="M 0 0 Q 9 1 10 10"
        fill="none"
        strokeWidth="0.05"
        className="stroke-neutral-500"
      ></path>
      <path
        ref={ref}
        d="M 0 0 Q 9 1 10 10"
        fill="none"
        strokeWidth="0.05"
        className="stroke-cyan-200"
      ></path>
    </svg>
  );
}

//          {/* 23 do 27 */}
