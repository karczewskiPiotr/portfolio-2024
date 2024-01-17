import Education from "./_sections/Education";
import Experience from "./_sections/Experience";
import Landing from "./_sections/Landing";
import Navigation from "./_sections/Navigation";
import Projects from "./_sections/Projects";
import Sidebar from "./_sections/Sidebar";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="grid col-start-2 col-end-12 grid-cols-10 pt-12 gap-x-5 max-md:col-span-full">
        <Landing />
        <Projects />
        <Experience />
        <Education />
      </main>
      <Sidebar />
    </>
  );
}
