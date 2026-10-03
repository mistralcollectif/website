import type { Copy } from "@/content/types";
import SiteTools from "@/components/SiteTools";

type Props = {
  nav: Copy["nav"];
  footer: Copy["footer"];
  links: { label: string; href: string }[];
  legalHref: string;
  instagramUrl: string;
  altLangHref: string;
};

export default function SiteFooter({ nav, footer, links, legalHref, instagramUrl, altLangHref }: Props) {
  return (
    <footer>
      <div className="footer-row">
        <div className="footer-links" aria-label={footer.navLabel}>
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href={legalHref} className="footer-legal">
            {footer.legalLabel}
          </a>
        </div>
        <SiteTools nav={nav} instagramUrl={instagramUrl} altLangHref={altLangHref} />
      </div>
    </footer>
  );
}
