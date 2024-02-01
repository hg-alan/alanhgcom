import Image from 'next/image';

const ImageComponent = ({ fileName }) => {
  const imageWrapper = {
    position: 'relative',
    width: '75vw',
    height: '85vh',
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
        priority
      />
    </div>
  );
};

export default ImageComponent;
