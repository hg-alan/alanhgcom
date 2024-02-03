import Link from "next/link";
import Image from "next/image";

function ImageNavigator({ category1, category2, category3 }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "5rem" }}>
      <h3>Check out</h3>
      <h3>
        <Link href={`/photography/${category1.path}`}>{category1.name}</Link>,{" "}
        <Link href={`/photography/${category2.path}`}>{category2.name}</Link>,{" "}
        <Link href={`/photography/${category3.path}`}>{category3.name}</Link>
      </h3>
      <h3>or go back</h3>
      <h3>
        <Link href="/">
          <Image
            src="/icons/house-solid.svg"
            alt="home icon"
            width={27.5}
            height={27.5}
            className="social-icon"
          />
        </Link>
      </h3>
    </div>
  );
}

export default ImageNavigator;
