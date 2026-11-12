export const SITE = {
  name: "Face Cutout Studio",
  url: "https://facecutoutstudio.com",
  email: "facecutoutstudio@gmail.com",
  // WhatsApp number in international format, digits only (e.g. "8801XXXXXXXXX"). Leave empty to hide the WhatsApp button.
  whatsapp: "8801917112171" as string,
  founder: "Al Rubel Rana",
  updated: "2026-11-12",
  updatedLabel: "November 12, 2026",
  ogImage: "/og-face-cutout-studio.jpg",
  areaServed: ["US", "CA", "GB", "AU"],
} as const;

export const NAV = [
  { href: "/services/", label: "Services" },
  { href: "/file-specs/", label: "File specs" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/faq/", label: "FAQ" },
] as const;

export function abs(path: string) {
  return new URL(path, SITE.url).toString();
}

export type Crumb = { name: string; href: string };

export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.href),
    })),
  };
}

export function faqLd(faq: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export type Offer = { name: string; price: string; unit: string };

export function serviceLd(opts: {
  path: string;
  name: string;
  serviceType: string;
  description: string;
  offers: Offer[];
}) {
  const url = abs(opts.path);
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url,
    provider: { "@id": `${SITE.url}/#org` },
    areaServed: SITE.areaServed,
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Etsy sellers, Shopify stores and print shops",
    },
    offers: opts.offers.map((o) => ({
      "@type": "Offer",
      name: o.name,
      price: Number(o.price).toFixed(2),
      priceCurrency: "USD",
      description: `Per ${o.unit}`,
    })),
  };
}

export function webPageLd(opts: {
  path: string;
  title: string;
  description: string;
  about?: string;
}) {
  const url = abs(opts.path);
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: opts.title,
    description: opts.description,
    isPartOf: { "@id": `${SITE.url}/#website` },
    breadcrumb: { "@id": `${url}#breadcrumb` },
    author: { "@id": `${SITE.url}/#founder` },
    dateModified: SITE.updated,
    inLanguage: "en-US",
    ...(opts.about ? { about: { "@id": opts.about } } : {}),
  };
}

export function graph(nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
