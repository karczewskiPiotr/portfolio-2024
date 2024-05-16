import Project from "@/components/Project";
import Line from "@/components/Line";

import szkk from "../../../public/szkk.png";
import szkk_1 from "../../../public/szkk_1.png";

import ra from "../../../public/ra.png";
import ra_1 from "../../../public/ra_1.png";

import kxxi from "../../../public/kxxi.png";
import kxxi_1 from "../../../public/kxxi_1.png";
import kxxi_2 from "../../../public/kxxi_2.png";

import mim from "../../../public/mim.png";
import mim_1 from "../../../public/mim_1.png";

import ajp from "../../../public/ajp.png";
import ajp_1 from "../../../public/ajp_1.png";
import ajp_2 from "../../../public/ajp_2.png";

import pl from "../../../public/pl.png";
import pl_1 from "../../../public/pl_1.png";
import pl_2 from "../../../public/pl_2.png";

import mgc from "../../../public/mgc.png";
import mgc_1 from "../../../public/mgc_1.png";
import mgc_2 from "../../../public/mgc_2.png";
import mgc_3 from "../../../public/mgc_3.png";

import wss from "../../../public/wss.png";
import wss_1 from "../../../public/wss_1.png";

export default function Projects() {
  return (
    <section
      id="works"
      role="region"
      aria-labelledby="works__header"
      className=" relative col-span-full mt-64"
    >
      <div className="absolute bottom-0 left-1/2 top-16 z-[-5] w-screen -translate-x-1/2 bg-dot-white/[0.2]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-neutral-925 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,theme(colors.neutral.925))]"></div>
      </div>
      <h2
        id="works__header"
        className="font-sans text-var-5xl font-bold leading-[1.5] text-neutral-50 "
      >
        Selected Work
      </h2>
      <ul className="col-span-full mt-24 flex flex-wrap gap-x-8 gap-y-16">
        <Project
          name="Spotkania z Krakowskimi Kawiarniami"
          link="https://kawiarnie.szz.pl/"
          roles={["Developer"]}
          technologies={["HTML", "TypeScript", "TailwindCSS", "GSAP", "Vite"]}
          client="NIKZ"
          backgroundImage={szkk}
          foregroundImages={[szkk_1]}
        >
          Series of interactive &quot;scrolly-telling&quot; experiences that
          take the reader through the rise of cafes in Kraków, Poland.
          Scroll-based animations drive the story with text, images and videos
          being the forefront of the experience.
        </Project>

        <li className="flex flex-[1_1_40%] max-lg:hidden" aria-hidden="true">
          <Line variant={0} />
        </li>
        <li className="flex flex-[1_1_40%] max-lg:hidden" aria-hidden="true">
          <Line variant={1} />
        </li>

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
          backgroundImage={kxxi}
          foregroundImages={[kxxi_1, kxxi_2]}
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
          backgroundImage={ra}
          foregroundImages={[ra_1]}
        >
          Interactive visual atlas concerning the experience of migration and
          the destiny of refugees. Direct inspiration for the form of this
          project was the famous Bilderatlas Mnemosyne by Aby Warburg. Viewers
          can freely roam the 3 separate layers of the atlas, interact with the
          content, edit and share it.
        </Project>

        <li className="flex flex-[1_1_40%] max-lg:hidden" aria-hidden="true">
          <Line variant={2} />
        </li>
        <li className="flex flex-[1_1_40%] max-lg:hidden" aria-hidden="true">
          <Line variant={3} />
        </li>

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
          backgroundImage={mim}
          foregroundImages={[mim_1]}
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
          backgroundImage={ajp}
          foregroundImages={[ajp_1, ajp_2]}
        >
          A meta-framework based template for publicating works online in a
          versatile and compelling form. Template includes text and visual based
          chapters to accomodate a wide range of content types.
        </Project>

        <li className="flex flex-[1_1_40%] max-lg:hidden" aria-hidden="true">
          <Line variant={4} />
        </li>
        <li className="flex flex-[1_1_40%] max-lg:hidden" aria-hidden="true">
          <Line variant={5} />
        </li>

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
          backgroundImage={pl}
          foregroundImages={[pl_2, pl_1]}
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
          backgroundImage={mgc}
          foregroundImages={[mgc_3, mgc_2, mgc_1]}
        >
          Contributed new features to the prexisting web app of a microgrid
          simulation engine. Added a visual network map, system graph,
          exportable PDF report, scenario comparison and more.
        </Project>

        <li className="flex flex-[1_1_40%] max-lg:hidden">
          <Line variant={6} />
        </li>
        <li className="flex flex-[1_1_40%] max-lg:hidden"></li>

        <Project
          name="Web Spreadsheet Widget"
          link="https://energenious.eu/index.php/mfe/"
          roles={["Developer"]}
          technologies={["React", "Material UI"]}
          client="Energenious ⨯ Tecnojest"
          backgroundImage={wss}
          foregroundImages={[wss_1]}
        >
          Developed a micro-frontend web spreadsheet widget in React for
          internal usage and integration into 3rd party platforms. Used as a
          tool for interactive data analysis and export.
        </Project>
      </ul>
    </section>
  );
}
