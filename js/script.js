const sexes = ["female", "male"];
let confirmedRace = "";
let lastName = "";
let confirmedAlignment = "";

import {
  femaleNames,
  maleNames,
  humanNames,
  elfNames,
  dwarfNames,
  gnomeNames,
  halflingNames,
  orcNames,
  tieflingNames,
  dragonbornNames,
  dragonbornClans,
} from "./names.js";

import {
  ages,
  races,
  jobs,
  sexualOrientations,
  relationshipStatuses,
  children,
  overallAppearances,
  eyeColors,
  hairColors,
  hairStyles,
  bodyTypes,
  clothings,
  alignments,
  skinTones,
  beliefsLG,
  beliefsLN,
  beliefsLE,
  beliefsNG,
  beliefsNN,
  beliefsNE,
  beliefsCG,
  beliefsCN,
  beliefsCE,
  personalityTraits,
  plotHooks,
} from "./arrays.js";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function setRandomSexAndFirstName() {
  const confirmedSex = getRandomElement(sexes);
  const firstName =
    confirmedSex === "female"
      ? getRandomElement(femaleNames)
      : getRandomElement(maleNames);

  document.getElementById("sex").innerText =
    confirmedSex === "female" ? "Female" : "Male";

  let pronoun = document.getElementsByClassName("pronoun");
  for (let i = 0; i < pronoun.length; i++) {
    if (confirmedSex == "female") {
      pronoun[i].innerText = "She";
    } else {
      pronoun[i].innerText = "He";
    }
  }

  return (document.getElementById("firstName").innerText = firstName);
}

function setRandomAge() {
  let age = getRandomElement(ages);
  return (document.getElementById("age").innerText = age);
}

function setRandomRaceAndLastName() {
  confirmedRace = getRandomElement(races);
  document.getElementById("race").innerText = confirmedRace;
  if (
    confirmedRace == "Elf" ||
    confirmedRace == "Half-Elf" ||
    confirmedRace == "High Elf" ||
    confirmedRace == "Wood Elf" ||
    confirmedRace == "Eladrin Elf"
  ) {
    lastName = `${getRandomElement(elfNames)}`;
  } else if (confirmedRace == "Human") {
    lastName = `${getRandomElement(humanNames)}`;
  } else if (
    confirmedRace == "Dwarf" ||
    confirmedRace == "Hill Dwarf" ||
    confirmedRace == "Mountain Dwarf"
  ) {
    lastName = `${dwarfNames[Math.floor(Math.random() * dwarfNames.length)]}`;
  } else if (
    confirmedRace == "Gnome" ||
    confirmedRace == "Deep Gnome" ||
    confirmedRace == "Rock Gnome"
  ) {
    lastName = `${gnomeNames[Math.floor(Math.random() * gnomeNames.length)]}`;
  } else if (
    confirmedRace == "Halfling" ||
    confirmedRace == "Lightfoot Halfling" ||
    confirmedRace == "StoutHalfling"
  ) {
    lastName = `${
      halflingNames[Math.floor(Math.random() * halflingNames.length)]
    }`;
  } else if (confirmedRace == "Orc" || confirmedRace == "Half-Orc") {
    lastName = `${orcNames[Math.floor(Math.random() * orcNames.length)]}`;
  } else if (confirmedRace == "Tiefling") {
    lastName = `${
      tieflingNames[Math.floor(Math.random() * tieflingNames.length)]
    }`;
  } else if (confirmedRace == "Dragonborn") {
    lastName = `${getRandomElement(dragonbornNames)}
     of the Clan ${getRandomElement(dragonbornClans)}`;
  }
  return (document.getElementById("surname").innerText = lastName);
}

function setRandomJob() {
  getRandomElement(jobs);
  return (document.getElementById("job").innerText = getRandomElement(jobs));
}

function setRandomOrientation() {
  return (document.getElementById("orientation").innerText =
    getRandomElement(sexualOrientations));
}

