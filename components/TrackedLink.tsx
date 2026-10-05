"use client";

import type { ComponentPropsWithoutRef, MouseEvent } from "react";
import { track } from "@vercel/analytics";

type Props = ComponentPropsWithoutRef<"a"> & {
  event: string;
  eventData?: Record<string, string | number | boolean | null>;
};

/** Lien qui envoie un événement Vercel Web Analytics au clic. */
export default function TrackedLink({ event, eventData, onClick, ...props }: Props) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    track(event, eventData);
    onClick?.(e);
  };

  return <a {...props} onClick={handleClick} />;
}
