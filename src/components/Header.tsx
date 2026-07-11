"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import clsx from "clsx";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experiences", href: "#experiences" },
    { name: "Featured Projects", href: "#projects" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "CV", href: "#cv" },
    { name: "Let's Communicate", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 bg-[#0F1115]/90 backdrop-blur-md border-b border-gray-800 transition-transform duration-500",
          !isScrolled && "max-md:-translate-y-full md:translate-y-0"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">            
            <div className="relative w-12 h-12 flex items-center justify-center"
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="absolute inset-0 rounded-full border-[2px] border-transparent border-t-[#ff0055] border-b-[#ff0055] opacity-80"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute inset-[2px] rounded-full border-[1.5px] border-dashed border-gray-400 opacity-60"
              />
              <div className="w-8 h-8 bg-gray-700 rounded-full overflow-hidden relative z-10 border border-[#0F1115]">
                <img src="/mr_promise.png" alt="Mr Promise" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-white text-[15px] leading-tight">
                Ekiverere Promise Edesiri
              </span>
              <span className="text-[11px] text-gray-400 font-medium tracking-wider uppercase">
                Software Engineer • CTO
              </span>
            </div>
          </div>

          <button
            className="p-2 text-white focus:outline-none z-50 relative"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={clsx("h-0.5 w-full bg-white transition-transform origin-left", menuOpen && "rotate-45")} />
              <span className={clsx("h-0.5 w-full bg-white transition-opacity", menuOpen && "opacity-0")} />
              <span className={clsx("h-0.5 w-full bg-white transition-transform origin-left", menuOpen && "-rotate-45")} />
            </div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0F1115] flex flex-col items-center justify-center pt-16"
          >
            <nav className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-2xl font-bold text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
