import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Hi, I’m <span className="text-pink-400">Ameya</span>
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-gray-300">
          Full-Stack Developer • AI & Blockchain Enthusiast • Competitive Programmer
        </p>

        <p className="mt-6 text-gray-400 text-lg leading-relaxed">
          I’m a computer engineering student passionate about building
          <span className="text-white"> scalable web apps</span>, 
          experimenting with <span className="text-white">AI & blockchain</span>,
          and crafting <span className="text-white">interactive user experiences</span>.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-pink-500 hover:bg-pink-600 transition text-white text-lg"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-full border border-white/20 hover:border-pink-400 transition text-lg"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
