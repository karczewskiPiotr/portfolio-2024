import Job from "@/components/Job";

export default function Experience() {
  return (
    <section
      role="region"
      aria-labelledby="experience__header"
      id="experience"
      className="grain relative col-span-full mt-32"
    >
      <h2
        id="experience__header"
        className="font-sans text-var-5xl font-bold leading-[1.5] text-neutral-50"
      >
        Experience
      </h2>
      <ul className="mt-24 flex flex-col space-y-8 md:space-y-12">
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
          className="md:mx-auto"
          role="Freelance Web Developer"
          company="Energenious"
          period="January 2021 - December 2022"
          location="Remote/Berlin, Germany"
        >
          Prototyped and developed data visualization and management features
          for a microgrid simulation engine. Implemented a micro-frontend web
          spreadsheet widget.
        </Job>
        <Job
          className="md:ml-auto"
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
