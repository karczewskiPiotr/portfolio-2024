import Job from "@/components/Job";

export default function Experience() {
  return (
    <section
      role="region"
      aria-labelledby="experience__header"
      id="experience"
      className="col-span-full mt-32"
    >
      <h2
        id="experience__header"
        className="filter-noise font-serif text-[clamp(theme(fontSize.5xl),8vw,8vw)] font-bold leading-[1.5] text-[#997651] opacity-45"
      >
        Experience
      </h2>
      <ul className="mt-24 space-y-12 lg:w-[45%]">
        <Job
          role="Full-stack Developer"
          company="vnLab"
          period="July 2021 - Present"
          location="Remote/Lodz, Poland"
        >
          Co-designed and developed online publications, interactive experiences
          and desktop apps. Co-chaired seminars and workshops on the topic of
          technological approaches to web pubs. Co-facilitated a talk during
          2023 Mozilla Festival. Project-managed and assisted a class of
          students during their Competence Project semester.
        </Job>
        <Job
          role="Freelance Web Developer"
          company="Enegenious"
          period="January 2021 - December 2022"
          location="Remote/Berlin, Germany"
        >
          Prototyped and developed data visualization and management features
          for a microgrid simulation engine. Implemented a micro-frontend web
          spreadsheet widget.
        </Job>
        <Job
          role="Full-stack Intern"
          company="BinarApps"
          period="July 2019 - August 2019"
          location="Lodz, Poland"
        >
          Developed a web app for a client in Ruby on Rails and React. Took part
          in all stages of product development, from planning to deployment.
        </Job>
      </ul>
    </section>
  );
}
