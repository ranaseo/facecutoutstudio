import type { Metadata } from "next";
import Link from "next/link";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Toc } from "@/components/Toc";
import { FreeTrialSection } from "@/components/FreeTrialSection";
import { CutLine, DataTable, FaqList, JsonLd, KeyFacts, Plan, SectionHead } from "@/components/ui";
import { HOME_FAQ, SERVICES } from "@/lib/home";
import { SITE, abs, faqLd, graph } from "@/lib/site";

const TITLE = "Face Cutout Design Service for Etsy & Shopify Sellers";
const DESC =
  "Print-ready face cutouts, sticker sheets, tattoo files and cup wraps from your customers' photos. 300 DPI, cut line included, 12–24h turnaround. First 3 cutouts free.";

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Face Cutout Studio` },
  description: DESC,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: "Customer photo in, print-ready face cutout out. 300 DPI, cut line included, ready by your US morning.",
    url: "/",
  },
};

const ld = graph([
  {
    "@type": "Organization",
    "@id": `${SITE.url}/#org`,
    name: SITE.name,
    url: `${SITE.url}/`,
    logo: { "@type": "ImageObject", url: abs("/brand/logo-horizontal-2000w.png"), width: 2000, height: 534 },
    email: SITE.email,
    description:
      "Face Cutout Studio prepares print-ready face cutouts, sticker and tattoo sheets, print files and listing images for sellers of personalized party products.",
    founder: { "@id": `${SITE.url}/#founder` },
    address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
    areaServed: SITE.areaServed,
    knowsAbout: [
      "Face cutout design",
      "Face on a stick",
      "Background removal",
      "Print-ready files",
      "Die-cut sticker design",
      "Temporary tattoo design",
      "Etsy listing images",
    ],
  },
  {
    "@type": "Person",
    "@id": `${SITE.url}/#founder`,
    name: SITE.founder,
    jobTitle: "Founder & Lead Designer",
    worksFor: { "@id": `${SITE.url}/#org` },
    url: `${SITE.url}/#author`,
    knowsAbout: ["Custom party product design", "Photo editing", "Canva", "SEO", "Social media marketing"],
  },
  {
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: `${SITE.url}/`,
    name: SITE.name,
    inLanguage: "en-US",
    publisher: { "@id": `${SITE.url}/#org` },
  },
  {
    "@type": "WebPage",
    "@id": `${SITE.url}/#webpage`,
    url: `${SITE.url}/`,
    name: TITLE,
    description: DESC,
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#service` },
    author: { "@id": `${SITE.url}/#founder` },
    datePublished: "2026-10-12",
    dateModified: SITE.updated,
    inLanguage: "en-US",
    primaryImageOfPage: abs(SITE.ogImage),
  },
  {
    "@type": "Service",
    "@id": `${SITE.url}/#service`,
    name: "Face cutout design service",
    serviceType: "Face cutout design and print-ready file preparation",
    description:
      "Customer photos turned into print-ready face cutouts with background removed, hair cleaned, white border and cut line added, delivered as 300 DPI PNG, PDF and SVG within 12–24 hours.",
    provider: { "@id": `${SITE.url}/#org` },
    areaServed: SITE.areaServed,
    audience: { "@type": "BusinessAudience", audienceType: "Etsy sellers, Shopify stores and print shops" },
    offers: [
      { "@type": "Offer", name: "Pay as you go", price: "3.00", priceCurrency: "USD", description: "Per face cutout" },
      { "@type": "Offer", name: "Starter plan", price: "249.00", priceCurrency: "USD", description: "Per month, up to 100 files" },
      { "@type": "Offer", name: "Growth plan", price: "499.00", priceCurrency: "USD", description: "Per month, up to 250 files" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Face Cutout Studio services",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.nav, url: abs(`/${s.slug}/`) },
      })),
    },
  },
  faqLd(HOME_FAQ),
]);

const TOC: [string, string][] = [
  ["what", "What it is"],
  ["services", "Services"],
  ["how", "How it works"],
  ["specs", "File specs"],
  ["photos", "Photo guide"],
  ["turnaround", "Turnaround"],
  ["pricing", "Pricing"],
  ["faq", "FAQ"],
];

