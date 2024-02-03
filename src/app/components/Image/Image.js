import styles from './Image.module.css'; // Update the path as necessary
import Image from 'next/image';

const ImageComponent = ({ fileName }) => {
  return (
    <div className={styles.imageWrapper}>
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
