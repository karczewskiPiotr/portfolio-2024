import EmailButton from "@/components/EmailButton";

// prettier-ignore
const NAME = 
`Piotr
Karczewski`;

export default function Landing() {
  return (
    <>
      <div
        role="separator"
        className="col-start-4 col-end-11 mb-7 h-px w-full bg-black"
      />
      <div className="z-10 col-span-full row-start-2 row-end-2 flex text-var-4xl min-[400px]:text-var-md">
        <svg
          height="2em"
          viewBox="0 0 162 203"
          fill="red"
          aria-hidden="true"
          className="flex-shrink-0"
        ></svg>
        <h1 className="text-[clamp(theme(fontSize.4xl),8vw,8vw min-[400px]:text-var-md)] ml-5 font-serif font-semibold !leading-[110%] text-black">
          Full-stack Web
          <br />
          Developer
        </h1>
      </div>
      <div className="col-span-full row-start-2 row-end-2 mt-[2vw] flex items-center text-var-4xl max-xl:mt-[6vw] min-[400px]:text-var-md">
        <svg
          height="2em"
          viewBox="0 0 162 203"
          fill="none"
          className="flex-shrink-0 "
        >
          <g opacity="0.4">
            <path
              d="M81 121.684C91.125 121.684 162 152 162 162.105C162 172.211 91.125 202.526 81 202.526C70.875 202.526 0 172.211 0 162.105C0 152 70.875 121.684 81 121.684Z"
              fill="#D5A67F"
            />
            <path
              d="M81 60.8421C91.125 60.8421 162 91.1579 162 101.263C162 111.368 91.125 141.684 81 141.684C70.875 141.684 0 111.368 0 101.263C0 91.1579 70.875 60.8421 81 60.8421Z"
              fill="#BD9471"
            />
            <path
              d="M81 0C91.125 0 162 30.3158 162 40.4211C162 50.5263 91.125 80.8421 81 80.8421C70.875 80.8421 0 50.5263 0 40.4211C0 30.3158 70.875 0 81 0Z"
              fill="#997658"
            />
          </g>
        </svg>
        <h2 className="text-[clamp(theme(fontSize.4xl),8vw,8vw min-[400px]:text-var-md)] filter-noise relative isolate ml-2 font-sans font-black leading-none tracking-[-0.05em] text-copper-900 opacity-45 max-xl:whitespace-pre">
          {NAME}
        </h2>
      </div>
      <div
        role="separator"
        className="col-start-1 col-end-7 mt-8 h-px w-full bg-black"
      />
      <section className="col-span-full mt-8">
        <p className="font-sans text-var-lg font-light md:max-w-[45ch]">
          I’m a full-stack web developer with 3+ years of experience creating
          and maintaining data-driven single-page client apps, micro-frontend
          widgets and interactive web experiences.
        </p>
        <div className="flex flex-wrap">
          <EmailButton />
          <a
            href="/Piotr Karczewski CV.pdf"
            target="_blank"
            className="group mt-8 flex items-center text-start font-sans text-var-base font-semibold text-copper-900 opacity-50 transition-all duration-500 hover:text-black-950 hover:opacity-100 focus:text-black-950 focus:opacity-100"
          >
            Download resume
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="ml-2 mt-[0.25em] inline-block"
            >
              <path
                d="M10.6667 1L14 4.33333V13.6721C14 14.0373 13.7034 14.3333 13.3377 14.3333H2.66227C2.29651 14.3333 2 14.0298 2 13.6721V1.6612C2 1.29603 2.29663 1 2.66227 1H10.6667ZM8.66667 7.66667V5H7.33333V7.66667H5.33333L8 10.3333L10.6667 7.66667H8.66667Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
