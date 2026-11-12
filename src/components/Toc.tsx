"use client";

import { useEffect, useState } from "react";

export function Toc({ items, label = "On this page" }: { items: [string, string][]; label?: string }) {
  const [on, setOn] = useState<string>("");

  useEffect(() => {
    const els = items.map(([id]) => document.getElementById(id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setOn(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav className="toc" aria-label={label}>
      <div className="container">
        <span>{label}</span>
        <ol>
          {items.map(([id, text]) => (
            <li key={id}>
              <a href={`#${id}`} className={on === id ? "on" : undefined}>
                {text}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
