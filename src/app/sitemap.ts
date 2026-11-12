import type { MetadataRoute } from "next";
import { SITE, abs } from "@/lib/site";
import { SERVICES } from "@/lib/home";

type Entry = { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" };

const PAGES: Entry[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/services/", priority: 0.9, changeFrequency: "monthly" },
  ...SERVICES.map((s): Entry => ({ path: `/${s.slug}/`, priority: 0.9, changeFrequency: "monthly" })),
  { path: "/pricing/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/file-specs/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/faq/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about/", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact/", priority: 0.5, changeFrequency: "monthly" },
  { path: "/privacy-policy/", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms/", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((p) => ({
    url: abs(p.path),
    lastModified: SITE.updated, // date only, e.g. 2026-11-12
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
