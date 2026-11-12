import Link from "next/link";
import { Crumbs } from "./ui";
import type { Crumb } from "@/lib/site";

export function PageHero({
  crumbs,
  title,
  answer,
  chips,
  visual,
  primary = { label: "Get 3 free samples →", href: "/#free" },
  secondary,
  note,
}: {
  crumbs: Crumb[];
  title: React.ReactNode;
  answer: React.ReactNode;
  chips?: [string, string][];
  visual: React.ReactNode;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  note?: React.ReactNode;
}) {
  return (
    <section className="hero page-hero" aria-labelledby="h1">
      <div className="container hero-grid">
        <div className="hero-copy">
          <Crumbs items={crumbs} />
          <h1 id="h1">{title}</h1>
          <p className="answer">{answer}</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href={primary.href}>
              {primary.label}
            </Link>
            {secondary && (
              <Link className="btn btn-ghost" href={secondary.href}>
                {secondary.label}
              </Link>
            )}
          </div>
          {chips && (
            <ul className="facts-chips" aria-label="Key facts">
              {chips.map(([a, b]) => (
                <li key={a}>
                  <b>{a}</b>
                  {b ? ` ${b}` : ""}
                </li>
              ))}
            </ul>
          )}
          {note && <p className="updated">{note}</p>}
        </div>
        <figure className="hero-fig visual" style={{ margin: 0 }}>
          {visual}
        </figure>
      </div>
    </section>
  );
}
