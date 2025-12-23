import { getCategories, getPostsByCategory } from '@/lib/posts'
import Link from 'next/link'

export default function BlogPage() {
  const categories = getCategories()

  return (
    <main className="min-h-screen bg-[#020617] text-slate-200 antialiased selection:bg-blue-500/30">
      <div className="max-w-5xl mx-auto px-6 py-20">
        
        {/* Header Section */}
        <header className="mb-16 border-b border-slate-800 pb-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tighter mb-4">
            Writings<span className="text-blue-500">.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl">
            Berbagi pemikiran mengenai bisnis, strategi, dan pengembangan teknologi secara mendalam.
          </p>
        </header>

        {categories.map((cat) => {
          const posts = getPostsByCategory(cat)

          return (
            <section key={cat} className="mb-20">
              {/* Category Title with Line */}
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400 whitespace-nowrap">
                  {cat.replace('-', ' ')}
                </h2>
                <div className="h-[1px] w-full bg-slate-800"></div>
              </div>

              {/* Post Grid Card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${cat}/${post.slug}`}
                    className="group relative block p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-800/50 hover:border-slate-700 transition-all duration-300"
                  >
                    {/* Floating decoration on hover */}
                    <div className="absolute top-4 right-4 text-slate-600 group-hover:text-blue-400 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 capitalize group-hover:text-blue-400 transition-colors">
                      {post.slug.replace(/-/g, ' ')}
                    </h3>
                    
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      Pelajari lebih dalam mengenai {post.slug.replace(/-/g, ' ')} untuk meningkatkan efisiensi dan strategi kerja Anda...
                    </p>

                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 uppercase tracking-wider">
                        5 Mins Read
                      </span>
                      <span className="text-slate-600 text-xs">Dec 23, 2025</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </main>
  )
}