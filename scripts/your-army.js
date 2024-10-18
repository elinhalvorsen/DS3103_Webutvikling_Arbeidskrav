// Her ligger alt som blir hentet inn fra HTML
const outputWarriors = document.querySelector("#output__warriors");
const outputAnimalsAndMachines = document.querySelector(
    "#output__animals_and_machines"
);

const input = document.querySelector("#input");
const inputBtn = document.querySelector("#input__btn");
const showInventoryBtn = document.querySelector("#show-inventory__btn");

// Krigere
const showAllWarriors = (warriors) => {
    let htmlTxt = "";
    warriors.forEach((warrior) => {
        htmlTxt += `
            <article class="col-lg-3 col-md-4 col-sm-6">
                <div class="shadow border text-center bg-white rounded p-3">
                    <h6>${warrior.name}</h6>
                    <img id="warrior__image" class="img-fluid" src="images/${warrior.image}">
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
            <article class="col-lg-3 col-md-4 col-sm-6">
                <div class="shadow text-center rounded p-3 bg-white">
                    <h6>${animalsAndMachine.name}</h6>
                    <img id="animal-and-machine__image" class="img-fluid" src="images/${animalsAndMachine.image}">
                </div>
            </article>
            `;
    });
    outputAnimalsAndMachines.innerHTML = htmlTxt;
};

// Dette gjør det mulig å søke etter spesifikke dyr, krigere osv i Your Army. Viser utelukkende det på siden, ikke noe annet
const showByWarrior = () => {
    let showWarriors = JSON.parse(localStorage.getItem("savedWarriors"));
    let showAnimalsAndMachines = JSON.parse(
        localStorage.getItem("savedAnimalsAndMachines")
    );
    let newList = showWarriors.filter(
        (byWarrior) =>
            byWarrior.name.toLowerCase() === input.value.toLowerCase()
    );

    let newList2 = showAnimalsAndMachines.filter(
        (byWarrior) =>
            byWarrior.name.toLowerCase() === input.value.toLowerCase()
    );

    showAllWarriors(newList);
    showAllAnimalsAndMachines(newList2);
};

// Knappen for å vise hele Your Army, etter du f.eks. har søkt
const showAllInventory = () => {
    showAllWarriors(JSON.parse(localStorage.getItem("savedWarriors")));
    showAllAnimalsAndMachines(
        JSON.parse(localStorage.getItem("savedAnimalsAndMachines"))
    );
};

const setEvents = () => {
    inputBtn.addEventListener("click", showByWarrior);
    showInventoryBtn.addEventListener("click", showAllInventory);
};

(() => {
    showAllInventory();
    setEvents();
})();
