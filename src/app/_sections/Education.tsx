import School from "@/components/School";

export default function Education() {
  return (
    <section id="education" className="col-span-full mt-32">
      <h2 className="text-[clamp(theme(fontSize.5xl),8vw,8vw)] font-bold font-serif text-[#997651] filter-noise opacity-45 leading-[1.5]">
        Education
      </h2>
      <ul className="lg:w-[45%] mt-24 space-y-12">
        <School
          name="Lodz University of Technology"
          faculty="International Faculty of Engineering"
          field="Information Technology"
          degree="Bachelor of Engineering"
          period="September 2018 - February 2021"
          location="Lodz, Poland"
        >
          Worked in a group of international students to create an educational
          platform in Ruby on Rails using problem based learning method.
        </School>
        <School
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
