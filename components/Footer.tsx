import Link from "next/link";
import {
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  MessageSquare,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Linkedin",
      icon: <Linkedin size={18} />,
      href: "https://www.linkedin.com/in/mseptiawan/",
    },
    {
      name: "Instagram",
      icon: <Instagram size={18} />,
      href: "https://instagram.com/mseptiawannn",
    },
    {
      name: "Youtube",
      icon: <Youtube size={18} />,
      href: "https://www.youtube.com/@mseptiawan017",
    },
    {
      name: "Email",
      icon: <Mail size={18} />,
      href: "mailto:mseptiawan017@gmail.com",
    },
  ];

  return (
    <footer className="relative border-t border-slate-100 bg-white pt-24 pb-12 overflow-hidden">
      {/* Dekorasi Background Halus */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Brand Section - 5 Columns */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-black text-slate-900 tracking-tighter flex items-center gap-2">
              Sanyru
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            </h3>
            <p className="text-base text-slate-500 leading-relaxed max-w-sm">
              Membangun masa depan bisnis dengan <strong>AI Automation</strong>.
              Kami mengubah cara Anda bekerja—lebih cerdas, otomatis, dan
              terukur.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#4A5DDF] hover:border-[#4A5DDF] hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - 3 Columns */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em] mb-8">
              Eksplorasi
            </h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#4A5DDF] transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-[#4A5DDF] transition-colors"
                >
                  Artikel & Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan"
                  className="hover:text-[#4A5DDF] transition-colors"
                >
                  Layanan Otomasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section - 4 Columns */}
          <div className="lg:col-span-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 relative group">
            <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em] mb-4">
              Mulai Konsultasi
            </h4>
            <p className="text-xs text-slate-500 mb-6">
              Diskusikan bagaimana AI bisa menghemat waktu operasional bisnis
              Anda.
            </p>
            <a
              href="https://wa.me/6289630909617"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#4A5DDF] group-hover:gap-3 transition-all"
            >
              Hubungi via WhatsApp <MessageSquare size={16} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              © {year} Sanyru
            </p>
            <span className="hidden md:block w-1 h-1 bg-slate-200 rounded-full"></span>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Built with Precision
            </p>
          </div>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-[10px] font-bold uppercase tracking-widest text-slate-300 hover:text-slate-900 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[10px] font-bold uppercase tracking-widest text-slate-300 hover:text-slate-900 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
