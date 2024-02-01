import ImageComponent from '@/app/components/Image';

const Outside = () => {

  const imageGridWrapper = {
    overflowX: 'hidden', // Hide horizontal scrollbar
    overflowY: 'hidden', // Show vertical scrollbar
    textAlign: '-webkit-center', // Center images
    marginTop: '2.5rem',
  }

  return (
    <div style={imageGridWrapper}>
      <ImageComponent fileName={"other/peggy.webp"}/>
      <ImageComponent fileName={"other/esh.webp"}/>
      <ImageComponent fileName={"other/night.webp"}/>
      <ImageComponent fileName={"other/budget.webp"}/>
      <ImageComponent fileName={"other/thai2.webp"}/>
      <ImageComponent fileName={"other/oscar.webp"}/>
      <ImageComponent fileName={"other/asher.webp"}/>
      <ImageComponent fileName={"other/trap.webp"}/>
      <ImageComponent fileName={"other/flat.webp"}/>
      <ImageComponent fileName={"other/fireworks"}/>
      <ImageComponent fileName={"other/sry.webp"}/>

    </div>
  );
};

export default Outside;
