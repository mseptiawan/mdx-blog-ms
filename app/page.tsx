import Link from "next/link";

export default function Home() {
  return (
    // Background putih bersih dengan nuansa minimalis profesional
    <div className="flex min-h-screen flex-col items-center justify-center bg-white font-sans text-slate-900 antialiased">
      <main className="flex w-full max-w-5xl flex-col items-center justify-center py-20 px-6 text-center sm:text-left sm:items-start">
        {/* Sub-header Kecil */}
        <div className="mb-6 inline-flex items-center rounded-full bg-slate-50 px-4 py-1 text-sm font-semibold tracking-wide text-slate-600">
          Personal Blog & Insights
        </div>

        {/* Hero Title */}
        <div className="flex flex-col gap-4 mb-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-slate-900">
            Navigasi Karir <br />
            <span className="text-blue-600">di Era Digital.</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl leading-relaxed text-slate-600">
            Selamat datang di{" "}
            <span className="font-bold text-slate-900">Pemenang Karir</span>.
            Ruang berbagi pemikiran strategis mengenai manajemen talenta,
            efisiensi operasional, dan bagaimana teknologi membentuk masa depan
            profesional kita.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col gap-4 w-full sm:flex-row">
          <Link
            href="/blog"
            className="flex h-14 items-center justify-center rounded-full bg-slate-900 px-10 text-base font-bold text-white transition-all hover:bg-blue-600 hover:shadow-xl active:scale-95 sm:w-auto"
          >
            Mulai Membaca
          </Link>
        </div>
      </main>
    </div>
  );
}
