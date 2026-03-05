import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center px-6 py-24 text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* ================= IMAGE SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.div
            className="
              relative
              w-72
              h-72
              rounded-full
              bg-gradient-to-br from-black/60 to-black/20
              flex items-center justify-center
              border-4 border-white/10
              shadow-[0_0_60px_rgba(236,72,153,0.25)]
              overflow-hidden
              backdrop-blur-xl
            "
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* OUTER CIRCLE LINING */}
            <div className="absolute -inset-3 rounded-full border border-pink-400/40"></div>

            {/* INNER ACCENT RING */}
            <div className="absolute inset-2 rounded-full border border-white/10"></div>

            {/* PROFILE IMAGE */}
            <img
              src="/profile.jpg"
              alt="Ameya Farkade"
              className="w-full h-full object-contain rounded-full"
            />

            {/* ROTATING GLOW BORDER */}
            <div className="absolute inset-0 rounded-full border border-pink-400/30 animate-spin-slow"></div>
          </motion.div>
        </motion.div>

        {/* ================= TEXT SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-pink-400">Me</span>
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            I’m a third-year Computer Science Engineering student passionate
            about building modern, scalable web applications. I enjoy working
            with React and backend technologies to create seamless digital
            experiences.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            I focus on writing clean, maintainable code and continuously
            improving my understanding of software architecture, performance,
            and system design.
          </p>

          <div className="flex gap-6 text-pink-400 font-medium">
            <span>📍 India</span>
            <span>🎓 CSE Student</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}