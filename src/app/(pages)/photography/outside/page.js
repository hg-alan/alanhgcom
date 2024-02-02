import ImageComponent from "@/app/components/Image";
import HeaderOther from "@/app/components/HeaderOther";
import Link from "next/link";

const Outside = () => {
  const imageGridWrapper = {
    overflowX: "hidden", // Hide horizontal scrollbar
    overflowY: "hidden", // Show vertical scrollbar
    textAlign: "-webkit-center", // Center images
    marginTop: "2.5rem",
  };

  return (
    <>
      <HeaderOther />
      <div style={imageGridWrapper}>
        <ImageComponent fileName="outside/staring.webp" />
        <ImageComponent fileName="outside/penelope.webp" />
        <ImageComponent fileName="outside/alot.webp" />
        <ImageComponent fileName="outside/lotw.webp" />
        <ImageComponent fileName="outside/temagami.webp" />
        <ImageComponent fileName="outside/e.webp" />
        <ImageComponent fileName="outside/qc.webp" />
        <ImageComponent fileName="outside/wxw.webp" />
        <ImageComponent fileName="outside/story.webp" />
        <ImageComponent fileName="outside/tiny.webp" />
        <ImageComponent fileName="outside/close.webp" />
      </div>
      <div>
        <h3 style={{ textAlign: "center" }}>
          Checkout:
          <Link href="/photography/concert"> Concert</Link>,{" "}
          <Link href="/photography/cityscape">Cityscape</Link> &{" "}
          <Link href="/photography/other">Other</Link>
        </h3>{" "}
        <h3 style={{ textAlign: "center" }}>or</h3>
        <h3 style={{ textAlign: "center", marginBottom: "5rem" }}>
          Return to <Link href="/">Homepage</Link>
        </h3>
      </div>
    </>
  );
};

export default Outside;
