import ImageComponent from "@/app/components/Image";
import HeaderHome from "@/app/components/HeaderHome";
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
      <HeaderHome />
      <div style={imageGridWrapper}>
        <ImageComponent fileName={"other/peggy.webp"} />
        <ImageComponent fileName={"other/esh.webp"} />
        <ImageComponent fileName={"other/night.webp"} />
        <ImageComponent fileName={"other/budget.webp"} />
        <ImageComponent fileName={"other/thai2.webp"} />
        <ImageComponent fileName={"other/oscar.webp"} />
        <ImageComponent fileName={"other/asher.webp"} />
        <ImageComponent fileName={"other/trap.webp"} />
        <ImageComponent fileName={"other/flat.webp"} />
        <ImageComponent fileName={"other/fireworks.webp"} />
        <ImageComponent fileName={"other/sry.webp"} />
      </div>
      <div>
        <h3 style={{ textAlign: "center" }}>
          Checkout other genres including:{" "}
          <Link href="/photography/concert">Concert</Link>,{" "}
          <Link href="/photography/outside">Outside</Link> &{" "}
          <Link href="/photography/cityscape">Cityscape</Link>
        </h3>
        <h3 style={{ textAlign: "center" }}>or</h3>
        <h3 style={{ textAlign: "center", marginBottom: "5rem" }}>
          Return to <Link href="/">Homepage</Link>
        </h3>
      </div>
    </>
  );
};

export default Outside;