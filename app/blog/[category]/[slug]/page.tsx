import ShareButtons from "@/components/ShareButtons";

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
            <div className="sticky top-28 pl-4 border-l border-slate-100">
              {/* Label Judul Kecil */}
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
                Daftar Isi
              </h4>

              {/* Komponen ToC Dinamis Anda */}
              <div className="relative group">
                <Toc items={toc} />
              </div>

              {/* Dekoratif: Garis halus di bawah (Optional) */}
              <div className="mt-8 pt-6 border-t border-slate-50">
                <p className="text-[10px] text-slate-400 leading-relaxed italic">
                  Klik judul untuk langsung <br /> menuju pembahasan.
                </p>
              </div>
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
            <ShareButtons title={post.title} />
          </div>

          {/* RIGHT SIDEBAR: Promo Product */}

          <aside className="lg:col-span-3">
            {/* Sticky container dengan bayangan halus, bukan border tebal */}
            <div className="sticky top-28 rounded-3xl p-6 bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Container Gambar dengan aspek rasio yang pas */}
              <div className="relative h-56 rounded-2xl mb-6 overflow-hidden bg-slate-50">
                <Image
                  src="/images/ebook/template1.png"
                  alt="Ebook Strategi Bisnis 2025"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Teks Judul - Menggunakan slate-900 agar kontras tapi elegan */}
              <h4 className="text-xl font-bold text-slate-900 mb-2 leading-tight">
                Template Estimasi Modal <br /> & Balik Modal
              </h4>

              {/* Deskripsi - Fokus pada benefit utama */}
              <p className="text-xs leading-relaxed text-slate-500 mb-6">
                Solusi praktis menyusun anggaran dan menghitung BEP (Payback
                Period) secara otomatis. Cocok untuk berbagai jenis bisnis
                produk maupun jasa agar lebih terukur dan minim risiko.
              </p>

              {/* Tombol - Warna Slate-900 agar senada dengan tema premium kita */}
              <a
                href="https://lynk.id/mseptiawan/49zoRV3"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <button className="w-full py-3 bg-slate-900 text-white text-sm rounded-xl font-bold hover:bg-slate-500 shadow-lg shadow-slate-200 hover:shadow-blue-500/20 transition-all duration-300 active:scale-95">
                  Dapatkan Sekarang
                </button>
              </a>
            </div>
          </aside>
        </div>

        {/* RELATED ARTICLES SECTION */}
        <section className="mt-24 pt-16 border-t border-slate-100">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-2xl font-bold text-black tracking-tight">
              Artikel Terkait
            </h3>
            <Link
              href="/blog"
              className="text-xs font-bold uppercase tracking-widest text-blue-600 border-b-2 border-blue-600 pb-1"
            >
              Lihat Semua
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${category}/${post.slug}`}
                className="flex flex-col bg-white border border-slate-100 rounded-[2.5rem] p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Thumbnail Card */}
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-slate-100 mb-6">
                  <Image
                    src={
                      post.thumbnail && post.thumbnail.trim() !== ""
                        ? post.thumbnail
                        : "/images/blog/images.png"
                    }
                    alt={post.title || "Thumbnail"}
                    fill // 2. Gunakan fill agar gambar memenuhi div "aspect-[4/3]"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw" // 3. Kasih tahu browser ukuran gambarnya
                  />
                </div>

                {/* Content Inside Card */}
                <div className="px-2 pb-4 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-slate-900 text-white rounded-lg">
                      {category.replace("-", " ")}
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">
                      • 5 Menit Baca
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-black leading-tight mb-6 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title.replace(/-/g, " ")}
                  </h4>

                  {/* Author & Date di bagian bawah card */}
                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden ring-2 ring-slate-50">
                        <img
                          src="/mseptiawan.png"
                          alt="author"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-900">
                        M. Septiawan
                      </span>
                    </div>
                    <span className="text-[10px] font-medium text-slate-400">
                      24 Des 2025
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
