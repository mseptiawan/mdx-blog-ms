import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // Background putih bersih dengan font sans-serif modern
    <div className="flex min-h-screen flex-col items-center justify-center bg-white font-sans text-slate-900 antialiased">
      <main className="flex w-full max-w-5xl flex-col items-center justify-center py-20 px-6 text-center sm:text-left sm:items-start">
        {/* Badge Kecil (Optional) */}
        <div className="mb-6 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
          Digital Strategy & Innovation
        </div>

        {/* Hero Title */}
        <div className="flex flex-col gap-4 mb-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-slate-900">
            Transformasi Bisnis <br />
            <span className="text-blue-600">Lewat Tulisan.</span>
          </h1>
          <p className="max-w-xl text-lg md:text-xl leading-relaxed text-slate-500">
            Selamat datang di{" "}
            <span className="font-bold text-slate-900">Pemenang Karir</span>.
            Tempat saya berbagi insight mendalam tentang teknologi, manajemen
            karir, dan strategi pertumbuhan bisnis.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col gap-4 w-full sm:flex-row">
          <Link
            href="/blog"
            className="flex h-14 items-center justify-center rounded-full bg-slate-900 px-8 text-base font-bold text-white transition-all hover:bg-slate-800 hover:shadow-lg active:scale-95 sm:w-auto"
          >
            Baca Artikel
          </Link>

          <a
            href="https://pemenangkarir.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 items-center justify-center rounded-full border border-slate-200 bg-white px-8 text-base font-bold text-slate-600 transition-all hover:border-slate-900 hover:text-slate-900 sm:w-auto"
          >
            Layanan Kami
          </a>
        </div>

        {/* Brand/Trust Section (Optional) */}
        <div className="mt-20 w-full border-t border-slate-100 pt-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
            Powered By
          </p>
          <div className="flex flex-wrap gap-8 opacity-40 grayscale">
            <Image
              src="/next.svg"
              alt="Next.js logo"
              width={100}
              height={20}
              priority
            />
            {/* Tambahkan logo lain di sini jika perlu */}
          </div>
        </div>
      </main>
    </div>
  );
}
