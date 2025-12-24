"use client";

import { useEffect, useState } from "react";
import type { TocItem } from "@/lib/getToc";

export default function Toc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="flex flex-col gap-3 text-sm">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={() => setActive(item.id)}
          className={`pl-3 border-l-2 transition ${
            active === item.id
              ? "text-blue-600 border-blue-600"
              : "text-slate-500 border-transparent hover:text-slate-900"
          }`}
        >
          {item.text}
        </a>
      ))}
    </nav>
  );
}
