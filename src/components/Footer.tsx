"use client";

import Link from "next/link";
import { SiWhatsapp, SiTelegram, SiTiktok, SiGithub } from "react-icons/si";
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experiences" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "CV", href: "#cv" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-black border-t border-[#111111] py-12 px-6 mt-20">
      <div className="max-w-4xl mx-auto flex flex-col items-start gap-12">
        <div className="flex flex-row-reverse items-center gap-0">         
          <Link href="https://wa.me/2348166546725" target="_blank" aria-label="WhatsApp">
            <SiWhatsapp size={24} color="#25D366" className="hover:scale-110 transition-transform" />
          </Link>
          
          <Link href="https://wa.me/2348137256404" target="_blank" aria-label="WhatsApp Business" className="relative group hover:scale-110 transition-transform">
            <SiWhatsapp size={24} color="#128C7E" />
            <span className="absolute -bottom-1 -right-1 z-10 bg-[#128C7E] text-white text-[9px] font-bold px-1 rounded-sm border-[1.5px] border-black">
              B
            </span>
          </Link>
          
          <Link href="https://t.me/mr_promise818" target="_blank" aria-label="Telegram">
            <SiTelegram size={24} color="#26A5E4" className="hover:scale-110 transition-transform" />
          </Link>
          
          <Link href="https://tiktok.com/@mr_promise8181" target="_blank" aria-label="TikTok">
            <SiTiktok 
              size={24} 
              color="#FFFFFF" 
              style={{ filter: 'drop-shadow(1.5px 1.5px 0px #ff0050) drop-shadow(-1.5px -1.5px 0px #00f2fe)' }} 
              className="hover:scale-110 transition-transform" 
            />
          </Link>
          
          <Link href="https://github.com/HeavstalTech" target="_blank" aria-label="GitHub">
            <SiGithub size={24} color="#FFFFFF" className="hover:scale-110 transition-transform" />
          </Link>         
        </div>
        <div className="flex flex-col items-start gap-5 text-sm font-medium text-gray-400">
          <button 
            onClick={scrollToTop} 
            className="hover:text-white transition-colors cursor-pointer uppercase tracking-wider"
          >
            Back to top
          </button>
          
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-white transition-colors uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="text-sm text-gray-500 text-left">
          © Ekiverere Promise Edesiri • 2026 — Present
        </div>

      </div>
    </footer>
  );
}
