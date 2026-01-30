import Link from "next/link";
import Header from "@/app/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <h1>Gallery Not Found</h1>
        <p>The photography gallery you&apos;re looking for doesn&apos;t exist.</p>
        <p style={{ marginTop: "1rem" }}>
          <Link href="/">Return home</Link>
        </p>
      </main>
    </>
  );
}
