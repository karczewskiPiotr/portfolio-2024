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
        className="absolute top-0 left-1/2 -translate-x-1/2 border border-black p-2 -translate-y-full focus:translate-y-0 transition-all duration-300"
        href="#cta"
      >
        Skip to content
      </a>
      <Navigation />
      <Sidebar />
      <main className="grid col-start-2 col-end-12 grid-cols-10 pt-12 gap-x-5 max-md:col-span-full row-span-full">
        <Landing />
        <Projects />
        <Experience />
        <Education />
      </main>
    </>
  );
}
