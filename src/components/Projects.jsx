const projects = [
  {
    title: "AI Bias Detection Extension",
    desc: "Chrome extension that detects political and media bias using NLP & transformers.",
  },
  {
    title: "Decentralized Escrow Platform",
    desc: "Blockchain-based freelance escrow with DAO governance.",
  },
  {
    title: "AI Debate Coach",
    desc: "NLP system that scores arguments, detects fallacies, and suggests counterpoints.",
  },
];

export default function Projects() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    card.style.transform = `
      perspective(1000px)
      rotateX(${ -y / 20 }deg)
      rotateY(${ x / 20 }deg)
      translateY(-10px)
    `;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0px)
    `;
  };

  return (
    <section id="projects" className="py-32 px-8">
      <h2 className="text-5xl font-bold text-center mb-20">
        <span className="text-pink-400">Projects</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="
              group relative bg-white/5 backdrop-blur-xl
              border border-white/10 rounded-2xl p-8
              transition-all duration-500
              hover:border-pink-400
              hover:shadow-[0_25px_80px_-15px_rgba(236,72,153,0.6)]
            "
          >
            <h3 className="text-2xl font-semibold mb-4 group-hover:text-pink-400 transition">
              {p.title}
            </h3>

            <p className="text-gray-300 leading-relaxed">
              {p.desc}
            </p>

            {/* glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-pink-500/10 blur-2xl -z-10" />
          </div>
        ))}
      </div>
    </section>
  );
}
