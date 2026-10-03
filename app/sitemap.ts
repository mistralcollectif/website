import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { fr: site.url, en: `${site.url}/en` };
  return [
    { url: site.url, lastModified: new Date(), changeFrequency: "weekly", priority: 1, alternates: { languages } },
    { url: `${site.url}/en`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8, alternates: { languages } },
  ];
}