export default function Home() {
  return (
    <>
      <JsonLd data={ld} />

      {/* HERO: answer first */}
      <section className="hero" aria-labelledby="h1">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1 id="h1">
              Face cutout design service for <span className="hl">Etsy &amp; Shopify sellers</span>
            </h1>
            <p className="answer">
              Face Cutout Studio turns your customers&apos; photos into print-ready face cutouts. We remove the background, clean
              the hair and edges, add a white border and a cut line, and deliver 300 DPI PNG, PDF and SVG files within 12–24
              hours. Single cutouts start at $3, and your first 3 are free.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#free">
                Get 3 free cutouts →
              </a>
              <Link className="btn btn-ghost" href="/file-specs/">
                See file specs
              </Link>
            </div>
            <ul className="facts-chips" aria-label="Key facts">
              <li>
                <b>12–24h</b> turnaround
              </li>
              <li>
                <b>300 DPI</b> + cut line
              </li>
              <li>
                <b>PNG · PDF · SVG</b>
              </li>
              <li>
                <b>White label</b> &amp; NDA
              </li>
            </ul>
          </div>

          <figure className="hero-fig" style={{ margin: 0 }}>
            <div className="ba-wrap">
              <BeforeAfter />
              <span className="sticker">Cut line included</span>
              <span className="sticker two">300 DPI</span>
            </div>
            <figcaption>Before and after: a customer photo prepared as a face on a stick cutout. Drag to compare.</figcaption>
          </figure>
        </div>
      </section>

      <Toc items={TOC} />

      {/* WHAT IS */}
      <section id="what" aria-labelledby="what-h">
        <div className="container def-grid">
          <div className="def">
            <span className="eyebrow">Definition</span>
            <h2 id="what-h">What is a face cutout design service?</h2>
            <p className="big">
              A face cutout design service takes a customer&apos;s photo and returns a print-ready file of just the face or head,
              with the background removed, edges cleaned, a white border added and a cut line drawn for the cutting machine.
            </p>
            <p>Sellers of personalized party products use these files for:</p>
            <ul>
              <li>Face on a stick and big head cutouts</li>
              <li>Face confetti and die-cut sticker sheets</li>
              <li>Temporary face tattoos</li>
              <li>Photo cups, shot glasses and banners</li>
            </ul>
          </div>
          <KeyFacts
            title="Face Cutout Studio: key facts"
            facts={[
              ["Who it's for", "Etsy sellers, Shopify stores and print shops selling personalized party products"],
              ["Turnaround", "12–24 hours; orders sent by 9 PM ET are ready by 7 AM ET"],
              ["Resolution", "300 DPI at final print size"],
              ["File formats", "Transparent PNG, PDF with cut line, SVG cut path"],
              ["Works with", "Cricut, Silhouette, die-cut machines, UV DTF and sublimation printers"],
              ["Price", "From $3 per cutout; monthly plans from $249"],
              ["Free trial", "First 3 cutouts free, no card needed"],
              ["Studio", "Dhaka, Bangladesh; serving the US, Canada, UK and Australia"],
            ]}
          />
        </div>
      </section>

      <CutLine />

      {/* SERVICES */}
      <section id="services" aria-labelledby="svc-h">
        <div className="container">
          <SectionHead
            eyebrow="Services"
            id="svc-h"
            title="What design services does Face Cutout Studio offer?"
            short={
              <>
                <b>Seven services</b> cover every file a personalized party shop needs, from the face cutout itself to the
                listing images that sell it.
              </>
            }
          />
          <div className="bento">
            <a className="tile big" href="#how">
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
            </a>
            {SERVICES.map((s) => (
              <Link className="tile" href={`/${s.slug}/`} key={s.slug}>
                <span className="tag">{s.tag}</span>
                <h3>{s.nav}</h3>
                <p>{s.blurb}</p>
                <span className="go">{s.nav} →</span>
              </Link>
            ))}
            <Link className="tile wide" href="/services/">
              <span className="tag">Not sure which one?</span>
              <h3>Send one real order and we&apos;ll show you</h3>
              <span className="go">Compare all services →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" aria-labelledby="how-h" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead
            eyebrow="How it works"
            id="how-h"
            title="How does ordering a face cutout work?"
            short={
              <>
                <b>Three steps:</b> you share the customer photo, we design and check the file, and it comes back to your folder
                ready to print.
              </>
            }
          />
          <ol className="steps">
            <li>
              <span className="t">You · 2 minutes</span>
              <h3>Send the photo</h3>
              <p>Drop customer photos and order notes into a shared Google Drive or Dropbox folder, or email them.</p>
            </li>
            <li>
              <span className="t">Studio · 12–24 hours</span>
              <h3>We design and check</h3>
              <p>
                We cut out the face, clean the edges, add the border and cut line, and check names and sizes against your order.
              </p>
            </li>
            <li>
              <span className="t">You · ready to print</span>
              <h3>Print and ship</h3>
              <p>Finished files come back to the same folder, named with your order numbers and sized for your printer.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* FILE SPECS */}
      <section id="specs" aria-labelledby="specs-h" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead
            eyebrow="File specs"
            id="specs-h"
            title="What file specs do you deliver? (2026)"
            short={
              <>
                <b>Every file is 300 DPI at final print size</b>, with a cut line wherever the product is cut. Here are the
                standard specs for each product.
              </>
            }
          />
          <DataTable
            caption={
              <>
                Standard specs as of October 2026. Custom sizes on request. <Link href="/file-specs/">Full file specs →</Link>
              </>
            }
            head={["Product", "Common sizes", "Resolution", "Files delivered", "Cut / trim"]}
            rows={[
              ["Face on a stick", '8", 12", 18", 24" head height', "300 DPI", "PNG, PDF, SVG", '0.25" white border + cut path'],
              ["Face confetti & stickers", '1"–3" faces on 8.5 × 11" sheets', "300 DPI", "PDF, PNG, SVG", "Kiss-cut or die-cut path"],
              ["Temporary tattoos", '1.5"–3" faces', "300 DPI", "PDF (mirrored), PNG", "Trim marks"],
              ["Cups & shot glasses", "Sized to your wrap template", "300 DPI", "PNG, PDF", "Not needed"],
              ["Banners", 'Up to 72" wide', "150–300 DPI", "PDF", "Bleed + trim marks"],
              ["Etsy & Shopify images", "Sized to each platform's current guidelines", "Web-optimized", "JPG, WebP", "Not needed"],
            ]}
          />
        </div>
      </section>

      {/* PHOTO GUIDE */}
      <section id="photos" aria-labelledby="photos-h" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead
            eyebrow="Photo guide"
            id="photos-h"
            title="What kind of photo makes the best face cutout?"
            short={
              <>
                <b>A clear, front-facing, well-lit photo</b> where nothing covers the face. Phone photos work. Share this
                checklist with your customers.
              </>
            }
          />
          <div className="checks">
            <div className="check good">
              <h3>
                <small>Works best</small>Photos that print sharp
              </h3>
              <ul>
                <li>Face looks straight at the camera or slightly to the side</li>
                <li>Even daylight or indoor light, no harsh shadows</li>
                <li>Original file sent from the phone, not a screenshot</li>
                <li>Whole head in frame, including hair</li>
              </ul>
            </div>
            <div className="check bad">
              <h3>
                <small>Avoid</small>Photos that cause problems
              </h3>
              <ul>
                <li>Sunglasses, hands or drinks covering the face</li>
                <li>Photos cropped from far away group shots</li>
                <li>Heavy filters or face-changing beauty apps</li>
                <li>Images saved from social media (often compressed)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TURNAROUND */}
      <section className="dark" id="turnaround" aria-labelledby="ta-h">
        <div className="container night">
          <div>
            <div className="head" style={{ marginBottom: 32 }}>
              <span className="eyebrow">Turnaround</span>
              <h2 id="ta-h">How fast is turnaround for US sellers?</h2>
              <p className="short">
                <b>Send orders by 9 PM Eastern and the files are ready by 7 AM Eastern.</b> Our studio in Dhaka works while the
                US sleeps, 10–11 hours ahead of New York.
              </p>
            </div>
            <div className="clock">
              <div>
                <small>You</small>
                <time dateTime="21:00">9 PM ET</time>
                <p>Upload the day&apos;s orders before bed.</p>
              </div>
              <div>
                <small>Studio</small>
                <span className="when">Overnight</span>
                <p>We cut, clean and check every file during our working day.</p>
              </div>
              <div>
                <small>You</small>
                <time dateTime="07:00">7 AM ET</time>
                <p>Files are in your folder, ready to print.</p>
              </div>
            </div>
          </div>
          <DataTable
            caption="Standard orders. Rush delivery available on the Growth plan."
            head={["Your time zone", "Send by", "Ready by"]}
            rows={[
              ["Eastern (ET)", "9 PM", "7 AM"],
              ["Central (CT)", "8 PM", "6 AM"],
              ["Mountain (MT)", "7 PM", "5 AM"],
              ["Pacific (PT)", "6 PM", "4 AM"],
            ]}
          />
        </div>
      </section>

      {/* COMPARE */}
      <section id="compare" aria-labelledby="cmp-h">
        <div className="container">
          <SectionHead
            eyebrow="Compare"
            id="cmp-h"
            title="Should you edit photos yourself or outsource them?"
            short={
              <>
                <b>Outsourcing pays off once editing takes more of your day than selling.</b> Here&apos;s how the three common
                options compare.
              </>
            }
          />
          <DataTable
            usCol={3}
            head={[<span className="sr" key="f">Factor</span>, "Doing it yourself", "General freelance gigs", "Face Cutout Studio"]}
            rows={[
              ["Turnaround", "Whenever you find time", "Varies by freelancer", "12–24h, ready by 7 AM ET"],
              ["Cut line", "Drawn by hand each time", "Often extra or not offered", "Included for Cricut, Silhouette or die-cut"],
              ["Party product know-how", "Yours", "General graphic design", "Face cutouts, confetti, tattoos and cups every day"],
              ["White label", "Not needed", "Rarely", "Yes, with NDA"],
              ["Cost", "Your hours", "Per gig", "From $3 per cutout"],
            ]}
          />
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" aria-labelledby="price-h" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead
            eyebrow="Pricing"
            id="price-h"
            title="How much does face cutout design cost?"
            short={
              <>
                <b>$3 per cutout</b>, or a monthly plan from $249 if you send orders every day. Your first 3 cutouts are free.
              </>
            }
          />
          <div className="plans">
            <Plan name="Pay as you go" price="$3" unit="cutout" items={["Single face cutouts", "12–24h turnaround", "PNG, PDF and SVG files", "2 free revisions"]} cta="Start free" kind="ghost" href="#free" />
            <Plan name="Starter plan" price="$249" unit="month" items={["Up to 100 files a month", "All services included", "Ready by 7 AM ET", "Shared order folder"]} cta="Start with 3 free" kind="primary" featured href="#free" />
            <Plan name="Growth plan" price="$499" unit="month" items={["Up to 250 files a month", "White label + NDA", "Rush orders", "Dedicated designer"]} cta="Talk to us" kind="ghost" href="#free" />
          </div>
          <p className="fine">
            Prices in USD, updated October 2026. No contract; pause or cancel monthly plans anytime.{" "}
            <Link href="/pricing/">See every service price →</Link>
          </p>
        </div>
      </section>

      <CutLine />

      {/* AUTHOR */}
      <section id="author" aria-labelledby="author-h">
        <div className="container author">
          <div className="portrait" role="img" aria-label="Founder photo placeholder">
            Founder photo
            <br />
            (4:5, real photo)
          </div>
          <div className="author-copy">
            <span className="eyebrow">Who designs your files</span>
            <h2 id="author-h" className="sr">
              About the founder
            </h2>
            <blockquote>
              “I design custom face and party products for a US party brand every day. Face Cutout Studio brings that same daily
              workflow to your shop.”
            </blockquote>
            <p>
              <strong style={{ color: "var(--ink)" }}>{SITE.founder}</strong>, founder and lead designer. Al prepares face cutouts,
              confetti, tattoo and cup files for a US personalized party brand. He also works in SEO and social media marketing,
              so he knows what makes a product image sell as well as print.
            </p>
            <ul className="creds">
              <li>Daily custom party product design</li>
              <li>Canva &amp; photo editing</li>
              <li>
                <b>5,000+</b> keywords ranked
              </li>
              <li>
                <b>20,000+</b> leads generated
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" aria-labelledby="faq-h" style={{ paddingTop: 0 }}>
        <div className="container faq-grid">
          <div className="faq-side">
            <span className="eyebrow">FAQ</span>
            <h2 id="faq-h">Questions sellers ask before their first order</h2>
            <p className="updated">
              Answers reviewed <time dateTime={SITE.updated}>{SITE.updatedLabel}</time>
            </p>
            <Link className="btn btn-ghost" href="/faq/" style={{ alignSelf: "flex-start" }}>
              See all 27 answers
            </Link>
          </div>
          <FaqList items={HOME_FAQ} />
        </div>
      </section>

      <FreeTrialSection />
    </>
  );
}
