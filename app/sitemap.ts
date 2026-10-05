import type { MetadataRoute } from "next";
import { contentLastModified, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(contentLastModified);
  const pages = [
    { fr: site.url, en: `${site.url}/en`, priority: 1 },
    { fr: `${site.url}/mentions-legales`, en: `${site.url}/en/legal`, priority: 0.3 },
  ];
  return pages.flatMap(({ fr, en, priority }) =>
    [fr, en].map((url) => ({
      url,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: url === en ? priority * 0.8 : priority,
      alternates: { languages: { fr, en } },
    }))
  );
}
