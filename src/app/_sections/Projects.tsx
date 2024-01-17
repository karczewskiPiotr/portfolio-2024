import Project from "@/components/Project";

import so1 from "../../../public/181shots_so.png";
import so2 from "../../../public/386shots_so.png";

import so3 from "../../../public/969shots_so.png";
import so4 from "../../../public/563shots_so.png";

import so5 from "../../../public/839shots_so.png";
import so6 from "../../../public/163shots_so.png";
import so7 from "../../../public/263shots_so.png";

import so8 from "../../../public/965shots_so.png";
import so9 from "../../../public/94shots_so.png";

import s10 from "../../../public/65shots_so.png";
import s11 from "../../../public/381shots_so.png";
import s12 from "../../../public/498shots_so.png";

import s13 from "../../../public/570shots_so.png";
import s14 from "../../../public/600shots_so.png";
import s15 from "../../../public/819shots_so.png";

import s16 from "../../../public/mgc.png";
import s17 from "../../../public/mgc_1.png";
import s18 from "../../../public/mgc_2.png";
import s19 from "../../../public/mgc_3.png";

import s20 from "../../../public/wss.png";
import s21 from "../../../public/wss_1.png";

export default function Projects() {
  return (
    <section
      id="works"
      role="region"
      aria-labelledby="works__header"
      className="col-span-full mt-32"
    >
      <h2
        id="works__header"
        className="text-[clamp(theme(fontSize.5xl),8vw,8vw)] font-bold font-serif text-[#997651] filter-noise opacity-45 leading-[1.5]"
      >
        Selected Work
      </h2>
      <ul className="col-span-full mt-24 space-y-24">
        <Project
          name="Spotkania z Krakowskimi Kawiarniami"
          link="https://kawiarnie.szz.pl/"
          roles={["Developer"]}
          technologies={["HTML", "TypeScript", "TailwindCSS", "GSAP", "Vite"]}
          client="NIKZ"
          backgroundImage={so1}
          foregroundImages={[so2]}
        >
          Series of interactive &quot;scrolly-telling&quot; experiences that
          take the reader through the rise of cafes in Kraków, Poland.
          Scroll-based animations drive the story with text, images and videos
          being the forefront of the experience.
        </Project>

        <Project
          name="World of prosperity, dark ages"
          link="https://kryzysy.vnlab.org/"
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
          An online publication that focuses on four time periods in the history
          of Europe—the period before 1929, the Great Depression, the period
          before 2008, and the economic collapse. Time loops and intertwinig
          topics are navigable through the use of a visual maps and looping time
          axis.
        </Project>

        <Project
          name="Refugee Atlas"
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
          Interactive visual atlas concerning the experience of migration and
          the destiny of refugees. Direct inspiration for the form of this
          project was the famous Bilderatlas Mnemosyne by Aby Warburg. Viewers
          can freely roam the 3 separate layers of the atlas, interact with the
          content, edit and share it.
        </Project>

        <Project
          name="Model i Metafora"
          link="https://model-i-metafora.vnlab.org/"
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
          &quot;Model i metafora&quot;, available in its entirety online, free
          of charge. Digital edition brings to life a map of text and includes
          new illustaions and animations.
        </Project>

        <Project
          name="vnLab Publication Series"
          link="https://archive-as-project.vnlab.org/"
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
          versatile and compelling form. Template includes text and visual based
          chapters to accomodate a wide range of content types.
        </Project>

        <Project
          name="PubLab"
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
          A desktop app that supports the editing process of web publications
          and simplifies the git flow for redactors. Tool includes template
          generation, git integration, collaborator management and more.
        </Project>

        <Project
          name="MicrogridCreator"
          link="https://energenious.eu/index.php/mgc/"
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
          link="https://energenious.eu/index.php/mfe/"
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
  );
}
