/* Brand-style SVG illustrations for inner-page heroes. All inline, no network. */

const PINK = "#D81B63";
const INK = "#18151D";
const SUN = "#FFC933";
const LINE = "#E4E0EA";

function Face({ x, y, r = 40, skin = "#F1C19D", hair = "#3A2A22", smile = true }: { x: number; y: number; r?: number; skin?: string; hair?: string; smile?: boolean }) {
  const s = r / 40;
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <ellipse cx="0" cy="-6" rx="40" ry="44" fill={hair} />
      <ellipse cx="0" cy="2" rx="31" ry="37" fill={skin} />
      <path d="M-32 -6C-31 -34 -14 -44 2 -43C22 -42 34 -27 32 -8C22 -22 6 -27 -9 -22C-18 -19 -26 -13 -32 -6Z" fill={hair} />
      <circle cx="-11" cy="4" r="3" fill="#231A15" />
      <circle cx="11" cy="4" r="3" fill="#231A15" />
      <ellipse cx="-17" cy="16" rx="5" ry="3" fill="#F29A9A" opacity=".6" />
      <ellipse cx="17" cy="16" rx="5" ry="3" fill="#F29A9A" opacity=".6" />
      {smile && <path d="M-9 20Q0 29 9 20" stroke="#8C3B3B" strokeWidth="2.4" fill="none" strokeLinecap="round" />}
    </g>
  );
}

function Cutout({ x, y, r = 40, rot = 0, ...face }: { x: number; y: number; r?: number; rot?: number; skin?: string; hair?: string }) {
  const s = r / 40;
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <ellipse cx="0" cy="-2" rx={46 * s} ry={50 * s} fill="#fff" />
      <Face x={0} y={0} r={r} {...face} />
      <ellipse cx="0" cy="-2" rx={51 * s} ry={55 * s} fill="none" stroke={PINK} strokeWidth="2" strokeDasharray="6 4" />
    </g>
  );
}

export function VisualStack() {
  return (
    <svg viewBox="0 0 520 440" role="img" aria-label="Three face cutout cards stacked, with order number and brand sticker">
      <rect width="520" height="440" fill="#FFF5F9" />
      <g transform="rotate(-8 230 210)">
        <rect x="120" y="70" width="220" height="260" rx="22" fill="#fff" stroke={LINE} />
        <Cutout x={230} y={190} r={52} skin="#C68642" hair="#1B120D" />
      </g>
      <g transform="rotate(5 290 230)">
        <rect x="180" y="90" width="220" height="260" rx="22" fill="#fff" stroke={LINE} />
        <Cutout x={290} y={210} r={52} skin="#F1C19D" />
      </g>
      <rect x="150" y="130" width="220" height="260" rx="22" fill="#fff" stroke={LINE} />
      <Cutout x={260} y={250} r={54} skin="#8D5524" hair="#2B1A12" />
      <rect x="168" y="350" width="64" height="26" rx="8" fill="#FFE4EE" />
      <text x="200" y="368" textAnchor="middle" fontFamily="system-ui" fontWeight="700" fontSize="13" fill="#A8124B">#1043</text>
      <g transform="translate(355 372) rotate(-6)">
        <rect x="-70" y="-16" width="140" height="34" rx="10" fill={SUN} stroke="#fff" strokeWidth="4" />
        <text y="6" textAnchor="middle" fontFamily="system-ui" fontWeight="800" fontSize="14" fill={INK}>Your brand only</text>
      </g>
    </svg>
  );
}

export function VisualSheet() {
  const faces = [
    ["#F1C19D", "#3A2A22"], ["#C68642", "#1B120D"], ["#8D5524", "#2B1A12"],
    ["#E0AC69", "#4A2C1A"], ["#F1C19D", "#A0522D"], ["#C68642", "#1B120D"],
  ];
  return (
    <svg viewBox="0 0 520 440" role="img" aria-label="A sticker sheet with six face stickers and dashed kiss-cut lines">
      <rect width="520" height="440" fill="#FFF5F9" />
      <rect x="90" y="40" width="340" height="360" rx="14" fill="#fff" stroke={LINE} />
      {faces.map(([skin, hair], i) => (
        <Cutout key={i} x={170 + (i % 3) * 90} y={130 + Math.floor(i / 3) * 150} r={32} skin={skin} hair={hair} />
      ))}
      <rect x="110" y="350" width="150" height="24" rx="8" fill="#F6F5F9" />
      <text x="185" y="366" textAnchor="middle" fontFamily="system-ui" fontWeight="600" fontSize="12" fill="#6E6778">8.5 × 11 in · 300 DPI</text>
      <g transform="translate(410 390) rotate(5)">
        <rect x="-62" y="-16" width="124" height="34" rx="10" fill={PINK} stroke="#fff" strokeWidth="4" />
        <text y="6" textAnchor="middle" fontFamily="system-ui" fontWeight="800" fontSize="14" fill="#fff">Cut path inside</text>
      </g>
    </svg>
  );
}

