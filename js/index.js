function rollDice(max) {
  return Math.floor(Math.random() * max + 1);
}

function displayDiceRoll(max) {
  const result = rollDice(max);
  document.getElementById("diceRollOutput").innerText = result;
}

// Returns a number between 0 and (max - 1), useful for array indexes
function rollIndex(max) {
  return Math.floor(Math.random() * max);
}

// Returns a random entry from an array
/** @param {any[]} thing */
function getRandomFrom(thing) {
  return thing[rollIndex(thing.length)];
}

function starColor() {
  const starColors = ["Yellow", "Yellow", "Yellow", "Red", "Red", "Green", "Green", "Blue"];

  return getRandomFrom(starColors);
}

function starShape(color) {
  const starShapes = { Yellow: "Circle", Red: "Square", Green: "Triangle", Blue: "Double Circle" };

  return starShapes[color];
}

function starSignal() {
  const d20Roll = rollDice(20);
  return d20Roll === 20;
}

function generateStarSystems() {
  const quantity = document.getElementById("starSystemQuantity").value;
  console.log("quantity:", quantity);
  const stars = [];
  for (let i = 0; i < quantity; i++) {
    // Do star system generation here
    const color = starColor();
    const shape = starShape(color);
    const distance = rollDice(6);
    const signal = starSignal();
    stars.push({ color, shape, distance, signal });
  }
  // Display results here
  let results = "";
  stars.forEach((star) => {
    const line = `Color/Shape: ${star.color}/${star.shape}, Distance: ${star.distance}, Signal Detected? ${star.signal}`;
    results += line + "<br />";
  });
  document.getElementById("starSystemOutput").innerHTML = results;
}

function generateStarName() {
  // Generate name
  let starName = "";
  const starNames1 = [
    "Alte",
    "Beetle",
    "Belze",
    "Albe",
    "Dent",
    "Dolphi",
    "Hu",
    "Garbe",
    "Jatra",
    "Mekin",
    "Hoo",
    "Staris",
    "Stela",
    "Mice",
    "Mince",
    "Zenki",
    "Tulla",
    "Tupli",
    "Shallala",
    "Garfunkta",
  ];
  starName += getRandomFrom(starNames1);
  const starNames2 = [
    "man",
    "mue",
    "gra",
    "xiinsi",
    "yelk",
    "kite",
    "ville",
    "varisi",
    "ogloo",
    "tina",
    "tansa",
    "broke",
    "seksi",
    "nopei",
    "goa",
    "needle",
    "fisha",
    "tua",
    "seveni",
    "havi",
  ];
  starName += getRandomFrom(starNames2);

  const starNames3 = [
    "s",
    "ds",
    "fy",
    "ians",
    "ns",
    "n",
    "gish",
    "cs",
    "rs",
    "ax",
    "shshsh",
    "ls",
    "t",
    "ut",
    "ak",
    "a",
    "ad",
    "ilsh",
    "and",
    "not",
  ];
  starName += getRandomFrom(starNames3);

  // Display name
  document.getElementById("starNameOutput").innerText = starName;
}

function generateStarTraits() {
  const races = [
    "Zalaxians",
    "Astralites",
    "Plasmic Morphlings",
    "Xylonites",
    "Phakrine",
    "Celestobians",
    "Nova Serpents",
    "Quasar Quadrupeds",
    "Nebulon Navigators",
    "Aquatic Lepidopterans",
    "Aetheric Equ",
    "Xeno-Xenolinguists",
    "Spectrum Skaters",
    "Plasmoid Pilgrims",
    "Gravitational Giants",
    "Stellar Sylphs",
    "Quantum Quills",
    "Pyroclasmic Phantoms",
    "Illusory Imps",
    "Cosmo-Croakers",
  ];
  const race = getRandomFrom(races);

  const economies = [
    "Declining",
    "Destitute",
    "Low Supply",
    "Comfortable",
    "Developing",
    "Medium Supply",
    "Flourishing",
    "Wealthy",
  ];
  const economy = getRandomFrom(economies);

  const conflictLevels = ["Low", "Low", "Low", "Medium", "Medium", "High"];
  const conflictLevel = getRandomFrom(conflictLevels);

  const conflictDescriptions = {
    Low: [
      "Gentle",
      "Low",
      "Mild",
      "Peaceful",
      "Relaxed",
      "Stable",
      "Tranquil",
      "Trivial",
      "Nonthreatening",
      "Untroubled",
    ],
    Medium: [
      "Belligerent",
      "Boisterous",
      "Fractious",
      "Intermittent",
      "Medium",
      "Rowdy",
      "Sporadic",
      "Testy",
      "Unruly",
      "Unstable",
    ],
    High: [
      "Aggressive",
      "Alarming",
      "At War",
      "Critical",
      "Dangerous",
      "Destructive",
      "Formidable",
      "High",
      "Lawless",
      "Perilous",
    ],
  };
  const conflictDescription = getRandomFrom(conflictDescriptions[conflictLevel]);

  const result = `Race: ${race}<br />Economy: ${economy}<br />Level of Conflict: ${conflictDescription}`;
  document.getElementById("starTraitsOutput").innerHTML = result;
}

