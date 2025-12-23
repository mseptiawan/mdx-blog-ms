import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug } from '@/lib/posts'
import { notFound } from 'next/navigation'

export default async function Page({
  params,
}: {
  params: Promise<{ category: string; slug: string }>
}) {
  const { category, slug } = await params

  if (!category || !slug) notFound()

  const content = getPostBySlug(category, slug)

  return (
    // Background dibuat Deep Dark (bukan hitam pekat) agar mata tidak lelah
    <main className="min-h-screen bg-[#020617] text-slate-300 antialiased selection:bg-blue-500/30">
      
      {/* Header dengan Gradient Text */}
      <header className="max-w-3xl mx-auto px-6 pt-20 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium text-blue-400 border border-blue-500/30 bg-blue-500/10 rounded-full uppercase tracking-widest">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          {category.replace('-', ' ')}
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
          Business Model <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">Canvas</span>
        </h1>
        
        <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
          Panduan visual untuk memetakan, menganalisis, dan merancang strategi bisnis yang efektif.
        </p>
      </header>

      {/* Konten MDX dengan Custom Prose Styling */}
      <article className="
        max-w-3xl mx-auto px-6 pb-24
        prose prose-slate prose-invert
        
        /* Link Styling */
        prose-a:no-underline prose-a:text-blue-400 hover:prose-a:text-blue-300
        
        /* Headings - White for high contrast */
        prose-headings:text-white prose-headings:font-bold prose-h2:text-3xl prose-h2:border-b prose-h2:border-slate-800 prose-h2:pb-2
        
        /* Typography */
        prose-p:text-slate-300 prose-p:leading-relaxed prose-p:text-[1.1rem]
        
        /* List Styling - Membuat list terlihat seperti card kecil */
        prose-li:text-slate-300
        
        /* Blockquote */
        prose-blockquote:border-l-blue-500 prose-blockquote:bg-slate-900/50 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:italic prose-blockquote:text-slate-400
        
        /* Image */
        prose-img:rounded-2xl prose-img:border prose-img:border-slate-800 prose-img:shadow-2xl
      ">
        <MDXRemote source={content} />
      </article>
    </main>
  )
}