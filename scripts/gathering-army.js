import WarriorModule from "./modules/WarriorModule.js";
import AnimalsAndMachinesModule from "./modules/AnimalsAndMachinesModule.js";
import LocalStorage from "./modules/LocalStorage.js";

// Henter outputen. Så vi får skrevet alt ut.
const outputWarriors = document.querySelector("#output__warriors");
const outputAnimalsAndMachines = document.querySelector(
    "#output__animals_and_machines"
);

// Her genereres HTML-en på siden for å vise hva du kan kjøpe. Stylet med bootstrap.

// Krigerne
const showAllWarriors = (warriors) => {
    let htmlTxt = "";
    warriors.forEach((warrior) => {
        htmlTxt += `
            <article class="col-12 col-md-6 col-lg-4">
                <div class="shadow text-center bg-white rounded h-100 p-5">
                    <h3>${warrior.name}</h3>
                    <div class="pb-4">
                        <img id="warrior__image" class="img-fluid" src="images/${warrior.image}">
                    </div>
                    <button class="btn w-30" id="warrior${warrior.id}">Buy warrior ${warrior.gold}
                        <img style="width: 8.7%" class="img-fluid" src="images/gold-coin.png">
                    </button>
                </div>
            </article>
            `;
    });
    outputWarriors.innerHTML = htmlTxt;
};

// Dyr og maskiner
const showAllAnimalsAndMachines = (animalsAndMachines) => {
    let htmlTxt = "";
    animalsAndMachines.forEach((animalsAndMachine) => {
        htmlTxt += `
            <article class="col-md-6 col-lg-6">
                <div class="shadow text-center bg-white rounded h-100 p-5">
                    <h3>${animalsAndMachine.name}</h3>
                    <div class="pb-4">
                        <img id="animal-and-machine__image" class="img-fluid" src="images/${animalsAndMachine.image}">
                    </div>
                    <button id="animalsandmachines${animalsAndMachine.id}" class="btn w-100">Buy resource ${animalsAndMachine.metal}
                        <img id="metal" class="img-fluid" src="images/metal.png">, ${animalsAndMachine.wood}
                        <img id="wood" class="img-fluid" src="images/wood.png"> and ${animalsAndMachine.gold}
                        <img id="gold" class="img-fluid" src="images/gold-coin.png">
                    </button>
                </div>
            </article>
            `;
    });
    outputAnimalsAndMachines.innerHTML = htmlTxt;
};

// Kjøper krigere, dyr og maskiner. Gull, tre og metall blir trekt fra og dette lagres og oppdateres i localStorage.
const buyWarrior = (warrior) => {
    const currentGold = localStorage.getItem("goldAmount");

    if (currentGold >= warrior.gold) {
        window.localStorage.setItem(
            "goldAmount",
            currentGold - (warrior.gold ? warrior.gold : 0)
        );
        saveWarrior(warrior);
        alert("You have bought a warrior. Your Army has expanded");
    } else {
        alert("Grrr... Not enough gold. You have to mine some more.");
    }

    LocalStorage.resourceInventory();
};
const buyAnimalAndMachine = (animalsAndMachine) => {
    const currentGold = localStorage.getItem("goldAmount");
    const currentMetal = localStorage.getItem("metalAmount");
    const currentWood = localStorage.getItem("woodAmount");

    if (
        currentGold >= animalsAndMachine.gold &&
        currentMetal >= animalsAndMachine.metal &&
        currentWood >= animalsAndMachine.wood
    ) {
        window.localStorage.setItem(
            "goldAmount",
            currentGold - (animalsAndMachine.gold ? animalsAndMachine.gold : 0)
        );
        window.localStorage.setItem(
            "metalAmount",
            currentMetal -
                (animalsAndMachine.metal ? animalsAndMachine.metal : 0)
        );
        window.localStorage.setItem(
            "woodAmount",
            currentWood - (animalsAndMachine.wood ? animalsAndMachine.wood : 0)
        );
        alert("Congrats on the successful addition to Your Army.");
        saveAnimalsAndMachines(animalsAndMachine);
    } else {
        alert("Get to work. Not enough resources ...");
    }

    LocalStorage.resourceInventory();
};

// Lagrer krigere, dyr og maskiner i localStorage
const saveWarrior = (warrior) => {
    if (localStorage.getItem("savedWarriors")) {
        let savedWarriors = JSON.parse(localStorage.getItem("savedWarriors"));
        savedWarriors.push(warrior);
        localStorage.setItem("savedWarriors", JSON.stringify(savedWarriors));
    } else {
        let savedWarriors = [];
        savedWarriors.push(warrior);
        localStorage.setItem("savedWarriors", JSON.stringify(savedWarriors));
    }
};
const saveAnimalsAndMachines = (animalsAndMachines) => {
    if (localStorage.getItem("savedAnimalsAndMachines")) {
        let savedAnimalsAndMachines = JSON.parse(
            localStorage.getItem("savedAnimalsAndMachines")
        );
        savedAnimalsAndMachines.push(animalsAndMachines);
        localStorage.setItem(
            "savedAnimalsAndMachines",
            JSON.stringify(savedAnimalsAndMachines)
        );
    } else {
        let savedAnimalsAndMachines = [];
        savedAnimalsAndMachines.push(animalsAndMachines);
        localStorage.setItem(
            "savedAnimalsAndMachines",
            JSON.stringify(savedAnimalsAndMachines)
        );
    }
};

// Her henter vi knappene til hver kriger, dyr og maskiner
const getAllWarriorsBtns = (warriors) => {
    warriors.forEach((warrior) => {
        document
            .querySelector(`#warrior${warrior.id}`)
            .addEventListener("click", () => {
                buyWarrior(warrior);
            });
    });
};
const getAllAnimalsAndMachinesBtns = (animalsAndMachines) => {
    animalsAndMachines.forEach((animalsAndMachine) => {
        document
            .querySelector(`#animalsandmachines${animalsAndMachine.id}`)
            .addEventListener("click", () => {
                buyAnimalAndMachine(animalsAndMachine);
            });
    });
};

// Init-funksjon som kjører all koden.
// Sender Modulene inn her med parametere.
(() => {
    showAllAnimalsAndMachines(
        AnimalsAndMachinesModule.getAllAnimalsAndMachines()
    );
    showAllWarriors(WarriorModule.getAllWarriors());

    getAllWarriorsBtns(WarriorModule.getAllWarriors());
    getAllAnimalsAndMachinesBtns(
        AnimalsAndMachinesModule.getAllAnimalsAndMachines()
    );
})();