function setRandomRelationship() {
  return (document.getElementById("relationship").innerText =
    getRandomElement(relationshipStatuses));
}

function setRandomChildren() {
  return (document.getElementById("children").innerText =
    getRandomElement(children));
}

function setOverallDescription() {
  return (document.getElementById("overallDescription").innerText =
    getRandomElement(overallAppearances));
}

function setEyes() {
  return (document.getElementById("eyeColor").innerText =
    getRandomElement(eyeColors));
}

function setHair() {
  return (document.getElementById("hairColor").innerText =
    getRandomElement(hairColors));
}

function setStyle() {
  return (document.getElementById("hairStyle").innerText =
    getRandomElement(hairStyles));
}

function setBodyDescription() {
  return (document.getElementById("bodyDescription").innerText =
    getRandomElement(bodyTypes));
}

function setSkinTone() {
  return (document.getElementById("skinToneDescription").innerText =
    getRandomElement(skinTones));
}

function setClothing() {
  return (document.getElementById("clothing").innerText =
    getRandomElement(clothings));
}

function rollThreeDice() {
  let rollTotal = 0;
  for (let i = 0; i < 3; i++) {
    rollTotal += Math.floor(Math.random() * 6) + 1;
  }
  return rollTotal;
}

function setRolls() {
  if (confirmedRace == "Dragonborn") {
    document.getElementById("str").innerText = `${rollThreeDice() + 2} (+2)`;
    document.getElementById("dex").innerText = rollThreeDice();
    document.getElementById("con").innerText = rollThreeDice();
    document.getElementById("int").innerText = rollThreeDice();
    document.getElementById("wis").innerText = rollThreeDice();
    document.getElementById("cha").innerText = `${rollThreeDice() + 1} (+1)`;
  } else if (confirmedRace == "Dwarf") {
    document.getElementById("str").innerText = rollThreeDice();
    document.getElementById("dex").innerText = rollThreeDice();
    document.getElementById("con").innerText = `${rollThreeDice() + 2} (+2)`;
    document.getElementById("int").innerText = rollThreeDice();
    document.getElementById("wis").innerText = rollThreeDice();
    document.getElementById("cha").innerText = rollThreeDice();
  } else if (confirmedRace == "Hill Dwarf") {
    document.getElementById("str").innerText = rollThreeDice();
    document.getElementById("dex").innerText = rollThreeDice();
    document.getElementById("con").innerText = `${rollThreeDice() + 2} (+2)`;
    document.getElementById("int").innerText = rollThreeDice();
    document.getElementById("wis").innerText = `${rollThreeDice() + 1} (+1)`;
    document.getElementById("cha").innerText = rollThreeDice();
  } else if (confirmedRace == "Mountain Dwarf") {
    document.getElementById("str").innerText = `${rollThreeDice() + 2} (+2)`;
    document.getElementById("dex").innerText = rollThreeDice();
    document.getElementById("con").innerText = `${rollThreeDice() + 2} (+2)`;
    document.getElementById("int").innerText = rollThreeDice();
    document.getElementById("wis").innerText = rollThreeDice();
    document.getElementById("cha").innerText = rollThreeDice();
  } else if (confirmedRace == "Elf" || confirmedRace == "Halfling") {
    document.getElementById("str").innerText = rollThreeDice();
    document.getElementById("dex").innerText = `${rollThreeDice() + 2} (+2)`;
    document.getElementById("con").innerText = rollThreeDice();
    document.getElementById("int").innerText = rollThreeDice();
    document.getElementById("wis").innerText = rollThreeDice();
    document.getElementById("cha").innerText = rollThreeDice();
  } else if (confirmedRace == "Eladrin Elf" || confirmedRace == "High Elf") {
    document.getElementById("str").innerText = rollThreeDice();
    document.getElementById("dex").innerText = `${rollThreeDice() + 2} (+2)`;
    document.getElementById("con").innerText = rollThreeDice();
    document.getElementById("int").innerText = `${rollThreeDice() + 1} (+1)`;
    document.getElementById("wis").innerText = rollThreeDice();
    document.getElementById("cha").innerText = rollThreeDice();
  } else if (confirmedRace == "Wood Elf") {
    document.getElementById("str").innerText = rollThreeDice();
    document.getElementById("dex").innerText = `${rollThreeDice() + 2} (+2)`;
    document.getElementById("con").innerText = rollThreeDice();
    document.getElementById("int").innerText = `${rollThreeDice() + 1} (+1)`;
    document.getElementById("wis").innerText = rollThreeDice();
    document.getElementById("cha").innerText = rollThreeDice();
  } else if (confirmedRace == "Half-Elf") {
    document.getElementById("str").innerText = rollThreeDice();
    document.getElementById("dex").innerText = `${rollThreeDice() + 1} (+1)`;
    document.getElementById("con").innerText = rollThreeDice();
    document.getElementById("int").innerText = `${rollThreeDice() + 1} (+1)`;
    document.getElementById("wis").innerText = rollThreeDice();
    document.getElementById("cha").innerText = `${rollThreeDice() + 2} (+2)`;
  } else if (confirmedRace == "Gnome") {
    document.getElementById("str").innerText = rollThreeDice();
    document.getElementById("dex").innerText = rollThreeDice();
    document.getElementById("con").innerText = rollThreeDice();
    document.getElementById("int").innerText = `${rollThreeDice() + 2} (+2)`;
    document.getElementById("wis").innerText = rollThreeDice();
    document.getElementById("cha").innerText = rollThreeDice();
  } else if (confirmedRace == "Deep Gnome") {
    document.getElementById("str").innerText = rollThreeDice();
    document.getElementById("dex").innerText = `${rollThreeDice() + 1} (+1)`;
    document.getElementById("con").innerText = rollThreeDice();
    document.getElementById("int").innerText = `${rollThreeDice() + 2} (+2)`;
    document.getElementById("wis").innerText = rollThreeDice();
    document.getElementById("cha").innerText = rollThreeDice();
  } else if (confirmedRace == "Rock Gnome") {
    document.getElementById("str").innerText = rollThreeDice();
    document.getElementById("dex").innerText = rollThreeDice();
    document.getElementById("con").innerText = `${rollThreeDice() + 1} (+1)`;
    document.getElementById("int").innerText = `${rollThreeDice() + 2} (+2)`;
    document.getElementById("wis").innerText = rollThreeDice();
    document.getElementById("cha").innerText = rollThreeDice();
  } else if (confirmedRace == "Lightfoot Halfling") {
    document.getElementById("str").innerText = rollThreeDice();
    document.getElementById("dex").innerText = `${rollThreeDice() + 2} (+2)`;
    document.getElementById("con").innerText = rollThreeDice();
    document.getElementById("int").innerText = rollThreeDice();
    document.getElementById("wis").innerText = rollThreeDice();
    document.getElementById("cha").innerText = `${rollThreeDice() + 1} (+1)`;
  } else if (confirmedRace == "Stout Halfling") {
    document.getElementById("str").innerText = rollThreeDice();
    document.getElementById("dex").innerText = `${rollThreeDice() + 2} (+2)`;
    document.getElementById("con").innerText = `${rollThreeDice() + 1} (+1)`;
    document.getElementById("int").innerText = rollThreeDice();
    document.getElementById("wis").innerText = rollThreeDice();
    document.getElementById("cha").innerText = rollThreeDice();
  } else if (confirmedRace == "Orc" || confirmedRace == "Half-Orc") {
    document.getElementById("str").innerText = `${rollThreeDice() + 2} (+2)`;
    document.getElementById("dex").innerText = rollThreeDice();
    document.getElementById("con").innerText = `${rollThreeDice() + 1} (+1)`;
    document.getElementById("int").innerText = rollThreeDice();
    document.getElementById("wis").innerText = rollThreeDice();
    document.getElementById("cha").innerText = rollThreeDice();
  } else if (confirmedRace == "Human") {
    document.getElementById("str").innerText = `${rollThreeDice() + 1} (+1)`;
    document.getElementById("dex").innerText = `${rollThreeDice() + 1} (+1)`;
    document.getElementById("con").innerText = `${rollThreeDice() + 1} (+1)`;
    document.getElementById("int").innerText = `${rollThreeDice() + 1} (+1)`;
    document.getElementById("wis").innerText = `${rollThreeDice() + 1} (+1)`;
    document.getElementById("cha").innerText = `${rollThreeDice() + 1} (+1)`;
  } else if (confirmedRace == "Tiefling") {
    document.getElementById("str").innerText = rollThreeDice();
    document.getElementById("dex").innerText = rollThreeDice();
    document.getElementById("con").innerText = rollThreeDice();
    document.getElementById("int").innerText = `${rollThreeDice() + 1} (+1)`;
    document.getElementById("wis").innerText = rollThreeDice();
    document.getElementById("cha").innerText = `${rollThreeDice() + 2} (+2)`;
  }
}