export function VisualCup() {
  return (
    <svg viewBox="0 0 520 440" role="img" aria-label="Print file template for a cup with a face placed on it and a ruler showing size">
      <rect width="520" height="440" fill="#FFF5F9" />
      <rect x="70" y="60" width="380" height="250" rx="18" fill="#fff" stroke={LINE} />
      <path d="M100 90 H420 L400 280 H120 Z" fill="#FFE4EE" stroke={PINK} strokeDasharray="6 4" strokeWidth="2" />
      <Cutout x={260} y={185} r={48} />
      <text x="260" y="262" textAnchor="middle" fontFamily="system-ui" fontWeight="800" fontSize="16" fill={INK}>MIA&apos;S 30TH</text>
      <g stroke={INK} strokeWidth="2">
        <line x1="100" y1="335" x2="420" y2="335" />
        <line x1="100" y1="325" x2="100" y2="345" />
        <line x1="420" y1="325" x2="420" y2="345" />
      </g>
      <text x="260" y="372" textAnchor="middle" fontFamily="system-ui" fontWeight="600" fontSize="13" fill="#6E6778">Sized to your wrap template · 0.125 in bleed</text>
      <g transform="translate(430 70) rotate(8)">
        <rect x="-50" y="-16" width="100" height="34" rx="10" fill={SUN} stroke="#fff" strokeWidth="4" />
        <text y="6" textAnchor="middle" fontFamily="system-ui" fontWeight="800" fontSize="14" fill={INK}>300 DPI</text>
      </g>
    </svg>
  );
}

export function VisualTags() {
  const tags: [string, string, number][] = [
    ["$3", "per face", -6],
    ["$6", "per sheet", 4],
    ["$39", "per listing", -3],
  ];
  return (
    <svg viewBox="0 0 520 440" role="img" aria-label="Three price tags hanging from a dashed cut line">
      <rect width="520" height="440" fill="#FFF5F9" />
      <line x1="40" y1="70" x2="480" y2="70" stroke={PINK} strokeWidth="2" strokeDasharray="7 6" />
      {tags.map(([p, u, rot], i) => (
        <g key={p} transform={`translate(${120 + i * 140} 70) rotate(${rot})`}>
          <line x1="0" y1="0" x2="0" y2="50" stroke={INK} strokeWidth="2" />
          <path d="M-55 50 H55 V210 H-55 Z" fill="#fff" stroke={LINE} />
          <circle cx="0" cy="68" r="6" fill="#F6F5F9" stroke={LINE} />
          <text y="135" textAnchor="middle" fontFamily="system-ui" fontWeight="800" fontSize="34" fill={INK}>{p}</text>
          <text y="162" textAnchor="middle" fontFamily="system-ui" fontWeight="600" fontSize="13" fill="#6E6778">{u}</text>
          <rect x="-35" y="178" width="70" height="18" rx="9" fill={i === 1 ? PINK : "#FFE4EE"} />
        </g>
      ))}
      <Cutout x={260} y={340} r={42} />
      <g transform="translate(400 380) rotate(-5)">
        <rect x="-56" y="-16" width="112" height="34" rx="10" fill={SUN} stroke="#fff" strokeWidth="4" />
        <text y="6" textAnchor="middle" fontFamily="system-ui" fontWeight="800" fontSize="14" fill={INK}>3 free to start</text>
      </g>
    </svg>
  );
}

export function VisualQuestions() {
  return (
    <svg viewBox="0 0 520 440" role="img" aria-label="Speech bubbles with questions around a face cutout">
      <rect width="520" height="440" fill="#FFF5F9" />
      <Cutout x={260} y={230} r={70} />
      {[
        [80, 70, "Cricut?", 0],
        [360, 60, "How fast?", 1],
        [60, 330, "What size?", 1],
        [380, 340, "NDA?", 0],
      ].map(([x, y, t, v], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <rect x="0" y="0" width="120" height="44" rx="14" fill={v ? PINK : "#fff"} stroke={v ? PINK : LINE} />
          <path d={v ? "M20 44 L14 58 L34 44Z" : "M100 44 L106 58 L86 44Z"} fill={v ? PINK : "#fff"} stroke={v ? PINK : LINE} />
          <text x="60" y="28" textAnchor="middle" fontFamily="system-ui" fontWeight="700" fontSize="15" fill={v ? "#fff" : INK}>{t}</text>
        </g>
      ))}
    </svg>
  );
}

export function VisualHub() {
  return (
    <svg viewBox="0 0 520 440" role="img" aria-label="Seven product tiles around one customer photo">
      <rect width="520" height="440" fill="#FFF5F9" />
      {[
        [70, 60], [220, 40], [370, 60], [60, 330], [220, 350], [370, 330], [410, 195],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <rect width="80" height="56" rx="12" fill="#fff" stroke={LINE} />
          <Face x={40} y={30} r={14} skin={["#F1C19D", "#C68642", "#8D5524", "#E0AC69"][i % 4]} />
        </g>
      ))}
      <Cutout x={240} y={220} r={64} />
      <g transform="translate(110 215) rotate(-8)">
        <rect x="-50" y="-16" width="100" height="34" rx="10" fill={SUN} stroke="#fff" strokeWidth="4" />
        <text y="6" textAnchor="middle" fontFamily="system-ui" fontWeight="800" fontSize="14" fill={INK}>1 photo in</text>
      </g>
    </svg>
  );
}

export const VISUALS = {
  stack: VisualStack,
  sheet: VisualSheet,
  cup: VisualCup,
  tags: VisualTags,
  questions: VisualQuestions,
  hub: VisualHub,
} as const;
