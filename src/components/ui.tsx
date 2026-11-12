import Link from "next/link";
import type { Crumb } from "@/lib/site";

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function CutLine() {
  return (
    <div className="cutline" aria-hidden="true">
      <svg viewBox="-20 -14 40 28">
        <g fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round">
          <circle cx="11" cy="-7" r="5.5" />
          <circle cx="11" cy="7" r="5.5" />
          <path d="M6.5 -4 L-14 5 M6.5 4 L-14 -5" />
        </g>
      </svg>
    </div>
  );
}

export function Crumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="crumbs">
        {items.map((c, i) => (
          <li key={c.href}>
            {i > 0 && (
              <span className="sep" aria-hidden="true">
                ›{" "}
              </span>
            )}
            {i < items.length - 1 ? <Link href={c.href}>{c.name}</Link> : <span>{c.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function SectionHead({
  eyebrow,
  title,
  id,
  short,
  children,
}: {
  eyebrow?: string;
  title: string;
  id: string;
  short?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="head">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 id={id}>{title}</h2>
      {short && <p className="short">{short}</p>}
      {children}
    </div>
  );
}

export type QA = { q: string; a: React.ReactNode; text?: string };

export function FaqList({ items, firstOpen = true }: { items: QA[]; firstOpen?: boolean }) {
  return (
    <div className="faq">
      {items.map((f, i) => (
        <details key={f.q} open={firstOpen && i === 0}>
          <summary>
            <h3>{f.q}</h3>
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function DataTable({
  head,
  rows,
  caption,
  usCol,
}: {
  head: React.ReactNode[];
  rows: React.ReactNode[][];
  caption?: React.ReactNode;
  usCol?: number;
}) {
  return (
    <div className="tablebox">
      <table className="data">
        {caption && <caption>{caption}</caption>}
        <thead>
          <tr>
            {head.map((h, i) => (
              <th key={i} scope="col" className={usCol === i ? "us" : undefined}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) =>
                j === 0 ? (
                  <th key={j} scope="row">
                    {c}
                  </th>
                ) : (
                  <td key={j} className={usCol === j ? "us" : undefined}>
                    {c}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function KeyFacts({ title, facts }: { title: string; facts: [string, React.ReactNode][] }) {
  return (
    <dl className="kf">
      <div className="kf-title">{title}</div>
      {facts.map(([k, v]) => (
        <div className="row" key={k}>
          <dt>{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Plan({
  name,
  price,
  unit,
  items,
  cta,
  kind,
  featured,
  href = "/#free",
}: {
  name: string;
  price: string;
  unit: string;
  items: string[];
  cta: string;
  kind: "primary" | "ghost";
  featured?: boolean;
  href?: string;
}) {
  return (
    <div className={`plan${featured ? " featured" : ""}`}>
      {featured && <span className="sticker">Most popular</span>}
      <h3>{name}</h3>
      <p className="price">
        {price}
        <small> / {unit}</small>
      </p>
      <ul>
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <Link className={`btn btn-${kind}`} href={href}>
        {cta}
      </Link>
    </div>
  );
}