function getRandomAlignment() {
  let confirmedAlignment =
    alignments[Math.floor(Math.random() * alignments.length)];
  return confirmedAlignment;
}

function setRandomAlignment() {
  return (document.getElementById("alignment").innerText =
    getRandomAlignment());
}

function getRandomBeliefLG() {
  return beliefsLG[Math.floor(Math.random() * beliefsLG.length)];
}

function setBeliefsLG() {
  document.getElementById("firstBelief").innerText = getRandomBeliefLG();
  document.getElementById("secondBelief").innerText = getRandomBeliefLG();
  document.getElementById("thirdBelief").innerText = getRandomBeliefLG();
  document.getElementById("alignment").innerText = "Lawful Good";
}

function getRandomBeliefLN() {
  return beliefsLN[Math.floor(Math.random() * beliefsLN.length)];
}

function setBeliefsLN() {
  document.getElementById("firstBelief").innerText = getRandomBeliefLN();
  document.getElementById("secondBelief").innerText = getRandomBeliefLN();
  document.getElementById("thirdBelief").innerText = getRandomBeliefLN();
  document.getElementById("alignment").innerText = "Lawful Neutral";
}

function getRandomBeliefLE() {
  let confirmedBeliefLE =
    beliefsLE[Math.floor(Math.random() * beliefsLE.length)];
  return confirmedBeliefLE;
}

