import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { VisualTags } from "@/components/Visuals";
import { FreeTrialSection } from "@/components/FreeTrialSection";
import { CutLine, DataTable, FaqList, JsonLd, Plan, SectionHead } from "@/components/ui";
import { SITE, breadcrumbLd, faqLd, graph, serviceLd, webPageLd } from "@/lib/site";

const PATH = "/pricing/";
const TITLE = "Face Cutout & Print File Design Pricing";
const DESC =
  "Face cutouts from $3, print files from $2, sticker sheets $6 and Etsy listing sets $39. Monthly plans from $249 for 100 files. No contract, 3 free files.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESC, url: PATH },
};

const ROWS: [string, string, string, string, string][] = [
  ["Face cutout design", "/#how", "$3", "per face", "1 file per face"],
  ["Print-ready files", "/print-ready-files-for-etsy-sellers/", "$2", "per file", "1 file"],
  ["Sticker & confetti sheet", "/custom-face-sticker-design/", "$6", "per sheet", "1 file per sheet"],
  ["Face tattoo sheet", "/custom-face-tattoo-design/", "$5", "per sheet", "1 file per sheet"],
  ["Etsy listing photo set", "/etsy-listing-image-design/", "$39", "per listing (7 images)", "7 files"],
  ["Etsy title and tags", "/etsy-listing-image-design/", "$15", "per listing", "Add-on, not counted"],
  ["Shopify product image", "/shopify-product-image-design/", "$9", "per image", "1 file per image"],
  ["White label design", "/white-label-design-for-print-shops/", "From $249", "per month", "Monthly plans only"],
];

const FAQ = [
  { q: "How much does face cutout design cost?", a: "A face cutout costs $3 per face on pay as you go. Shops that send orders most days can use the Starter plan at $249 a month for up to 100 files, or the Growth plan at $499 a month for up to 250 files." },
  { q: "What counts as one file?", a: "One face cutout, one print-ready file, one sticker sheet, one tattoo sheet or one Shopify image each count as one file. An Etsy listing photo set counts as 7 files because it has 7 images." },
  { q: "Do unused files roll over to next month?", a: "No. Each monthly plan resets at the start of the month. If you often have files left over, a smaller plan or pay as you go may cost less." },
  { q: "Is there a contract or setup fee?", a: "There is no contract on monthly plans. You can pause or cancel at any time and restart when your busy season comes back." },
  { q: "Do you offer a free trial?", a: "Yes. Send 3 real customer photos and we return 3 print-ready files free, with no card needed, so you can check the quality before you pay." },
  { q: "How do I pay?", a: "Payment options and invoicing details are shared after your free trial, before your first paid order. Monthly plans are billed at the start of each month." },
];

const INCL: [string, string][] = [
  ["3 free files", "Try us with 3 real customer photos before you pay anything."],
  ["2 free revisions", "Each file includes two rounds of changes if something is not right."],
  ["All file formats", "PNG, PDF and SVG come with every face cutout at no extra cost."],
  ["Cut line included", "Cut paths for Cricut, Silhouette and die-cut machines are never an add-on."],
  ["Name and spelling check", "Every name and date is checked against your order sheet."],
  ["No contract", "Monthly plans can be paused or cancelled at any time."],
];

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: PATH },
];

const ld = graph([
  webPageLd({ path: PATH, title: TITLE, description: DESC, about: `${SITE.url}${PATH}#service` }),
  breadcrumbLd(crumbs),
  serviceLd({
    path: PATH,
    name: "Face Cutout Studio design services",
    serviceType: "Personalized product design services",
    description: DESC,
    offers: [
      { name: "Face cutout", price: "3", unit: "face" },
      { name: "Print-ready file", price: "2", unit: "file" },
      { name: "Sticker sheet", price: "6", unit: "sheet" },
      { name: "Tattoo sheet", price: "5", unit: "sheet" },
      { name: "Etsy listing photo set", price: "39", unit: "listing" },
      { name: "Shopify product image", price: "9", unit: "image" },
      { name: "Starter plan", price: "249", unit: "month" },
      { name: "Growth plan", price: "499", unit: "month" },
    ],
  }),
  faqLd(FAQ),
]);

export default function PricingPage() {
  return (
    <>
      <JsonLd data={ld} />
      <PageHero
        crumbs={crumbs}
        title={
          <>
            Pricing for face cutouts, print files and <span className="hl">listing images</span>
          </>
        }
        answer="Pay per file from $2, or choose a monthly plan: $249 for up to 100 files or $499 for up to 250 files, covering every service. Face cutouts cost $3 per face, sticker sheets $6 and Etsy listing sets $39. Your first 3 files are free, and monthly plans have no contract."
        secondary={{ label: "Compare plans", href: "#plans" }}
        chips={[
          ["From $2", "per file"],
          ["No contract", ""],
          ["3 free", "to start"],
        ]}
        visual={<VisualTags />}
      />

      <section id="plans" aria-labelledby="plans-h">
        <div className="container">
          <SectionHead
            id="plans-h"
            title="Which plan should I choose?"
            short={
              <>
                <b>Pay as you go if you get a few orders a week; a monthly plan once you send files most days.</b> At $3 a face,
                the Starter plan pays for itself at about 83 face cutouts a month.
              </>
            }
          />
          <div className="plans">
            <Plan name="Pay as you go" price="$2–$39" unit="item" items={["Pay per face, file, sheet or listing", "No minimum order", "2 free revisions per file", "12–24h for print files"]} cta="Start free" kind="ghost" />
            <Plan name="Starter plan" price="$249" unit="month" items={["Up to 100 files a month", "All services included", "Ready by 7 AM ET", "Shared order folder"]} cta="Start with 3 free" kind="primary" featured />
            <Plan name="Growth plan" price="$499" unit="month" items={["Up to 250 files a month", "White label + NDA", "Rush orders", "Dedicated designer"]} cta="Talk to us" kind="ghost" />
          </div>
          <p className="fine">Need more than 250 files a month? Ask for a custom plan with your own hours and turnaround.</p>
        </div>
      </section>

      <CutLine />

      <section id="services-prices" aria-labelledby="sp-h">
        <div className="container">
          <SectionHead
            id="sp-h"
            title="How much does each service cost?"
            short={
              <>
                <b>Every service has a pay-as-you-go price</b>, and every file also counts toward a monthly plan.
              </>
            }
          />
          <DataTable
            caption="Prices in USD, updated November 2026."
            head={["Service", "Price", "Unit", "Counts toward a plan as"]}
            rows={ROWS.map(([name, href, price, unit, counts]) => [<Link href={href} key={name}>{name}</Link>, price, unit, counts])}
          />
        </div>
      </section>

      <section id="included" aria-labelledby="incl-h" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead
            id="incl-h"
            title="What's included in every price?"
            short={
              <>
                <b>No hidden extras.</b> These come with every file, on every plan.
              </>
            }
          />
          <div className="incl-grid">
            {INCL.map(([h, p]) => (
              <div className="incl" key={h}>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" aria-labelledby="faq-h" style={{ paddingTop: 0 }}>
        <div className="container faq-grid">
          <div className="faq-side">
            <span className="eyebrow">FAQ</span>
            <h2 id="faq-h">Questions about pricing</h2>
            <p className="updated">
              Answers reviewed <time dateTime={SITE.updated}>{SITE.updatedLabel}</time>
            </p>
            <Link className="btn btn-ghost" href="/#free" style={{ alignSelf: "flex-start" }}>
              Ask your own question
            </Link>
          </div>
          <FaqList items={FAQ} />
        </div>
      </section>

      <FreeTrialSection />
    </>
  );
}
