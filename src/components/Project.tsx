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
      className="xl:text-[clamp(theme(fontSize.lg),1.18vw,1.2vw) flex font-sans text-[clamp(theme(fontSize.base),1.045vw,1.05vw)] opacity-0 max-lg:flex-col-reverse"
    >
      <div className="flex flex-[5] flex-col max-lg:mt-8 md:max-xl:relative">
        <div className="absolute bottom-0 right-0 top-0 hidden w-px bg-black lg:max-xl:block"></div>
        <a href={props.link} target="_blank" className="group w-fit pr-8">
          <h3 className="text-[clamp(theme(fontSize.lg),1.18vw,1.2vw)] font-medium xl:text-[clamp(theme(fontSize.xl),1.31vw,100vw)]">
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
        <div className=" mb-4 mt-2 h-px w-full bg-black" />
        <p className="max-w-[45ch] pr-8 font-light">{props.children}</p>
        <div className="mb-4 mt-8 flex items-center justify-start">
          <h4 className="my-[-0.25em] mr-3 font-sans text-[clamp(theme(fontSize.xs),0.755vw,0.76vw)] font-medium uppercase leading-[0] text-[#505050]">
            Technologies
          </h4>
          <div className="mr-3 h-1 w-1 rounded-full bg-[#505050]" />
          <div className="h-px flex-auto bg-black " />
        </div>
        <ul className="flex flex-wrap pr-8">
          {props.technologies.map((technology, index) => (
            <li
              key={technology}
              className="mr-3 flex items-center text-[clamp(theme(fontSize.sm),0.88vw,0.89vw)] text-black"
            >
              {technology}
              {props.technologies.length - 1 !== index && (
                <div className="mx-auto ml-3 h-1 w-1 rounded-full bg-[#505050]" />
              )}
            </li>
          ))}
        </ul>
        <div className="mb-4 mt-8 flex items-center justify-start">
          <h4 className="my-[-0.25em] mr-3 font-sans text-[clamp(theme(fontSize.xs),0.755vw,0.76vw)] font-medium uppercase leading-[0] text-[#505050]">
            Role
          </h4>
          <div className="mr-3 h-1 w-1 rounded-full bg-[#505050]" />
          <div className="h-px flex-auto bg-black " />
        </div>
        <ul className="flex space-x-3 pr-8">
          {props.roles.map((role, index) => (
            <li
              key={role}
              className="flex items-center text-[clamp(theme(fontSize.sm),0.88vw,0.89vw)] text-black"
            >
              {role}
              {props.roles.length - 1 !== index && (
                <div className="mx-auto ml-3 h-1 w-1 rounded-full bg-[#505050]" />
              )}
            </li>
          ))}
        </ul>
        <div className="mb-4 mt-8 flex items-center justify-start">
          <h4 className="my-[-0.25em] mr-3 font-sans text-[clamp(theme(fontSize.xs),0.755vw,0.76vw)] font-medium uppercase leading-[0] text-[#505050]">
            Owner
          </h4>
          <div className="mr-3 h-1 w-1 rounded-full bg-[#505050]" />
          <div className="h-px flex-auto bg-black " />
        </div>
        <p className="pr-8 font-sans text-[clamp(theme(fontSize.sm),0.88vw,0.89vw)]">
          {props.client}
        </p>
      </div>
      <div className="relative flex-[6]">
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
    </li>
  );
}
