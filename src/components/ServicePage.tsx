import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "./PageHero";
import { FreeTrialSection } from "./FreeTrialSection";
import { VISUALS } from "./Visuals";
import { CutLine, DataTable, FaqList, JsonLd, KeyFacts, Plan, SectionHead } from "./ui";
import { SERVICES, type ServiceSlug } from "@/lib/home";
import { getService } from "@/lib/services";
import { SITE, breadcrumbLd, faqLd, graph, serviceLd, webPageLd } from "@/lib/site";

export function serviceMetadata(slug: ServiceSlug): Metadata {
  const s = getService(slug);
  const path = `/${s.slug}/`;
  return {
    title: s.title,
    description: s.desc,
    alternates: { canonical: path },
    openGraph: { title: s.title, description: s.desc, url: path },
  };
}

export function ServicePage({ slug }: { slug: ServiceSlug }) {
  const s = getService(slug);
  const path = `/${s.slug}/`;
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services/" },
    { name: s.nav, href: path },
  ];
  const ld = graph([
    webPageLd({ path, title: s.title, description: s.desc, about: `${SITE.url}${path}#service` }),
    breadcrumbLd(crumbs),
    serviceLd({ path, name: s.nav, serviceType: s.serviceType, description: s.desc, offers: s.offers }),
    faqLd(s.faq),
  ]);
  const Visual = VISUALS[s.visual];

  return (
    <>
      <JsonLd data={ld} />
      <PageHero
        crumbs={crumbs}
        title={
          <>
            {s.h1[0]}
            <span className="hl">{s.h1[1]}</span>
          </>
        }
        answer={s.answer}
        secondary={{ label: "See pricing", href: "#pricing" }}
        chips={s.chips}
        visual={<Visual />}
      />

      <section id="what" aria-labelledby="what-h">
        <div className="container def-grid">
          <div className="def">
            <h2 id="what-h">{s.defQ}</h2>
            <p className="big">{s.defA}</p>
            <p>{s.defIntro}</p>
            <ul>
              {s.defList.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <KeyFacts title={`${s.nav}: key facts`} facts={s.facts} />
        </div>
      </section>

      <CutLine />

      <section id="included" aria-labelledby="incl-h">
        <div className="container">
          <SectionHead
            id="incl-h"
            title={s.inclH2}
            short={
              <>
                <b>{s.inclShort[0]}</b>
                {s.inclShort[1]}
              </>
            }
          />
          <div className="incl-grid">
            {s.incl.map(([h, p]) => (
              <div className="incl" key={h}>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" aria-labelledby="how-h" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead
            id="how-h"
            title="How does it work?"
            short={
              <>
                <b>Three steps</b> from your order to a file you can print or upload.
              </>
            }
          />
          <ol className="steps">
            {s.steps.map(([t, h, p]) => (
              <li key={h}>
                <span className="t">{t}</span>
                <h3>{h}</h3>
                <p>{p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="specs" aria-labelledby="specs-h" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead
            id="specs-h"
            title={s.specsH2}
            short={
              <>
                <b>{s.specsShort[0]}</b>
                {s.specsShort[1]}
              </>
            }
          />
          <DataTable head={s.specsHead} rows={s.specs} caption={s.specsCaption} />
          <p className="more" style={{ marginTop: 18 }}>
            <Link href="/file-specs/">Full file specs →</Link>
          </p>
        </div>
      </section>

      <CutLine />

      <section id="pricing" aria-labelledby="pricing-h">
        <div className="container">
          <SectionHead
            id="pricing-h"
            title={`How much ${s.nav.toLowerCase().endsWith("s") ? "do" : "does"} ${s.nav.toLowerCase()} cost?`}
            short={
              <>
                <b>
                  {s.plans[0].price} per {s.plans[0].unit}
                </b>
                , or part of a monthly plan. Your first 3 files are free.
              </>
            }
          />
          <div className="plans plans-2">
            {s.plans.map((p, i) => (
              <Plan key={p.name} {...p} featured={p.kind === "primary" && i > 0} />
            ))}
          </div>
          <p className="fine">
            Prices in USD. <Link href="/pricing/">See pricing for every service</Link>.
          </p>
        </div>
      </section>

      <section id="faq" aria-labelledby="faq-h" style={{ paddingTop: 0 }}>
        <div className="container faq-grid">
          <div className="faq-side">
            <span className="eyebrow">FAQ</span>
            <h2 id="faq-h">Questions sellers ask about this service</h2>
            <p className="updated">
              Answers reviewed <time dateTime={SITE.updated}>{SITE.updatedLabel}</time>
            </p>
            <p className="more">
              <Link href="/faq/">See all FAQs →</Link>
            </p>
          </div>
          <FaqList items={s.faq} />
        </div>
      </section>

      <section id="related" aria-labelledby="related-h" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead id="related-h" title="Related services" />
          <div className="related">
            {s.related.map((slug) => {
              const r = SERVICES.find((x) => x.slug === slug)!;
              return (
                <Link className="tile" href={`/${r.slug}/`} key={r.slug}>
                  <span className="tag">{r.tag}</span>
                  <h3>{r.nav}</h3>
                  <p>{r.blurb}</p>
                  <span className="go">{r.nav} →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <FreeTrialSection />
    </>
  );
}
