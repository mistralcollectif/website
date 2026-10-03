import Image from "next/image";
import type { Metadata } from "next";
import RootShell from "@/lib/shell";
import { fr } from "@/content/fr";
import { en } from "@/content/en";

export const metadata: Metadata = {
  title: "404 | Collectif Mistral",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <RootShell lang="fr">
      <main id="main" className="notfound">
        <Image src="/logo.png" alt="" width={56} height={56} />
        <h1>{fr.notFound.title}</h1>
        <p>{fr.notFound.text}</p>
        <a className="btn primary" href={fr.routes.home}>
          {fr.notFound.home}
        </a>
        <p lang="en" className="notfound-en">
          {en.notFound.title}. {en.notFound.text}{" "}
          <a href={en.routes.home}>{en.notFound.home}</a>
        </p>
      </main>
    </RootShell>
  );
}
