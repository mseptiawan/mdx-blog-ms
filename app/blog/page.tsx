import { Metadata } from "next";
import { getAllPosts } from "@/lib/posts"; // Pastikan fungsi ini tersedia untuk mengambil semua post
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import BlogListContainer from "@/components/BlogListContainer"; // Kita akan buat komponen ini

export const metadata: Metadata = {
  title: "Arsip Artikel | M Septiawan",
  description:
    "Kumpulan artikel terlengkap mengenai AI Automation, Bisnis, dan Teknologi.",
};

export default async function BlogPage() {
  const allPosts = getAllPosts(); // Mengambil semua data MDX

  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER SECTION */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-8 bg-[#4A5DDF]"></span>
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#4A5DDF]">
              Knowledge Base
            </h3>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 leading-none mb-6">
            Arsip <span className="text-slate-400">Artikel.</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Eksplorasi mendalam tentang bagaimana AI mengubah cara bisnis
            beroperasi di tahun 2026.
          </p>
        </div>

        {/* BLOG LIST WITH SHOW MORE LOGIC */}
        {/* Kita pindahkan logika interaktif ke Client Component agar SEO tetap terjaga di awal */}
        <BlogListContainer initialPosts={allPosts} />
      </div>
    </main>
  );
}
