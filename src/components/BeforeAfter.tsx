"use client";

import { useState } from "react";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  return (
    <div className="ba" style={{ ["--pos" as string]: `${pos}%` }}>
      <svg viewBox="0 0 400 440" role="img" aria-label="Before: customer phone photo with a busy party background">
        <defs>
          <linearGradient id="bgb" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FFC7DA" />
            <stop offset="1" stopColor="#FFE39A" />
          </linearGradient>
        </defs>
        <rect width="400" height="440" fill="url(#bgb)" />
        <circle cx="62" cy="86" r="46" fill="#fff" opacity=".45" />
        <circle cx="340" cy="120" r="34" fill="#fff" opacity=".5" />
        <circle cx="320" cy="300" r="56" fill="#F7A1C0" opacity=".45" />
        <circle cx="70" cy="300" r="30" fill="#fff" opacity=".4" />
        <rect x="300" y="40" width="10" height="22" rx="2" fill="#D81B63" transform="rotate(25 305 51)" />
        <rect x="40" y="200" width="10" height="22" rx="2" fill="#18151D" opacity=".6" transform="rotate(-30 45 211)" />
        <rect x="350" y="220" width="10" height="22" rx="2" fill="#fff" transform="rotate(60 355 231)" />
        <path d="M40 440 C55 350 120 318 200 318 C280 318 345 350 360 440Z" fill="#2E6F73" />
        <rect x="178" y="262" width="44" height="66" rx="16" fill="#E2A982" />
        <ellipse cx="200" cy="178" rx="92" ry="100" fill="#3A2A22" />
        <ellipse cx="200" cy="196" rx="72" ry="86" fill="#F1C19D" />
        <path d="M126 178C128 112 168 88 205 90C252 92 278 126 274 172C252 140 214 128 180 140C158 147 140 160 126 178Z" fill="#3A2A22" />
        <circle cx="175" cy="200" r="7" fill="#231A15" />
        <circle cx="225" cy="200" r="7" fill="#231A15" />
        <ellipse cx="160" cy="228" rx="12" ry="7" fill="#F29A9A" opacity=".55" />
        <ellipse cx="240" cy="228" rx="12" ry="7" fill="#F29A9A" opacity=".55" />
        <path d="M178 238Q200 258 222 238" stroke="#8C3B3B" strokeWidth="5" fill="none" strokeLinecap="round" />
      </svg>
      <svg className="after" viewBox="0 0 400 440" role="img" aria-label="After: print-ready face cutout with white border and dashed cut line on a stick">
        <defs>
          <pattern id="chk" width="24" height="24" patternUnits="userSpaceOnUse">
            <rect width="24" height="24" fill="#fff" />
            <rect width="12" height="12" fill="#EEEBF2" />
            <rect x="12" y="12" width="12" height="12" fill="#EEEBF2" />
          </pattern>
          <filter id="sh" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#18151D" floodOpacity=".22" />
          </filter>
        </defs>
        <rect width="400" height="440" fill="url(#chk)" />
        <rect x="190" y="292" width="20" height="148" rx="6" fill="#18151D" />
        <ellipse cx="200" cy="180" rx="106" ry="114" fill="#fff" filter="url(#sh)" />
        <ellipse cx="200" cy="178" rx="92" ry="100" fill="#3A2A22" />
        <ellipse cx="200" cy="196" rx="72" ry="86" fill="#F1C19D" />
        <path d="M126 178C128 112 168 88 205 90C252 92 278 126 274 172C252 140 214 128 180 140C158 147 140 160 126 178Z" fill="#3A2A22" />
        <circle cx="175" cy="200" r="7" fill="#231A15" />
        <circle cx="225" cy="200" r="7" fill="#231A15" />
        <ellipse cx="160" cy="228" rx="12" ry="7" fill="#F29A9A" opacity=".55" />
        <ellipse cx="240" cy="228" rx="12" ry="7" fill="#F29A9A" opacity=".55" />
        <path d="M178 238Q200 258 222 238" stroke="#8C3B3B" strokeWidth="5" fill="none" strokeLinecap="round" />
        <ellipse cx="200" cy="180" rx="116" ry="124" fill="none" stroke="#D81B63" strokeWidth="3" strokeDasharray="11 8" />
      </svg>
      <div className="handle" aria-hidden="true" />
      <span className="ba-label l">Before</span>
      <span className="ba-label r">After</span>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Drag to compare before and after"
      />
    </div>
  );
}
