import type { Metadata } from "next";
import { getCopy } from "@/content";
import type { Lang } from "@/content/types";
import { site } from "@/content/site";

export function buildMetadata(lang: Lang): Metadata {
  const t = getCopy(lang);
  const url = lang === "en" ? `${site.url}/en` : site.url;

  return {
    metadataBase: new URL(site.url),
    title: t.meta.title,
    description: t.meta.description,
    keywords: t.meta.keywords,
    authors: [{ name: site.name }],
    openGraph: {
      type: "website",
      locale: t.ogLocale,
      alternateLocale: lang === "en" ? "fr_FR" : "en_US",
      url,
      siteName: site.name,
      title: t.meta.title,
      description: t.meta.description,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: t.meta.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
      images: ["/og-image.jpg"],
    },
    alternates: {
      canonical: url,
      languages: {
        fr: site.url,
        en: `${site.url}/en`,
        "x-default": site.url,
      },
    },
  };
}
