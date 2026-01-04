import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_PATH = path.join(process.cwd(), "content/blog");
export interface Post {
  slug: string;
  category: string;
  title: string;
  description: string;
  thumbnail: string;
  date: string | null;
}
// ==========================
// Ambil daftar kategori
// ==========================
export function getCategories(): string[] {
  return fs
    .readdirSync(BLOG_PATH)
    .filter((file) => fs.statSync(path.join(BLOG_PATH, file)).isDirectory());
}

// ==========================
// Ambil daftar posting per kategori (UNTUK LIST)
// ==========================
export function getPostsByCategory(category: string) {
  const categoryPath = path.join(BLOG_PATH, category);
  const files = fs.readdirSync(categoryPath).filter((f) => f.endsWith(".mdx"));

  return files.map((file) => {
    const filePath = path.join(categoryPath, file);
    const source = fs.readFileSync(filePath, "utf8");
    const { data } = matter(source);

    // Di dalam getPostsByCategory
    return {
      slug: file.replace(".mdx", ""),
      category,
      title: data.title ?? file.replace(".mdx", ""),
      description: data.description ?? "",
      thumbnail: data.thumbnail ?? "/images/default-thumbnail.jpg",
      // Ubah baris ini:
      date: data.date ? String(data.date) : null,
    };

    // Dan di dalam getPostBySlug juga ubah:
    return {
      // ... field lainnya
      date: data.date ? String(data.date) : null,
    };
  });
}

// ==========================
// Ambil 1 post lengkap (DETAIL PAGE)
// ==========================
export function getPostBySlug(category: string, slug: string) {
  const filePath = path.join(BLOG_PATH, category, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");

  const { content, data } = matter(source);

  return {
    content, // untuk <MDXRemote />
    slug,
    category,
    title: data.title ?? slug.replace(/-/g, " "),
    description: data.description ?? "",
    thumbnail: data.thumbnail ?? "/images/default-thumbnail.jpg",
    date: data.date ?? null,
    author: data.author ?? "Admin",
  };
}
// Tambahkan di bagian paling bawah lib/posts.ts

// ==========================
// Ambil SEMUA postingan dari SEMUA kategori (UNTUK SITEMAP)
// ==========================
export function getAllPosts(): Post[] {
  const categories = getCategories();

  // Berikan tipe : Post[] di sini
  let allPosts: Post[] = [];

  categories.forEach((category) => {
    const posts = getPostsByCategory(category);
    allPosts = [...allPosts, ...posts];
  });

  return allPosts;
}
