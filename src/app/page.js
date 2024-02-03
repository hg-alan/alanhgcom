import Header from "./components/Header";
import RichText from "./components/RichText";
import SocialIcons from "./components/SocialIcons";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        placeItems: "center",
      }}
    >
      <Header />
      <RichText />
      <SocialIcons />


    </main>
  );
}
