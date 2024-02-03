import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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

export default Header;
