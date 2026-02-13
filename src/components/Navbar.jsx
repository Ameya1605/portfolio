import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40">
      <div className="flex gap-8 px-8 py-4 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setActive(link.name)}
            className="relative text-white/80 hover:text-white transition"
          >
            {link.name}

            {/* Animated underline */}
            {active === link.name && (
              <motion.span
                layoutId="nav-underline"
                className="absolute -bottom-2 left-0 right-0 h-[2px] bg-pink-400 rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </a>
        ))}
      </div>
    </nav>
  );
}
