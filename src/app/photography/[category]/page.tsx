import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
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
    <>
      <Header />
      <main id="photography" className={styles.gallery}>
        <header className={styles.galleryHeader}><h1>{gallery.name}</h1><p>{gallery.photos.length} photographs</p><ImageNavigator categories={categories} currentSlug={category}/></header>
        <p className={styles.galleryHint}>Select a photograph to see the full image.</p>
        <ImagesList photos={gallery.photos} />
        <footer className={styles.galleryFooter}><a href="#photography">Back to top</a><Link href="/">Home</Link></footer>
      </main>
    </>
  );
}
