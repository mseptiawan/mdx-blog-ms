"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogListContainer({
  initialPosts,
}: {
  initialPosts: any[];
}) {
  const [visibleCount, setVisibleCount] = useState(16);

  const showMore = () => {
    setVisibleCount((prev) => prev + 16);
  };

  const currentPosts = initialPosts.slice(0, visibleCount);

  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.category}/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-50">
              <Image
                src={post.thumbnail || "/images/blog/images.png"}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col p-5">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#4A5DDF] mb-2">
                {post.category?.replace("-", " ")}
              </span>
              <h4 className="text-sm font-bold text-slate-900 mb-2 group-hover:text-[#4A5DDF] transition-colors line-clamp-2">
                {post.title}
              </h4>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                <div className="flex items-center gap-1 text-[#4A5DDF] font-bold text-[9px] uppercase">
                  Baca Artikel <ArrowRight size={10} />
                </div>
                <span>
                  {post.date instanceof Date
                    ? post.date.toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })
                    : post.date}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* SHOW MORE BUTTON */}
      {visibleCount < initialPosts.length && (
        <div className="flex justify-center pt-10">
          <button
            onClick={showMore}
            className="group flex flex-col items-center gap-2"
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-900 group-hover:text-[#4A5DDF] transition-colors">
              Tampilkan Lebih Banyak
            </span>
            <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-[#4A5DDF] group-hover:bg-[#4A5DDF] group-hover:text-white transition-all">
              <ArrowRight size={20} className="rotate-90" />
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
