import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Admin() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastCount, setLastCount] = useState(0); // ✅ ADD HERE

  /* ================= FETCH ================= */

  /* ================= FETCH ================= */

const res = await fetch("https://portfolio-grgh.onrender.com/messages");

    if (!res.ok) throw new Error("Server error");

    const data = await res.json();

    // newest first (original intent preserved)
    const newMessages = [...data].reverse();

    // detect new incoming messages (without triggering on first load)
    if (lastCount !== 0 && newMessages.length > lastCount) {
      console.log("📩 New message received!");
    }

    setMessages(newMessages);
    setLastCount(newMessages.length);

  } catch (err) {
    console.error("Failed to load messages:", err);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
  fetchMessages();

  // auto refresh every 5 seconds
  const interval = setInterval(() => {
    fetchMessages();
  }, 5000);

  // cleanup when leaving page
  return () => clearInterval(interval);
}, []);

  const latestDate =
    messages.length > 0 && messages[0].time
      ? new Date(messages[0].time).toLocaleDateString()
      : "-";

  return (
    <section className="min-h-screen px-6 md:px-12 py-24 text-white">

      {/* ===== HEADER ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-light">
          Messages Dashboard
        </h1>

        <p className="text-gray-400 mt-3">
          Portfolio contact submissions in real time
        </p>
      </motion.div>

      {/* ===== STATS ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid md:grid-cols-3 gap-6 mb-14"
      >
        <StatCard title="Total Messages" value={messages.length} />
        <StatCard title="Latest Message" value={latestDate} />
        <StatCard
          title="Status"
          value={loading ? "Loading..." : "Active"}
        />
      </motion.div>

      {/* ===== CONTENT ===== */}
      {loading ? (
        <Loader />
      ) : messages.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-8">
          {messages.map((msg, index) => (
            <motion.div
              key={msg.id || index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="relative group"
            >
              {/* animated border */}
              <div className="absolute inset-0 rounded-3xl p-[1px]
                bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
                opacity-40 blur-sm group-hover:opacity-70 transition" />

              {/* card */}
              <div className="relative rounded-3xl
                bg-gradient-to-br from-[#0b0b0f] to-[#14141a]
                p-8 border border-white/10 backdrop-blur-xl">

                {/* header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                  <h3 className="text-xl text-pink-400 font-medium">
                    {msg.name}
                  </h3>

                  <span className="text-xs text-gray-500">
                    {msg.time
                      ? new Date(msg.time).toLocaleString()
                      : ""}
                  </span>
                </div>

                {/* email */}
                <p className="text-sm text-blue-400 mb-4">
                  {msg.email}
                </p>

                {/* message */}
                <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                  {msg.message}
                </p>

              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}

/* ================= COMPONENTS ================= */

function StatCard({ title, value }) {
  return (
    <div className="relative rounded-2xl p-[1px]
      bg-gradient-to-r from-pink-500/40 via-purple-500/40 to-blue-500/40">
      <div className="rounded-2xl bg-[#0c0c12] p-6 border border-white/10">
        <p className="text-gray-400 text-sm">{title}</p>
        <h3 className="text-2xl mt-2 font-light">{value}</h3>
      </div>
    </div>
  );
}

function Loader() {
  return (
    <div className="flex justify-center py-20">
      <div className="w-10 h-10 border-2 border-pink-400 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-24 text-gray-400">
      <p className="text-xl">No messages yet</p>
      <p className="text-sm mt-2">
        Messages from your portfolio will appear here.
      </p>
    </div>
  );
}