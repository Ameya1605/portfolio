import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const finalText = "Ameya Farkade";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";

  const [displayText, setDisplayText] = useState("");
  const [isGlitching, setIsGlitching] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let iteration = 0;
    setDisplayText("");

    const scrambleInterval = setInterval(() => {
      setDisplayText(
        finalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return finalText[index];
            }
            return characters[
              Math.floor(Math.random() * characters.length)
            ];
          })
          .join("")
      );

      iteration += 0.18;

      if (iteration >= finalText.length) {
        clearInterval(scrambleInterval);
        setDisplayText(finalText);

        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 400);
      }
    }, 50);

    return () => clearInterval(scrambleInterval);
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center justify-center px-6 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl"
      >
        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Hi, I’m{" "}
          <span
            className={`bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(236,72,153,0.5)] ${
              isGlitching ? "animate-glitch" : ""
            }`}
          >
            {displayText}
          </span>
        </h1>

        {/* Strong Role Headline */}
        <h2 className="text-xl md:text-3xl font-semibold text-white mb-6">
          Full Stack Developer specializing in React & Modern Web Applications.
        </h2>

        {/* Value Statement */}
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mb-6">
          I build scalable, performance-focused web applications and enjoy
          solving real-world problems using clean architecture and modern
          technologies.
        </p>

        

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Primary */}
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-pink-500 hover:bg-pink-600 transition text-white text-lg font-medium shadow-lg"
          >
            💻 View Projects
          </a>

          {/* Resume */}
          <a
            href="/resume.pdf"
            download
            className="px-8 py-4 rounded-full border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black transition text-lg font-medium"
          >
            📄 Download Resume
          </a>

          {/* Contact */}
          <a
            href="#contact"
            className="px-8 py-4 rounded-full border border-white/20 hover:border-white transition text-lg"
          >
            📧 Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}