import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug } from '@/lib/posts'
import { notFound } from 'next/navigation'


export default async function Page({
  params,
}: {
  params: Promise<{ category: string; slug: string }>
}) {
  const { category, slug } = await params // ✅ WAJIB AWAIT

  if (!category || !slug) {
    notFound()
  }

  const content = getPostBySlug(category, slug)

 return (
  <article
    className="
      prose prose-slate 
      dark:prose-invert
      max-w-3xl mx-auto
      px-4 py-10
      prose-headings:scroll-mt-24
      prose-h1:text-4xl
      prose-h2:text-3xl
      prose-h3:text-2xl
      prose-p:leading-8
      prose-code:bg-gray-100
      prose-code:dark:bg-gray-800
      prose-code:px-1 prose-code:rounded
      prose-pre:bg-gray-900
      prose-pre:text-gray-100
    "
  >
    <MDXRemote source={content} />
  </article>
)

}
