import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { fr } from "@/content/fr";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${fr.legal.title} | Collectif Mistral`,
  description: fr.legal.title,
  alternates: {
    canonical: `${site.url}/mentions-legales`,
    languages: { fr: `${site.url}/mentions-legales`, en: `${site.url}/en/legal` },
  },
};

export default function Page() {
  return <LegalPage lang="fr" />;
}
