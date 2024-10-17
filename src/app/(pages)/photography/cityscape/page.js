import Header from "@/app/components/Header";
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
    "cityscape/221-1.webp",
    "cityscape/st-lo.webp",
    "cityscape/nycFilm1.webp",
    "cityscape/nycFilm2.webp",
    "cityscape/221-2.webp",
    "cityscape/tunnel.webp",
    "cityscape/9.webp",
    "cityscape/codeine.webp",
    "cityscape/mt.webp",
    "cityscape/royal.webp",
    "cityscape/v.webp",
  ];

  const titles = [
    `"514"`,
    `"ON THE UPSIDE"`,
    `"PALM STRINGS"`,
    `"DEAD END"`,
    `"66"`,
    `"HEART OF THE CITY"`,
    `"ON SCHEDULE"`,
    `"SKYFALL"`,
    `"ROLLING GREENERY"`,
    `"HIGH PRIEST"`,
    `"BARCA"`,
    `"OLD 514"`,
    `"SAINT LAURENT"`,
    `"NYC DISPOSABLE 1"`,
    `"NYC DISPOSABLE 2"`,
    `"OLD 514-2"`,
    `"TUNNEL VISION"`,
    `"9"`,
    `"DS2"`,
    `"MCGILL GHETTO"`,
    `"MONT ROYAL"`,
    `"HOMECOMING"`,
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

export default Cityscape;
