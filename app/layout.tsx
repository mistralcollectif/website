import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mistral-collectif.vercel.app"),
  title: "Collectif Mistral — Photographes à Marseille",
  description:
    "Un vent nouveau souffle sur la photographie marseillaise. Collectif de photographes réunissant des artistes, organisant expositions et workshops autour de la lumière du Sud.",
  keywords: [
    "photographie",
    "Marseille",
    "collectif",
    "photographes",
    "exposition",
    "workshop",
    "argentique",
    "numérique",
  ],
  authors: [{ name: "Collectif Mistral" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://mistral-collectif.vercel.app",
    siteName: "Collectif Mistral",
    title: "Collectif Mistral — Photographes à Marseille",
    description:
      "Un vent nouveau souffle sur la photographie marseillaise. Collectif de photographes réunissant des artistes, organisant expositions et workshops autour de la lumière du Sud.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Collectif Mistral — Photographes à Marseille",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Collectif Mistral — Photographes à Marseille",
    description:
      "Un vent nouveau souffle sur la photographie marseillaise. Collectif de photographes à Marseille.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://mistral-collectif.vercel.app",
  },
  // Icons generated via app/icon.tsx and app/apple-icon.tsx
};

// Applique le thème mémorisé avant le premier rendu (évite le flash)
const themeInit = `try{var t=localStorage.getItem("cm-theme");if(t==="mistral"||t==="lumiere"||t==="mediterranee"){document.documentElement.setAttribute("data-theme",t)}}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      data-theme="lumiere"
      suppressHydrationWarning
      className={`${unbounded.variable} ${inter.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
