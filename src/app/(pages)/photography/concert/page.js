import ImageComponent from "@/app/components/Image";
import Link from "next/link";
import HeaderOther from "@/app/components/HeaderOther";
import Image from "next/image";

const Concert = () => {
  const imageGridWrapper = {
    overflowX: "hidden", // Hide horizontal scrollbar
    overflowY: "hidden", // Show vertical scrollbar
    textAlign: "-webkit-center", // Center images
    marginTop: "1rem",
  };

  return (
    <>
      <HeaderOther />
      <div style={imageGridWrapper}>
        <ImageComponent fileName="concert/future.webp" />
        <ImageComponent fileName="concert/skep.webp" />
        <ImageComponent fileName="concert/road.webp" />
        <ImageComponent fileName="concert/cc.webp" />
        <ImageComponent fileName="concert/lanez.webp" />
        <ImageComponent fileName="concert/lean.webp" />
        <ImageComponent fileName="concert/joey.webp" />
        <ImageComponent fileName="concert/24k.webp" />
        <ImageComponent fileName="concert/cage.webp" />
        <ImageComponent fileName="concert/tj.webp" />
        <ImageComponent fileName="concert/zed.webp" />
      </div>
      <div>
        <h3 style={{ textAlign: "center" }}>
          <Link href="/photography/cityscape">Cityscape</Link>,{" "}
          <Link href="/photography/outside">Outside</Link> &{" "}
          <Link href="/photography/other">Other</Link>
        </h3>{" "}
        <h3 style={{ textAlign: "center" }}>or</h3>
        <h3 style={{ textAlign: "center", marginBottom: "5rem" }}>
          <Link href="/">
            <Image
              src="/icons/house-solid.svg"
              alt="home icon"
              width={27.5}
              height={27.5}
              className="social-icon"
            />
          </Link>
        </h3>
      </div>
    </>
  );
};

export default Concert;
