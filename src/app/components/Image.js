import Image from 'next/image';

const ImageComponent = ({ genre, fileName }) => {
  const imageWrapper = {
    position: 'relative',
    width: '90vw',
    height: '90vh',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '5rem',
  };

  return (
    <div style={imageWrapper}>
      <Image
        src={`/art/photography/${fileName}`}
        alt={`Cityscape of ${fileName.split('.')[0]}`}
        fill={true}
        objectFit='contain'
        priority
      />
    </div>
  );
};

export default ImageComponent;
