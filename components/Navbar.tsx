import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tighter text-white hover:opacity-80 transition">
          MY<span className="text-blue-500">BLOG</span>
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-slate-400 hover:text-white transition">
            Home
          </Link>
          <Link href="/blog" className="text-sm font-medium text-slate-400 hover:text-white transition">
            Blog
          </Link>
          <Link href="/layanan" className="text-sm font-medium text-slate-400 hover:text-white transition">
            Layanan
          </Link>
          
          {/* Button CTA */}
          <Link 
            href="/contact" 
            className="text-xs font-bold uppercase tracking-widest bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full transition shadow-lg shadow-blue-500/20"
          >
            Konsultasi
          </Link>
        </div>
      </div>
    </nav>
  );
}