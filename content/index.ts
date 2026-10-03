import type { Copy, Lang } from "./types";
import { fr } from "./fr";
import { en } from "./en";

export type { Copy, Lang };

export function getCopy(lang: Lang): Copy {
  return lang === "en" ? en : fr;
}
