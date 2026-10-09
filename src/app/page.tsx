import Header from "./components/Header";
import RichText from "./components/RichText";
import SocialLinks from "./components/SocialLinks";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata({
  title: "Alan HG",
  description: "Alan HG's personal website",
  path: "/",
});

export default function Home() {
  return (
    <main className="home">
      <Header />
      <RichText />
      <SocialLinks />
    </main>
  );
}
