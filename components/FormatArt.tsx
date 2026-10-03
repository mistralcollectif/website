import type { ExpoFormat } from "@/content/types";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinejoin: "round" as const,
  strokeLinecap: "round" as const,
};

/** Dessins au trait des trois formats d'exposition. Couleurs via le thème. */
export default function FormatArt({ art }: { art: ExpoFormat["art"] }) {
  return (
    <div className="format-art" aria-hidden="true">
      <svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
        {art === "grand-angle" && (
          <g {...stroke}>
            {/* mur de cadres accrochés ensemble */}
            <path d="M16 126 H224" opacity="0.35" />
            <rect x="80" y="30" width="84" height="62" />
            <rect x="88" y="38" width="68" height="46" opacity="0.5" />
            <path d="M88 76 L106 60 L118 70 L132 54 L156 78" />
            <circle cx="141" cy="49" r="3.5" stroke="var(--accent)" />
            <rect x="32" y="46" width="32" height="44" />
            <rect x="38" y="52" width="20" height="32" opacity="0.5" />
            <rect x="180" y="52" width="32" height="32" />
            <rect x="186" y="58" width="20" height="20" opacity="0.5" />
            <path d="M92 108 H152" opacity="0.5" />
            <path d="M36 102 H60 M184 98 H208" opacity="0.35" />
          </g>
        )}
        {art === "carte-blanche" && (
          <g {...stroke}>
            {/* un seul grand cadre : un mur pour une série */}
            <path d="M16 126 H224" opacity="0.35" />
            <rect x="86" y="14" width="68" height="94" />
            <rect x="95" y="23" width="50" height="76" opacity="0.5" />
            <circle cx="120" cy="48" r="9" stroke="var(--accent)" />
            <path d="M95 99 L120 68 L145 99" />
            <rect x="102" y="116" width="36" height="5" opacity="0.5" />
          </g>
        )}
        {art === "appel" && (
          <g {...stroke}>
            {/* appareil photo + tirages épinglés, un emplacement reste libre */}
            <path d="M16 126 H224" opacity="0.35" />
            <rect x="24" y="58" width="100" height="62" rx="8" />
            <rect x="56" y="46" width="34" height="12" rx="2" />
            <rect x="34" y="50" width="12" height="8" rx="1.5" />
            <circle cx="74" cy="89" r="23" />
            <circle cx="74" cy="89" r="15" stroke="var(--accent)" />
            <circle cx="74" cy="89" r="5" fill="currentColor" />
            <rect x="100" y="68" width="14" height="8" rx="2" opacity="0.5" />
            <g transform="rotate(-6 166 41)">
              <rect x="146" y="26" width="40" height="30" />
              <circle cx="166" cy="26" r="2.5" fill="var(--accent)" stroke="none" />
            </g>
            <g transform="rotate(5 192 78)">
              <rect x="170" y="62" width="44" height="32" />
              <circle cx="192" cy="62" r="2.5" fill="var(--accent)" stroke="none" />
            </g>
            <rect
              x="148"
              y="100"
              width="40"
              height="26"
              strokeDasharray="4 4"
              stroke="var(--accent)"
            />
            <path d="M126 92 C 138 92, 138 113, 146 113" strokeDasharray="3 4" opacity="0.6" />
          </g>
        )}
      </svg>
    </div>
  );
}
