import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  role: string;
  company: string;
  period: string;
  location: string;
}>;

export default function Job(props: Props) {
  return (
    <li className="font-sans text-lg flex flex-col">
      <h3 className="font-medium text-xl">
        {props.role}{" "}
        <span className="text-[#997651] opacity-45 filter-noise">◆</span>{" "}
        {props.company}
      </h3>
      <div role="separator" className=" h-px w-full bg-black mt-2 mb-2" />
      <div className="text-sm flex items-center justify-start mb-4">
        <p>{props.period}</p>
        <div className="h-1 w-1 rounded-full bg-[#505050] mx-3 " />
        <p>{props.location}</p>
      </div>
      <p className="max-w-[45ch] font-light">{props.children}</p>
    </li>
  );
}
