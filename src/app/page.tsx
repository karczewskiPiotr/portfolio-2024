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
        className="absolute left-1/2 top-0 z-50 -translate-x-1/2 -translate-y-full border border-neutral-500 p-2 font-sans text-xs uppercase text-neutral-50 transition-all duration-300 focus:translate-y-0"
        href="#cta"
      >
        Skip to content
      </a>
      <header className="blurred sticky top-0 z-40 col-span-full grid grid-cols-subgrid items-center justify-between">
        <Navigation />
        <Sidebar />
      </header>
      <main className="blob col-start-2 col-end-12 row-start-2 row-end-[-1] mt-24 grid grid-cols-10 gap-x-5 max-md:col-span-full">
        <Landing />
        <Projects />
        <Experience />
        {/* <Education /> */}
      </main>
    </>
  );
}
