import type { MetadataRoute } from "next";
import { SITE, abs } from "@/lib/site";
import { SERVICES } from "@/lib/home";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(SITE.updated);
  const pages = ["/", "/services/", "/pricing/", "/file-specs/", "/faq/", ...SERVICES.map((s) => `/${s.slug}/`)];
  return pages.map((p) => ({
    url: abs(p),
    lastModified,
    changeFrequency: p === "/" ? "weekly" : "monthly",
    priority: p === "/" ? 1 : p.startsWith("/services") || p === "/pricing/" ? 0.9 : 0.8,
  }));
}
