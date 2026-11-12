import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { VisualStack } from "@/components/Visuals";
import { FreeTrialSection } from "@/components/FreeTrialSection";
import { CutLine, JsonLd, KeyFacts, SectionHead } from "@/components/ui";
import { SITE, breadcrumbLd, graph, webPageLd } from "@/lib/site";

const PATH = "/about/";
const TITLE = "About Us";
const DESC =
  "Face Cutout Studio is a design studio in Dhaka, Bangladesh, founded by Al Rubel Rana. We prepare print-ready face cutouts and party files for sellers.";

export const metadata: Metadata = { title: TITLE, description: DESC, alternates: { canonical: PATH }, openGraph: { title: TITLE, description: DESC, url: PATH } };

const crumbs = [
  { name: "Home", href: "/" },
  { name: "About", href: PATH },
];

const ld = graph([
  { ...webPageLd({ path: PATH, title: TITLE, description: DESC, about: `${SITE.url}/#org` }), "@type": "AboutPage" },
  breadcrumbLd(crumbs),
]);

const VALUES: [string, string][] = [
  ["Print-ready means print-ready", "Files are set to your size, resolution and cut line, so you can print without opening an editor."],
  ["Your customers stay yours", "We never contact your customers, and nothing on a file points to us."],
  ["Ready when you wake up", "We work during US night hours, so evening orders are waiting in the morning."],
  ["Checked against the order", "Every name, date and size is checked against your order sheet before delivery."],
  ["Honest about photos", "If a photo is too poor to print at the size ordered, we tell you before we design it."],
  ["Photos kept private", "Customer photos are used only for your order and deleted after delivery."],
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={ld} />
      <PageHero
        crumbs={crumbs}
        title={
          <>
            About <span className="hl">Face Cutout Studio</span>
          </>
        }
        answer="Face Cutout Studio is a design studio in Dhaka, Bangladesh, founded by Al Rubel Rana. We turn customer photos into print-ready face cutouts, sticker and tattoo sheets, print files and listing images for Etsy sellers, Shopify stores and print shops in the US, Canada, the UK and Australia."
        secondary={{ label: "See services", href: "/services/" }}
        chips={[
          ["Dhaka", "Bangladesh"],
          ["US night", "hours"],
          ["7", "services"],
        ]}
        visual={<VisualStack />}
      />

      <section id="story" aria-labelledby="story-h">
        <div className="container def-grid">
          <div className="def">
            <h2 id="story-h">Why does Face Cutout Studio exist?</h2>
            <p className="big">
              Personalized party products sell well, but every order needs its own design. A shop that gets twenty photo orders in a
              day has twenty files to cut out, clean and set up before anything can be printed.
            </p>
            <p>
              Our founder prepares exactly these files every day for a US personalized party brand: face cutouts, confetti, tattoos
              and cup designs. Face Cutout Studio offers that same daily workflow to other sellers, so they can take more orders
              without hiring a designer.
            </p>
            <p className="more">
              <Link href="/#how">See how an order works →</Link>
            </p>
          </div>
          <KeyFacts
            title="Face Cutout Studio: key facts"
            facts={[
              ["Founder", SITE.founder],
              ["Location", "Dhaka, Bangladesh"],
              ["Clients", "Etsy sellers, Shopify stores, print shops"],
              ["Countries served", "United States, Canada, United Kingdom, Australia"],
              ["Working hours", "US night hours; files ready by 7 AM Eastern"],
              ["Language", "English"],
              ["Contact", SITE.email],
            ]}
          />
        </div>
      </section>

      <CutLine />

      <section id="founder" aria-labelledby="founder-h">
        <div className="container author">
          <div className="portrait" role="img" aria-label="Founder photo placeholder">
            Founder photo
            <br />
            (4:5, real photo)
          </div>
          <div className="author-copy">
            <span className="eyebrow">Founder</span>
            <h2 id="founder-h">Who is behind Face Cutout Studio?</h2>
            <p>
              <strong style={{ color: "var(--ink)" }}>{SITE.founder}</strong> is the founder and lead designer. He prepares face
              cutouts, confetti, tattoo and cup files for a US personalized party brand, and he also works in SEO and social media
              marketing, so he knows what makes a product image sell as well as print.
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

      <section id="values" aria-labelledby="values-h" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead
            id="values-h"
            title="How do we work?"
            short={
              <>
                <b>Six rules</b> we follow on every order.
              </>
            }
          />
          <div className="incl-grid">
            {VALUES.map(([h, p]) => (
              <div className="incl" key={h}>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FreeTrialSection />
    </>
  );
}
