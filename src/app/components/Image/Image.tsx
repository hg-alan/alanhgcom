import styles from "./Image.module.css";
import Image from "next/image";

interface ImageComponentProps {
  title: string;
  fileName: string;
  alt: string;
}

export default function ImageComponent({
  title,
  fileName,
  alt,
}: ImageComponentProps) {
  return (
    <figure className={styles.imageWrapper}>
      <figcaption className={styles.imageTitle}>{title}</figcaption>
      <div className={styles.imageContainer}>
        <Image
          className={styles.responsiveImage}
          src={`/art/photography/${fileName}`}
          alt={alt}
          width={1500}
          height={1000}
          sizes="(max-width: 768px) 90vw, 75vw"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwMCIgaGVpZ2h0PSIxMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlNWU1ZTUiLz48L3N2Zz4="
          loading="lazy"
        />
      </div>
    </figure>
  );
}
