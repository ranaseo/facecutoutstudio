import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { VisualQuestions } from "@/components/Visuals";
import { FaqList, JsonLd, KeyFacts, SectionHead } from "@/components/ui";
import { SITE, breadcrumbLd, faqLd, graph, webPageLd } from "@/lib/site";

const PATH = "/contact/";
const TITLE = "Contact Us";
const DESC = "Contact Face Cutout Studio by email or WhatsApp to send photos, ask about pricing or start your 3 free files. We reply within 24 hours.";

export const metadata: Metadata = { title: TITLE, description: DESC, alternates: { canonical: PATH }, openGraph: { title: TITLE, description: DESC, url: PATH } };

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Contact", href: PATH },
];

const wa = `https://wa.me/${SITE.whatsapp}`;
const waLabel = `+${SITE.whatsapp.slice(0, 3)} ${SITE.whatsapp.slice(3, 7)} ${SITE.whatsapp.slice(7)}`;

const FAQ = [
  { q: "How fast do you reply?", a: "We reply to emails and WhatsApp messages within 24 hours, and usually much sooner during US night hours, when our studio is working." },
  { q: "What should I include in my first message?", a: "Tell us what you sell, your shop link, and the product and print size you need. To start the free trial, attach 3 real customer photos." },
  { q: "Can we talk on a call?", a: "Yes. Message us with a few times that suit you and your time zone, and we will arrange a call." },
  { q: "Do you take orders by WhatsApp?", a: "Yes. You can send photos and order details by WhatsApp or email. For daily orders we set up a shared folder instead." },
];

const ld = graph([
  { ...webPageLd({ path: PATH, title: TITLE, description: DESC, about: `${SITE.url}/#org` }), "@type": "ContactPage" },
  breadcrumbLd(crumbs),
  faqLd(FAQ),
]);

export default function ContactPage() {
  return (
    <>
      <JsonLd data={ld} />
      <PageHero
        crumbs={crumbs}
        title={
          <>
            Contact <span className="hl">Face Cutout Studio</span>
          </>
        }
        answer={`Email ${SITE.email} or message us on WhatsApp at ${waLabel}. We reply within 24 hours. To start your free trial, send 3 real customer photos with the product and print size.`}
        primary={{ label: "Email us →", href: `mailto:${SITE.email}` }}
        secondary={{ label: "WhatsApp us", href: wa }}
        chips={[
          ["24h", "reply time"],
          ["Email", "or WhatsApp"],
          ["English", ""],
        ]}
        visual={<VisualQuestions />}
      />

      <section id="details" aria-labelledby="details-h">
        <div className="container def-grid">
          <div className="def">
            <h2 id="details-h">How do I reach Face Cutout Studio?</h2>
            <p className="big">Email is best for orders with several photos. WhatsApp is best for quick questions.</p>
            <ul>
              <li>
                Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                WhatsApp: <a href={wa}>{waLabel}</a>
              </li>
            </ul>
            <p>
              Looking for prices or file sizes first? See <Link href="/pricing/">pricing</Link>,{" "}
              <Link href="/file-specs/">file specs</Link> or the <Link href="/faq/">FAQ</Link>.
            </p>
          </div>
          <KeyFacts
            title="Contact details"
            facts={[
              ["Email", SITE.email],
              ["WhatsApp", waLabel],
              ["Reply time", "Within 24 hours"],
              ["Working hours", "US night hours; files ready by 7 AM Eastern"],
              ["Location", "Dhaka, Bangladesh"],
              ["Language", "English"],
            ]}
          />
        </div>
      </section>

      <section id="faq" aria-labelledby="faq-h" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead id="faq-h" title="Questions about contacting us" />
          <FaqList items={FAQ} />
        </div>
      </section>
    </>
  );
}
