import styles from './Image.module.css'; // Update the path as necessary
import Image from 'next/image';

const ImageComponent = ({ title, fileName }) => {
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.imageTitle}>{title}</div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.responsiveImage}
          src={`/art/photography/${fileName}`}
          alt={`${fileName.split('.')[0]}`}
          layout="responsive"
          width={1500} // Example value, adjust as necessary for your image
          height={1000} // Example value, adjust to maintain aspect ratio
        />
      </div>
    </div>
  );
};

export default ImageComponent;
