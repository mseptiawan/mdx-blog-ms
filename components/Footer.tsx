import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#020617] py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white tracking-tighter">
              MY<span className="text-blue-500">BLOG</span>
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Membantu bisnis bertransformasi melalui strategi digital yang terukur dan efisien.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Navigasi</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-blue-400 transition">Beranda</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition">Artikel</Link></li>
              <li><Link href="/layanan" className="hover:text-blue-400 transition">Layanan Kami</Link></li>
            </ul>
          </div>

          {/* Contact/Social */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Sosial Media</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:border-blue-500 hover:text-blue-500 transition">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:border-blue-500 hover:text-blue-500 transition">
                TW
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:border-blue-500 hover:text-blue-500 transition">
                LI
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">
            © {year} MyBlog. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Built with Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}