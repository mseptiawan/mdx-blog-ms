import { getCategories, getPostsByCategory } from "@/lib/posts";
import Link from "next/link";

export default function BlogPage() {
  const categories = getCategories();

  return (
    // Background putih bersih dengan teks slate gelap
    <main className="min-h-screen bg-white text-slate-900 antialiased selection:bg-blue-100">
      <div className="max-w-5xl mx-auto px-6 py-24">
        {/* Header Section - Dibuat lebih elegan & minimalis */}
        <header className="mb-20 border-b border-slate-100 pb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter mb-6">
            Writings<span className="text-blue-600">.</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl leading-relaxed">
            Berbagi pemikiran mengenai bisnis, strategi, dan pengembangan
            teknologi secara mendalam.
          </p>
        </header>

        {categories.map((cat) => {
          const posts = getPostsByCategory(cat);

          return (
            <section key={cat} className="mb-24">
              {/* Category Title - Huruf kecil ke besar dengan spasi lebar (Clean Look) */}
              <div className="flex items-center gap-6 mb-10">
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600 whitespace-nowrap">
                  {cat.replace("-", " ")}
                </h2>
                <div className="h-[1px] w-full bg-slate-100"></div>
              </div>

              {/* Post Grid Card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${cat}/${post.slug}`}
                    className="group relative block p-8 rounded-3xl border border-slate-100 bg-white hover:bg-slate-50/50 hover:border-slate-200 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/5"
                  >
                    {/* Icon Arrow - Muncul saat hover */}
                    <div className="absolute top-8 right-8 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-3 capitalize group-hover:text-blue-600 transition-colors leading-tight">
                      {post.slug.replace(/-/g, " ")}
                    </h3>

                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                      Pelajari lebih dalam mengenai{" "}
                      {post.slug.replace(/-/g, " ")} untuk meningkatkan
                      efisiensi dan strategi kerja Anda melalui pendekatan yang
                      modern.
                    </p>

                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 uppercase tracking-widest">
                        5 Mins Read
                      </span>
                      <span className="text-slate-400 text-xs font-medium">
                        Dec 23, 2025
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
