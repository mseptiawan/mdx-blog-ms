"use client";

import { MessageCircle, Facebook, Twitter, Linkedin } from "lucide-react";

export default function ShareButtons({ title }: { title: string }) {
  // Fungsi untuk mendapatkan URL saat ini secara dinamis
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = encodeURIComponent(title);

  const platforms = [
    {
      name: "WhatsApp",
      icon: <MessageCircle size={20} />,
      color: "text-green-600 hover:bg-green-50",
      link: `https://api.whatsapp.com/send?text=${shareTitle}%20${shareUrl}`,
    },
    {
      name: "Facebook",
      icon: <Facebook size={20} />,
      color: "text-blue-600 hover:bg-blue-50",
      link: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    },
    {
      name: "Twitter",
      icon: <Twitter size={20} />,
      color: "text-sky-500 hover:bg-sky-50",
      link: `https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`,
    },
    {
      name: "Linkedin",
      icon: <Linkedin size={20} />,
      color: "text-blue-800 hover:bg-blue-50",
      link: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
    },
  ];

  return (
    <div className="mt-8 flex items-center gap-4">
      <span className="text-sm font-bold text-slate-900">
        Bagikan artikel ini:
      </span>
      <div className="flex gap-2">
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full bg-slate-100 transition ${platform.color}`}
            title={`Share to ${platform.name}`}
          >
            {platform.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
