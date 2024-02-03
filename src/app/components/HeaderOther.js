import Image from "next/image";
import Link from "next/link";

const HeaderOther = () => {
  return (
    <header
      style={{
        position: "relative", // Relative positioning for the header
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // This will center the logo container
      }}
    >
      {/* Absolute positioning for the back button */}
      <div
        style={{
          position: "absolute",
          left: "1rem",
          top: "50%",
          transform: "translateY(-40%)",
        }}
      >
        <Link href="/">
          <Image
            src="/icons/house-solid.svg"
            alt="home icon"
            width={27.5}
            height={27.5}
            className="social-icon"
          />
        </Link>
      </div>

      {/* Centered logo container */}
      <div>
        <Link href="/">
          <Image src="/alanhg.svg" alt="AlanHG Logo" width={180} height={60} />
        </Link>
      </div>

      {/* Empty div to maintain the balance if needed */}
      {/* This is not visible, but it takes up space as if it was a mirror of the Back Home button */}
      <div
        style={{ visibility: "hidden", position: "absolute", right: "1rem" }}
      >
        Back Home
      </div>
    </header>
  );
};

export default HeaderOther;
