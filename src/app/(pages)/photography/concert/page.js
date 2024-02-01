import ImageComponent from "@/app/components/Image";
import HeaderHome from "@/app/components/HeaderHome";

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
    </>
  );
};

export default Concert;
