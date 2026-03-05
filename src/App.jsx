import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AnimatedBackground from "./components/AnimatedBackground";

import Admin from "./pages/Admin";

export default function App() {
  return (
    <>
      {/* Background */}
      <AnimatedBackground />

      {/* Floating Orbs */}
      <div className="floating-orb orb-left"></div>
      <div className="floating-orb orb-right"></div>

      {/* Side Accent Lines */}
      <div className="side-line line-left"></div>
      <div className="side-line line-right"></div>

      {/* Main Content */}
      <div className="relative min-h-screen text-white z-10">
        <Routes>
          
          {/* ===== Portfolio Main Page ===== */}
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
              </div>
            }
          />

          {/* ===== Admin Dashboard ===== */}
          <Route path="/admin" element={<Admin />} />

        </Routes>
      </div>
    </>
  );
}