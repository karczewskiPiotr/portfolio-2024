import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  role: string;
  company: string;
  period: string;
  location: string;
  className?: string;
}>;

export default function Job(props: Props) {
  return (
    <li
      className={`relative flex flex-col p-4 font-sans text-var-base text-neutral-50 xl:text-var-lg ${props.className} w-fit`}
    >
      <div className="fade-strip absolute inset-0 z-[-1] rounded-xl bg-neutral-800"></div>
      <h3 className="text-var-lg font-medium xl:text-var-base">
        {props.role}{" "}
        <span className="text-var-xs text-cyan-200">at {props.company}</span>
      </h3>
      <div className="mb-4 mt-1 flex flex-wrap items-center text-var-xs text-neutral-400">
        <p>{props.period}</p>
        <div className="mx-2 inline-block h-1 w-1 rounded-full bg-neutral-400 " />
        <p>{props.location}</p>
      </div>
      <p className="max-w-[45ch] text-var-sm font-light">{props.children}</p>
    </li>
  );
}
