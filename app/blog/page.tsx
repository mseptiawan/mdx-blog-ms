import Link from 'next/link'
import { getCategories, getPostsByCategory } from '@/lib/posts'

export const dynamic = 'force-dynamic'

export default function BlogPage() {
  const categories = getCategories()

  return (
    <main className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      {categories.map((cat) => {
        const posts = getPostsByCategory(cat)

        return (
          <section key={cat} className="mb-8">
            <h2 className="text-xl font-semibold capitalize mb-2">
              {cat.replace('-', ' ')}
            </h2>

            <ul className="space-y-2">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${cat}/${post.slug}`}
                    className="text-blue-600 hover:underline"
                  >
                    {post.slug.replace(/-/g, ' ')}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )
      })}
    </main>
  )
}
