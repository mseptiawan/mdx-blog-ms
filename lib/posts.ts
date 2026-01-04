import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_PATH = path.join(process.cwd(), "content/blog");

// Definisi Interface yang ketat
export interface Post {
  slug: string;
  category: string;
  title: string;
  description: string;
  thumbnail: string;
  date: string | null;
}

// Interface tambahan untuk Detail Page (karena ada 'content')
export interface PostDetail extends Post {
  content: string;
  author: string;
}

// ==========================
// Ambil daftar kategori
// ==========================
export function getCategories(): string[] {
  if (!fs.existsSync(BLOG_PATH)) return [];
  return fs
    .readdirSync(BLOG_PATH)
    .filter((file) => fs.statSync(path.join(BLOG_PATH, file)).isDirectory());
}

// ==========================
// Ambil daftar posting per kategori (UNTUK LIST)
// ==========================
export function getPostsByCategory(category: string): Post[] {
  const categoryPath = path.join(BLOG_PATH, category);

  if (!fs.existsSync(categoryPath)) return [];

  const files = fs.readdirSync(categoryPath).filter((f) => f.endsWith(".mdx"));

  return files.map((file) => {
    const filePath = path.join(categoryPath, file);
    const source = fs.readFileSync(filePath, "utf8");
    const { data } = matter(source);

    // Memastikan return value sesuai dengan interface Post
    return {
      slug: file.replace(".mdx", ""),
      category,
      title: String(data.title ?? file.replace(".mdx", "")),
      description: String(data.description ?? ""),
      thumbnail: String(data.thumbnail ?? "/images/default-thumbnail.jpg"),
      // Konversi date ke string agar tidak error 'Object' saat render
      date: data.date ? String(data.date) : null,
    };
  });
}

// ==========================
// Ambil 1 post lengkap (DETAIL PAGE)
// ==========================
export function getPostBySlug(category: string, slug: string): PostDetail {
  const filePath = path.join(BLOG_PATH, category, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");

  const { content, data } = matter(source);

  return {
    content,
    slug,
    category,
    title: String(data.title ?? slug.replace(/-/g, " ")),
    description: String(data.description ?? ""),
    thumbnail: String(data.thumbnail ?? "/images/default-thumbnail.jpg"),
    date: data.date ? String(data.date) : null,
    author: String(data.author ?? "Admin"),
  };
}

// ==========================
// Ambil SEMUA postingan (UNTUK SITEMAP / SEARCH)
// ==========================
export function getAllPosts(): Post[] {
  const categories = getCategories();
  let allPosts: Post[] = [];

  categories.forEach((category) => {
    const posts = getPostsByCategory(category);
    // Filter tambahan untuk memastikan tidak ada data korup yang masuk
    const validPosts = posts.filter(
      (post): post is Post =>
        typeof post.slug === "string" && post.slug.length > 0
    );
    allPosts = [...allPosts, ...validPosts];
  });

  // Urutkan berdasarkan tanggal terbaru jika ada
  return allPosts.sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}
