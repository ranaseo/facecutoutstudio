"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  return (
    <header className={`site-header${open ? " open" : ""}`} id="top">
      <div className="container nav">
        <Link className="brand" href="/" aria-label="Face Cutout Studio home" onClick={close}>
          <Image
            src="/brand/logo-horizontal.svg"
            alt="Face Cutout Studio"
            width={787}
            height={210}
            priority
          />
        </Link>
        <nav aria-label="Main" id="main-nav">
          <ul className="nav-links">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={close}
                  aria-current={pathname === n.href ? "page" : undefined}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link className="btn btn-primary" href="/#free" onClick={close}>
          Get 3 free cutouts
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
}
