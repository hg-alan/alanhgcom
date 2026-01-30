export interface Photo {
  fileName: string;
  title: string;
  alt: string;
}

export interface GalleryCategory {
  name: string;
  slug: string;
  description: string;
  photos: Photo[];
}

export const GALLERY_CATEGORIES: Record<string, GalleryCategory> = {
  cityscape: {
    name: "Cityscape",
    slug: "cityscape",
    description: "Urban and architectural photography",
    photos: [
      { fileName: "cityscape/514.webp", title: '"514"', alt: "Montreal cityscape with 514 area code reference" },
      { fileName: "cityscape/downside.webp", title: '"ON THE UPSIDE"', alt: "Urban architecture from below" },
      { fileName: "cityscape/palm.webp", title: '"PALM STRINGS"', alt: "Palm trees in urban setting" },
      { fileName: "cityscape/dead.webp", title: '"DEAD END"', alt: "Dead end street scene" },
      { fileName: "cityscape/66.webp", title: '"66"', alt: "Route 66 inspired urban shot" },
      { fileName: "cityscape/bbridge.webp", title: '"HEART OF THE CITY"', alt: "Bridge in city center" },
      { fileName: "cityscape/schedule.webp", title: '"ON SCHEDULE"', alt: "Transportation schedule scene" },
      { fileName: "cityscape/24.webp", title: '"SKYFALL"', alt: "Dramatic sky over cityscape" },
      { fileName: "cityscape/rolling.webp", title: '"ROLLING GREENERY"', alt: "Green spaces in urban environment" },
      { fileName: "cityscape/high.webp", title: '"HIGH PRIEST"', alt: "High-rise building shot" },
      { fileName: "cityscape/spain.webp", title: '"BARCA"', alt: "Barcelona cityscape" },
      { fileName: "cityscape/221-1.webp", title: '"OLD 514"', alt: "Historic Montreal scene" },
      { fileName: "cityscape/st-lo.webp", title: '"SAINT LAURENT"', alt: "Saint Laurent street scene" },
      { fileName: "cityscape/nycFilm1.webp", title: '"NYC DISPOSABLE 1"', alt: "New York City film photograph" },
      { fileName: "cityscape/nycFilm2.webp", title: '"NYC DISPOSABLE 2"', alt: "New York City film photograph" },
      { fileName: "cityscape/221-2.webp", title: '"OLD 514-2"', alt: "Historic Montreal scene" },
      { fileName: "cityscape/tunnel.webp", title: '"TUNNEL VISION"', alt: "Tunnel perspective shot" },
      { fileName: "cityscape/9.webp", title: '"9"', alt: "Urban scene with number 9" },
      { fileName: "cityscape/codeine.webp", title: '"DS2"', alt: "Urban street scene" },
      { fileName: "cityscape/mt.webp", title: '"MCGILL GHETTO"', alt: "McGill Ghetto neighborhood" },
      { fileName: "cityscape/royal.webp", title: '"MONT ROYAL"', alt: "Mont Royal area view" },
      { fileName: "cityscape/v.webp", title: '"HOMECOMING"', alt: "Homecoming scene in the city" },
    ],
  },
  concert: {
    name: "Concert",
    slug: "concert",
    description: "Live music and performance photography",
    photos: [
      { fileName: "concert/future.webp", title: '"FUTURE"', alt: "Future performing live" },
      { fileName: "concert/skep.webp", title: '"SKEPTA"', alt: "Skepta performing live" },
      { fileName: "concert/road.webp", title: '"SLOWTHAI"', alt: "Slowthai performing live" },
      { fileName: "concert/cc.webp", title: '"DENZEL CURRY"', alt: "Denzel Curry performing live" },
      { fileName: "concert/lanez.webp", title: '"TORY LANEZ"', alt: "Tory Lanez performing live" },
      { fileName: "concert/lean.webp", title: '"YUNG LEAN"', alt: "Yung Lean performing live" },
      { fileName: "concert/joey.webp", title: '"JOEY BADASS"', alt: "Joey Badass performing live" },
      { fileName: "concert/24k.webp", title: '"24k GOLDN"', alt: "24k Goldn performing live" },
      { fileName: "concert/cage.webp", title: '"CAGE THE ELEPHANT"', alt: "Cage The Elephant performing live" },
      { fileName: "concert/tj.webp", title: '"LIL TJAY"', alt: "Lil Tjay performing live" },
      { fileName: "concert/zed.webp", title: '"ZEDS DED"', alt: "Zeds Dead performing live" },
      { fileName: "concert/cam.webp", title: '"CAM\'RON"', alt: "Cam'ron performing live" },
      { fileName: "concert/carti.webp", title: '"PLAYBOI CARTI"', alt: "Playboi Carti performing live" },
      { fileName: "concert/cj.webp", title: '"CJ FLEMINGS"', alt: "CJ Flemings performing live" },
      { fileName: "concert/cope.webp", title: '"CITIZEN COPE"', alt: "Citizen Cope performing live" },
      { fileName: "concert/oscar.webp", title: '"OSCAR LOUIS"', alt: "Oscar Louis performing live" },
      { fileName: "concert/fido.webp", title: '"FIDO"', alt: "Fido performing live" },
      { fileName: "concert/fred.webp", title: '"FREDDIE GIBBS"', alt: "Freddie Gibbs performing live" },
      { fileName: "concert/j3.webp", title: '"J EMBER"', alt: "J Ember performing live" },
      { fileName: "concert/joey2.webp", title: '"JOEY BADASS"', alt: "Joey Badass performing live" },
      { fileName: "concert/jpeg.webp", title: '"JPEG MAFIA"', alt: "JPEG Mafia performing live" },
      { fileName: "concert/k.webp", title: '"KAYTRANADA"', alt: "Kaytranada performing live" },
      { fileName: "concert/nik.webp", title: '"NIKKI YANOFSKY"', alt: "Nikki Yanofsky performing live" },
      { fileName: "concert/pressa.webp", title: '"PRESSA"', alt: "Pressa performing live" },
      { fileName: "concert/fan.webp", title: '"FRONT ROW"', alt: "Concert crowd front row" },
      { fileName: "concert/qi.webp", title: '"QI YAMA"', alt: "Qi Yama performing live" },
      { fileName: "concert/vic.webp", title: '"VIC MENSA"', alt: "Vic Mensa performing live" },
    ],
  },
  outside: {
    name: "Outside",
    slug: "outside",
    description: "Nature and outdoor photography",
    photos: [
      { fileName: "outside/staring.webp", title: '"STARING BACK"', alt: "Nature scene with reflective moment" },
      { fileName: "outside/penelope.webp", title: '"PENELOPE PINES"', alt: "Pine trees in natural setting" },
      { fileName: "outside/alot.webp", title: '"THERE\'S A LOT GOING ON"', alt: "Complex natural scene" },
      { fileName: "outside/lotw.webp", title: '"LAKE OF THE WOODS"', alt: "Lake of the Woods landscape" },
      { fileName: "outside/temagami.webp", title: '"TEMAGAMI OUTPOST"', alt: "Temagami wilderness outpost" },
      { fileName: "outside/ab.webp", title: '"A & B"', alt: "Dual subject nature shot" },
      { fileName: "outside/e.webp", title: '"EQUAL / OPPOSITE"', alt: "Contrasting natural elements" },
      { fileName: "outside/qc.webp", title: '"QUEBEC"', alt: "Quebec natural landscape" },
      { fileName: "outside/wxw.webp", title: '"WATCH X WITNESS"', alt: "Observational nature photography" },
      { fileName: "outside/hotncold.webp", title: '"HOT N COLD"', alt: "Temperature contrast in nature" },
      { fileName: "outside/story.webp", title: '"STORY"', alt: "Narrative natural scene" },
      { fileName: "outside/tiny.webp", title: '"TINY"', alt: "Small details in nature" },
      { fileName: "outside/follow.webp", title: '"FOLLOW THE LEADER"', alt: "Path through nature" },
      { fileName: "outside/db.webp", title: '"DARKER THE BERRY"', alt: "Dark berry in natural setting" },
      { fileName: "outside/geneva.webp", title: '"I\'D RATHER NOT GET INVOLVED"', alt: "Geneva landscape scene" },
      { fileName: "outside/palmmt.webp", title: '"JUXTAPOSED"', alt: "Contrasting natural elements" },
      { fileName: "outside/oldmansea.webp", title: '"OLD MEN AND THE SEA"', alt: "Coastal scene with figures" },
      { fileName: "outside/close.webp", title: '"WATCHING CLOSELY"', alt: "Close observation of nature" },
    ],
  },
  other: {
    name: "Other",
    slug: "other",
    description: "Miscellaneous photography",
    photos: [
      { fileName: "other/peggy.webp", title: '"PEGGY"', alt: "Portrait of Peggy" },
      { fileName: "other/esh.webp", title: '"MC ESHER"', alt: "Escher-inspired visual" },
      { fileName: "other/djok.webp", title: '"DJOKER"', alt: "Tennis themed photograph" },
      { fileName: "other/night.webp", title: '"NIGHTCRAWLER"', alt: "Night photography scene" },
      { fileName: "other/budget.webp", title: '"BUDGET CUTS"', alt: "Creative budget concept" },
      { fileName: "other/foe.webp", title: '"BIG FOE"', alt: "Portrait shot" },
      { fileName: "other/thai2.webp", title: '"THAI^2"', alt: "Thailand inspired photograph" },
      { fileName: "other/oscar.webp", title: '"OSCAR LOUIS"', alt: "Portrait of Oscar Louis" },
      { fileName: "other/asher.webp", title: '"ASHER"', alt: "Portrait of Asher" },
      { fileName: "other/trap.webp", title: '"BIRDS IN THE TRAP"', alt: "Abstract trap concept" },
      { fileName: "other/flat.webp", title: '"TIME IS A FLAT CIRCLE"', alt: "Circular time concept" },
      { fileName: "other/rub.webp", title: '"RUBLEV"', alt: "Rublev inspired shot" },
      { fileName: "other/brody.webp", title: '"CHIEF BRODY"', alt: "Jaws reference shot" },
      { fileName: "other/cvid.webp", title: '"PANDEMONIUM"', alt: "Chaotic scene" },
      { fileName: "other/entropy.webp", title: '"ENTROPY"', alt: "Entropy concept photograph" },
      { fileName: "other/julian.webp", title: '"PIER FIVE"', alt: "Pier scene" },
      { fileName: "other/shel.webp", title: '"HANG UP"', alt: "Hanging subject" },
      { fileName: "other/louis.webp", title: '"GIVE ME SHELTER"', alt: "Shelter seeking scene" },
      { fileName: "other/tate.webp", title: '"TATE"', alt: "Tate inspired shot" },
      { fileName: "other/fireworks.webp", title: '"FIREWORKS"', alt: "Fireworks display" },
      { fileName: "other/sry.webp", title: '"SORRY FOR THE INCONVENIENCE"', alt: "Apologetic scene" },
    ],
  },
};

export const CATEGORY_ORDER = ["cityscape", "concert", "outside", "other"] as const;
export type CategorySlug = (typeof CATEGORY_ORDER)[number];

export function getGallery(slug: string): GalleryCategory | undefined {
  return GALLERY_CATEGORIES[slug];
}

export function getOtherCategories(currentSlug: string): GalleryCategory[] {
  return CATEGORY_ORDER.filter((slug) => slug !== currentSlug).map(
    (slug) => GALLERY_CATEGORIES[slug]
  );
}

export function getAllSlugs(): string[] {
  return [...CATEGORY_ORDER];
}
