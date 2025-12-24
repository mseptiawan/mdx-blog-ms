import Link from "next/link";
import { Instagram, Youtube, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  // Data sosial media agar kode lebih bersih
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
    <footer className="border-t border-slate-100 bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 tracking-tighter">
              Pemenang <span className="text-blue-600">Karir</span>
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Membantu bisnis bertransformasi melalui strategi digital yang
              terukur dan efisien.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-6">
              Navigasi
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <Link href="/" className="hover:text-blue-600 transition">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-600 transition">
                  Artikel
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan"
                  className="hover:text-blue-600 transition"
                >
                  Layanan Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Sosial Media - Sekarang menggunakan Lucide Icons */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-6">
              Terhubung Dengan Saya
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:border-slate-900 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-slate-400">
            © {year} Pemenangkarir. Made by Septiawan.
          </p>
          <p className="text-[10px] uppercase tracking-widest text-slate-400">
            Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
