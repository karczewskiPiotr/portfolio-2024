import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  name: string;
  roles: string[];
  client: string;
  technologies: string[];
  link: string;
  backgroundImage: StaticImageData;
  foregroundImages: StaticImageData[];
}>;

export default function Project(props: Props) {
  return (
    <li className="font-sans text-lg flex">
      <div className="flex-[5] flex flex-col">
        <a href={props.link} className="group w-fit">
          <h3 className="font-medium text-xl">
            {props.name}{" "}
            <svg
              height="1em"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="inline-block"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </h3>
        </a>
        <div role="separator" className=" h-px w-full bg-black mt-2 mb-4" />
        <p className="max-w-[45ch] font-light">{props.children}</p>
        <div className="flex items-center justify-start mt-8 mb-4">
          <p className="leading-[0] text-[#505050] uppercase my-[-0.25em] font-sans font-medium text-xs mr-3">
            Technologies
          </p>
          <div className="h-1 w-1 rounded-full bg-[#505050] mr-3" />
          <div role="separator" className="h-px flex-auto bg-black " />
        </div>
        <ul className="flex space-x-3">
          {props.technologies.map((technology, index) => (
            <li
              key={technology}
              className="text-sm flex items-center text-black"
            >
              {technology}
              {props.technologies.length - 1 !== index && (
                <div className="h-1 w-1 rounded-full bg-[#505050] mx-auto ml-3" />
              )}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-start mt-8 mb-4">
          <p className="leading-[0] text-[#505050] uppercase my-[-0.25em] font-sans font-medium text-xs mr-3">
            Role
          </p>
          <div className="h-1 w-1 rounded-full bg-[#505050] mr-3" />
          <div role="separator" className="h-px flex-auto bg-black " />
        </div>
        <ul className="flex space-x-3">
          {props.roles.map((role, index) => (
            <li key={role} className="text-sm flex items-center text-black">
              {role}
              {props.roles.length - 1 !== index && (
                <div className="h-1 w-1 rounded-full bg-[#505050] mx-auto ml-3" />
              )}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-start mt-8 mb-4">
          <p className="leading-[0] text-[#505050] uppercase my-[-0.25em] font-sans font-medium text-xs mr-3">
            Owner
          </p>
          <div className="h-1 w-1 rounded-full bg-[#505050] mr-3" />
          <div role="separator" className="h-px flex-auto bg-black " />
        </div>
        <p className="text-sm font-sans">{props.client}</p>
      </div>
      <div className="flex-[6] relative">
        <Image
          src={props.backgroundImage}
          alt="asd"
          className=""
          placeholder="blur"
        />
        {props.foregroundImages.map((image, index) => (
          <Image
            key={`image__${index}`}
            src={image}
            alt="asd1"
            className="absolute inset-0"
          />
        ))}
      </div>
    </li>
  );
}
