import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

// 1. Inisialisasi Font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// 2. Pengaturan Metadata SEO Lengkap
export const metadata: Metadata = {
  // Ganti URL ini dengan domain asli Anda setelah deploy
  metadataBase: new URL("https://mdx-blog-ms.vercel.app"),

  title: {
    default: "Pemenang Karir | Strategi Bisnis & Digital Marketing",
    template: "%s | Pemenang Karir", // Hasilnya: "Judul Artikel | Pemenang Karir"
  },
  description:
    "Solusi praktis strategi bisnis, digital marketing, dan operasional UKM untuk membantu bisnis Anda tumbuh lebih cepat dan terukur.",

  keywords: [
    "Strategi Bisnis",
    "Digital Marketing",
    "Manajemen Bisnis",
    "Tips UKM",
    "Pemenang Karir",
    "M Septiawan",
  ],

  authors: [{ name: "M Septiawan" }],
  creator: "M Septiawan",

  // Favicon & Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  // Open Graph (Untuk tampilan share di WhatsApp/Facebook)
  openGraph: {
    title: "Pemenang Karir - Strategi Bisnis & Marketing",
    description:
      "Belajar strategi bisnis dan digital marketing bersama M Septiawan.",
    url: "https://mdx-blog-ms.vercel.app",
    siteName: "Pemenang Karir",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png", // Pastikan file ini ada di folder public/
        width: 1200,
        height: 630,
        alt: "Banner Pemenang Karir",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Pemenang Karir",
    description: "Belajar strategi bisnis dan digital marketing.",
    images: ["/og-image.png"],
  },

  // Pengaturan Robot SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

// 3. Komponen RootLayout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className="bg-white text-slate-900 antialiased min-h-screen flex flex-col">
        {/* Navbar tetap di atas */}
        <Navbar />

        {/* Main content akan mengisi sisa ruang yang ada */}
        <main className="flex-grow">{children}</main>

        {/* Footer di paling bawah */}
        <Footer />
      </body>
    </html>
  );
}
