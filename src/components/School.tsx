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
    <li className="font-sans text-lg flex flex-col">
      <h3 className="font-medium text-xl">{props.name} </h3>
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
