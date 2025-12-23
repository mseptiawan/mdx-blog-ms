import { getCategories, getPostsByCategory } from '@/lib/posts'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default function BlogPage() {
  
  const categories = getCategories()

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-10">Blog</h1>

      {categories.map((cat) => {
        const posts = getPostsByCategory(cat)

        return (
          <section key={cat} className="mb-10">
            <h2 className="text-2xl font-semibold capitalize mb-4">
              {cat.replace('-', ' ')}
            </h2>

            <ul className="space-y-3">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${cat}/${post.slug}`}
                    className="text-lg text-blue-600 hover:underline"
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
// asdasdada