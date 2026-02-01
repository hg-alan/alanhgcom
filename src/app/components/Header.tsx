import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header
      role="banner"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1rem",
        marginBottom: "1rem",
      }}
    >
      <Link href="/" aria-label="Go to homepage">
        <Image
          src="/alanhg.svg"
          alt="Alan HG Logo"
          width={180}
          height={60}
          priority
        />
      </Link>
    </header>
  );
}
