import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  // idle | loading | success | error

  /* ================= INPUT CHANGE ================= */
  const handleChange = (e) => {
    if (status === "loading") return;

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === "loading") return;

    /* ===== trim values (anti empty spam) ===== */
    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2000);
      return;
    }

    setStatus("loading");

    try {
      /* ===== request timeout protection ===== */
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);

      const res = await fetch("https://portfolio-grgh.onrender.com/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.error || "Request failed");
      }

      /* ================= SUCCESS ================= */
      setStatus("success");

      setTimeout(() => {
        setForm({
          name: "",
          email: "",
          message: "",
        });
        setStatus("idle");
      }, 3200);

    } catch (err) {
      console.error("Submit error:", err);
      setStatus("error");

      setTimeout(() => setStatus("idle"), 2500);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-3xl"
      >
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-borderFlow blur-md opacity-60" />

        <div className="relative rounded-3xl bg-gradient-to-br from-[#0b0b0f] to-[#14141a] p-14 border border-white/5 overflow-hidden">

          <div className="absolute -top-40 -left-40 w-96 h-96 bg-pink-500/10 blur-[120px]" />

          <h2 className="text-3xl md:text-4xl font-light text-gray-200 mb-12">
            Let’s build something meaningful.
          </h2>

          {/* SUCCESS OVERLAY */}
          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-md rounded-3xl z-20"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 220 }}
                  className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-3xl font-bold"
                >
                  ✓
                </motion.div>

                <p className="mt-6 text-xl text-green-400">
                  Message Sent Successfully
                </p>

                <p className="text-gray-400 mt-2 text-sm">
                  I’ll get back to you soon.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ERROR MESSAGE */}
          <AnimatePresence>
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute top-6 left-1/2 -translate-x-1/2 bg-red-500/20 border border-red-400 text-red-300 px-6 py-2 rounded-full text-sm"
              >
                Failed to send message
              </motion.div>
            )}
          </AnimatePresence>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className={`space-y-8 transition ${
              status === "loading" ? "opacity-60 pointer-events-none" : ""
            }`}
          >
            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border-b border-white/20 focus:outline-none focus:border-pink-400 transition"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border-b border-white/20 focus:outline-none focus:border-pink-400 transition"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border-b border-white/20 focus:outline-none focus:border-pink-400 transition resize-none"
                placeholder="Write your message..."
              />
            </div>

            <div className="pt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={status === "loading"}
                className="relative overflow-hidden px-8 py-3 rounded-full border border-white/20 text-lg"
              >
                {status === "loading"
                  ? "Sending..."
                  : "Send Message →"}

                {status === "loading" && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-20"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.2,
                      ease: "linear",
                    }}
                  />
                )}
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}