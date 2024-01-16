import Job from "@/components/Job";

export default function Experience() {
  return (
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
