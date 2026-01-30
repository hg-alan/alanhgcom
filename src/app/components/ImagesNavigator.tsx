import Link from "next/link";
import Image from "next/image";
import type { GalleryCategory } from "@/data/photography";

interface ImageNavigatorProps {
  categories: GalleryCategory[];
}

export default function ImageNavigator({ categories }: ImageNavigatorProps) {
  return (
    <nav
      aria-label="Gallery navigation"
      style={{ textAlign: "center", marginBottom: "5rem" }}
    >
      <div
        style={{
          display: "inline-block",
          textAlign: "center",
          border: "1px solid black",
          width: "17.5rem",
          backgroundColor: "white",
          padding: "0.5rem",
        }}
      >
        <p style={{ fontWeight: "bold", margin: "0.5rem 0" }}>Check out:</p>
        <p style={{ fontWeight: "bold", margin: "0.5rem 0" }}>
          {categories.map((category, index) => (
            <span key={category.slug}>
              <Link
                href={`/photography/${category.slug}`}
                aria-label={`View ${category.name} photography`}
              >
                {category.name}
              </Link>
              {index < categories.length - 1 && " / "}
            </span>
          ))}
        </p>
        <p style={{ fontWeight: "bold", margin: "0.5rem 0" }}>or, go back</p>
        <Link href="/" aria-label="Return to homepage">
          <Image
            src="/icons/house-solid.svg"
            alt=""
            aria-hidden="true"
            width={27.5}
            height={27.5}
            className="link-icon"
            style={{ marginBottom: "0.5rem" }}
          />
        </Link>
      </div>
    </nav>
  );
}
