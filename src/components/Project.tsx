"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  name: string;
  roles: string[];
  client: string;
  technologies: string[];
  link?: string;
  backgroundImage: StaticImageData;
  foregroundImages: StaticImageData[];
}>;

export default function Project(props: Props) {
  const ref = useRef<HTMLLIElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  });

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "25% bottom",
      },
    });

    timeline.fromTo(
      ref.current,
      { opacity: 0, translateY: 48 },
      { opacity: 1, translateY: 0, ease: "power1.out", duration: 1 },
    );
  });

  return (
    <li
      ref={ref}
      className="flex h-fit flex-[1_1_40%] font-sans text-var-base opacity-0 max-lg:flex-col-reverse xl:text-var-lg "
    >
      <div className="relative h-fit flex-[1] overflow-hidden rounded-xl">
        <Image
          src={props.backgroundImage}
          alt="Background"
          placeholder="blur"
        />
        {props.foregroundImages.map((image, index) => (
          <Image
            key={`image__${index}`}
            src={image}
            alt="Project mockup"
            className="absolute inset-0"
            placeholder="blur"
          />
        ))}
      </div>
      <div className="flex flex-[2] flex-col px-4 max-lg:mt-8 md:max-xl:relative">
        <a href={props.link} target="_blank" className="group w-fit pr-8">
          <h3 className="text-var-lg font-medium text-neutral-50 xl:text-var-base">
            {props.name}{" "}
            {props.link && (
              <svg
                height="1em"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-focus:translate-x-1"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            )}
          </h3>
        </a>
        <p className="mt-1 pr-8 font-sans text-var-xs text-cyan-200">
          {props.client}
        </p>
        <p className="mt-4 max-w-[45ch] text-var-sm font-light text-neutral-50">
          {props.children}
        </p>

        <ul className="mt-4 flex flex-wrap ">
          {props.roles.map((role, index) => (
            <li
              key={role}
              className="mb-2 mr-3 flex items-center rounded-xl bg-cyan-600/45 px-2 py-1 text-var-xs text-neutral-50"
            >
              {role}
            </li>
          ))}
          {props.technologies.map((technology, index) => (
            <li
              key={technology}
              className="mb-2 mr-3 flex items-center rounded-xl bg-cyan-950/45 px-2 py-1 text-var-xs text-neutral-50"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
