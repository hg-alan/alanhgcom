import Image from 'next/image';

const ImageComponent = ({ fileName }) => {
  const imageWrapper = {
    position: 'relative',
    width: '95vw',
    height: '95vh',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '5rem',
  };

  return (
    <div style={imageWrapper}>
      <Image
        src={`/art/photography/${fileName}`}
        alt={`${fileName.split('.')[0]}`}
        fill={true}
        objectFit='contain'
      />
    </div>
  );
};

export default ImageComponent;
