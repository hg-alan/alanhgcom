import Link from "next/link";
import type { GalleryCategory } from "@/data/photography";
import styles from "./Image/Image.module.css";

export default function ImageNavigator({ categories, currentSlug }: { categories: GalleryCategory[]; currentSlug: string }) {
  return <nav className={styles.categoryNav} aria-label="Photography categories">
    {categories.map(category => <Link key={category.slug} href={`/photography/${category.slug}`} aria-current={category.slug === currentSlug ? "page" : undefined}>{category.name}</Link>)}
  </nav>;
}
