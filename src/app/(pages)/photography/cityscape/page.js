import ImageComponent from "@/app/components/Image";
import HeaderHome from "@/app/components/HeaderHome";

const Cityscape = () => {
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
        <ImageComponent fileName="cityscape/514.webp" />
        <ImageComponent fileName="cityscape/downside.webp" />
        <ImageComponent fileName="cityscape/palm.webp" />
        <ImageComponent fileName="cityscape/dead.webp" />
        <ImageComponent fileName="cityscape/66.webp" />
        <ImageComponent fileName="cityscape/bbridge.webp" />
        <ImageComponent fileName="cityscape/schedule.webp" />
        <ImageComponent fileName="cityscape/24mm.webp" />
        <ImageComponent fileName="cityscape/rolling.webp" />
        <ImageComponent fileName="cityscape/high.webp" />
        <ImageComponent fileName="cityscape/spain.webp" />
      </div>
    </>
  );
};

export default Cityscape;
