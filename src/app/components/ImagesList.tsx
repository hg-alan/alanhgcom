"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore, type PointerEvent } from "react";
import ImageComponent from "./Image/Image";
import styles from "./Image/Image.module.css";
import type { Photo } from "@/data/photography";

const PHOTO_EVENT = "gallery-photo-change";
export function photoId(photo: Photo) { return photo.fileName.split("/").at(-1)!.replace(/\.webp$/, ""); }
function subscribe(callback: () => void) {
  window.addEventListener("hashchange", callback);
  window.addEventListener("popstate", callback);
  window.addEventListener(PHOTO_EVENT, callback);
  return () => {
    window.removeEventListener("hashchange", callback);
    window.removeEventListener("popstate", callback);
    window.removeEventListener(PHOTO_EVENT, callback);
  };
}
function currentHash() { return window.location.hash; }
function serverHash() { return ""; }

function FullPhoto({ photo }: { photo: Photo }) {
  const [failed, setFailed] = useState(false);
  return failed ? <div className={styles.imageError} role="status"><p>This preview couldn’t load.</p><a href={`/art/photography/${photo.fileName}`} target="_blank" rel="noopener noreferrer">Open the original photograph</a></div> : <Image
    src={`/art/photography/${photo.fileName}`} alt={photo.alt} width={photo.width} height={photo.height}
    sizes="100vw" className={styles.fullImage} loading="eager" onError={() => setFailed(true)}
  />;
}

export default function ImagesList({ photos }: { photos: Photo[] }) {
  const hash = useSyncExternalStore(subscribe, currentHash, serverHash);
  const requested = new URLSearchParams(hash.slice(1)).get("photo");
  const selected = photos.findIndex(photo => photoId(photo) === requested);
  const photo = photos[selected];
  const isOpen = selected >= 0;
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const openedFromGrid = useRef(false);
  const opener = useRef<HTMLAnchorElement | null>(null);
  const photoLinks = useRef(new Map<string, HTMLAnchorElement>());
  const lastPhoto = useRef<Photo | undefined>(undefined);
  const swipe = useRef<{ x: number; y: number; id: number } | null>(null);
  const [shareMessage, setShareMessage] = useState("");
  const [linkFallback, setLinkFallback] = useState(false);

  function setPhoto(index: number, push = false) {
    if (index < 0 || index >= photos.length) return;
    const url = `${window.location.pathname}${window.location.search}#photo=${encodeURIComponent(photoId(photos[index]))}`;
    window.history[push ? "pushState" : "replaceState"](null, "", url);
    window.dispatchEvent(new Event(PHOTO_EVENT));
    setShareMessage("");
    setLinkFallback(false);
  }
  function close() {
    if (openedFromGrid.current) {
      openedFromGrid.current = false;
      window.history.back();
    } else {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
      window.dispatchEvent(new Event(PHOTO_EVENT));
    }
  }
  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (photo) {
      lastPhoto.current = photo;
      if (!element.open) { element.showModal(); closeButton.current?.focus(); }
    } else if (element.open) {
      element.close();
      const target = opener.current ?? (lastPhoto.current && photoLinks.current.get(lastPhoto.current.fileName));
      target?.focus({ preventScroll: Boolean(opener.current) });
      opener.current = null;
      openedFromGrid.current = false;
    }
  }, [photo]);
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [isOpen]);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShareMessage("Photo link copied.");
      setLinkFallback(false);
    } catch {
      setLinkFallback(true);
      setShareMessage("Select and copy the link below.");
    }
  }
  function endSwipe(event: PointerEvent<HTMLDivElement>) {
    const start = swipe.current;
    swipe.current = null;
    if (!start || event.pointerId !== start.id) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) setPhoto(selected + (dx < 0 ? 1 : -1));
  }

  return <>
    <section className={styles.grid} aria-label="Photo gallery">
      {photos.map((item, index) => <ImageComponent key={item.fileName} photo={item} priority={index === 0}
        anchorRef={element => { if (element) photoLinks.current.set(item.fileName, element); else photoLinks.current.delete(item.fileName); }}
        onOpen={event => {
          if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
          event.preventDefault(); opener.current = event.currentTarget; openedFromGrid.current = true; setPhoto(index, true);
        }} />)}
    </section>
    <dialog ref={dialog} className={styles.viewer} aria-labelledby="photo-title" aria-describedby="photo-count"
      onCancel={event => { event.preventDefault(); close(); }}
      onKeyDown={event => {
        if (event.key === "Tab") {
          const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('button:not(:disabled), a[href], input:not(:disabled)')).filter(element => element.getClientRects().length > 0);
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
          if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
          return;
        }
        if (event.altKey || event.ctrlKey || event.metaKey || (event.target as HTMLElement).tagName === "INPUT") return;
        if (event.key === "ArrowRight") { event.preventDefault(); setPhoto(selected + 1); }
        if (event.key === "ArrowLeft") { event.preventDefault(); setPhoto(selected - 1); }
      }}>
      {photo ? <>
        <header className={styles.viewerHeader}><div role="status" aria-label="Current photograph" aria-live="polite" aria-atomic="true"><h2 id="photo-title">{photo.title}</h2><p id="photo-count">{selected + 1} of {photos.length}</p></div><button ref={closeButton} onClick={close}>Close</button></header>
        <div className={styles.stage}
          onPointerDown={event => { if (event.pointerType === "touch") swipe.current = { x: event.clientX, y: event.clientY, id: event.pointerId }; }}
          onPointerUp={endSwipe} onPointerCancel={() => { swipe.current = null; }}>
          <FullPhoto key={photo.fileName} photo={photo}/>
        </div>
        <footer className={styles.viewerFooter}>
          <div className={styles.viewerActions}><button onClick={() => setPhoto(selected - 1)} disabled={selected === 0}>Previous</button><button onClick={() => setPhoto(selected + 1)} disabled={selected === photos.length - 1}>Next</button><button onClick={copyLink}>Copy link</button><a href={`/art/photography/${photo.fileName}`} target="_blank" rel="noopener noreferrer">Original image</a></div>
          <p className={styles.viewerHint}>Use arrow keys or swipe to browse.</p>
          <p className={styles.shareStatus} role="status" aria-label="Link sharing">{shareMessage}</p>
          {linkFallback ? <label className={styles.copyField}>Photo link<input readOnly value={window.location.href} onFocus={event => event.currentTarget.select()}/></label> : null}
        </footer>
      </> : null}
    </dialog>
  </>;
}
