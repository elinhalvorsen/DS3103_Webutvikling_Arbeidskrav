import LocalStorage from "./modules/LocalStorage.js";

let goldAmount = localStorage.getItem("goldAmount")
    ? parseInt(localStorage.getItem("goldAmount"))
    : 0;
let metalAmount = localStorage.getItem("metalAmount")
    ? parseInt(localStorage.getItem("metalAmount"))
    : 0;
let woodAmount = localStorage.getItem("woodAmount")
    ? parseInt(localStorage.getItem("woodAmount"))
    : 0;

// Her samles gull og metall. Gull forekommer 25% av tiden og metall de resterende 75%
const gatherGoldAndMetal = () => {
    const randomValue = Math.random();

    if (randomValue <= 0.25) {
        goldAmount += 3;
    } else {
        metalAmount += 6;
    }

    // Her blir verdiene lagret i local storage
    localStorage.setItem("goldAmount", goldAmount);
    localStorage.setItem("metalAmount", metalAmount);

    // Her oppdateres ressursene og vises
    LocalStorage.resourceInventory();
};

// Her samles treverk, generers et tall mellom 1 og 5 - kan øke dette hvis dere ønsker
const gatherWood = () => {
    const randomAmount = Math.floor(Math.random() * 10) + 1;

    woodAmount += randomAmount;

    // Her oppdateres og lagres
    localStorage.setItem("woodAmount", woodAmount);

    // Her oppdateres og vises ressursene
    LocalStorage.resourceInventory();
};

// Dette gjør at man kan trykke på bildene og hente ut ressurser
// Her hentes metall/gull ut ved å klikke
const mineImage = document.getElementById("mine-image");

// Her hentes treverk ut ved å klikke
const woodsImage = document.getElementById("woods-image");

const setEvents = () => {
    woodsImage.addEventListener("click", gatherWood);
    mineImage.addEventListener("click", gatherGoldAndMetal);
};

(() => {
    LocalStorage.resourceInventory();
    setEvents();
})();