function setBeliefsLE() {
  document.getElementById("firstBelief").innerText = getRandomBeliefLE();
  document.getElementById("secondBelief").innerText = getRandomBeliefLE();
  document.getElementById("thirdBelief").innerText = getRandomBeliefLE();
  document.getElementById("alignment").innerText = "Lawful Evil";
}

function getRandomBeliefNG() {
  return beliefsNG[Math.floor(Math.random() * beliefsNG.length)];
}

function setBeliefsNG() {
  document.getElementById("firstBelief").innerText = getRandomBeliefNG();
  document.getElementById("secondBelief").innerText = getRandomBeliefNG();
  document.getElementById("thirdBelief").innerText = getRandomBeliefNG();
  document.getElementById("alignment").innerText = "Neutral Good";
}

function getRandomBeliefNN() {
  return beliefsNN[Math.floor(Math.random() * beliefsNN.length)];
}

function setBeliefsNN() {
  document.getElementById("firstBelief").innerText = getRandomBeliefNN();
  document.getElementById("secondBelief").innerText = getRandomBeliefNN();
  document.getElementById("thirdBelief").innerText = getRandomBeliefNN();
  document.getElementById("alignment").innerText = "True Neutral";
}

function getRandomBeliefNE() {
  return beliefsNE[Math.floor(Math.random() * beliefsNE.length)];
}

