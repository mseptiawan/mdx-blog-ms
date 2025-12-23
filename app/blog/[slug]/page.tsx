import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug } from '@/lib/posts'

export const dynamic = 'force-dynamic'

type Props = {
  params: Promise<{ slug: string }>
}

export default async function Page({ params }: Props) {
  const { slug } = await params

  const content = getPostBySlug(`${slug}.mdx`)

  return (
    <article className="prose mx-auto">
      <MDXRemote source={content} />
    </article>
  )
}
