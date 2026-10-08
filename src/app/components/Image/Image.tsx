"use client";

import { useState, type MouseEventHandler, type RefCallback } from "react";
import Image from "next/image";
import type { Photo } from "@/data/photography";
import styles from "./Image.module.css";

interface ImageComponentProps {
  photo: Photo;
  priority: boolean;
  onOpen: MouseEventHandler<HTMLAnchorElement>;
  anchorRef: RefCallback<HTMLAnchorElement>;
}

export default function ImageComponent({ photo, priority, onOpen, anchorRef }: ImageComponentProps) {
  const [failed, setFailed] = useState(false);
  return <figure className={styles.imageWrapper}>
    <a ref={anchorRef} className={styles.imageLink} href={`/art/photography/${photo.fileName}`} onClick={onOpen}
      aria-label={`View ${photo.title}`} aria-haspopup="dialog" data-photo={photo.fileName}>
      <div className={styles.imageContainer}>
        {failed ? <span className={styles.previewError}>Preview unavailable. Open photograph.</span> : <Image
          className={styles.responsiveImage} src={`/art/photography/${photo.fileName}`} alt={photo.alt}
          width={photo.width} height={photo.height} sizes="(min-width: 1120px) 370px, (min-width: 720px) 46vw, 92vw"
          preload={priority} loading={priority ? undefined : "lazy"} onError={() => setFailed(true)}
        />}
      </div>
    </a>
    <figcaption className={styles.imageTitle}>{photo.title}</figcaption>
  </figure>;
}
