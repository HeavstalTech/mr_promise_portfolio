"use client";

import Link from "next/link";
import { SiWhatsapp, SiTelegram, SiTiktok, SiGithub } from "react-icons/si";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0F1115] border-t border-gray-800 py-10 px-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <div className="flex items-center gap-6">         
          <Link href="https://wa.me/2348166546725" target="_blank">
            <SiWhatsapp size={28} color="#25D366" className="hover:opacity-80 transition-opacity" />
          </Link>
          <Link href="https://wa.me/2348137256404" target="_blank" className="relative group">
            <SiWhatsapp size={28} color="#128C7E" className="hover:opacity-80 transition-opacity" />
            <span className="absolute -bottom-1 -right-1 bg-[#128C7E] text-white text-[10px] font-bold px-1 rounded-sm border border-[#0F1115]">
              B
            </span>
          </Link>
          <Link href="https://t.me/mr_promise818" target="_blank">
            <SiTelegram size={28} color="#26A5E4" className="hover:opacity-80 transition-opacity" />
          </Link>
          <Link href="http://tiktok.com/@mr_promise8181" target="_blank">
            <SiTiktok size={28} color="#FFFFFF" className="hover:opacity-80 transition-opacity" />
          </Link>
          <Link href="https://github.com/HeavstalTech" target="_blank">
            <SiGithub size={28} color="#FFFFFF" className="hover:opacity-80 transition-opacity" />
          </Link>         
        </div>
        <p className="text-sm text-gray-400 mt-2 text-center">
          © Ekiverere Promise Edesiri • 2026 -- Present 
        </p>
        <button 
          onClick={scrollToTop} 
          className="text-sm text-gray-300 hover:text-white transition-colors cursor-pointer"
        >
          Back to top
        </button>
        <p className="text-xs text-gray-500 mt-4 text-center">
          Built with Next.js, React, Tailwind CSS & Motion
        </p>
      </div>
    </footer>
  );
}