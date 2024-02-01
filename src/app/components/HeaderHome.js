import Image from "next/image";
import Link from "next/link";

const HeaderHome = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "left",
        marginLeft: "0.5rem",
        height: "5rem",
      }}
    >
      <div>
        <Link href="/">
          <Image src="/alanhg.svg" alt="AlanHG Logo" width={180} height={60} />
        </Link>
      </div>
    </header>
  );
};

export default HeaderHome;
