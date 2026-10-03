"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Photo = { src: string; alt: string };

const INTERVAL_MS = 7000;

export default function HeroSlideshow({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (photos.length < 2) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % photos.length),
      INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, [photos.length]);

  return (
    <div className="hero-slides" aria-hidden={photos.length === 0}>
      {photos.map((photo, i) => (
        <Image
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          fill
          priority={i === 0}
          sizes="100vw"
          className={`hero-slide${i === active ? " is-active" : ""}`}
        />
      ))}
      <div className="hero-veil" />
    </div>
  );
}
