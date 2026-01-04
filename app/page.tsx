import { getCategories, getPostsByCategory } from "@/lib/posts";
import Link from "next/link";
import Image from "next/image"; // Import komponen Image
import { ArrowRight } from "lucide-react";

export default function Home() {
  const categories = getCategories();

  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased selection:bg-blue-100">
      {/* HERO SECTION */}
      <section className="relative bg-white overflow-hidden border-b border-slate-100">
        {/* Aksen background halus agar terlihat modern */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl opacity-50"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          {/* Label Status */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-blue-700">
              AI Automation & Business Efficiency
            </span>
          </div>

          {/* Headline Strategis */}
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.95] text-slate-900 mb-8">
            Bekerja Cerdas <br />
            <span className="text-[#4A5DDF]">Bukan Keras.</span>
          </h1>

          {/* Deskripsi Usaha */}
          <p className="max-w-2xl text-lg md:text-xl leading-relaxed text-slate-500 mb-12">
            Selamat datang di{" "}
            <span className="text-slate-900 font-bold">PemenangKarir</span>.
            Kami membantu pemilik bisnis mengotomasi tugas repetitif, membangun
            sistem sales WhatsApp berbasis AI, dan memaksimalkan ROI melalui
            efisiensi teknologi modern.
          </p>

          {/* Action & Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {/* Avatar placeholder untuk social proof */}
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400 overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="client"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold text-slate-900">Solusi Terpercaya</p>
                <p className="text-slate-400 text-xs">
                  Untuk UKM & Profesional
                </p>
              </div>
            </div>

            <div className="hidden sm:block h-10 w-px bg-slate-200"></div>

            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
              <span className="h-px w-8 bg-slate-200"></span>
              Eksplorasi Strategi
            </div>
          </div>
        </div>
      </section>
      {/* BLOG LIST SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        {categories.map((cat) => {
          const posts = getPostsByCategory(cat);

          return (
            <section key={cat} className="mb-20 last:mb-0">
              <div className="flex items-center gap-4 mb-10">
                <span className="h-px w-6 bg-[#4A5DDF]"></span>
                <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">
                  {cat.replace("-", " ")}
                </h2>
              </div>

              {/* Post Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${cat}/${post.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white hover:bg-white hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100"
                  >
                    {/* CONTAINER THUMBNAIL */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-200">
                      <Image
                        src={post.thumbnail} // Data ini sekarang pasti ada karena lib/posts.ts sudah oke
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>

                    {/* KONTEN CARD */}
                    <div className="flex flex-1 flex-col p-5">
                      {/* Judul Artikel dengan pengaman slug */}
                      <h3 className="text-base font-bold text-slate-900 mb-2 capitalize group-hover:text-[#4A5DDF] transition-colors leading-snug line-clamp-2">
                        {post.title ||
                          post.slug?.replace(/-/g, " ") ||
                          "Untitled Post"}
                      </h3>

                      {/* Deskripsi Artikel dengan pengaman slug */}
                      <p className="text-slate-500 text-[12px] leading-relaxed mb-6 line-clamp-2">
                        {post.description ||
                          `Pelajari lebih lanjut mengenai ${
                            post.slug?.replace(/-/g, " ") || "strategi ini"
                          } untuk optimasi bisnis Anda.`}
                      </p>

                      {/* Footer Card */}
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                        <div className="flex items-center gap-1 text-[#4A5DDF] font-bold text-[10px] uppercase">
                          Baca{" "}
                          <ArrowRight
                            size={10}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </div>

                        {/* Menampilkan tanggal dengan pengaman agar tidak error Object Date */}
                        <span className="text-slate-400 text-[10px] font-medium">
                          {post.date instanceof Date
                            ? post.date.toLocaleDateString("id-ID", {
                                month: "short",
                                year: "numeric",
                              })
                            : String(post.date || "Jan 2026")}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
