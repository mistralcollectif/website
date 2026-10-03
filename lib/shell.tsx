import { Inter, Unbounded } from "next/font/google";
import "../app/globals.css";
import type { Lang } from "@/content/types";

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

// Applique le thème mémorisé avant le premier rendu (évite le flash).
// Toute valeur inconnue (ancien thème supprimé compris) retombe sur "lumiere".
const themeInit = `try{var t=localStorage.getItem("cm-theme");if(t==="mistral"||t==="lumiere"){document.documentElement.setAttribute("data-theme",t)}}catch(e){}`;

export default function RootShell({
  lang,
  children,
}: Readonly<{
  lang: Lang;
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={lang}
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
