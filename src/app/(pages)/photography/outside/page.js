import ImageComponent from "@/app/components/Image";
import HeaderHome from "@/app/components/HeaderHome";

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
        <ImageComponent fileName="outside/staring.webp" />
        <ImageComponent fileName="outside/penelope.webp" />
        <ImageComponent fileName="outside/alot.webp" />
        <ImageComponent fileName="outside/lotw.webp" />
        <ImageComponent fileName="outside/temagami.webp" />
        <ImageComponent fileName="outside/e.webp" />
        <ImageComponent fileName="outside/qc.webp" />
        <ImageComponent fileName="outside/wxw.webp" />
        <ImageComponent fileName="outside/dv.webp" />
        <ImageComponent fileName="outside/tiny.webp" />
        <ImageComponent fileName="outside/watching.webp" />
      </div>
    </>
  );
};

export default Outside;
