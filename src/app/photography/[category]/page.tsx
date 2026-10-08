import { Metadata } from "next";
import { notFound } from "next/navigation";
import ImageNavigator from "@/app/components/ImagesNavigator";
import ImagesList from "@/app/components/ImagesList";
import Link from "next/link";
import styles from "@/app/components/Image/Image.module.css";
import {
  getGallery,
  getAllSlugs,
} from "@/data/photography";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((category) => ({ category }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const gallery = getGallery(category);

  if (!gallery) {
    return { title: "Not Found | Alan HG" };
  }

  return {
    title: `${gallery.name} Photography | Alan HG`,
    description: gallery.description,
    openGraph: {
      title: `${gallery.name} Photography | Alan HG`,
      description: gallery.description,
    },
  };
}

export default async function PhotographyPage({ params }: PageProps) {
  const { category } = await params;
  const gallery = getGallery(category);

  if (!gallery) {
    notFound();
  }

  const categories = getAllSlugs().map(slug => getGallery(slug)!);

  return (
      <main id="photography" className={styles.gallery}>
        <header className={styles.galleryHeader}>
          <div className={styles.galleryNavigation}><Link href="/" className={styles.galleryHome}>Alan HG</Link><ImageNavigator categories={categories} currentSlug={category}/></div>
          <div className={styles.galleryHeading}><h1>{gallery.name}</h1><p>{gallery.photos.length} photographs</p></div>
        </header>
        <ImagesList photos={gallery.photos} />
        <footer className={styles.galleryFooter}><a href="#photography">Back to top</a><Link href="/">Home</Link></footer>
      </main>
  );
}
