import Education from "./_sections/Education";
import Experience from "./_sections/Experience";
import Landing from "./_sections/Landing";
import Navigation from "./_sections/Navigation";
import Projects from "./_sections/Projects";
import Sidebar from "./_sections/Sidebar";

export default function Home() {
  return (
    <>
      <a
        className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full border border-black p-2 font-sans text-xs uppercase transition-all duration-300 focus:translate-y-0"
        href="#cta"
      >
        Skip to content
      </a>
      <Navigation />
      <Sidebar />
      <main className="col-start-2 col-end-12 row-span-full grid grid-cols-10 gap-x-5 pt-12 max-md:col-span-full">
        <Landing />
        <Projects />
        <Experience />
        <Education />
      </main>
    </>
  );
}
