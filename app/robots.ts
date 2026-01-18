import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/dashboard", "/api", "/login"],
      },
    ],
    sitemap: "https://blog-sanyru.vercel.app/sitemap.xml", // Sesuaikan domain lu
  };
}
