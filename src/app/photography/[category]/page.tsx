import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
import ImageNavigator from "@/app/components/ImagesNavigator";
import ImagesList from "@/app/components/ImagesList";
import {
  getGallery,
  getOtherCategories,
  getAllSlugs,
  type CategorySlug,
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

  const otherCategories = getOtherCategories(category as CategorySlug);

  return (
    <>
      <Header />
      <ImagesList photos={gallery.photos} />
      <ImageNavigator categories={otherCategories} />
    </>
  );
}
