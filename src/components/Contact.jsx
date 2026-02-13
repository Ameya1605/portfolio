import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-4xl font-bold mb-6">
          Let’s <span className="text-pink-400">Connect</span>
        </h2>

        <p className="text-gray-300 text-lg mb-10">
          I’m open to internships, freelance projects, collaborations,
          or just a good tech discussion.
        </p>

        <div className="space-y-4 text-lg">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:farkadeameya05@gmail.com"
              className="text-pink-400 hover:underline"
            >
              farkadeameya05@gmail.com
            </a>
          </p>

          <p>
            💻 GitHub:{" "}
            <a
              href="https://github.com/Ameya1605"
              target="_blank"
              className="text-pink-400 hover:underline"
            >
              github.com/Ameya1605
            </a>
          </p>

          <p>
            🔗 LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/Ameya Farkade "
              target="_blank"
              className="text-pink-400 hover:underline"
            >
              linkedin.com/in/Ameya Farkade
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
