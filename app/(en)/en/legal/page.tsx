import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { en } from "@/content/en";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${en.legal.title} | Collectif Mistral`,
  description: en.legal.title,
  alternates: {
    canonical: `${site.url}/en/legal`,
    languages: { fr: `${site.url}/mentions-legales`, en: `${site.url}/en/legal` },
  },
};

export default function Page() {
  return <LegalPage lang="en" />;
}
