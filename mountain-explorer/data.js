/**
 * Mountain Flora & Fauna Data
 * Altitude zones and the species that inhabit them.
 * Altitudes are in meters above sea level.
 */

const ALTITUDE_ZONES = [
  {
    name: "Foothills",
    range: [0, 800],
    color: "#4a7c59",
    bgGradient: ["#87A96B", "#5B7B4A"],
    description: "Warm, lush lowlands with dense deciduous forests and abundant wildlife."
  },
  {
    name: "Montane Forest",
    range: [800, 1800],
    color: "#3d6b4f",
    bgGradient: ["#5B7B4A", "#3A6B45"],
    description: "Cool, moist forests dominated by conifers and mixed hardwoods."
  },
  {
    name: "Subalpine Zone",
    range: [1800, 2800],
    color: "#4a6670",
    bgGradient: ["#3A6B45", "#5A7A8A"],
    description: "Harsh conditions with stunted trees, strong winds, and heavy snowfall."
  },
  {
    name: "Alpine Meadow",
    range: [2800, 4000],
    color: "#6b7b8d",
    bgGradient: ["#5A7A8A", "#8A95A5"],
    description: "Above the treeline — windswept meadows with hardy wildflowers and grasses."
  },
  {
    name: "Nival Zone",
    range: [4000, 5500],
    color: "#9ca8b8",
    bgGradient: ["#8A95A5", "#C5CCD6"],
    description: "Permanent snow and ice. Only the toughest extremophiles survive here."
  },
  {
    name: "Summit / Death Zone",
    range: [5500, 8849],
    color: "#d4dce6",
    bgGradient: ["#C5CCD6", "#E8EDF2"],
    description: "Above 5,500m the air has so little oxygen that permanent human habitation is impossible."
  }
];