function setBeliefsNE() {
  document.getElementById("firstBelief").innerText = getRandomBeliefNE();
  document.getElementById("secondBelief").innerText = getRandomBeliefNE();
  document.getElementById("thirdBelief").innerText = getRandomBeliefNE();
  document.getElementById("alignment").innerText = "Neutral Evil";
}

function getRandomBeliefCG() {
  return beliefsCG[Math.floor(Math.random() * beliefsCG.length)];
}

function setBeliefsCG() {
  document.getElementById("firstBelief").innerText = getRandomBeliefCG();
  document.getElementById("secondBelief").innerText = getRandomBeliefCG();
  document.getElementById("thirdBelief").innerText = getRandomBeliefCG();
  document.getElementById("alignment").innerText = "Chaotic Good";
}

function getRandomBeliefCN() {
  return beliefsCN[Math.floor(Math.random() * beliefsCN.length)];
}

function setBeliefsCN() {
  document.getElementById("firstBelief").innerText = getRandomBeliefCN();
  document.getElementById("secondBelief").innerText = getRandomBeliefCN();
  document.getElementById("thirdBelief").innerText = getRandomBeliefCN();
  document.getElementById("alignment").innerText = "Chaotic Neutral";
}

function getRandomBeliefCE() {
  return beliefsCE[Math.floor(Math.random() * beliefsCE.length)];
}

function setBeliefsCE() {
  document.getElementById("firstBelief").innerText = getRandomBeliefCE();
  document.getElementById("secondBelief").innerText = getRandomBeliefCE();
  document.getElementById("thirdBelief").innerText = getRandomBeliefCE();
  document.getElementById("alignment").innerText = "Chaotic Evil";
}

function randomizeBeliefs() {
  getRandomAlignment();
  setRandomAlignment();
  if (confirmedAlignment == "Lawful Good") {
    document.getElementById("firstBelief").innerText = getRandomBeliefLG();
    document.getElementById("secondBelief").innerText = getRandomBeliefLG();
    document.getElementById("thirdBelief").innerText = getRandomBeliefLG();
    document.getElementById("alignment").innerText = "Lawful Good";
  } else if (confirmedAlignment == "Lawful Neutral") {
    document.getElementById("firstBelief").innerText = getRandomBeliefLN();
    document.getElementById("secondBelief").innerText = getRandomBeliefLN();
    document.getElementById("thirdBelief").innerText = getRandomBeliefLN();
    document.getElementById("alignment").innerText = "Lawful Neutral";
  } else if (confirmedAlignment == "Lawful Evil") {
    document.getElementById("firstBelief").innerText = getRandomBeliefLE();
    document.getElementById("secondBelief").innerText = getRandomBeliefLE();
    document.getElementById("thirdBelief").innerText = getRandomBeliefLE();
    document.getElementById("alignment").innerText = "Lawful Evil";
  } else if (confirmedAlignment == "Neutral Good") {
    document.getElementById("firstBelief").innerText = getRandomBeliefNG();
    document.getElementById("secondBelief").innerText = getRandomBeliefNG();
    document.getElementById("thirdBelief").innerText = getRandomBeliefNG();
    document.getElementById("alignment").innerText = "Neutral Good";
  } else if (confirmedAlignment == "True Neutral") {
    document.getElementById("firstBelief").innerText = getRandomBeliefNN();
    document.getElementById("secondBelief").innerText = getRandomBeliefNN();
    document.getElementById("thirdBelief").innerText = getRandomBeliefNN();
    document.getElementById("alignment").innerText = "True Neutral";
  } else if (confirmedAlignment == "Neutral Evil") {
    document.getElementById("firstBelief").innerText = getRandomBeliefNE();
    document.getElementById("secondBelief").innerText = getRandomBeliefNE();
    document.getElementById("thirdBelief").innerText = getRandomBeliefNE();
    document.getElementById("alignment").innerText = "Neutral Evil";
  } else if (confirmedAlignment == "Chaotic Good") {
    document.getElementById("firstBelief").innerText = getRandomBeliefCG();
    document.getElementById("secondBelief").innerText = getRandomBeliefCG();
    document.getElementById("thirdBelief").innerText = getRandomBeliefCG();
    document.getElementById("alignment").innerText = "Chaotic Good";
  } else if (confirmedAlignment == "Chaotic Neutral") {
    document.getElementById("firstBelief").innerText = getRandomBeliefCN();
    document.getElementById("secondBelief").innerText = getRandomBeliefCN();
    document.getElementById("thirdBelief").innerText = getRandomBeliefCN();
    document.getElementById("alignment").innerText = "Chaotic Neutral";
  } else if (confirmedAlignment == "Chaotic Evil") {
    document.getElementById("firstBelief").innerText = getRandomBeliefCE();
    document.getElementById("secondBelief").innerText = getRandomBeliefCE();
    document.getElementById("thirdBelief").innerText = getRandomBeliefCE();
    document.getElementById("alignment").innerText = "Chaotic Evil";
  }
}

