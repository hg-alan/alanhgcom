import ImageComponent from "@/app/components/Image";
import HeaderHome from "@/app/components/HeaderHome";
import Link from "next/link";

const Concert = () => {
  const imageGridWrapper = {
    overflowX: "hidden", // Hide horizontal scrollbar
    overflowY: "hidden", // Show vertical scrollbar
    textAlign: "-webkit-center", // Center images
    marginTop: "1rem",
  };

  return (
    <>
      <HeaderHome />
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
          Checkout other genres including:{" "}
          <Link href="/photography/cityscape">Cityscape</Link>,{" "}
          <Link href="/photography/outside">Outside</Link> &{" "}
          <Link href="/photography/other">Other</Link>
        </h3>
        <h3 style={{ textAlign: "center" }}>or</h3>
        <h3 style={{ textAlign: "center", marginBottom: "5rem" }}>
          Return to <Link href="/">Homepage</Link>
        </h3>
      </div>
    </>
  );
};

export default Concert;