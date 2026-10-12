export interface Photo {
  fileName: string;
  title: string;
  alt: string;
  width: number;
  height: number;
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
      { fileName: "cityscape/514.webp", title: '"514"', alt: "City buildings lit in many colors at dusk, viewed over a rooftop railing.", width: 2500, height: 1667 },
      { fileName: "cityscape/downside.webp", title: '"ON THE UPSIDE"', alt: "People on a waterfront promenade mirrored upside down in a reflective canopy.", width: 2500, height: 1667 },
      { fileName: "cityscape/palm.webp", title: '"PALM STRINGS"', alt: "A tennis court among tall palm trees, rocks and distant mountains.", width: 4218, height: 2817 },
      { fileName: "cityscape/dead.webp", title: '"DEAD END"', alt: "A person carrying a skateboard beside a dead-end sign, with a skyline beyond a fence.", width: 4096, height: 2730 },
      { fileName: "cityscape/66.webp", title: '"66"', alt: "Black-and-white city skyline and tower reflected in building windows.", width: 5603, height: 3735 },
      { fileName: "cityscape/bbridge.webp", title: '"HEART OF THE CITY"', alt: "Bridge cables converge above a river toward a brightly lit skyline at dusk.", width: 4096, height: 2726 },
      { fileName: "cityscape/schedule.webp", title: '"ON SCHEDULE"', alt: "A person walks along an empty railway platform beneath a station sign.", width: 3993, height: 2662 },
      { fileName: "cityscape/24.webp", title: '"SKYFALL"', alt: "Black-and-white view straight up the sharply angled corner of a tall building.", width: 4096, height: 2730 },
      { fileName: "cityscape/rolling.webp", title: '"ROLLING GREENERY"', alt: "A church spire and red-roofed buildings nestled among green hills.", width: 4356, height: 2904 },
      { fileName: "cityscape/high.webp", title: '"HIGH PRIEST"', alt: "A sweeping view over an oval plaza and colonnades toward a dense city.", width: 2500, height: 1666 },
      { fileName: "cityscape/spain.webp", title: '"BARCA"', alt: "A narrow cobbled street between tall buildings with colorful facades and balconies.", width: 4096, height: 2730 },
      { fileName: "cityscape/221-1.webp", title: '"OLD 514"', alt: "Nighttime rooftops glowing purple and yellow beneath a tall stone building.", width: 6000, height: 4000 },
      { fileName: "cityscape/st-lo.webp", title: '"SAINT LAURENT"', alt: "Low evening sunlight falls along a tree-lined street filled with parked cars.", width: 2500, height: 1667 },
      { fileName: "cityscape/nycFilm1.webp", title: '"NYC DISPOSABLE 1"', alt: "Black-and-white view upward past a slatted structure toward tall skyscrapers.", width: 3088, height: 2048 },
      { fileName: "cityscape/nycFilm2.webp", title: '"NYC DISPOSABLE 2"', alt: "A sunlit city skyline stretches beneath scattered clouds.", width: 2500, height: 1689 },
      { fileName: "cityscape/221-2.webp", title: '"OLD 514-2"', alt: "Illuminated city rooftops under a deep blue evening sky.", width: 6000, height: 4000 },
      { fileName: "cityscape/tunnel.webp", title: '"TUNNEL VISION"', alt: "A coin-operated viewing telescope in focus against colorful, blurred city lights.", width: 4096, height: 2730 },
      { fileName: "cityscape/9.webp", title: '"9"', alt: "An upside-down night cityscape with illuminated towers and curving light trails.", width: 5945, height: 3963 },
      { fileName: "cityscape/codeine.webp", title: '"DS2"', alt: "A snowy urban view combines monochrome buildings with purple and blue sky and roofs.", width: 5308, height: 3539 },
      { fileName: "cityscape/mt.webp", title: '"MCGILL GHETTO"', alt: "Night streets and rooftops seen from above, with a bright road along the right edge.", width: 6000, height: 4000 },
      { fileName: "cityscape/royal.webp", title: '"MONT ROYAL"', alt: "A dense city skyline lit after dark, with a green space in the foreground.", width: 4096, height: 2730 },
      { fileName: "cityscape/v.webp", title: '"HOMECOMING"', alt: "The pointed corner of a tall building rises into a vivid blue and purple sky.", width: 4175, height: 2815 },
    ],
  },
  concert: {
    name: "Concert",
    slug: "concert",
    description: "Live music and performance photography",
    photos: [
      { fileName: "concert/future.webp", title: '"FUTURE"', alt: "A performer wearing sunglasses and a knit hat holds a microphone under colorful stage lights.", width: 2564, height: 1712 },
      { fileName: "concert/skep.webp", title: '"SKEPTA"', alt: "A performer extends both arms against a pale blue sky.", width: 3057, height: 2041 },
      { fileName: "concert/road.webp", title: '"SLOWTHAI"', alt: "A shirtless performer points toward an energetic crowd in a black-and-white venue scene.", width: 4895, height: 3263 },
      { fileName: "concert/cc.webp", title: '"DENZEL CURRY"', alt: "Black-and-white close-up of a performer beneath bright overhead lights.", width: 2467, height: 1647 },
      { fileName: "concert/lanez.webp", title: '"TORY LANEZ"', alt: "A shirtless performer leans toward raised phones, with a large projected face behind him.", width: 2703, height: 1805 },
      { fileName: "concert/lean.webp", title: '"YUNG LEAN"', alt: "A performer raises a microphone beneath a broad beam of white light and red stage haze.", width: 3554, height: 2374 },
      { fileName: "concert/joey.webp", title: '"JOEY BADASS"', alt: "A performer in sunglasses and layered necklaces sings into a microphone under blue lights.", width: 4809, height: 3206 },
      { fileName: "concert/24k.webp", title: '"24k GOLDN"', alt: "A performer lifts a garment above his head beside a tightly packed audience.", width: 4999, height: 3333 },
      { fileName: "concert/cage.webp", title: '"CAGE THE ELEPHANT"', alt: "Black-and-white photograph of a guitarist leaning into a performance beneath spotlights.", width: 4093, height: 2734 },
      { fileName: "concert/tj.webp", title: '"LIL TJAY"', alt: "A performer in a white vest holds a microphone beneath crisscrossing stage lights.", width: 5073, height: 3382 },
      { fileName: "concert/zed.webp", title: '"ZEDS DED"', alt: "Black-and-white portrait of a DJ at mixing equipment with a crowd behind him.", width: 3921, height: 2614 },
      { fileName: "concert/cam.webp", title: '"CAM\'RON"', alt: "A performer stands with a microphone at the front of a brightly lit stage.", width: 2500, height: 1667 },
      { fileName: "concert/carti.webp", title: '"PLAYBOI CARTI"', alt: "A performer in sunglasses and a colorful denim jacket sits beside an ice bucket and bottles.", width: 2331, height: 3497 },
      { fileName: "concert/cj.webp", title: '"CJ FLEMINGS"', alt: "A performer seen from behind extends one arm toward a theater audience.", width: 2500, height: 1667 },
      { fileName: "concert/cope.webp", title: '"CITIZEN COPE"', alt: "Black-and-white view of a singer and band on stage above a dense audience.", width: 2500, height: 1667 },
      { fileName: "concert/oscar.webp", title: '"OSCAR LOUIS"', alt: "A performer in a white shirt stands below a hanging disco ball in a dark room.", width: 3730, height: 2491 },
      { fileName: "concert/fido.webp", title: '"FIDO"', alt: "A tightly packed outdoor audience beneath a large suspended balloon, in black and white.", width: 4096, height: 2730 },
      { fileName: "concert/fred.webp", title: '"FREDDIE GIBBS"', alt: "A performer stands in a vivid red wash of stage light.", width: 3597, height: 2403 },
      { fileName: "concert/j3.webp", title: '"J EMBER"', alt: "Laser lines stretch across a dark music venue above performers and audience silhouettes.", width: 3306, height: 2208 },
      { fileName: "concert/joey2.webp", title: '"JOEY BADASS"', alt: "A performer in sunglasses stands among people beside bottles and audio equipment.", width: 2321, height: 1539 },
      { fileName: "concert/jpeg.webp", title: '"JPEG MAFIA"', alt: "A performer in blue overalls stands alone beneath red stage lights.", width: 3304, height: 4956 },
      { fileName: "concert/k.webp", title: '"KAYTRANADA"', alt: "A DJ works behind a transparent booth under bright blue lights.", width: 4773, height: 3182 },
      { fileName: "concert/nik.webp", title: '"NIKKI YANOFSKY"', alt: "A seated singer holds a microphone beneath a spotlight beside flowers.", width: 2500, height: 1667 },
      { fileName: "concert/pressa.webp", title: '"PRESSA"', alt: "Black-and-white close-up of a performer with one hand near his face.", width: 4750, height: 3167 },
      { fileName: "concert/fan.webp", title: '"FRONT ROW"', alt: "Audience members lean against the front barrier under pink stage light.", width: 4240, height: 2832 },
      { fileName: "concert/qi.webp", title: '"QI YAMA"', alt: "Black-and-white view of a performer looking toward a crowded venue.", width: 2500, height: 1667 },
      { fileName: "concert/vic.webp", title: '"VIC MENSA"', alt: "A crowd surrounds an outdoor festival stage, viewed from above.", width: 4096, height: 2730 },
    ],
  },
  outside: {
    name: "Outside",
    slug: "outside",
    description: "Nature and outdoor photography",
    photos: [
      { fileName: "outside/staring.webp", title: '"STARING BACK"', alt: "Colorfully lit cave formations reflected in still underground water.", width: 5714, height: 3809 },
      { fileName: "outside/penelope.webp", title: '"PENELOPE PINES"', alt: "A star-filled sky above a still lake and a tree-lined shore.", width: 5347, height: 3565 },
      { fileName: "outside/alot.webp", title: '"THERE\'S A LOT GOING ON"', alt: "Twilight reflected across a lake, with colored lights along the far shore.", width: 3265, height: 2181 },
      { fileName: "outside/lotw.webp", title: '"LAKE OF THE WOODS"', alt: "A pale band of stars rises above a wooded island reflected in calm water.", width: 4107, height: 2743 },
      { fileName: "outside/temagami.webp", title: '"TEMAGAMI OUTPOST"', alt: "A small red lakeside cabin beneath trees and a star-filled sky.", width: 5714, height: 3809 },
      { fileName: "outside/ab.webp", title: '"A & B"', alt: "A broad bay dotted with boats between green hills at sunset.", width: 4240, height: 2832 },
      { fileName: "outside/e.webp", title: '"EQUAL / OPPOSITE"', alt: "Trees and a wispy blue sky reflected almost symmetrically in a quiet lake.", width: 6000, height: 4000 },
      { fileName: "outside/qc.webp", title: '"QUEBEC"', alt: "Pink and blue evening clouds reflected in rippled water below a forested shoreline.", width: 6000, height: 4000 },
      { fileName: "outside/wxw.webp", title: '"WATCH X WITNESS"', alt: "A wooden dock leads into still water beneath a night sky and bright horizon.", width: 6000, height: 4000 },
      { fileName: "outside/hotncold.webp", title: '"HOT N COLD"', alt: "Snow-covered branches on a rocky overlook above a valley at sunset.", width: 4174, height: 2788 },
      { fileName: "outside/story.webp", title: '"STORY"', alt: "A boat and dock reflected in dark water under a starry sky.", width: 2982, height: 1992 },
      { fileName: "outside/tiny.webp", title: '"TINY"', alt: "A thin band of orange sunset divides a deep blue sky and smooth water.", width: 5899, height: 3933 },
      { fileName: "outside/follow.webp", title: '"FOLLOW THE LEADER"', alt: "Small waves wash onto a sandy beach beneath a blue night sky.", width: 4240, height: 2832 },
      { fileName: "outside/db.webp", title: '"DARKER THE BERRY"', alt: "A close-up of clusters of dark berries among long green leaves.", width: 3934, height: 2628 },
      { fileName: "outside/geneva.webp", title: '"I\'D RATHER NOT GET INVOLVED"', alt: "A tall pale monument on a waterfront promenade, with mountains in the distance.", width: 4096, height: 2730 },
      { fileName: "outside/palmmt.webp", title: '"JUXTAPOSED"', alt: "Palm fronds frame a snow-covered mountain peak beyond rooftops.", width: 3846, height: 2569 },
      { fileName: "outside/oldmansea.webp", title: '"OLD MEN AND THE SEA"', alt: "Two people aboard a small motorboat on a lake bordered by wooded hills.", width: 5938, height: 3959 },
      { fileName: "outside/close.webp", title: '"WATCHING CLOSELY"', alt: "A dog sits on a wide sandy beach facing a hazy, still sea.", width: 5085, height: 3390 },
    ],
  },
  other: {
    name: "Other",
    slug: "other",
    description: "Miscellaneous photography",
    photos: [
      { fileName: "other/peggy.webp", title: '"PEGGY"', alt: "Silhouetted visitors line several bright white levels inside a gallery.", width: 11111, height: 7404 },
      { fileName: "other/esh.webp", title: '"MC ESHER"', alt: "An angular spiral staircase curls around an open center, viewed from above.", width: 7712, height: 5141 },
      { fileName: "other/djok.webp", title: '"DJOKER"', alt: "Black-and-white photograph of a tennis player preparing a shot on court.", width: 1086, height: 724 },
      { fileName: "other/night.webp", title: '"NIGHTCRAWLER"', alt: "A blurred nighttime view inside a car, with a glowing dashboard and reflections.", width: 4240, height: 2832 },
      { fileName: "other/budget.webp", title: '"BUDGET CUTS"', alt: "A narrow corridor glows pink and blue beneath rows of fluorescent lights.", width: 2500, height: 3750 },
      { fileName: "other/foe.webp", title: '"BIG FOE"', alt: "A tennis player reaches upward at the edge of a stark black-and-white court.", width: 1086, height: 724 },
      { fileName: "other/thai2.webp", title: '"THAI^2"', alt: "A smiling person holds a printed photograph of a shirtless performer.", width: 5699, height: 3799 },
      { fileName: "other/oscar.webp", title: '"OSCAR LOUIS"', alt: "A person sits behind a steaming plate of noodles in a dark black-and-white scene.", width: 5812, height: 3875 },
      { fileName: "other/asher.webp", title: '"ASHER"', alt: "Black-and-white portrait of a person in sunglasses holding a cigarette as smoke rises.", width: 3875, height: 5812 },
      { fileName: "other/trap.webp", title: '"BIRDS IN THE TRAP"', alt: "Birds fly low over railway tracks curving through a black-and-white landscape.", width: 2500, height: 1667 },
      { fileName: "other/flat.webp", title: '"TIME IS A FLAT CIRCLE"', alt: "A lone figure stands at a railing between a streetlamp and a distant tower.", width: 6000, height: 4000 },
      { fileName: "other/rub.webp", title: '"RUBLEV"', alt: "Black-and-white photograph of a tennis player holding a racket between points.", width: 1086, height: 724 },
      { fileName: "other/brody.webp", title: '"CHIEF BRODY"', alt: "A person sits in a worn chair inside a room covered with stickers and graffiti.", width: 2500, height: 1666 },
      { fileName: "other/cvid.webp", title: '"PANDEMONIUM"', alt: "A person stands beside a bicycle on a snowy city sidewalk, in black and white.", width: 5687, height: 3791 },
      { fileName: "other/entropy.webp", title: '"ENTROPY"', alt: "A small group stands outside shops on a city street.", width: 4240, height: 2832 },
      { fileName: "other/julian.webp", title: '"PIER FIVE"', alt: "A smiling person holds a transparent coaster with a hand-shaped design in front of their face.", width: 4240, height: 2832 },
      { fileName: "other/shel.webp", title: '"HANG UP"', alt: "A tennis player stretches toward a ball on a black-and-white court.", width: 1086, height: 724 },
      { fileName: "other/louis.webp", title: '"GIVE ME SHELTER"', alt: "A layered nighttime exposure combines a person's face with bright urban lights.", width: 4092, height: 2733 },
      { fileName: "other/tate.webp", title: '"TATE"', alt: "Visitors gather inside a vast gallery hall beneath tall windows.", width: 3778, height: 2523 },
      { fileName: "other/fireworks.webp", title: '"FIREWORKS"', alt: "Multicolored firework trails spread across a black night sky.", width: 2046, height: 1363 },
      { fileName: "other/sry.webp", title: '"SORRY FOR THE INCONVENIENCE"', alt: "Blurred blue and amber light trails and sparks against a dark background.", width: 4240, height: 2832 },
    ],
  },
};

export const CATEGORY_ORDER = ["cityscape", "concert", "outside", "other"] as const;
export type CategorySlug = (typeof CATEGORY_ORDER)[number];

export function getGallery(slug: string): GalleryCategory | undefined {
  return (CATEGORY_ORDER as readonly string[]).includes(slug) ? GALLERY_CATEGORIES[slug] : undefined;
}

export function getOtherCategories(currentSlug: string): GalleryCategory[] {
  return CATEGORY_ORDER.filter((slug) => slug !== currentSlug).map(
    (slug) => GALLERY_CATEGORIES[slug]
  );
}

export function getAllSlugs(): string[] {
  return [...CATEGORY_ORDER];
}
