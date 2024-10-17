import Header from "@/app/components/Header";
import ImageNavigator from "@/app/components/ImagesNavigator";
import ImagesList from "@/app/components/ImagesList";

const Concert = () => {
  const category1 = { name: "Outside", path: "outside" };
  const category2 = { name: "Other", path: "other" };
  const category3 = { name: "Cityscape", path: "cityscape" };

  const fileNames = [
    "concert/future.webp",
    "concert/skep.webp",
    "concert/road.webp",
    "concert/cc.webp",
    "concert/lanez.webp",
    "concert/lean.webp",
    "concert/joey.webp",
    "concert/24k.webp",
    "concert/cage.webp",
    "concert/tj.webp",
    "concert/zed.webp",
    "concert/cam.webp",
    "concert/carti.webp",
    "concert/cj.webp",
    "concert/cope.webp",
    "concert/oscar.webp",
    "concert/fido.webp",
    "concert/fred.webp",
    "concert/j3.webp",
    "concert/joey2.webp",
    "concert/jpeg.webp",
    "concert/k.webp",
    "concert/nik.webp",
    "concert/pressa.webp",
    "concert/fan.webp",
    "concert/qi.webp",
    "concert/vic.webp",
  ];

  const titles = [
    `"FUTURE"`,
    `"SKEPTA"`,
    `"SLOWTHAI"`,
    `"DENZEL CURRY"`,
    `"TORY LANEZ"`,
    `"YUNG LEAN"`,
    `"JOEY BADASS"`,
    `"24k GOLDN"`,
    `"CAGE THE ELEPHANT"`,
    `"LIL TJAY"`,
    `"ZEDS DED"`,
    `"CAM'RON"`,
    `"PLAYBOI CARTI"`,
    `"CJ FLEMINGS"`,
    `"CITIZEN COPE"`,
    `"OSCAR LOUIS"`,
    `"FIDO"`,
    `"FREDDIE GIBBS"`,
    `"J EMBER"`,
    `"JOEY BADASS"`,
    `"JPEG MAFIA"`,
    `"KAYTRANADA"`,
    `"NIKKI YANOFSKY"`,
    `"PRESSA"`,
    `"FRONT ROW"`,
    `"QI YAMA"`,
    `"VIC MENSA"`,
  ];

  return (
    <>
      <Header />
      <ImagesList fileNames={fileNames} titles={titles} />
      <ImageNavigator
        category1={category1}
        category2={category2}
        category3={category3}
      />
    </>
  );
};

export default Concert;
