import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

export default function App() {
  return (
    <>
      <AnimatedBackground />

      <div className="relative min-h-screen text-white">
        <Navbar />
        <Hero />
        <Skills /> 
        <Projects />
        <Contact />
      </div>
    </>
  );
}
