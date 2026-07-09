import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const BASE = SITE_URL;

// Mirrors the original sitemap.xml (paths mapped from *.html to clean routes).
const ENTRIES: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/solutions", changeFrequency: "monthly", priority: 0.9 },
  { path: "/sentrixgo", changeFrequency: "monthly", priority: 0.8 },
  { path: "/verified-transport", changeFrequency: "monthly", priority: 0.8 },
  { path: "/visionguard", changeFrequency: "monthly", priority: 0.8 },
  { path: "/soc", changeFrequency: "monthly", priority: 0.8 },
  { path: "/insurance", changeFrequency: "monthly", priority: 0.8 },
  { path: "/fleet", changeFrequency: "monthly", priority: 0.8 },
  { path: "/industries", changeFrequency: "monthly", priority: 0.8 },
  { path: "/partners", changeFrequency: "monthly", priority: 0.7 },
  { path: "/investors", changeFrequency: "monthly", priority: 0.7 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/security", changeFrequency: "monthly", priority: 0.7 },
  { path: "/careers", changeFrequency: "monthly", priority: 0.6 },
  { path: "/insights", changeFrequency: "weekly", priority: 0.7 },
  { path: "/insight-proactive-vs-reactive", changeFrequency: "yearly", priority: 0.6 },
  { path: "/insight-smarter-cameras", changeFrequency: "yearly", priority: 0.6 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ENTRIES.map((e) => ({
    url: `${BASE}${e.path}`,
    lastModified,
    changeFrequency: e.changeFrequency,
    priority: e.priority,
  }));
}
