import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";

const cols = [
  {
    title: "Services",
    links: [
      ["Print-ready files", "/print-ready-files-for-etsy-sellers/"],
      ["Sticker & confetti design", "/custom-face-sticker-design/"],
      ["Face tattoo design", "/custom-face-tattoo-design/"],
      ["All services", "/services/"],
    ],
  },
  {
    title: "For sellers",
    links: [
      ["White label design", "/white-label-design-for-print-shops/"],
      ["Etsy listing images", "/etsy-listing-image-design/"],
      ["Shopify product images", "/shopify-product-image-design/"],
      ["Free trial", "/#free"],
    ],
  },
  {
    title: "On this site",
    links: [
      ["How it works", "/#how"],
      ["File specs", "/file-specs/"],
      ["Pricing", "/pricing/"],
      ["FAQ", "/faq/"],
    ],
  },
] as const;

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot">
          <div>
            <Link className="brand" href="/" aria-label="Face Cutout Studio home">
              <Image src="/brand/logo-horizontal-dark.svg" alt="Face Cutout Studio" width={787} height={210} loading="eager" />
            </Link>
            <p>Print-ready face cutouts and party product files for Etsy, Shopify and print shop sellers.</p>
            <p style={{ marginTop: 12 }}>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <br />
              Dhaka, Bangladesh · Serving US, CA, UK, AU
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h3>{c.title}</h3>
              <ul>
                {c.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="foot-bottom">
          <span>
            © 2026 Face Cutout Studio · Updated <time dateTime={SITE.updated}>{SITE.updatedLabel}</time>
          </span>
          <span className="foot-links">
            <Link href="/about/">About</Link>
            <Link href="/contact/">Contact</Link>
            <Link href="/privacy-policy/">Privacy</Link>
            <Link href="/terms/">Terms</Link>
          </span>
          <span>Etsy, Shopify and Cricut are trademarks of their respective owners.</span>
        </div>
      </div>
    </footer>
  );
}
