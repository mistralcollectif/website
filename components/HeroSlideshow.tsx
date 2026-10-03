"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import { PauseIcon, PlayIcon } from "@/components/Icons";

type Props = {
  photos: { src: string }[];
  pauseLabel: string;
  playLabel: string;
};

const INTERVAL_MS = 7000;

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}
const readReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function subscribeVisibility(onChange: () => void) {
  document.addEventListener("visibilitychange", onChange);
  return () => document.removeEventListener("visibilitychange", onChange);
}
const readHidden = () => document.hidden;

/**
 * Diaporama décoratif du Hero. Il ne tourne pas si l'utilisateur a demandé de
 * réduire les animations, s'arrête quand l'onglet est masqué, et peut être mis
 * en pause avec le bouton.
 */
export default function HeroSlideshow({ photos, pauseLabel, playLabel }: Props) {
  const [active, setActive] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, readReducedMotion, () => false);
  const tabHidden = useSyncExternalStore(subscribeVisibility, readHidden, () => false);

  const canPlay = photos.length > 1 && !reducedMotion;
  const running = canPlay && !userPaused && !tabHidden;

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setActive((i) => (i + 1) % photos.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, [running, photos.length]);

  return (
    <>
      <div className="hero-slides" aria-hidden="true">
        {photos.map((photo, i) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={`hero-slide${i === active ? " is-active" : ""}`}
          />
        ))}
        <div className="hero-veil" />
      </div>
      {canPlay && (
        <button
          type="button"
          className="hero-pause"
          aria-pressed={userPaused}
          aria-label={userPaused ? playLabel : pauseLabel}
          onClick={() => setUserPaused((v) => !v)}
        >
          {userPaused ? <PlayIcon /> : <PauseIcon />}
        </button>
      )}
    </>
  );
}
