import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { VisualQuestions } from "@/components/Visuals";
import { FreeTrialSection } from "@/components/FreeTrialSection";
import { Toc } from "@/components/Toc";
import { CutLine, FaqList, JsonLd } from "@/components/ui";
import { FAQ_COUNT, FAQ_GROUPS } from "@/lib/faq";
import { SITE, breadcrumbLd, faqLd, graph, webPageLd } from "@/lib/site";

const PATH = "/faq/";
const TITLE = "Face Cutout & Print File Design FAQ";
const DESC =
  "Answers about ordering face cutouts and print files: turnaround, photo quality, file formats, Cricut, pricing, revisions and photo privacy.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESC, url: PATH },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "FAQ", href: PATH },
];

const ld = graph([
  webPageLd({ path: PATH, title: TITLE, description: DESC }),
  breadcrumbLd(crumbs),
  faqLd(FAQ_GROUPS.flatMap((g) => g.items.map((i) => ({ q: i.q, a: i.text })))),
]);

export default function FaqPage() {
  return (
    <>
      <JsonLd data={ld} />
      <PageHero
        crumbs={crumbs}
        title={
          <>
            Face cutout design FAQ: <span className="hl">orders, files and pricing</span>
          </>
        }
        answer="Face Cutout Studio turns customer photos into print-ready face cutouts, sticker and tattoo sheets, print files and listing images for Etsy, Shopify and print shop sellers. Files are 300 DPI PNG, PDF and SVG with a cut line, ready in 12–24 hours, from $2 per file. Your first 3 files are free."
        secondary={{ label: "See pricing", href: "/pricing/" }}
        note={
          <>
            {FAQ_COUNT} answers · reviewed <time dateTime={SITE.updated}>{SITE.updatedLabel}</time>
          </>
        }
        visual={<VisualQuestions />}
      />
      <Toc label="Topics" items={FAQ_GROUPS.map((g) => [g.id, g.title])} />

      {FAQ_GROUPS.map((g, i) => (
        <div key={g.id}>
          {(i === 2 || i === 4) && <CutLine />}
          <section id={g.id} aria-labelledby={`${g.id}-h`} style={i > 0 && i !== 2 && i !== 4 ? { paddingTop: 0 } : undefined}>
            <div className="container faq-grid">
              <div className="faq-side">
                <span className="n">
                  {String(i + 1).padStart(2, "0")} / {String(FAQ_GROUPS.length).padStart(2, "0")}
                </span>
                <h2 id={`${g.id}-h`}>{g.title}</h2>
                <p className="short">{g.intro}</p>
                <p className="more">
                  <Link href={g.link[0]}>{g.link[1]} →</Link>
                </p>
              </div>
              <FaqList items={g.items} />
            </div>
          </section>
        </div>
      ))}

      <FreeTrialSection />
    </>
  );
}
