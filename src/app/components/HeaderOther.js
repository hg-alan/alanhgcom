import Image from "next/image";
import Link from "next/link";

const HeaderOther = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "center",
        height: "5rem",
        padding: "1rem",
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

export default HeaderOther;
