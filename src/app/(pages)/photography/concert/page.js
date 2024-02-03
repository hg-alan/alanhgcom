import HeaderOther from "@/app/components/HeaderOther";
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

export default Concert;
