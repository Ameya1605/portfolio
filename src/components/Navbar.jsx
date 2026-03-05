import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi2";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },   // ✅ Add this
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-6xl">
      <div className="flex items-center justify-between px-6 py-3 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">

        {/* Left Side - Navigation Links */}
        <div className="flex gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              className="relative text-white/80 hover:text-white transition text-sm md:text-base"
            >
              {link.name}

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

        {/* Right Side - Resume + Social Icons */}
        <div className="flex items-center gap-5">

          {/* Resume */}
          <a
            href="/resume.pdf"
            download
            className="hidden md:flex items-center gap-2 text-pink-400 border border-pink-400 px-4 py-1.5 rounded-full hover:bg-pink-400 hover:text-black transition text-sm"
          >
            <HiOutlineDocumentText size={16} />
            Resume
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Ameya1605"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition text-lg"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/Ameya-Farkade"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition text-lg"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}