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
    "other/night.webp",
    "other/budget.webp",
    "other/thai2.webp",
    "other/oscar.webp",
    "other/asher.webp",
    "other/trap.webp",
    "other/flat.webp",
    "other/fireworks.webp",
    "other/sry.webp",
  ];

  return (
    <>
      <Header />
      <ImagesList fileNames={fileNames} />
      <ImageNavigator
        category1={category1}
        category2={category2}
        category3={category3}
      />
    </>
  );
};

export default Outside;
