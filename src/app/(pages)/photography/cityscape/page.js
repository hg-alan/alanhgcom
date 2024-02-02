import ImageComponent from "@/app/components/Image";
import HeaderOther from "@/app/components/HeaderOther";
import Link from "next/link";

const Cityscape = () => {
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
        <ImageComponent fileName="cityscape/514.webp" />
        <ImageComponent fileName="cityscape/downside.webp" />
        <ImageComponent fileName="cityscape/palm.webp" />
        <ImageComponent fileName="cityscape/dead.webp" />
        <ImageComponent fileName="cityscape/66.webp" />
        <ImageComponent fileName="cityscape/bbridge.webp" />
        <ImageComponent fileName="cityscape/schedule.webp" />
        <ImageComponent fileName="cityscape/24.webp" />
        <ImageComponent fileName="cityscape/rolling.webp" />
        <ImageComponent fileName="cityscape/high.webp" />
        <ImageComponent fileName="cityscape/spain.webp" />
      </div>
      <div>
        <h3 style={{ textAlign: "center" }}>
          Also checkout:
          <Link href="/photography/concert"> Concert</Link>,{" "}
          <Link href="/photography/outside">Outside</Link> &{" "}
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

export default Cityscape;
