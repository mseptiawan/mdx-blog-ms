import fs from 'fs'
import path from 'path'

const BLOG_PATH = path.join(process.cwd(), 'content/blog')

// Ambil daftar kategori
export function getCategories(): string[] {
  return fs.readdirSync(BLOG_PATH).filter((file) =>
    fs.statSync(path.join(BLOG_PATH, file)).isDirectory()
  )
}

// Ambil daftar posting berdasarkan kategori
export function getPostsByCategory(category: string) {
  const categoryPath = path.join(BLOG_PATH, category)
  const files = fs.readdirSync(categoryPath).filter((f) => f.endsWith('.mdx'))

  return files.map((file) => ({
    slug: file.replace('.mdx', ''),
    category,
  }))
}

// Ambil isi posting berdasarkan kategori + slug
export function getPostBySlug(category: string, slug: string) {
  const filePath = path.join(BLOG_PATH, category, `${slug}.mdx`)
  return fs.readFileSync(filePath, 'utf8')
}
