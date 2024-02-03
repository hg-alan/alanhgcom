import HeaderOther from "@/app/components/HeaderOther";
import ImageNavigator from "@/app/components/ImagesNavigator";
import ImagesList from "@/app/components/ImagesList"; 

const Cityscape = () => {
  const category1 = { name: "Concert", path: "concert" };
  const category2 = { name: "Outside", path: "outside" };
  const category3 = { name: "Other", path: "other" };

  const fileNames = [
    "cityscape/514.webp",
    "cityscape/downside.webp",
    "cityscape/palm.webp",
    "cityscape/dead.webp",
    "cityscape/66.webp",
    "cityscape/bbridge.webp",
    "cityscape/schedule.webp",
    "cityscape/24.webp",
    "cityscape/rolling.webp",
    "cityscape/high.webp",
    "cityscape/spain.webp",
  ];

  return (
    <>
      <HeaderOther />
      <ImagesList fileNames={fileNames} />
      <ImageNavigator
        category1={category1}
        category2={category2}
        category3={category3}
      />
    </>
  );
};

export default Cityscape;
