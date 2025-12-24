import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Ganti dengan domain asli Anda
  const baseUrl = "https://mdx-blog-ms.vercel.app";

  // 1. Ambil semua post menggunakan fungsi yang baru kita buat
  const posts = getAllPosts();

  // 2. Map data post menjadi format sitemap
  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.category}/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7, // Prioritas artikel sedikit di bawah halaman utama
  }));

  // 3. Daftar halaman statis (Home, Blog List, dll)
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
  ];

  return [...staticPages, ...postUrls];
}
