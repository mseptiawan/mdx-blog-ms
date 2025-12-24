import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostsByCategory } from "@/lib/posts";
import { notFound } from "next/navigation";
import Image from "next/image";
import Toc from "@/components/Toc";
import { getTocFromMdx } from "@/lib/getToc";

import Link from "next/link";
import {
  Share2,
  MessageCircle,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

export default async function Page({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  if (!category || !slug) notFound();
  const post = getPostBySlug(category, slug);
  const toc = getTocFromMdx(post.content);

  const relatedPosts = getPostsByCategory(category)
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb & Title Area */}
        <div className="max-w-3xl mx-auto mb-8">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Link href="/blog" className="hover:text-blue-600 transition">
              Blog
            </Link>
            <span>&gt;</span>
            <span className="text-pink-500 font-medium capitalize">
              {category.replace("-", " ")}
            </span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-8">
            {post.title.replace(/-/g, " ")}
          </h1>
        </div>

        {/* Layout Grid: Sidebar Kiri | Konten Tengah | Sidebar Kanan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT SIDEBAR: Daftar Isi (Sticky) */}
          <aside className="hidden lg:block lg:col-span-2">
            <div className="sticky top-28 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">
                Daftar Isi
              </h4>
              <Toc items={toc} />
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="lg:col-span-7">
            {/* Featured Image */}
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-100 mb-10 shadow-sm">
              <div className="absolute inset-0 bg-slate-200 animate-pulse" />{" "}
              {/* Placeholder */}
              <Image
                src={post.thumbnail}
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
            </div>
            {/* Prose Content */}

            <article className="prose max-w-none">
              <MDXRemote source={post.content} />
            </article>

            {/* Author Box */}
            <div className="mt-16 p-8 bg-blue-50 rounded-3xl flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-slate-300 overflow-hidden">
                <img src="/mseptiawan.png" alt="Avatar" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">M Septiawan</h4>
                <p className="text-sm text-slate-500">System Analyts, </p>
              </div>
            </div>
            {/* Share Section */}
            <div className="mt-8 flex items-center gap-4">
              <span className="text-sm font-bold text-slate-900">
                Bagikan artikel ini:
              </span>
              <div className="flex gap-2">
                <button className="p-2 rounded-full bg-slate-100 text-green-600 hover:bg-green-50 transition">
                  <MessageCircle size={20} />
                </button>
                <button className="p-2 rounded-full bg-slate-100 text-blue-600 hover:bg-blue-50 transition">
                  <Facebook size={20} />
                </button>
                <button className="p-2 rounded-full bg-slate-100 text-sky-500 hover:bg-sky-50 transition">
                  <Twitter size={20} />
                </button>
                <button className="p-2 rounded-full bg-slate-100 text-blue-800 hover:bg-blue-50 transition">
                  <Linkedin size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR: Promo Product */}

          <aside className="lg:col-span-3">
            {/* Sticky container dengan bayangan halus, bukan border tebal */}
            <div className="sticky top-28 rounded-3xl p-6 bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Container Gambar dengan aspek rasio yang pas */}
              <div className="relative h-56 rounded-2xl mb-6 overflow-hidden bg-slate-50">
                <Image
                  src="/images/ebook/ebook1.webp"
                  alt="Ebook Strategi Bisnis 2025"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Teks Judul - Menggunakan slate-900 agar kontras tapi elegan */}
              <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                Ebook Strategi <br /> Bisnis 2025
              </h4>

              {/* Deskripsi - Warna slate-500 agar lebih soft */}
              <p className="text-xs leading-relaxed text-slate-500 mb-6">
                Panduan praktis mengelola operasional dan strategi UKM untuk
                tumbuh lebih cepat dan terukur.
              </p>

              {/* Tombol - Warna Slate-900 agar senada dengan tema premium kita */}
              <button className="w-full py-3 bg-slate-900 text-white text-sm rounded-xl font-bold hover:bg-slate-500 shadow-lg shadow-slate-200 hover:shadow-blue-500/20 transition-all duration-300 active:scale-95">
                Dapatkan Sekarang
              </button>
            </div>
          </aside>
        </div>

        {/* RELATED ARTICLES SECTION */}
        <section className="mt-24 pt-16 border-t border-slate-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-10 text-center md:text-left">
            Artikel terkait
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${category}/${post.slug}`}
                className="group"
              >
                <div className="rounded-3xl bg-slate-100 mb-4 overflow-hidden border border-slate-50 shadow-sm">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className=" object-cover"
                  />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden">
                    <img src="/mseptiawan.png" alt="author" />
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    M Septiawan
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition mb-2 line-clamp-2">
                  {post.slug.replace(/-/g, " ")}
                </h4>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] px-2 py-0.5 bg-green-100 text-green-700 rounded-md font-bold uppercase tracking-tighter">
                    Blog
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    24 December, 2025
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
