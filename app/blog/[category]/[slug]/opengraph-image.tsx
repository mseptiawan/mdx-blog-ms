import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";

// PERBAIKAN UTAMA: Gunakan nodejs karena kita memanggil getPostBySlug yang pakai 'fs'
export const runtime = "nodejs";

export const alt = "Preview Artikel Blog";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params:
    | Promise<{ category: string; slug: string }>
    | { category: string; slug: string };
}) {
  // Next.js terbaru menyarankan untuk await params
  const resolvedParams = await params;
  const { category, slug } = resolvedParams;

  const post = getPostBySlug(category, slug);

  if (!post) {
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "#0F172A",
            color: "white",
          }}
        >
          <h1>Post Not Found</h1>
        </div>
      ),
      { ...size }
    );
  }

  const initial = post.title.charAt(0).toUpperCase();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0F172A",
          fontSize: 32,
          fontWeight: 600,
          color: "white",
          padding: 50,
          gap: 20,
        }}
      >
        {/* Logo / Inisial */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 100,
            height: 100,
            borderRadius: "50%",
            backgroundColor: "#4F46E5",
            color: "white",
            fontSize: 48,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          {initial}
        </div>

        {/* Judul Artikel */}
        <div
          style={{
            fontSize: 70,
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: 1.2,
            color: "#F8FAFC",
          }}
        >
          {post.title}
        </div>

        {/* Kategori & Tanggal */}
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#CBD5E1",
            marginTop: 20,
          }}
        >
          <span style={{ fontWeight: "bold" }}>
            {category.toUpperCase().replace("-", " ")}
          </span>
          <span style={{ margin: "0 15px" }}>•</span>
          <span>
            {post.date
              ? new Date(post.date).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : ""}
          </span>
        </div>

        {/* Brand */}
        <div
          style={{
            position: "absolute",
            bottom: 50,
            left: 50,
            fontSize: 24,
            color: "#94A3B8",
          }}
        >
          M Septiawan Blog
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
