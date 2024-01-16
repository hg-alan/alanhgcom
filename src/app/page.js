import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div style={{textAlign: "center", paddingTop:"1rem"}}>
        <Image src="/alanhg.png" alt="AlanHG Logo" width={180} height={60} />
      </div>
    </main>
  );
}
