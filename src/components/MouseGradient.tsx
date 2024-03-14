"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

// TODO: Make size viewport dependent
const RADIUS = 128;

export default function MouseGradient() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    (_, contextSafe) => {
      if (!contextSafe) throw new Error("GSAP is missing context.");

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

        const onMouseMove = contextSafe((e: MouseEvent) => {
          gsap.set(ref.current, { transformOrigin: "center" });

          gsap.to(ref.current, {
            translateY: e.clientY - RADIUS,
            translateX: e.clientX - RADIUS,
            delay: 0.05,
          });
        }) as EventListener;

        window.addEventListener("mousemove", onMouseMove);
        return () => {
          window.removeEventListener("mousemove", onMouseMove);
        };
      });
    },
    { scope: ref },
  );

  return (
    <div
      ref={ref}
      className="fixed left-0 top-0 z-[-1] h-64 w-64 rounded-full bg-cyan-900 mix-blend-color blur-[100px] motion-reduce:hidden"
    ></div>
  );
}
