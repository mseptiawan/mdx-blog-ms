import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://blog-pemenangkarir.vercel.app"),
  title: {
    default: "Pemenang Karir | Strategi Bisnis & Digital Marketing",
    template: "%s | Pemenang Karir",
  },
  description:
    "Solusi praktis strategi bisnis, digital marketing, dan operasional UKM untuk membantu bisnis Anda tumbuh lebih cepat dan terukur.",
  keywords: [
    "Strategi Bisnis",
    "Digital Marketing",
    "Otomasi WhatsApp",
    "Tips UKM",
    "Pemenang Karir",
  ],
  authors: [{ name: "M Septiawan" }],
  creator: "M Septiawan",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Pemenang Karir - Strategi Bisnis & Marketing",
    description:
      "Belajar strategi bisnis dan digital marketing bersama M Septiawan.",
    url: "https://blog-pemenangkarir.vercel.app",
    siteName: "Pemenang Karir",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Banner Pemenang Karir",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pemenang Karir",
    description: "Belajar strategi bisnis dan digital marketing.",
    images: ["/og-image.png"],
  },
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Data JSON-LD untuk Schema Markup Bisnis Jasa/Langganan
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pemenang Karir Subscription",
    description:
      "Layanan edukasi strategi bisnis dan otomasi marketing bulanan.",
    provider: {
      "@type": "Organization",
      name: "Pemenang Karir",
      url: "https://blog-pemenangkarir.vercel.app",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      price: "199000", // Contoh harga langganan lu
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <html
      lang="id"
      className={`${inter.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className="bg-white text-slate-900 antialiased min-h-screen flex flex-col">
        {/* Schema Markup untuk Google agar muncul di Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
