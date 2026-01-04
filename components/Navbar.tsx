"use client";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <nav className="fixed w-full z-[120] transition-all duration-300">
      {/* BACKGROUND LAYER */}
      <div
        className={`absolute inset-0 transition-all duration-500 ease-out -z-10 ${
          scrolled || isOpen
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 opacity-100"
            : "opacity-0"
        }`}
      />

      <div
        className={`max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        {/* LOGO - KIRI */}
        <div className="flex items-center gap-2 relative z-[130]">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#4A5DDF] rounded-lg flex items-center justify-center overflow-hidden shadow-lg shadow-indigo-100">
              <img
                src="/logo.png"
                alt="PemenangKarir Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-base md:text-xl font-bold text-slate-900 tracking-tight">
              Pemenang<span className="text-[#4A5DDF]">Karir</span>
            </span>
          </Link>
        </div>

        {/* DESKTOP NAV - TENGAH (Hanya Blog) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <Link
            href="/"
            className="text-sm font-semibold text-[#4A5DDF] border-b-2 border-[#4A5DDF] pb-1"
          >
            Blog
          </Link>
        </div>

        {/* CTA - KANAN */}
        <div className="hidden md:block">
          <a
            href="https://pemenangkarir.vercel.app"
            className="bg-[#4A5DDF] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#3b4ab3] transition-all flex items-center gap-2 active:scale-95 shadow-lg shadow-indigo-100"
          >
            Layanan Utama <ArrowRight size={16} />
          </a>
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <div className="md:hidden relative z-[130]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-900 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-white z-[125] flex flex-col items-center justify-center transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-full max-w-[280px] flex flex-col items-center space-y-6">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold text-[#4A5DDF]"
          >
            Blog
          </Link>

          <div className="w-12 h-[1px] bg-slate-100"></div>

          <a
            href="https://pemenangkarir.vercel.app"
            className="w-full bg-[#4A5DDF] text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-indigo-100 flex items-center justify-center gap-3 active:scale-95 transition-all"
          >
            Lihat Layanan <ArrowRight size={18} />
          </a>

          <p className="text-center text-slate-400 text-[10px] mt-8 uppercase tracking-[0.2em]">
            © 2026 PemenangKarir
          </p>
        </div>
      </div>
    </nav>
  );
}
