import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostsByCategory } from "@/lib/posts";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Toc from "@/components/Toc";
import ShareButtons from "@/components/ShareButtons";
import { getTocFromMdx } from "@/lib/getToc";

// 1. FUNGSI GENERATE METADATA (Untuk Preview WhatsApp/Social Media)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const post = getPostBySlug(category, slug);

  if (!post) return {};

  const baseUrl = "https://website-anda.com"; // Ganti dengan domain asli Anda
  const shareUrl = `${baseUrl}/blog/${category}/${slug}`;

  // Ubah bagian ini untuk mengarah ke opengraph-image.tsx
  const ogImage = `${baseUrl}/blog/${category}/${slug}/opengraph-image.png`;

  return {
    title: `${post.title} | Blog M Septiawan`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: shareUrl,
      siteName: "M Septiawan Blog",
      locale: "id_ID",
      type: "article",
      publishedTime: post.date, // Ambil dari metadata post
      authors: ["M Septiawan"],
      images: [
        {
          url: ogImage,
          width: 1200, // Harus sesuai dengan ukuran di opengraph-image.tsx
          height: 630, // Harus sesuai dengan ukuran di opengraph-image.tsx
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  if (!category || !slug) notFound();

  const post = getPostBySlug(category, slug);
  if (!post) notFound();

  const toc = getTocFromMdx(post.content);

  const relatedPosts = getPostsByCategory(category)
    .filter((p) => p.slug !== slug)
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb & Title Area */}
        <div className="max-w-3xl mx-auto mb-8">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Link href="/blog" className="hover:text-blue-600 transition">
              Blog
            </Link>
            <span>&gt;</span>
            <span className="text-pink-500 font-medium capitalize">
              {category.replace("-", " ")}
            </span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-8">
            {post.title.replace(/-/g, " ")}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT SIDEBAR: ToC */}
          <aside className="hidden lg:block lg:col-span-2">
            <div className="sticky top-28 pl-4 border-l border-slate-100">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
                Daftar Isi
              </h4>
              <div className="relative group">
                <Toc items={toc} />
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="lg:col-span-7">
            {/* <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-100 mb-10 shadow-sm">
              <Image
                src={post.thumbnail}
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
            </div> */}

            <article className="prose max-w-none">
              <MDXRemote source={post.content} />
            </article>

            {/* Author Box */}
            <div className="mt-16 p-8 bg-blue-50 rounded-3xl flex items-center gap-6 not-prose">
              <div className="w-16 h-16 rounded-full bg-slate-300 overflow-hidden ring-4 ring-white shadow-sm">
                <img
                  src="/mseptiawan.png"
                  alt="Avatar M Septiawan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg m-0">
                  M Septiawan
                </h4>
                {/* GANTI <p> MENJADI <div> DI SINI */}
                <div className="text-sm text-slate-500 font-medium">
                  AI Automation Engineer
                </div>
              </div>
            </div>

            {/* Share Section - Client Component */}
            <ShareButtons title={post.title} />
          </div>

          {/* RIGHT SIDEBAR: Promo Product */}
        </div>

        {/* RELATED ARTICLES */}
        <section className="mt-24 pt-16 border-t border-slate-100">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <span className="h-px w-6 bg-[#4A5DDF]"></span>
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">
                Artikel Terkait
              </h3>
            </div>
            <Link
              href="/blog"
              className="text-[10px] font-black uppercase tracking-widest text-[#4A5DDF] hover:opacity-70 transition-opacity"
            >
              Lihat Semua →
            </Link>
          </div>

          {/* Perubahan pada grid-cols di bawah ini */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${category}/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white hover:bg-white hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100"
              >
                {/* THUMBNAIL */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={post.thumbnail || "/images/blog/images.png"}
                    alt={post.title || "Thumbnail"}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col p-5">
                  <h4 className="text-sm font-bold text-slate-900 mb-2 capitalize group-hover:text-[#4A5DDF] transition-colors leading-snug line-clamp-2">
                    {post.title || post.slug.replace(/-/g, " ")}
                  </h4>

                  <p className="text-slate-500 text-[11px] leading-relaxed mb-6 line-clamp-2">
                    {post.description ||
                      `Pelajari lebih lanjut mengenai strategi otomasi bisnis terbaru.`}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                    <div className="flex items-center gap-1 text-[#4A5DDF] font-bold text-[9px] uppercase">
                      Baca{" "}
                      <ArrowRight
                        size={10}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
