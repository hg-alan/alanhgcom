import HeaderOther from "@/app/components/HeaderOther";
import ImageNavigator from "@/app/components/ImagesNavigator";
import ImagesList from "@/app/components/ImagesList";

const Outside = () => {
  const category1 = { name: "Other", path: "other" };
  const category2 = { name: "Cityscape", path: "cityscape" };
  const category3 = { name: "Concert", path: "concert" };

  const fileNames = [
    "outside/staring.webp",
    "outside/penelope.webp",
    "outside/alot.webp",
    "outside/lotw.webp",
    "outside/temagami.webp",
    "outside/e.webp",
    "outside/qc.webp",
    "outside/wxw.webp",
    "outside/story.webp",
    "outside/tiny.webp",
    "outside/close.webp",
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

export default Outside;
