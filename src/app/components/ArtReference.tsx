"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ArtReferenceProps = {
  children: string;
  href: string;
  image: string;
  description: string;
};

export default function ArtReference({ children, href, image, description }: ArtReferenceProps) {
  const [open, setOpen] = useState(false);
  const [failed, setFailed] = useState(false);
  const [above, setAbove] = useState(false);
  const [previewHeight, setPreviewHeight] = useState(220);

  useEffect(() => {
    if (!open) return;
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const close = () => setOpen(false);
    window.addEventListener("keydown", dismiss);
    window.addEventListener("resize", close);
    return () => {
      window.removeEventListener("keydown", dismiss);
      window.removeEventListener("resize", close);
    };
  }, [open]);

  const canPreview = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const showPreview = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    const below = window.innerHeight - rect.bottom;
    const showAbove = below < 228 && rect.top > below;
    const available = Math.min(220, (showAbove ? rect.top : below) - 8);
    if (available < 48) return;
    setAbove(showAbove);
    setPreviewHeight(available);
    setOpen(true);
  };

  return (
    <span
      className="art-reference"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse" && canPreview()) showPreview(event.currentTarget);
      }}
      onPointerLeave={() => setOpen(false)}
      onFocus={(event) => {
        if (canPreview() && event.target.matches(":focus-visible")) showPreview(event.currentTarget);
      }}
      onBlur={() => setOpen(false)}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
        <span className="art-reference-description"> — {description}; opens in a new tab</span>
      </a>
      {open && !failed && (
        <span className={`art-reference-preview${above ? " art-reference-preview-above" : ""}`} aria-hidden="true">
          <Image
            src={image}
            alt=""
            width={280}
            height={200}
            unoptimized
            loading="eager"
            referrerPolicy="no-referrer"
            style={{ maxHeight: previewHeight }}
            onError={() => setFailed(true)}
          />
        </span>
      )}
    </span>
  );
}
