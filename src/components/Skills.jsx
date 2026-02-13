import { motion } from "framer-motion";

const skills = {
  "Frontend": [
    "React",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Framer Motion",
  ],
  "Backend": [
    "Node.js",
    "Express.js",
    "Flask",
    "REST APIs",
  ],
  "AI / ML": [
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "TensorFlow",
    "Transformers",
  ],
  "Blockchain": [
    "Solidity",
    "Smart Contracts",
    "Web3.js",
    "DAO Architecture",
  ],
  "Tools": [
    "Git & GitHub",
    "Linux",
    "VS Code",
    "Postman",
  ],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          My <span className="text-pink-400">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-pink-400/40 transition"
            >
              <h3 className="text-2xl font-semibold mb-6 text-pink-400">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm rounded-full bg-black/40 border border-white/10 hover:border-pink-400 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