const MOUNTAIN_SPECIES = [
  // ═══════════════════════════════════════
  // FOOTHILLS (0 – 800 m)
  // ═══════════════════════════════════════
  {
    name: "Wild Boar",
    scientific: "Sus scrofa",
    type: "fauna",
    altitude: 50,
    emoji: "🐗",
    description: "Powerful omnivores that root through the forest floor searching for tubers, insects, and fungi. They live in groups called sounders.",
    facts: ["Can run up to 40 km/h", "Have an extraordinary sense of smell", "Piglets are born with striped coats for camouflage"]
  },
  {
    name: "Oak Tree",
    scientific: "Quercus robur",
    type: "flora",
    altitude: 100,
    emoji: "🌳",
    description: "Mighty deciduous trees that can live for over 1,000 years. Their acorns are a vital food source for dozens of species.",
    facts: ["A single oak can produce 70,000 acorns per year", "Oak wood has been used in shipbuilding for centuries", "Supports over 2,300 species of wildlife"]
  },
  {
    name: "Red Fox",
    scientific: "Vulpes vulpes",
    type: "fauna",
    altitude: 150,
    emoji: "🦊",
    description: "Incredibly adaptable predators found across the Northern Hemisphere. They hunt alone and can hear rodents digging underground.",
    facts: ["Can hear a watch ticking from 36 meters away", "Use Earth's magnetic field to hunt", "Their tail helps them balance and stay warm"]
  },
  {
    name: "Fern",
    scientific: "Polypodiopsida",
    type: "flora",
    altitude: 200,
    emoji: "🌿",
    description: "Ancient plants that have existed for over 360 million years — long before dinosaurs. They reproduce via spores, not seeds.",
    facts: ["Over 10,500 known species", "Some ferns can remove toxins from soil", "Fiddleheads are a delicacy in many cultures"]
  },
  {
    name: "European Badger",
    scientific: "Meles meles",
    type: "fauna",
    altitude: 280,
    emoji: "🦡",
    description: "Nocturnal burrowers that create elaborate underground sett systems. Some badger setts have been used for centuries by successive generations.",
    facts: ["Setts can have over 50 entrances", "They are fastidiously clean animals", "Can eat several hundred earthworms per night"]
  },
  {
    name: "Wild Strawberry",
    scientific: "Fragaria vesca",
    type: "flora",
    altitude: 350,
    emoji: "🍓",
    description: "Tiny but intensely flavored fruits that carpet forest clearings. Their flavor is far more concentrated than cultivated varieties.",
    facts: ["Used in traditional medicine for centuries", "Leaves can be brewed into tea", "Spread via runners that clone the parent plant"]
  },
  {
    name: "Roe Deer",
    scientific: "Capreolus capreolus",
    type: "fauna",
    altitude: 400,
    emoji: "🦌",
    description: "Elegant, small deer that browse on shrubs and grasses at woodland edges. Males grow short antlers that they shed each winter.",
    facts: ["Can delay embryo implantation for months", "Bark a sharp alarm call when startled", "Fawns are born with white spots for camouflage"]
  },
  {
    name: "Hazel Tree",
    scientific: "Corylus avellana",
    type: "flora",
    altitude: 480,
    emoji: "🌰",
    description: "Multi-stemmed trees prized for their edible nuts. Hazel coppicing is one of the oldest forms of woodland management.",
    facts: ["Catkins appear in February, one of the first signs of spring", "Hazelnuts are rich in vitamin E and healthy fats", "Dormice depend heavily on hazelnuts for winter fat reserves"]
  },
  {
    name: "Eurasian Jay",
    scientific: "Garrulus glandarius",
    type: "fauna",
    altitude: 550,
    emoji: "🐦",
    description: "Colorful, intelligent corvids known for their acorn-hoarding behavior. A single jay can bury thousands of acorns each autumn.",
    facts: ["Can mimic the calls of other birds and even cats", "Forgotten acorn caches help regenerate oak forests", "Flash bright wing patches to communicate"]
  },
  {
    name: "Blackberry Bramble",
    scientific: "Rubus fruticosus",
    type: "flora",
    altitude: 620,
    emoji: "🫐",
    description: "Thorny, sprawling shrubs that produce abundant dark berries in late summer. They form impenetrable thickets that shelter small mammals.",
    facts: ["A single bush can produce up to 20 kg of fruit", "Roots can grow over 4 meters deep", "The flowers provide critical nectar for pollinators"]
  },
  {
    name: "Red Squirrel",
    scientific: "Sciurus vulgaris",
    type: "fauna",
    altitude: 700,
    emoji: "🐿️",
    description: "Charismatic arboreal rodents with distinctive ear tufts. They cache seeds and nuts in hundreds of locations, relying on spatial memory to find them.",
    facts: ["Can locate buried nuts under a foot of snow", "Their ankle joints can rotate 180° for descending trees headfirst", "Tail acts as a parachute when leaping between branches"]
  },

  // ═══════════════════════════════════════
  // MONTANE FOREST (800 – 1,800 m)
  // ═══════════════════════════════════════
  {
    name: "Norway Spruce",
    scientific: "Picea abies",
    type: "flora",
    altitude: 850,
    emoji: "🌲",
    description: "Towering evergreen conifers that dominate montane forests. Their conical shape sheds heavy snow loads efficiently.",
    facts: ["Can grow up to 60 meters tall", "The oldest known spruce root system is 9,550 years old", "Traditional Christmas tree species"]
  },
  {
    name: "Brown Bear",
    scientific: "Ursus arctos",
    type: "fauna",
    altitude: 950,
    emoji: "🐻",
    description: "Powerful omnivores and apex predators of mountain forests. They hibernate for 5-7 months, surviving on stored body fat.",
    facts: ["Can smell food from 30 km away", "Newborn cubs weigh only about 500 grams", "Can run at speeds up to 56 km/h despite their size"]
  },
  {
    name: "Bluebell",
    scientific: "Hyacinthoides non-scripta",
    type: "flora",
    altitude: 1000,
    emoji: "💜",
    description: "Enchanting spring wildflowers that carpet woodland floors in violet-blue. They are an ancient woodland indicator species.",
    facts: ["Take 5-7 years to grow from seed to flower", "Bulbs contain a sticky sap once used as glue", "Half the world's bluebells are found in the UK"]
  },
  {
    name: "Eurasian Lynx",
    scientific: "Lynx lynx",
    type: "fauna",
    altitude: 1100,
    emoji: "🐱",
    description: "Europe's largest wild cat, a stealthy ambush predator. Their tufted ears enhance hearing, and huge paws act as snowshoes.",
    facts: ["Can detect a mouse at 75 meters", "Solitary and fiercely territorial", "The ear tufts funnel sound into the ears"]
  },
  {
    name: "Silver Birch",
    scientific: "Betula pendula",
    type: "flora",
    altitude: 1200,
    emoji: "🌳",
    description: "Graceful, fast-growing pioneer trees with distinctive white bark. They are among the first trees to colonize open ground.",
    facts: ["Bark contains betulin, a waterproofing compound", "Can produce 1 million seeds per year", "Sap can be tapped and fermented into birch wine"]
  },
  {
    name: "Grey Wolf",
    scientific: "Canis lupus",
    type: "fauna",
    altitude: 1300,
    emoji: "🐺",
    description: "Highly social apex predators that hunt in cooperative packs. Their howls can be heard up to 16 km away in open terrain.",
    facts: ["Pack hierarchy is based on a family structure", "Can travel 60+ km in a single day while hunting", "Wolves mate for life"]
  },
  {
    name: "Bilberry",
    scientific: "Vaccinium myrtillus",
    type: "flora",
    altitude: 1400,
    emoji: "🫐",
    description: "Low-growing shrubs producing dark, nutrient-rich berries. They thrive in acidic soils and are the wild ancestor of cultivated blueberries.",
    facts: ["Used by RAF pilots in WWII to improve night vision", "Contain high levels of anthocyanins", "Important food for grouse and bears"]
  },
  {
    name: "Golden Eagle",
    scientific: "Aquila chrysaetos",
    type: "fauna",
    altitude: 1500,
    emoji: "🦅",
    description: "Majestic raptors with wingspans over 2 meters. They can spot prey from 3 km away and dive at speeds exceeding 240 km/h.",
    facts: ["Mate for life, returning to the same nest each year", "Nests (eyries) can weigh over 450 kg after years of additions", "Can kill prey as large as young deer"]
  },
  {
    name: "Scots Pine",
    scientific: "Pinus sylvestris",
    type: "flora",
    altitude: 1600,
    emoji: "🌲",
    description: "Hardy, long-lived pines with distinctive orange-red bark on upper trunks. They form the backbone of many montane forests.",
    facts: ["Can live over 700 years", "One of the most widely distributed pines on Earth", "Bark becomes flame-resistant with age"]
  },
  {
    name: "Capercaillie",
    scientific: "Tetrao urogallus",
    type: "fauna",
    altitude: 1700,
    emoji: "🐓",
    description: "The largest grouse species, famous for their elaborate spring courtship displays. Males fan their tails, puff up, and produce bizarre clicking calls.",
    facts: ["Males can weigh up to 6.5 kg", "During display, males temporarily become deaf", "Chicks feed entirely on insects for their first few weeks"]
  },

  // ═══════════════════════════════════════
  // SUBALPINE ZONE (1,800 – 2,800 m)
  // ═══════════════════════════════════════
  {
    name: "Swiss Stone Pine",
    scientific: "Pinus cembra",
    type: "flora",
    altitude: 1900,
    emoji: "🌲",
    description: "Incredibly resilient pines that grow at the treeline. They can withstand temperatures below -40°C and winds exceeding 200 km/h.",
    facts: ["Seeds are dispersed almost exclusively by nutcrackers", "Wood releases aromatic oils that lower heart rate", "Can live up to 1,000 years"]
  },
  {
    name: "Chamois",
    scientific: "Rupicapra rupicapra",
    type: "fauna",
    altitude: 2000,
    emoji: "🐐",
    description: "Agile mountain goat-antelopes that bound across near-vertical cliffs with astonishing speed and precision.",
    facts: ["Can jump 2 meters high and 6 meters across", "Hooves have rubber-like soles for grip on rock", "Can run at 50 km/h on steep terrain"]
  },
  {
    name: "Rhododendron",
    scientific: "Rhododendron ferrugineum",
    type: "flora",
    altitude: 2100,
    emoji: "🌺",
    description: "Evergreen shrubs that blaze pink and crimson across subalpine slopes. They shelter small animals and insects from harsh conditions.",
    facts: ["Leaves are toxic to most herbivores", "Some species are over 100 years old", "National flower of Nepal"]
  },
  {
    name: "Marmot",
    scientific: "Marmota marmota",
    type: "fauna",
    altitude: 2200,
    emoji: "🦫",
    description: "Large, sociable ground squirrels that hibernate for up to 8 months. Their shrill warning whistles echo across alpine valleys.",
    facts: ["Heart rate drops from 200 to 30 bpm during hibernation", "Live in family groups of up to 20 individuals", "Can lose up to half their body weight during winter"]
  },
  {
    name: "Alpine Rose",
    scientific: "Rosa pendulina",
    type: "flora",
    altitude: 2300,
    emoji: "🌹",
    description: "Thornless wild roses that bloom in vibrant pink at subalpine altitudes. Their rose hips are extremely rich in vitamin C.",
    facts: ["Rose hips contain 20x more vitamin C than oranges", "One of the few thornless rose species", "Flowers attract high-altitude pollinators"]
  },
  {
    name: "Bearded Vulture",
    scientific: "Gypaetus barbatus",
    type: "fauna",
    altitude: 2500,
    emoji: "🦅",
    description: "Enormous scavengers with 2.8-meter wingspans. They feed primarily on bone marrow, dropping bones from great heights to crack them open.",
    facts: ["Diet is 70-90% bone", "Dye their feathers orange-red by bathing in iron-rich mud", "Nearly went extinct in the Alps — now recovering thanks to reintroduction programs"]
  },
  {
    name: "Dwarf Juniper",
    scientific: "Juniperus communis subsp. nana",
    type: "flora",
    altitude: 2650,
    emoji: "🌿",
    description: "Prostrate, ground-hugging conifers that grow mere centimeters per year. They cling to rocky slopes where no tree can stand upright.",
    facts: ["Berries take 2-3 years to ripen", "Used to flavor gin", "Can survive being buried under snow for months"]
  },

  // ═══════════════════════════════════════
  // ALPINE MEADOW (2,800 – 4,000 m)
  // ═══════════════════════════════════════
  {
    name: "Edelweiss",
    scientific: "Leontopodium nivale",
    type: "flora",
    altitude: 2900,
    emoji: "✿",
    description: "The legendary alpine flower, covered in dense white woolly hairs that protect against UV radiation and cold. A symbol of rugged mountain beauty.",
    facts: ["The woolly hairs act as natural UV sunscreen", "Symbol of alpinism and courage", "Once nearly driven to extinction by collectors"]
  },
  {
    name: "Alpine Ibex",
    scientific: "Capra ibex",
    type: "fauna",
    altitude: 3000,
    emoji: "🐐",
    description: "Stocky wild goats with massive curved horns up to 1 meter long. They navigate near-vertical dam walls and cliff faces to lick mineral salts.",
    facts: ["Horns can weigh up to 15 kg", "Climb nearly vertical dam walls for salt", "Were hunted to near-extinction — only 100 remained in 1821"]
  },
  {
    name: "Alpine Gentian",
    scientific: "Gentiana alpina",
    type: "flora",
    altitude: 3100,
    emoji: "💙",
    description: "Intensely blue trumpet flowers that bloom in alpine meadows. Their vivid color attracts the few pollinating insects at this altitude.",
    facts: ["The roots are used to make Gentian bitters", "Can bloom at altitudes above 4,000 m", "Some species can live for over 60 years"]
  },
  {
    name: "Alpine Chough",
    scientific: "Pyrrhocorax graculus",
    type: "fauna",
    altitude: 3200,
    emoji: "🐦‍⬛",
    description: "Acrobatic corvids with glossy black plumage and bright yellow bills. They have been spotted at the summit of Everest at 8,848 m.",
    facts: ["Recorded at the highest altitude of any bird — 8,848 m", "Perform spectacular aerial displays in updrafts", "Feed on scraps left by mountaineers at extreme altitudes"]
  },
  {
    name: "Moss Campion",
    scientific: "Silene acaulis",
    type: "flora",
    altitude: 3300,
    emoji: "🌸",
    description: "Dense cushion plants that hug the ground to escape the wind. A single cushion can be over 100 years old and still only 20 cm across.",
    facts: ["Grows only 1 cm per year", "The cushion shape traps warmth and moisture", "One of the highest-growing flowering plants"]
  },
  {
    name: "Snow Leopard",
    scientific: "Panthera uncia",
    type: "fauna",
    altitude: 3500,
    emoji: "🐆",
    description: "The legendary 'ghost of the mountains' — an elusive big cat perfectly adapted to the high peaks of Central Asia. Their thick tails serve as scarves and balancing aids.",
    facts: ["Can leap up to 15 meters in a single bound", "Use their thick tails as blankets while sleeping", "Fewer than 7,000 remain in the wild"]
  },
  {
    name: "Alpine Poppy",
    scientific: "Papaver alpinum",
    type: "flora",
    altitude: 3600,
    emoji: "🌼",
    description: "Delicate poppies with tissue-paper petals that flourish in rocky scree. They are among the highest-altitude flowering plants in Europe.",
    facts: ["Flowers track the sun across the sky", "Can grow in pure rock debris with almost no soil", "Petals last only a few days"]
  },
  {
    name: "Himalayan Tahr",
    scientific: "Hemitragus jemlahicus",
    type: "fauna",
    altitude: 3800,
    emoji: "🐐",
    description: "Shaggy-maned wild goats native to the Himalayas. Males sport spectacular thick coats and compete in dramatic head-butting contests.",
    facts: ["Can navigate cliffs with 70° slopes", "Males shed their thick winter coats in summer", "Introduced to New Zealand where they are now invasive"]
  },

  // ═══════════════════════════════════════
  // NIVAL ZONE (4,000 – 5,500 m)
  // ═══════════════════════════════════════
  {
    name: "Glacier Buttercup",
    scientific: "Ranunculus glacialis",
    type: "flora",
    altitude: 4200,
    emoji: "❄️",
    description: "The highest-altitude flowering plant in Europe, found up to 4,275 m. Its flowers change from white to pink to dark red as they age.",
    facts: ["Contains antifreeze proteins in its cells", "Flowers change color as they age — white → pink → crimson", "Has been found growing at 4,275 m in the Alps"]
  },
  {
    name: "Himalayan Jumping Spider",
    scientific: "Euophrys omnisuperstes",
    type: "fauna",
    altitude: 4400,
    emoji: "🕷️",
    description: "Tiny predators that are among the highest permanent residents on Earth. They feed on insects blown up by the wind from lower altitudes.",
    facts: ["Found at 6,700 m on Everest — highest known permanent resident", "Feeds on wind-blown insects from below", "Only a few millimeters in size"]
  },
  {
    name: "Cushion Plants",
    scientific: "Various species",
    type: "flora",
    altitude: 4600,
    emoji: "🌱",
    description: "Ultra-compact plant forms that resist extreme wind, cold, and UV. Their dome shape can be 10°C warmer inside than the surrounding air.",
    facts: ["Internal temperature can be 10°C warmer than ambient", "Some cushions are over 3,000 years old", "Dome shape minimizes wind damage and water loss"]
  },
  {
    name: "Lammergeier",
    scientific: "Gypaetus barbatus",
    type: "fauna",
    altitude: 4800,
    emoji: "🦅",
    description: "Also called the Bearded Vulture, these magnificent birds soar at extreme altitudes. They are the only vertebrates whose diet is almost entirely bone.",
    facts: ["Can digest bones in about 24 hours", "Drop bones from 50-80m to shatter them on rocks", "Wingspan can reach 2.83 meters"]
  },
  {
    name: "Snow Algae",
    scientific: "Chlamydomonas nivalis",
    type: "flora",
    altitude: 5000,
    emoji: "🔴",
    description: "Microscopic algae that turn snowfields pink or red — known as 'watermelon snow'. They produce carotenoid pigments as sunscreen against intense UV.",
    facts: ["Gives snow a faint watermelon scent", "Can reduce snow reflectivity and accelerate melting", "Produces natural antifreeze to survive in snow"]
  },
  {
    name: "Bar-headed Goose",
    scientific: "Anser indicus",
    type: "fauna",
    altitude: 5200,
    emoji: "🪿",
    description: "The world's highest-flying bird, migrating directly over the Himalayas at altitudes where jetliners cruise. Their blood has a supercharged affinity for oxygen.",
    facts: ["Fly at altitudes up to 8,800 m", "Cross the Himalayas in a single day", "Hemoglobin binds oxygen far more efficiently than other birds"]
  },

  // ═══════════════════════════════════════
  // SUMMIT / DEATH ZONE (5,500 – 8,849 m)
  // ═══════════════════════════════════════
  {
    name: "High-altitude Lichen",
    scientific: "Lecidea sp.",
    type: "flora",
    altitude: 5800,
    emoji: "🟡",
    description: "Crusty, rock-hugging organisms — part fungus, part alga — that survive where nothing else can. They grow fractions of a millimeter per year.",
    facts: ["Can survive in the vacuum of outer space", "Some colonies are over 8,000 years old", "Grow less than 1 mm per year"]
  },
  {
    name: "Tardigrade",
    scientific: "Tardigrada",
    type: "fauna",
    altitude: 6000,
    emoji: "🔬",
    description: "Microscopic 'water bears' that can survive virtually anything — vacuum, radiation, boiling, freezing. Found in thin ice films on high-altitude rocks.",
    facts: ["Can survive temperatures from -272°C to 150°C", "Survived 10 days in the vacuum of space", "Can go without food or water for 30 years in a dormant state"]
  },
  {
    name: "Cryophilic Bacteria",
    scientific: "Psychrobacter sp.",
    type: "flora",
    altitude: 6500,
    emoji: "🦠",
    description: "Cold-loving microbes that thrive in ice and frozen rock. They represent the absolute limit of life on Earth's highest peaks.",
    facts: ["Active at temperatures well below 0°C", "Found in Himalayan ice cores at extreme altitudes", "May hold clues to life on Mars or Europa"]
  },
  {
    name: "Alpine Chough (Summit)",
    scientific: "Pyrrhocorax graculus",
    type: "fauna",
    altitude: 7000,
    emoji: "🐦‍⬛",
    description: "Spotted scavenging at camps as high as 8,000 m on Everest. They are the highest-recorded birds in non-migratory flight.",
    facts: ["Seen at Camp IV on Everest (7,920 m)", "Feed on scraps left by climbers", "Can survive oxygen levels 60% lower than sea level"]
  },
  {
    name: "Wind-blown Insects",
    scientific: "Various Diptera",
    type: "fauna",
    altitude: 7500,
    emoji: "🪰",
    description: "Tiny flies and spiders are swept to extreme altitudes by powerful updrafts, forming an 'aeolian zone' of wind-deposited life on barren snowfields.",
    facts: ["Not permanent residents — carried up by thermal winds", "Provide food for high-altitude spiders", "Part of the 'aeolian biome' ecosystem"]
  },
  {
    name: "Summit Microbes",
    scientific: "Extremophile community",
    type: "flora",
    altitude: 8200,
    emoji: "🧬",
    description: "At the absolute pinnacle, only microbial life persists — clinging to rock surfaces and ice crystals in a world of hurricane-force winds and lethal UV.",
    facts: ["DNA repair mechanisms work in near-vacuum conditions", "Represent the upper limit of known life on Earth", "Study of these organisms informs astrobiology research"]
  },
  {
    name: "Mount Everest Summit",
    scientific: "8,849 meters — the roof of the world",
    type: "landmark",
    altitude: 8849,
    emoji: "🏔️",
    description: "The highest point on Earth. At this altitude, oxygen levels are just one-third of sea level. Only the hardiest microbes can survive — and even they barely cling to life.",
    facts: ["First summited by Tenzing Norgay & Edmund Hillary in 1953", "The jet stream can blast the summit with 280 km/h winds", "The summit rock is marine limestone — once an ancient seabed"]
  }
];
