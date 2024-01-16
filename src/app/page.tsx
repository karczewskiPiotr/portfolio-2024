import Project from "@/components/Project";

import so1 from "../../public/181shots_so.png";
import so2 from "../../public/386shots_so.png";

import so3 from "../../public/969shots_so.png";
import so4 from "../../public/563shots_so.png";

import so5 from "../../public/839shots_so.png";
import so6 from "../../public/163shots_so.png";
import so7 from "../../public/263shots_so.png";

import so8 from "../../public/965shots_so.png";
import so9 from "../../public/94shots_so.png";

import s10 from "../../public/65shots_so.png";
import s11 from "../../public/381shots_so.png";
import s12 from "../../public/498shots_so.png";

import s13 from "../../public/570shots_so.png";
import s14 from "../../public/600shots_so.png";
import s15 from "../../public/819shots_so.png";

import s16 from "../../public/mgc.png";
import s17 from "../../public/mgc_1.png";
import s18 from "../../public/mgc_2.png";
import s19 from "../../public/mgc_3.png";

import s20 from "../../public/wss.png";
import s21 from "../../public/wss_1.png";
import Job from "@/components/Job";
import School from "@/components/School";

export default function Home() {
  return (
    <>
      <nav className="flex flex-col col-start-1 col-span-1 w-fit space-y-2 items-center sticky top-16 h-fit">
        <svg width="32" viewBox="0 0 20 16" fill="none">
          <path
            d="M10 5.83334C11.25 5.83334 20 9.58334 20 10.8333C20 12.0833 11.25 15.8333 10 15.8333C8.75 15.8333 0 12.0833 0 10.8333C0 9.58334 8.75 5.83334 10 5.83334Z"
            fill="#505050"
          />
          <path
            d="M10 2.91666C11.25 2.91666 20 6.66666 20 7.91666C20 9.16666 11.25 12.9167 10 12.9167C8.75 12.9167 0 9.16666 0 7.91666C0 6.66666 8.75 2.91666 10 2.91666Z"
            fill="#2D2D2D"
          />
          <path
            d="M10 0C11.25 0 20 3.75 20 5C20 6.25 11.25 10 10 10C8.75 10 0 6.25 0 5C0 3.75 8.75 0 10 0Z"
            fill="black"
          />
        </svg>
        <div className="h-1 w-1 rounded-full bg-[#505050] mx-auto" />
        <a
          className="[writing-mode:tb-rl;] -rotate-180 font-sans font-bold text-[#505050] leading-none hover:text-[#997658] transition-colors duration-500 text-base mr-[2px]"
          href="#"
        >
          selected work
        </a>
        <div className="h-1 w-1 rounded-full bg-[#505050] mx-auto" />
        <a
          className="[writing-mode:tb-rl;] -rotate-180 font-sans font-bold text-[#505050] leading-none hover:text-[#997658] transition-colors duration-500 text-base mr-[2px]"
          href="#"
        >
          experience
        </a>
        <div className="h-1 w-1 rounded-full bg-[#505050] mx-auto" />
        <a
          className="[writing-mode:tb-rl;] -rotate-180 font-sans font-bold text-[#505050] leading-none hover:text-[#997658] transition-colors duration-500 text-base mr-[2px]"
          href="#"
        >
          education
        </a>
      </nav>

      <main className="grid col-start-2 col-end-12 grid-cols-10 pt-12 gap-x-5">
        <div
          role="separator"
          className="col-start-4 col-end-11 h-px w-full bg-black mb-7"
        />
        <div className="row-start-2 row-end-2 col-span-full z-10">
          <h1 className="font-serif text-9xl font-semibold !leading-[110%] ml-[calc(162px+theme(spacing.5))] text-black">
            Full-stack Web
            <br />
            Developer
          </h1>
        </div>
        <div className="flex items-center row-start-2 row-end-2 col-span-full mt-10">
          <svg
            width="162"
            height="203"
            viewBox="0 0 162 203"
            fill="none"
            className="flex-shrink-0"
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
          <h2 className="font-black font-sans text-9xl leading-none tracking-[-0.05em] opacity-45 ml-2 whitespace-nowrap text-[#997651] relative isolate filter-noise">
            Piotr&nbsp;Karczewski
          </h2>
        </div>
        <div
          role="separator"
          className="col-start-1 col-end-7 h-px w-full bg-black mt-8"
        />
        <section className="col-start-1 col-end-5 mt-8">
          <p className="font-sans font-light text-lg">
            I’m a full-stack web developer with 3+ years of experience creating
            and maintaining data-driven single-page client apps, micro-frontend
            widgets and interactive web experiences.
          </p>
          <div className="mt-8 space-x-5 flex">
            <div
              role="button"
              className="font-sans  text-start border border-[#505050] font-semibold text-base px-3 flex items-center space-x-3 hover:bg-[rgba(153,118,88,0.45)] transition-colors duration-500 group"
            >
              <svg
                width="16"
                height="16"
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
              className="font-sans  text-start font-semibold text-base text-[#997658] group hover:text-[#505050] opacity-50 hover:opacity-100 transition-all duration-500"
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
        <section className="col-span-full mt-32">
          <h2 className="text-9xl font-bold font-serif text-[#997651] filter-noise opacity-45 leading-[1.5]">
            Selected Work
          </h2>
          <ul className="col-span-full mt-24 space-y-24">
            <Project
              name="Spotkania z Krakowskimi Kawiarniami"
              link="#"
              roles={["Developer"]}
              technologies={[
                "HTML",
                "TypeScript",
                "TailwindCSS",
                "GSAP",
                "Vite",
              ]}
              client="NIKZ"
              backgroundImage={so1}
              foregroundImages={[so2]}
            >
              Series of interactive &quot;scrolly-telling&quot; experiences that
              take the reader through the rise of cafes in Kraków, Poland.
              Scroll-based animations drive the story with text, images and
              videos being the forefront of the experience.
            </Project>

            <Project
              name="World of prosperity, dark ages"
              link="#"
              roles={["UI/UX Designer", "Developer"]}
              technologies={[
                "Astro",
                "React",
                "TypeScript",
                "TailwindCSS",
                "Radix",
              ]}
              client="vnLab ⨯ Marcin Mleczak"
              backgroundImage={so5}
              foregroundImages={[so6, so7]}
            >
              An online publication that focuses on four time periods in the
              history of Europe—the period before 1929, the Great Depression,
              the period before 2008, and the economic collapse. Time loops and
              intertwinig topics are navigable through the use of a visual maps
              and looping time axis.
            </Project>

            <Project
              name="Refugee Atlas"
              link="#"
              roles={["UX Designer", "Developer"]}
              technologies={[
                "Astro",
                "React",
                "TypeScript",
                "TailwindCSS",
                "react-aria",
                "swup",
              ]}
              client="vnLab ⨯ Paweł Mościcki"
              backgroundImage={so3}
              foregroundImages={[so4]}
            >
              Interactive visual atlas concerning the experience of migration
              and the destiny of refugees. Direct inspiration for the form of
              this project was the famous Bilderatlas Mnemosyne by Aby Warburg.
              Viewers can freely roam the 3 separate layers of the atlas,
              interact with the content, edit and share it.
            </Project>

            <Project
              name="Model i Metafora"
              link="#"
              roles={["Developer"]}
              technologies={[
                "Gatsby",
                "React",
                "TypeScript",
                "Framer Motion",
                "styled-components",
              ]}
              client="vnLab ⨯ Maja Starakiewicz"
              backgroundImage={so8}
              foregroundImages={[so9]}
            >
              Handbook of Visual Communication Design, a reissue of the book
              &quot;Model i metafora&quot;, available in its entirety online,
              free of charge. Digital edition brings to life a map of text and
              includes new illustaions and animations.
            </Project>

            <Project
              name="vnLab Publication Series"
              link="#"
              roles={["Developer"]}
              technologies={[
                "Gatsby",
                "React",
                "TypeScript",
                "Framer Motion",
                "styled-components",
              ]}
              client="vnLab"
              backgroundImage={s10}
              foregroundImages={[s11, s12]}
            >
              A meta-framework based template for publicating works online in a
              versatile and compelling form. Template includes text and visual
              based chapters to accomodate a wide range of content types.
            </Project>

            <Project
              name="PubLab"
              link="#"
              roles={["Developer"]}
              technologies={[
                "Electron",
                "React",
                "TypeScript",
                "Redux",
                "Material UI",
              ]}
              client="vnLab"
              backgroundImage={s13}
              foregroundImages={[s15, s14]}
            >
              A desktop app that supports the editing process of web
              publications and simplifies the git flow for redactors. Tool
              includes template generation, git integration, collaborator
              management and more.
            </Project>

            <Project
              name="MicrogridCreator"
              link="#"
              roles={["UI/UX Designer", "Developer"]}
              technologies={[
                "React",
                "TypeScript",
                "Ruby",
                "Redux",
                "SCSS",
                "Webpack",
                "Plotly",
              ]}
              client="Energenious"
              backgroundImage={s16}
              foregroundImages={[s19, s18, s17]}
            >
              Contributed new features to the prexisting web app of a microgrid
              simulation engine. Added a visual network map, system graph,
              exportable PDF report, scenario comparison and more.
            </Project>

            <Project
              name="Web Spreadsheet Widget"
              link="#"
              roles={["Developer"]}
              technologies={["React", "Material UI"]}
              client="Energenious ⨯ Tecnojest"
              backgroundImage={s20}
              foregroundImages={[s21]}
            >
              Developed a micro-frontend web spreadsheet widget in React for
              internal usage and integration into 3rd party platforms. Used as a
              tool for interactive data analysis and export.
            </Project>
          </ul>
        </section>

        <section className="col-span-full mt-32">
          <h2 className="text-9xl font-bold font-serif text-[#997651] filter-noise opacity-45 leading-[1.5]">
            Experience
          </h2>
          <ul className="w-[45%] mt-24 space-y-12">
            <Job
              role="Full-stack Developer"
              company="vnLab"
              period="July 2021 - Present"
              location="Remote/Lodz, Poland"
            >
              Co-designed and developed online publications, interactive
              experiences and desktop apps. Co-chaired seminars and workshops on
              the topic of technological approaches to web pubs. Co-facilitated
              a talk during 2023 Mozilla Festival. Project-managed and assisted
              a class of students during their Competence Project semester.
            </Job>
            <Job
              role="Freelance Web Developer"
              company="Enegenious"
              period="January 2021 - December 2022"
              location="Remote/Berlin, Germany"
            >
              Prototyped and developed data visualization and management
              features for a microgrid simulation engine. Implemented a
              micro-frontend web spreadsheet widget.
            </Job>
            <Job
              role="Full-stack Intern"
              company="BinarApps"
              period="July 2019 - August 2019"
              location="Lodz, Poland"
            >
              Developed a web app for a client in Ruby on Rails and React. Took
              part in all stages of product development, from planning to
              deployment.
            </Job>
          </ul>
        </section>

        <section className="col-span-full mt-32">
          <h2 className="text-9xl font-bold font-serif text-[#997651] filter-noise opacity-45 leading-[1.5]">
            Education
          </h2>
          <ul className="w-[45%] mt-24 space-y-12">
            <School
              name="Lodz University of Technology"
              faculty="International Faculty of Engineering"
              field="Information Technology"
              degree="Bachelor of Engineering"
              period="September 2018 - February 2021"
              location="Lodz, Poland"
            >
              Worked in a group of international students to create an
              educational platform in Ruby on Rails using problem based learning
              method.
            </School>
            <School
              name="Saxion University"
              faculty="Erasmus Exchange"
              field="European Project Semester"
              period="February 2020 - August 2020"
              location="Enschede, Netherlands"
            >
              Led a multidisciplinary and multilingual team of students
              contracted to create a biosensor and a web application monitoring
              IoT devices from AllThingsTalk Maker platform and alarming upon
              undesired activity.
              <br />
              <br />
              Communicated with external stakeholders such as Enschede Police
              Departemnt, sensor producing company Sodaq and data aggregation
              company IMD.
            </School>
          </ul>
        </section>
      </main>
      <aside className="col-start-12 col-span-1 flex flex-col items-end space-y-6 sticky top-16 h-fit">
        <svg
          width="24"
          height="24"
          viewBox="0 0 16 16"
          fill="none"
          className="group"
        >
          <g clipPath="url(#clip0_18_285)">
            <path
              d="M1.99992 2H13.9999C14.3681 2 14.6666 2.29848 14.6666 2.66667V13.3333C14.6666 13.7015 14.3681 14 13.9999 14H1.99992C1.63173 14 1.33325 13.7015 1.33325 13.3333V2.66667C1.33325 2.29848 1.63173 2 1.99992 2ZM8.04032 7.7886L3.76473 4.15847L2.90177 5.17487L8.04865 9.54473L13.1029 5.17077L12.2303 4.16256L8.04032 7.7886Z"
              className="fill-[#505050] group-hover:fill-[#997658] transition-all duration-500"
            />
          </g>
          <defs>
            <clipPath id="clip0_18_285">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 16 16"
          fill="none"
          className="group"
        >
          <path
            d="M10.6667 1.33334L14 4.66668V14.0055C14 14.3707 13.7034 14.6667 13.3377 14.6667H2.66227C2.29651 14.6667 2 14.3631 2 14.0055V1.99454C2 1.62938 2.29663 1.33334 2.66227 1.33334H10.6667ZM8.66667 8.00001V5.33334H7.33333V8.00001H5.33333L8 10.6667L10.6667 8.00001H8.66667Z"
            className="fill-[#505050] group-hover:fill-[#997658] transition-all duration-500"
          />
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 16 16"
          fill="none"
          className="group"
        >
          <path
            d="M8.00067 1.33334C4.31732 1.33334 1.33398 4.31668 1.33398 8.00001C1.33398 10.95 3.24232 13.4417 5.89232 14.325C6.22565 14.3833 6.35065 14.1833 6.35065 14.0083C6.35065 13.85 6.34232 13.325 6.34232 12.7667C4.66732 13.075 4.23398 12.3583 4.10065 11.9833C4.02565 11.7917 3.50065 11.2 3.41732 11.0417C3.18398 10.9167 2.85065 10.6083 3.40898 10.6C3.93398 10.5917 4.30898 11.0833 4.43398 11.2833C5.03398 12.2917 5.99232 12.0083 6.37565 11.8333C6.43398 11.4 6.60898 11.1083 6.80066 10.9417C5.31732 10.775 3.76732 10.2 3.76732 7.65001C3.76732 6.92501 4.02565 6.32501 4.45065 5.85834C4.38398 5.69168 4.15065 5.00834 4.51732 4.09168C4.51732 4.09168 5.07565 3.91668 6.35065 4.77501C6.884 4.62501 7.45066 4.55001 8.01733 4.55001C8.584 4.55001 9.15066 4.62501 9.684 4.77501C10.959 3.90834 11.5173 4.09168 11.5173 4.09168C11.884 5.00834 11.6507 5.69168 11.584 5.85834C12.009 6.32501 12.2673 6.91668 12.2673 7.65001C12.2673 10.2083 10.709 10.775 9.22567 10.9417C9.46733 11.15 9.67566 11.55 9.67566 12.175C9.67566 13.0667 9.66733 13.7833 9.66733 14.0083C9.66733 14.1833 9.79233 14.3917 10.1257 14.325C12.8393 13.4089 14.6666 10.8642 14.6673 8.00001C14.6673 4.31668 11.684 1.33334 8.00067 1.33334Z"
            className="fill-[#505050] group-hover:fill-[#997658] transition-all duration-500"
          />
        </svg>
      </aside>
    </>
  );
}
