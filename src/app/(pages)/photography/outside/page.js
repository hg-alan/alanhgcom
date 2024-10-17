import Header from "@/app/components/Header";
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
    "outside/ab.webp",
    "outside/e.webp",
    "outside/qc.webp",
    "outside/wxw.webp",
    "outside/hotncold.webp",
    "outside/story.webp",
    "outside/tiny.webp",
    "outside/follow.webp",
    "outside/db.webp",
    "outside/geneva.webp",
    "outside/palmmt.webp",
    "outside/oldmansea.webp",
    "outside/close.webp",
  ];

  const titles = [
    `"STARING BACK"`,
    `"PENELOPE PINES"`,
    `"THERE'S A LOT GOING ON"`,
    `"LAKE OF THE WOODS"`,
    `"TEMAGAMI OUTPOST"`,
    `"A & B"`,
    `"EQUAL / OPPOSITE"`,
    `"QUEBEC"`,
    `"WATCH X WITNESS"`,
    `"HOT N COLD"`,
    `"STORY"`,
    `"TINY"`,
    `"FOLLOW THE LEADER"`,
    `"DARKER THE BERRY"`,
    `"I'D RATHER NOT GET INVOLVED"`,
    `"JUXTAPOSED"`,
    `"OLD MEN AND THE SEA"`,
    `"WATCHING CLOSELY"`,
  ]


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
