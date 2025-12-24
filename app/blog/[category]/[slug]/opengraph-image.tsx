import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";

export const runtime = "edge"; // Digunakan untuk performa lebih baik di Edge

export const alt = "Preview Artikel Blog";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const { category, slug } = params;
  const post = getPostBySlug(category, slug);

  if (!post) {
    notFound(); // Atau bisa return ImageResponse default jika post tidak ditemukan
  }

  // Ambil huruf pertama judul untuk background inisial
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
          backgroundColor: "#0F172A", // Warna latar belakang gelap
          fontSize: 32,
          fontWeight: 600,
          color: "white",
          padding: 50,
          gap: 20,
          fontFamily: "sans-serif", // Ganti jika ingin custom font
        }}
      >
        {/* Logo atau Inisial (Optional) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 100,
            height: 100,
            borderRadius: "50%",
            backgroundColor: "#4F46E5", // Warna primer
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
            maxHeight: "70%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "box",
            WebkitLineClamp: 2, // Batasi 2 baris
            WebkitBoxOrient: "vertical",
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
            color: "#CBD5E1", // Warna teks abu-abu terang
            marginTop: 20,
          }}
        >
          <span style={{ fontWeight: "bold" }}>
            {post.category.toUpperCase().replace("-", " ")}
          </span>
          <span style={{ margin: "0 15px" }}>•</span>
          <span>
            {new Date(post.date).toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>

        {/* Nama Website/Author (Optional) */}
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
