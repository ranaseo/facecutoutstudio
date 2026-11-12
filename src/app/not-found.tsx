import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <div className="container" style={{ maxWidth: 720 }}>
        <span className="eyebrow">404</span>
        <h1 style={{ margin: "12px 0 18px" }}>That page was cut out</h1>
        <p className="lede">
          The link you followed does not exist on facecutoutstudio.com. Try one of these instead:
        </p>
        <ul style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 8 }}>
          <li><Link href="/services/">All services</Link></li>
          <li><Link href="/pricing/">Pricing</Link></li>
          <li><Link href="/file-specs/">File specs</Link></li>
          <li><Link href="/faq/">FAQ</Link></li>
          <li><Link href="/#free">Get 3 free cutouts</Link></li>
        </ul>
      </div>
    </section>
  );
}
