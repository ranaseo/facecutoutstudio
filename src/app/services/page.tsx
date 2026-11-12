import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { VisualHub } from "@/components/Visuals";
import { FreeTrialSection } from "@/components/FreeTrialSection";
import { CutLine, DataTable, FaqList, JsonLd, SectionHead } from "@/components/ui";
import { SERVICES } from "@/lib/home";
import { SITE, abs, breadcrumbLd, faqLd, graph, webPageLd } from "@/lib/site";

const PATH = "/services/";
const TITLE = "Face Cutout & Print Design Services";
const DESC =
  "Face cutouts, print-ready files, sticker and tattoo sheets, white label design and Etsy or Shopify listing images. From $2 per file, 12–24h turnaround.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESC, url: PATH },
};

const WHICH: [string, string, string, string][] = [
  ["Face on a stick, big head cutouts", "Face cutout design", "/#how", "From $3 per face"],
  ["Cups, banners, hats, DTF transfers", "Print-ready files", "/print-ready-files-for-etsy-sellers/", "From $2 per file"],
  ["Face stickers, face confetti", "Sticker & confetti design", "/custom-face-sticker-design/", "From $6 per sheet"],
  ["Temporary face tattoos", "Face tattoo design", "/custom-face-tattoo-design/", "From $5 per sheet"],
  ["Many orders every day", "White label design", "/white-label-design-for-print-shops/", "From $249 per month"],
  ["Products on Etsy", "Etsy listing images", "/etsy-listing-image-design/", "$39 per listing"],
  ["Products on your own Shopify store", "Shopify product images", "/shopify-product-image-design/", "$9 per image"],
];

const FAQ = [
  { q: "Which service do I need?", a: "Choose by what you sell. Face on a stick and big heads need face cutout design. Cups, banners and DTF transfers need print-ready files. Stickers and tattoos have their own sheet services. If you send orders every day, a white label plan covers all of them." },
  { q: "Can I use more than one service?", a: "Yes. Most shops use two or three. Monthly plans include every service, and each file counts toward the same monthly total." },
  { q: "How fast are files delivered?", a: "Print files, cutouts and sheets are delivered in 12 to 24 hours. Orders sent by 9 PM Eastern are usually ready by 7 AM Eastern. Listing image sets take 2 to 3 business days." },
  { q: "Can I try a service before paying?", a: "Yes. Send 3 real customer photos and we return 3 print-ready files free, with no card needed." },
  { q: "Do you design products that are not on this list?", a: "Often, yes. If the product starts from a customer photo or name, such as koozies, cake toppers or photo banners, send one real order and we will tell you what we can deliver." },
];

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Services", href: PATH },
];

const ld = graph([
  webPageLd({ path: PATH, title: TITLE, description: DESC }),
  breadcrumbLd(crumbs),
  {
    "@type": "ItemList",
    name: "Face Cutout Studio services",
    itemListElement: SERVICES.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.nav, url: abs(`/${s.slug}/`) })),
  },
  faqLd(FAQ),
]);

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={ld} />
      <PageHero
        crumbs={crumbs}
        title={
          <>
            Design services for <span className="hl">personalized party product sellers</span>
          </>
        }
        answer="Face Cutout Studio offers seven design services for Etsy sellers, Shopify stores and print shops: face cutouts, print-ready files, sticker and confetti sheets, temporary tattoo sheets, white label design, Etsy listing images and Shopify product images. Print files are ready in 12–24 hours, from $2 per file."
        secondary={{ label: "See pricing", href: "/pricing/" }}
        chips={[
          ["7", "services"],
          ["12–24h", "print files"],
          ["3 free", "to start"],
        ]}
        visual={<VisualHub />}
      />

      <section id="all" aria-labelledby="all-h">
        <div className="container">
          <SectionHead
            id="all-h"
            title="What services does Face Cutout Studio offer?"
            short={
              <>
                <b>Seven services</b>, from the face cutout itself to the listing images that sell it. One photo in, every file
                you need out.
              </>
            }
          />
          <div className="bento">
            <Link className="tile big" href="/#how">
              <span className="tag">Most ordered</span>
              <h3>Face cutout design</h3>
              <p>
                Face on a stick, big head cutouts and group photo props. Hair cleaned strand by strand, white border added, cut
                line drawn for your machine.
              </p>
              <div className="mini">
                <div>
                  <strong>8&quot;–24&quot;</strong>head sizes
                </div>
                <div>
                  <strong>12–24h</strong>turnaround
                </div>
                <div>
                  <strong>3 free</strong>to test us
                </div>
              </div>
              <span className="from">From $3 per cutout</span>
              <span className="go">How it works →</span>
            </Link>
            {SERVICES.map((s) => (
              <Link className="tile" href={`/${s.slug}/`} key={s.slug}>
                <span className="tag">{s.tag}</span>
                <h3>{s.nav}</h3>
                <p>{s.blurb}</p>
                <span className="from">{s.from}</span>
                <span className="go">{s.nav} →</span>
              </Link>
            ))}
            <Link className="tile wide" href="/pricing/">
              <span className="tag">Send files most days?</span>
              <h3>One monthly plan covers every service</h3>
              <span className="go">See plans →</span>
            </Link>
          </div>
        </div>
      </section>

      <CutLine />

      <section id="which" aria-labelledby="which-h">
        <div className="container">
          <SectionHead
            id="which-h"
            title="Which service do I need?"
            short={
              <>
                <b>Choose by what you sell.</b> Not sure? Send one real order and we will show you.
              </>
            }
          />
          <DataTable
            caption="Prices in USD, updated November 2026."
            head={["If you sell", "You need", "Price"]}
            rows={WHICH.map(([sell, name, href, price]) => [sell, <Link href={href} key={name}>{name}</Link>, price])}
          />
        </div>
      </section>

      <section id="faq" aria-labelledby="faq-h" style={{ paddingTop: 0 }}>
        <div className="container faq-grid">
          <div className="faq-side">
            <span className="eyebrow">FAQ</span>
            <h2 id="faq-h">Questions about our services</h2>
            <p className="updated">
              Answers reviewed <time dateTime={SITE.updated}>{SITE.updatedLabel}</time>
            </p>
            <p className="more">
              <Link href="/faq/">See all FAQs →</Link>
            </p>
          </div>
          <FaqList items={FAQ} />
        </div>
      </section>

      <FreeTrialSection />
    </>
  );
}
