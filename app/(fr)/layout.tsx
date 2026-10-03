import RootShell from "@/lib/shell";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("fr");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="fr">{children}</RootShell>;
}
