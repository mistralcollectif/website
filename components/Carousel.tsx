"use client";

import { useState } from "react";
import Image from "next/image";
import type { Photo } from "@/content/site";

/** Carousel sobre de la galerie — ratio d'origine respecté, légende systématique. */
export default function Carousel({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState(0);
  const count = photos.length;
  const current = photos[index];

  const go = (delta: number) => setIndex((i) => (i + delta + count) % count);

  if (count === 0) return null;

  return (
    <div
      className="carousel reveal"
      role="region"
      aria-label="Galerie du collectif"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(-1);
        if (e.key === "ArrowRight") go(1);
      }}
    >
      <div className="carousel-stage">
        <div className="carousel-slide" key={current.src}>
          <Image
            src={current.src}
            alt={current.alt}
            fill
            sizes="(max-width: 860px) 100vw, 84vw"
            priority={index === 0}
          />
        </div>
      </div>
      <div className="carousel-bar">
        <p className="carousel-caption">{current.legende}</p>
        <div className="carousel-controls">
          <span className="carousel-count">
            {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>
          <button
            type="button"
            className="carousel-arrow"
            onClick={() => go(-1)}
            aria-label="Photo précédente"
          >
            ←
          </button>
          <button
            type="button"
            className="carousel-arrow"
            onClick={() => go(1)}
            aria-label="Photo suivante"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
