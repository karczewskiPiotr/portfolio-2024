import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  name: string;
  faculty: string;
  field: string;
  degree?: string;
  period: string;
  location: string;
}>;

export default function School(props: Props) {
  return (
    <li className="xl:text-[clamp(theme(fontSize.lg),1.18vw,1.2vw) flex flex-col font-sans text-var-base">
      <h3 className="text-var-lg font-medium xl:text-var-xl">{props.name} </h3>
      <div className=" mb-2 mt-2 h-px w-full bg-black" />
      <div className="mb-4 flex items-center justify-start text-var-sm">
        <p>{props.period}</p>
        <div className="mx-3 h-1 w-1 rounded-full bg-black-950 " />
        <p>{props.location}</p>
      </div>
      <p className="max-w-[45ch] font-light">{props.children}</p>
    </li>
  );
}
