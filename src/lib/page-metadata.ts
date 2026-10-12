import type { Metadata } from "next";

export const WEBSITE_URL = "https://www.alanhg.com";

interface PageDetails {
  title: string;
  description: string;
  path: string;
  image?: { url: string; width: number; height: number; alt: string };
}

export function pageMetadata({ title, description, path, image }: PageDetails): Metadata {
  const url = new URL(path, WEBSITE_URL).href;
  const images = image ? [{ ...image, url: new URL(image.url, WEBSITE_URL).href }] : undefined;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", siteName: "Alan HG", url, title, description, images },
    twitter: { card: image ? "summary_large_image" : "summary", title, description, images },
  };
}