const typesOfPlanets = [
  "Giant Planet",
  "Ice Giant",
  "Mesoplanet",
  "Planetar",
  "Mini-Neptune",
  "Super-Earth",
  "Super-Jupiter",
  "Sub-Earth",
];
const planetBiomes = [
  "lush",
  "barren",
  "dead",
  "exotic",
  "mega exotic",
  "scorched",
  "frozen",
  "toxic",
  "marsh",
  "volcanic",
];
const planetAtmospheres = [
  "Methane",
  "Oxygen",
  "Carbon Dioxide",
  "Nitrogen",
  "Hydrogen",
  "Helium",
  "Ammonia",
  "Water Vapor",
  "Sulfur Dioxide",
  "Carbon Monoxide",
  "Nitrous Oxide",
  "Ozone",
  "Neon",
  "Argon",
  "Xenon",
  "Methanol",
  "Ethane",
  "Propane",
  "Nitric Oxide",
  "Hydrogen Sulfide",
];

function generateSystemPlanets() {
  const quantityOfPlanets = rollDice(8) - 1;
  let result = "";

  if (quantityOfPlanets === 0) {
    result = "No planets detected here.";
  } else {
    result = `${quantityOfPlanets} planets found:<br />`;
    for (let i = 0; i < quantityOfPlanets; i++) {
      const typeOfPlanet = getRandomFrom(typesOfPlanets);
      const quantityOfMoons = rollDice(6) - 1;
      const biome = getRandomFrom(planetBiomes);
      const atmosphere = getRandomFrom(planetAtmospheres);
      result += `A ${typeOfPlanet} with ${quantityOfMoons} moons, a biome that is ${biome}, and an atmosphere chiefly comprised of ${atmosphere}.<br />`;
    }
  }

  document.getElementById("systemPlanetsOutput").innerHTML = result;
}

function generatePlanetName() {
  let planetName = "";

  const planetNames1 = [
    "Dif",
    "Golga",
    "Im",
    "Men",
    "Uk",
    "Sinh",
    "Fin",
    "Garb",
    "Arash",
    "Helh",
    "Leh",
    "Otal",
    "Sic",
    "Jab",
    "Op",
    "Lil",
    "Ay",
    "Hb",
    "Nau",
    "Rrr",
  ];
  planetName += getRandomFrom(planetNames1);

  const planetNames2 = [
    "lallo",
    "hin",
    "jev",
    "viy",
    "err",
    "pol",
    "kil",
    "jil",
    "lec",
    "ces",
    "xex",
    "zet",
    "tex",
    "dog",
    "cat",
    "tank",
    "wat",
    "rrr",
    "Æ",
    "ben",
  ];
  planetName += getRandomFrom(planetNames2);

  const planetNames3 = [
    "sin",
    "fin",
    "alo",
    "not",
    "Å",
    "rot",
    "vex",
    "vax",
    "xav",
    "zex",
    "klob",
    "dog",
    "rrr",
    "mo",
    "wall",
    "all",
    "ottin",
    "ulgh",
    "shi",
    "glad",
  ];
  planetName += getRandomFrom(planetNames3);

  document.getElementById("planetNameOutput").innerHTML = planetName;
}

function generatePlanetExploration() {
  const explorationTypes = ["Nothing", "Fauna", "Fauna", "Flora", "Civs", "Anomaly"];
  const explorations = [];
  for (let i = 0; i < 6; i++) {
    explorations.push(getRandomFrom(explorationTypes));
  }
  const result = `You discover ${explorations.join(", ")}`;
  document.getElementById("planetExplorationOutput").innerHTML = result;
}

const kardashevTypes = {
  1: 1,
  2: 1,
  3: 1,
  4: 1,
  5: 2,
  6: 2,
  7: 2,
  8: 3,
};
const starBonus = {
  Yellow: 0,
  Red: 1,
  Green: 2,
  Blue: 3,
};

function generateCivType() {
  const starType = document.getElementById("civTypeStar").value;
  const typeRoll = rollDice(8);
  let totalRoll = typeRoll + starBonus[starType];
  // Max is an '8'
  totalRoll = totalRoll > 8 ? 8 : totalRoll;
  const finalType = kardashevTypes[totalRoll];
  const result = `Kardashev Type ${finalType}`;
  document.getElementById("civTypeOutput").innerHTML = result;
}
