import fs from 'fs'
import path from 'path'

const BLOG_PATH = path.join(process.cwd(), 'content/blog')

export function getPostBySlug(filename: string) {
  const [category, ...rest] = filename.replace('.mdx', '').split('-')
  const slug = rest.join('-')

  return fs.readFileSync(
    path.join(BLOG_PATH, category, `${slug}.mdx`),
    'utf8'
  )
}
