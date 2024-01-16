// prettier-ignore
const NAME = 
`Piotr
Karczewski`;

export default function Landing() {
  return (
    <>
      <div
        role="separator"
        className="col-start-4 col-end-11 h-px w-full bg-black mb-7"
      />
      <div className="row-start-2 row-end-2 col-span-full z-10 flex text-[clamp(theme(fontSize.4xl),8vw,8vw)] min-[400px]:text-[clamp(44px,8vw,8vw)]">
        <svg
          height="2em"
          viewBox="0 0 162 203"
          fill="red"
          aria-hidden="true"
          className="flex-shrink-0"
        ></svg>
        <h1 className="font-serif text-[clamp(theme(fontSize.4xl),8vw,8vw min-[400px]:text-[clamp(44px,8vw,8vw)])] font-semibold !leading-[110%] ml-5 text-black">
          Full-stack Web
          <br />
          Developer
        </h1>
      </div>
      <div className="flex items-center row-start-2 row-end-2 col-span-full mt-[2vw] max-xl:mt-[6vw] text-[clamp(theme(fontSize.4xl),8vw,8vw)] min-[400px]:text-[clamp(44px,8vw,8vw)]">
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
        <h2 className="font-black font-sans text-[clamp(theme(fontSize.4xl),8vw,8vw min-[400px]:text-[clamp(44px,8vw,8vw)])] leading-none tracking-[-0.05em] opacity-45 ml-2 max-xl:whitespace-pre text-[#997651] relative isolate filter-noise">
          {NAME}
        </h2>
      </div>
      <div
        role="separator"
        className="col-start-1 col-end-7 h-px w-full bg-black mt-8"
      />
      <section className="col-span-full mt-8">
        <p className="font-sans font-light text-[clamp(theme(fontSize.lg),1.18vw,1.2vw)] md:max-w-[45ch]">
          I’m a full-stack web developer with 3+ years of experience creating
          and maintaining data-driven single-page client apps, micro-frontend
          widgets and interactive web experiences.
        </p>
        <div className="flex flex-wrap">
          <div
            role="button"
            className="font-sans text-start border border-[#505050] font-semibold text-[clamp(theme(fontSize.base),1.045vw,1.05vw)] px-3 flex items-center space-x-3 hover:bg-[rgba(153,118,88,0.45)] transition-colors duration-500 group mt-8 mr-5"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="none"
              className="inline-block my-3 flex-shrink-0"
            >
              <path
                d="M2.00004 2H14C14.3682 2 14.6667 2.29848 14.6667 2.66667V13.3333C14.6667 13.7015 14.3682 14 14 14H2.00004C1.63185 14 1.33337 13.7015 1.33337 13.3333V2.66667C1.33337 2.29848 1.63185 2 2.00004 2ZM8.04044 7.7886L3.76485 4.15847L2.90189 5.17487L8.04877 9.54473L13.103 5.17077L12.2304 4.16256L8.04044 7.7886Z"
                fill="#505050"
              />
            </svg>
            <div className="h-full w-px bg-[#505050] inline-block" />
            <div className="text-center flex-auto grid">
              <span className="row-start-1 row-end-1 col-start-1 col-end-1 group-hover:opacity-0 opacity-100 duration-500 group-hover:duration-300  group-hover:delay-0">
                p.karczewsk@gmail.com
              </span>
              <span className="opacity-0 col-start-1 col-end-1 row-start-1 row-end-1 group-hover:opacity-100 transition-opacity duration-500">
                Click to copy!
              </span>
            </div>
          </div>
          <button
            type="button"
            className="mt-8 font-sans text-start font-semibold text-[clamp(theme(fontSize.base),1.045vw,1.05vw)] text-[#997658] group hover:text-[#505050] opacity-50 hover:opacity-100 transition-all duration-500"
          >
            Download resume
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="inline-block ml-2"
            >
              <path
                d="M10.6667 1L14 4.33333V13.6721C14 14.0373 13.7034 14.3333 13.3377 14.3333H2.66227C2.29651 14.3333 2 14.0298 2 13.6721V1.6612C2 1.29603 2.29663 1 2.66227 1H10.6667ZM8.66667 7.66667V5H7.33333V7.66667H5.33333L8 10.3333L10.6667 7.66667H8.66667Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}