function getRandomTrait() {
  return personalityTraits[
    Math.floor(Math.random() * personalityTraits.length)
  ];
}

function setTraits() {
  document.getElementById("firstTrait").innerText = getRandomTrait();
  document.getElementById("secondTrait").innerText = getRandomTrait();
}

function getRandomPlotHook() {
  return plotHooks[Math.floor(Math.random() * plotHooks.length)];
}

function setPlotHook() {
  document.getElementById("plotHook").innerText = getRandomPlotHook();
}

document
  .querySelector(".generate")
  .addEventListener("click", setRandomSexAndFirstName);
document
  .querySelector(".generate")
  .addEventListener("click", setRandomRaceAndLastName);
document.querySelector(".generate").addEventListener("click", setRandomAge);
document.querySelector(".generate").addEventListener("click", setRandomJob);
document
  .querySelector(".generate")
  .addEventListener("click", setRandomOrientation);
document
  .querySelector(".generate")
  .addEventListener("click", setRandomRelationship);
document
  .querySelector(".generate")
  .addEventListener("click", setRandomChildren);
document
  .querySelector(".generate")
  .addEventListener("click", setOverallDescription);
document.querySelector(".generate").addEventListener("click", setEyes);
document.querySelector(".generate").addEventListener("click", setHair);
document.querySelector(".generate").addEventListener("click", setStyle);
document.querySelector(".generate").addEventListener("click", setSkinTone);
document.querySelector(".generate").addEventListener("click", setClothing);
document
  .querySelector(".generate")
  .addEventListener("click", setBodyDescription);
document.querySelector(".generate").addEventListener("click", setRolls);
document.querySelector(".generate").addEventListener("click", setTraits);
document.querySelector(".generate").addEventListener("click", setPlotHook);
document.getElementById("lawGood").addEventListener("click", setBeliefsLG);
document.getElementById("lawNeu").addEventListener("click", setBeliefsLN);
document.getElementById("lawEvil").addEventListener("click", setBeliefsLE);
document.getElementById("neuGood").addEventListener("click", setBeliefsNG);
document.getElementById("neu").addEventListener("click", setBeliefsNN);
document.getElementById("neuEvil").addEventListener("click", setBeliefsNE);
document.getElementById("chaGood").addEventListener("click", setBeliefsCG);
document.getElementById("chaNeu").addEventListener("click", setBeliefsCN);
document.getElementById("chaEvil").addEventListener("click", setBeliefsCE);
document.querySelector(".generate").addEventListener("click", randomizeBeliefs);
document
  .querySelector(".randomize")
  .addEventListener("click", randomizeBeliefs);
