import { Crumbs, JsonLd } from "./ui";
import { SITE, breadcrumbLd, graph, webPageLd } from "@/lib/site";

export type LegalSection = { h: string; p?: string[]; list?: string[] };

export function LegalPage({
  path,
  name,
  title,
  desc,
  intro,
  sections,
}: {
  path: string;
  name: string;
  title: string;
  desc: string;
  intro: string;
  sections: LegalSection[];
}) {
  const crumbs = [
    { name: "Home", href: "/" },
    { name, href: path },
  ];
  return (
    <>
      <JsonLd data={graph([webPageLd({ path, title, description: desc }), breadcrumbLd(crumbs)])} />
      <section className="hero page-hero" aria-labelledby="h1">
        <div className="container prose">
          <Crumbs items={crumbs} />
          <h1 id="h1">{name}</h1>
          <p className="updated">
            Last updated <time dateTime={SITE.updated}>{SITE.updatedLabel}</time>
          </p>
          <p className="answer">{intro}</p>
          {sections.map((s) => (
            <div key={s.h} className="prose-block">
              <h2>{s.h}</h2>
              {s.p?.map((t) => <p key={t}>{t}</p>)}
              {s.list && (
                <ul>
                  {s.list.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <div className="prose-block">
            <h2>Contact</h2>
            <p>
              Questions about this page? Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
