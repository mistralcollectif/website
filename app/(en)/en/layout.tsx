import RootShell from "@/lib/shell";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("en");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
