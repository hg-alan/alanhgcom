import Link from "next/link";
import Image from "next/image";

function ImageNavigator({ category1, category2, category3 }) {
  return (
    <div style={{ textAlign: "-webkit-center", marginBottom: "5rem"}}>
      <div
        style={{
          textAlign: "center",
          border: "1px solid black",
          width: "15rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          backgroundColor: "white",
        }}
      >
        <h3>Check out:</h3>
        <h3>
          <Link href={`/photography/${category1.path}`}>{category1.name}</Link>{" "}
          /{" "}
          <Link href={`/photography/${category2.path}`}>{category2.name}</Link>{" "}
          /{" "}
          <Link href={`/photography/${category3.path}`}>{category3.name}</Link>
        </h3>
        <h3>or, go back</h3>
        <h3>
          <Link href="/">
            <Image
              src="/icons/house-solid.svg"
              alt="home icon"
              width={27.5}
              height={27.5}
              className="link-icon"
            />
          </Link>
        </h3>
      </div>
    </div>
  );
}

export default ImageNavigator;
