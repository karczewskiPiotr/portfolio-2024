"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

// TODO: Make size viewport dependent
const RADIUS = 96;

export default function MouseGradient() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const onMouseMove = (e: MouseEvent) => {
        gsap.set(ref.current, { transformOrigin: "center" });

        gsap.to(ref.current, {
          translateY: e.clientY - RADIUS,
          translateX: e.clientX - RADIUS,
          delay: 0.05,
        });
      };

      window.addEventListener("mousemove", onMouseMove);
      return () => {
        window.removeEventListener("mousemove", onMouseMove);
      };
    },
    { scope: ref },
  );

  return (
    <div
      ref={ref}
      className="fixed left-0 top-0 z-[-1] h-48 w-48 rounded-full bg-cyan-950 mix-blend-color blur-[100px]"
    ></div>
  );
}
