"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/site";
import { SERVICES } from "@/lib/home";

const GROUPS: { title: string; slugs: string[] }[] = [
  {
    title: "Print and cut files",
    slugs: ["print-ready-files-for-etsy-sellers", "custom-face-sticker-design", "custom-face-tattoo-design"],
  },
  {
    title: "For shops and listings",
    slugs: ["white-label-design-for-print-shops", "etsy-listing-image-design", "shopify-product-image-design"],
  },
];

export function Header() {
  const [open, setOpen] = useState(false); // mobile menu
  const [mega, setMega] = useState(false); // services mega menu
  const hovered = useRef(false); // opened by mouse hover, so a click on the caret must not close it
  const pathname = usePathname();
  const close = () => {
    setOpen(false);
    setMega(false);
  };

  useEffect(() => {
    if (!mega) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMega(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mega]);

  return (
    <header className={`site-header${open ? " open" : ""}`} id="top">
      <div className="container nav">
        <Link className="brand" href="/" aria-label="Face Cutout Studio home" onClick={close}>
          <Image src="/brand/logo-horizontal.svg" alt="Face Cutout Studio" width={787} height={210} priority />
        </Link>
        <nav aria-label="Main" id="main-nav">
          <ul className="nav-links">
            {NAV.map((n) =>
              n.href === "/services/" ? (
                <li
                  key={n.href}
                  className={`has-mega${mega ? " mega-open" : ""}`}
                  onMouseEnter={() => {
                    if (open) return;
                    hovered.current = true;
                    setMega(true);
                  }}
                  onMouseLeave={() => {
                    if (open) return;
                    hovered.current = false;
                    setMega(false);
                  }}
                >
                  <span className="mega-trigger">
                    <Link href={n.href} onClick={close} aria-current={pathname === n.href ? "page" : undefined}>
                      {n.label}
                    </Link>
                    <button
                      type="button"
                      className="mega-caret"
                      aria-expanded={mega}
                      aria-controls="services-menu"
                      aria-label="Show all services"
                      onClick={() => setMega((m) => (hovered.current ? true : !m))}
                    >
                      <svg viewBox="0 0 12 8" width="12" height="8" aria-hidden="true">
                        <path d="M1 1.5 6 6.5l5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </span>
                  <div className="mega" id="services-menu">
                    <div className="mega-inner">
                      {GROUPS.map((g) => (
                        <div className="mega-col" key={g.title}>
                          <p className="mega-title">{g.title}</p>
                          <ul>
                            {g.slugs.map((slug) => {
                              const s = SERVICES.find((x) => x.slug === slug)!;
                              const href = `/${s.slug}/`;
                              return (
                                <li key={slug}>
                                  <Link href={href} onClick={close} aria-current={pathname === href ? "page" : undefined}>
                                    <span className="mega-name">{s.nav}</span>
                                    <span className="mega-desc">{s.blurb}</span>
                                    <span className="mega-from">{s.from}</span>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                      <div className="mega-col mega-promo">
                        <p className="mega-title">Not sure which one?</p>
                        <p className="mega-promo-text">Send 3 real customer photos and get 3 print-ready files free.</p>
                        <Link className="btn btn-primary" href="/#free" onClick={close}>
                          Get 3 free samples →
                        </Link>
                        <Link className="mega-all" href="/services/" onClick={close}>
                          All services →
                        </Link>
                        <Link className="mega-all" href="/pricing/" onClick={close}>
                          Compare prices →
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={n.href}>
                  <Link href={n.href} onClick={close} aria-current={pathname === n.href ? "page" : undefined}>
                    {n.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
        <Link className="btn btn-primary" href="/#free" onClick={close}>
          Get 3 free cutouts
        </Link>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-nav" onClick={() => (open ? close() : setOpen(true))}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
}
