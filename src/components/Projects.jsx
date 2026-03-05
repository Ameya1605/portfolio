import { motion } from "framer-motion";

const projects = [
  {
    title: "Fake News Detection Browser Extension",
    subtitle: "Real-Time Content Credibility Analysis",
    description:
      "A lightweight browser extension that evaluates online content using NLP-based classification models to detect potential misinformation. Designed to promote responsible media consumption through instant credibility feedback.",
    github: "https://github.com/Ameya1605/extension-fake-news-detection",
  },
  {
    title: "AI-Enhanced Career Guidance System",
    subtitle: "Personalized Career Pathway Recommendation Engine",
    description:
      "An AI-powered system that analyzes user skills, interests, and academic background to generate structured and personalized career pathways. Developed during a national-level hackathon with scalable recommendation architecture.",
    github: "https://github.com/Ameya1605/TECHNEX-HACK-A-THON-2025",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 md:px-20 py-40 flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-32"
        >
          Selected Work
        </motion.h2>

        {/* Cards */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-4xl mx-auto"
            >
              <div className="project-card">

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-semibold mb-4">
                  {project.title}
                </h3>

                {/* Subtitle */}
                <p className="text-pink-400 tracking-wider uppercase text-sm mb-8">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
                  {project.description}
                </p>

                {/* Code Link */}
                <div className="flex justify-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg border-b border-white pb-1 hover:border-pink-400 transition duration-300"
                  >
                    View Code →
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}