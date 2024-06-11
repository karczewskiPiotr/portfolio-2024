import School from "@/components/School";

export default function Education() {
  return (
    <section
      role="region"
      aria-labelledby="education__header"
      id="education"
      className=" relative col-span-full pb-32 pt-32"
    >
      <div className="absolute bottom-0 left-1/2 top-16 z-[-5] w-screen -translate-x-1/2 bg-grid-small-white/[0.2]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-neutral-925 [mask-image:linear-gradient(to_bottom,theme(colors.neutral.925),transparent_50%,theme(colors.neutral.925))]"></div>
      </div>
      <h2
        id="education__header"
        className="font-sans text-var-5xl font-bold leading-[1.5] text-neutral-50"
      >
        Education
      </h2>
      <ul className="mt-24 space-y-8 md:space-y-12">
        <School
          className="md:mr-auto"
          name="Lodz University of Technology"
          faculty="International Faculty of Engineering"
          field="Information Technology"
          degree="Bachelor of Engineering"
          period="October 2017 - February 2021"
          location="Lodz, Poland"
        >
          Worked in a group of international students to create an educational
          platform in Ruby on Rails using problem based learning method.
        </School>
        <School
          className="md:mx-auto"
          name="Saxion University"
          faculty="Erasmus Exchange"
          field="European Project Semester"
          period="February 2020 - August 2020"
          location="Enschede, Netherlands"
        >
          Led a multidisciplinary and multilingual team of students contracted
          to create a biosensor and a web application monitoring IoT devices
          from AllThingsTalk Maker platform and alarming upon undesired
          activity.
          <br />
          <br />
          Communicated with external stakeholders such as Enschede Police
          Departemnt, sensor producing company Sodaq and data aggregation
          company IMD.
        </School>
      </ul>
    </section>
  );
}
