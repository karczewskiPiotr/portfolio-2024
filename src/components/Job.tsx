import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  role: string;
  company: string;
  period: string;
  location: string;
}>;

export default function Job(props: Props) {
  return (
    <li className="flex flex-col font-sans text-var-base xl:text-var-lg">
      <h3 className="text-var-lg font-medium xl:text-var-xl">
        {props.role}{" "}
        <span className="filter-noise text-copper-900 opacity-45">◆</span>{" "}
        {props.company}
      </h3>
      <div className=" mb-2 mt-2 h-px w-full bg-black" />
      <div className="mb-4 flex items-center justify-start text-var-sm">
        <p>{props.period}</p>
        <div className="mx-3 h-1 w-1 rounded-full bg-black-950 " />
        <p>{props.location}</p>
      </div>
      <p className="max-w-[45ch] text-var-base font-light">{props.children}</p>
    </li>
  );
}
