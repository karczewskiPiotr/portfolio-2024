"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export default function Line(props: { variant: number }) {
  const ref = useRef<SVGGElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      if (!ref.current) return;

      const length = Math.ceil(
        (ref.current.firstChild as SVGPathElement)!.getTotalLength(),
      );

      gsap.set(ref.current, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top center",
          end: "bottom center",
          scrub: 2,
          invalidateOnRefresh: true,
        },
      });

      timeline.fromTo(
        ref.current,
        { strokeDashoffset: length },
        { strokeDashoffset: 0 },
      );

      gsap.to(ref.current, {
        keyframes: NEON_KEYFRAMES,
        repeat: -1,
        duration: 7,
        ease: "none",
        delay: props.variant % 2,
      });
    });

    return () => {
      mm.kill();
    };
  });

  return (
    <svg
      viewBox="0 0 400 256"
      preserveAspectRatio="none"
      fill="none"
      className="h-auto w-full overflow-visible max-xl:mt-auto"
    >
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation={8}
            result="blurred"
          ></feGaussianBlur>
          <feMerge>
            <feMergeNode in="blurred" />
            <feMergeNode in="blurred" />
          </feMerge>
        </filter>
      </defs>
      <path d={PATHS[props.variant]} className="stroke-neutral-500" />
      <g ref={ref}>
        <path
          d={PATHS[props.variant]}
          className="neon stroke-cyan-200"
          filter="url(#glow)"
        />
        <path d={PATHS[props.variant]} className="neon stroke-cyan-200" />
      </g>
    </svg>
  );
}

const PATHS = [
  "M0 92.3083C18.4836 90.8821 44 130.308 96.5 104.415C130.5 87.6456 200.5 -8.31219 198.5 92.3083C197.658 134.688 276.5 113.808 268 152.808C259.5 191.808 238 213.537 217.5 216.308C197 219.078 198.5 255.808 198.5 255.808",
  "M400 102C400 102 273.461 129.058 251.001 75C221.5 4 41.5007 28.8795 39.5007 129.5C38.6583 171.88 119.5 95.5 133.5 168.5C147.5 241.5 167.5 192 196.5 207.5C217.935 218.957 235.5 256 235.5 256",
  "M0 101.666C0 101.666 115.61 41.675 165.324 74.6072C182.522 86 199 82.5 273 92C315.136 97.4093 332.5 121.5 298.471 145.761C264.443 170.022 255 155.5 213 190C171 224.5 182.522 256 182.522 256",
  "M400.427 99.3615C342.5 108.5 375.598 156.107 307 135C287.5 129 277 121.5 255.927 114.196C215.788 100.283 163.956 143.457 224.427 157.696C284.898 171.935 176.5 -48.5 151.5 38C126.5 124.5 178 129 135.5 256",
  "M0.5 76.5C37 68 75.5 73.5 89 137C102.5 200.5 150.5 143 159.5 255.5",
  "M399 59.5001C297 46.5001 304.925 60.1728 254.5 96.0001C235.5 109.5 203.769 139.5 191 96C174.27 39.0035 162.3 69.6915 129 96C38.5 167.5 99.714 176.436 153 183C309 202.217 232.167 244 239.5 257",
  "M0.5 76.5001C37 68.0001 364.5 127 297 55C229.5 -17 150.5 143 159.5 255.5",
];

const NEON_KEYFRAMES = {
  "0% ": { opacity: 1 },
  "4%": { opacity: 0.9 },
  "6%": { opacity: 0.75 },
  "8%": { opacity: 0.85 },
  "10%": { opacity: 0.9 },
  "11%": { opacity: 0.922 },
  "12%": { opacity: 0.9 },
  "14%": { opacity: 0.85 },
  "16%": { opacity: 0.88 },
  "17%": { opacity: 0.9 },
  "19%": { opacity: 0.93 },
  "20%": { opacity: 0.99 },
  "24%": { opacity: 1 },
  "26%": { opacity: 0.84 },
  "28%": { opacity: 0.88 },
  "37%": { opacity: 0.83 },
  "38%": { opacity: 0.5 },
  "39%": { opacity: 0.96 },
  "42%": { opacity: 1 },
  "44%": { opacity: 0.97 },
  "46%": { opacity: 0.94 },
  "56%": { opacity: 0.8 },
  "58%": { opacity: 0.85 },
  "60%": { opacity: 0.99 },
  "68%": { opacity: 1 },
  "70%": { opacity: 0.9 },
  "72%": { opacity: 0.95 },
  "93%": { opacity: 0.93 },
  "95%": { opacity: 0.95 },
  "97%": { opacity: 0.93 },
  "100% ": { opacity: 1 },
};
