import ImageComponent from "./Image/Image"; // Adjust the import path as necessary

const ImagesList = ({ fileNames, titles }) => {
  const imageListStyle = {
    overflowX: "hidden", // Hide horizontal scrollbar
    textAlign: "-webkit-center", // Center images
    marginTop: "1rem",
  };

  return (
    <div style={imageListStyle}>
      {fileNames.map((fileName, index) => (
        <ImageComponent key={fileName} title={titles[index]} fileName={fileName} />
      ))}
    </div>
  );
};

export default ImagesList;
