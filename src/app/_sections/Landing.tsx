import EmailButton from "@/components/EmailButton";

export default function Landing() {
  return (
    <>
      <div className="col-span-full mt-12">
        <h2 className="mb-2 ml-2 font-sans text-2xl font-medium text-cyan-200 max-lg:text-center">
          Piotr Karczewski
        </h2>
        <h1 className="font-sans text-9xl font-bold text-neutral-50 max-lg:text-center max-lg:text-7xl max-md:text-5xl">
          Full-stack Web
          <br />
          Developer
        </h1>
      </div>
      <section className="col-span-full mt-8">
        <p className="font-sans text-var-lg font-light text-neutral-50 max-lg:mx-auto max-lg:text-center md:max-w-[45ch]">
          I’m a full-stack web developer with 3+ years of experience creating
          and maintaining data-driven single-page client apps, micro-frontend
          widgets and interactive web experiences.
        </p>
        <div className="flex flex-wrap max-lg:justify-center">
          <EmailButton />
          <a
            href="/Piotr Karczewski CV.pdf"
            target="_blank"
            className="group ml-4 mt-8 flex items-center rounded-xl px-3 text-start font-sans text-var-base font-semibold text-cyan-200 opacity-100 transition-all duration-500 hover:bg-cyan-950/45 hover:text-neutral-50 hover:opacity-100 focus:bg-cyan-950/45 focus:text-neutral-50 focus:opacity-100 max-md:mr-4"
          >
            Download resume
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="ml-2 inline-block"
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
