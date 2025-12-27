import { getCategories, getPostsByCategory } from "@/lib/posts";
import Link from "next/link";

export default function BlogPage() {
  const categories = getCategories();

  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased selection:bg-blue-100">
      {/* Container disamakan dengan Navbar: max-w-6xl */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Header Section */}
        <header className="mb-16 border-b border-slate-100 pb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter mb-6">
            Catatan Strategis<span className="text-blue-600">.</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
            Eksplorasi mendalam mengenai manajemen karir modern, efisiensi
            operasional, dan navigasi profesional di era digital.
          </p>
        </header>

        {categories.map((cat) => {
          const posts = getPostsByCategory(cat);

          return (
            <section key={cat} className="mb-20">
              {/* Category Label */}
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-6 bg-blue-600"></span>
                <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">
                  {cat.replace("-", " ")}
                </h2>
              </div>

              {/* Post Grid - 4 Kolom Pas dengan max-w-6xl */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${cat}/${post.slug}`}
                    className="group flex flex-col justify-between p-5 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50 transition-all duration-300 hover:border-blue-100"
                  >
                    <div>
                      {/* Font size disesuaikan agar pas di 4 kolom */}
                      <h3 className="text-base font-bold text-slate-900 mb-2 capitalize group-hover:text-blue-600 transition-colors leading-snug">
                        {post.slug.replace(/-/g, " ")}
                      </h3>

                      <p className="text-slate-500 text-[13px] leading-relaxed mb-4 line-clamp-3">
                        Membahas implementasi {post.slug.replace(/-/g, " ")}{" "}
                        dalam konteks pengembangan profesional dan efisiensi.
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                        Insight
                      </span>
                      <span className="text-slate-400 text-[10px]">
                        Des 2025
                      </span>
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
