"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Facebook, Twitter, Linkedin } from "lucide-react";

export default function ShareButtons({ title }: { title: string }) {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const shareTitle = encodeURIComponent(title);

  const platforms = [
    {
      name: "WhatsApp",
      icon: <MessageCircle size={20} />,
      color: "text-green-600 hover:bg-green-50",
      link: `https://api.whatsapp.com/send?text=${shareTitle}%20${encodeURIComponent(
        shareUrl
      )}`,
    },
    {
      name: "Facebook",
      icon: <Facebook size={20} />,
      color: "text-blue-600 hover:bg-blue-50",
      link: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
    },
    {
      name: "Twitter",
      icon: <Twitter size={20} />,
      color: "text-sky-500 hover:bg-sky-50",
      link: `https://twitter.com/intent/tweet?text=${shareTitle}&url=${encodeURIComponent(
        shareUrl
      )}`,
    },
    {
      name: "Linkedin",
      icon: <Linkedin size={20} />,
      color: "text-blue-800 hover:bg-blue-50",
      link: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
    },
  ];

  return (
    <div className="mt-8 flex items-center gap-4">
      <span className="text-sm font-bold text-slate-900">
        Bagikan artikel ini:
      </span>
      <div className="flex gap-2" suppressHydrationWarning={true}>
        {/* Tambahkan suppressHydrationWarning={true} pada div pembungkus loop */}
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={shareUrl ? platform.link : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full bg-slate-100 transition ${platform.color}`}
            title={`Share to ${platform.name}`}
            // Tambahkan juga di sini untuk keamanan ekstra
            suppressHydrationWarning={true}
          >
            {platform.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
