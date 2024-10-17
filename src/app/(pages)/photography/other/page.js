import Header from "@/app/components/Header";
import ImageNavigator from "@/app/components/ImagesNavigator";
import ImagesList from "@/app/components/ImagesList";

const Outside = () => {
  const category1 = { name: "Cityscape", path: "cityscape" };
  const category2 = { name: "Concert", path: "concert" };
  const category3 = { name: "Outside", path: "outside" };

  const fileNames = [
    "other/peggy.webp",
    "other/esh.webp",
    "other/djok.webp",
    "other/night.webp",
    "other/budget.webp",
    "other/foe.webp",
    "other/thai2.webp",
    "other/oscar.webp",
    "other/asher.webp",
    "other/trap.webp",
    "other/flat.webp",
    "other/rub.webp",
    "other/brody.webp",
    "other/cvid.webp",
    "other/entropy.webp",
    "other/julian.webp",
    "other/shel.webp",
    "other/louis.webp",
    "other/tate.webp",
    "other/fireworks.webp",
    "other/sry.webp",
  ];

  const titles = [
    `"PEGGY"`,
    `"MC ESHER"`,
    `"DJOKER"`,
    `"NIGHTCRAWLER"`,
    `"BUDGET CUTS"`,
    `"BIG FOE"`,
    `"THAI^2"`,
    `"OSCAR LOUIS"`,
    `"ASHER"`,
    `"BIRDS IN THE TRAP"`,
    `"TIME IS A FLAT CIRCLE"`,
    `"RUBLEV"`,
    `"CHIEF BRODY"`,
    `"PANDEMONIUM"`,
    `"ENTROPY"`,
    `"PIER FIVE"`,
    `"HANG UP"`,
    `"GIVE ME SHELTER"`,
    `"TATE"`,
    `"FIREWORKS"`,
    `"SORRY FOR THE INCONVENIENCE"`,
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

export default Outside;
