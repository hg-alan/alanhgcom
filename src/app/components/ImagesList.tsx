import ImageComponent from "./Image/Image";
import type { Photo } from "@/data/photography";

interface ImagesListProps {
  photos: Photo[];
}

export default function ImagesList({ photos }: ImagesListProps) {
  return (
    <section
      aria-label="Photo gallery"
      style={{
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "1rem",
      }}
    >
      {photos.map((photo) => (
        <ImageComponent
          key={photo.fileName}
          title={photo.title}
          fileName={photo.fileName}
          alt={photo.alt}
        />
      ))}
    </section>
  );
}
