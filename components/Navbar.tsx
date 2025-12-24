"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    // Background diubah ke putih (bg-white) dengan border abu-abu sangat tipis
    <nav className="fixed top-0 w-full z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo - Teks diubah jadi hitam */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter text-slate-900 hover:opacity-70 transition"
        >
          Pemenang <span className="text-blue-600">Karir</span>
        </Link>

        {/* Desktop Menu - Teks abu-abu gelap ke hitam */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-slate-600 hover:text-black transition"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-slate-600 hover:text-black transition"
          >
            Blog
          </Link>
          <a
            href="https://pemenangkarir.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-600 hover:text-black transition"
          >
            Layanan
          </a>

          <a
            href="https://wa.me/6289630909617?text=Halo%20Admin,%20saya%20ingin%20konsultasi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-widest bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full transition shadow-md"
          >
            Konsultasi
          </a>
        </div>

        {/* Mobile Menu Button - Warna ikon disesuaikan */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-slate-600 hover:text-black transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Putih */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 py-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <Link
            href="/"
            onClick={toggleMenu}
            className="text-base font-medium text-slate-600"
          >
            Home
          </Link>
          <Link
            href="/blog"
            onClick={toggleMenu}
            className="text-base font-medium text-slate-600"
          >
            Blog
          </Link>
          <a
            href="https://pemenangkarir.vercel.app"
            className="text-base font-medium text-slate-600"
          >
            Layanan
          </a>
          <a
            href="https://wa.me/6289630909617?text=Halo%20Admin,%20saya%20ingin%20konsultasi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold uppercase tracking-widest bg-slate-900 text-white px-5 py-3 rounded-xl text-center transition"
          >
            Konsultasi
          </a>
        </div>
      )}
    </nav>
  );
}
