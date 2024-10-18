// Modul med dyr og maskiner --> id, navn, bilde, pris i metall, tre og gull
const AnimalsAndMachinesModule = (() => {
    const animalsAndMachines = [
        {
            id: 1,
            name: "Cannon",
            image: "cannon.png",
            metal: 50,
            wood: 100,
            gold: 20,
        },
        {
            id: 2,
            name: "Catapult",
            image: "catapult.png",
            metal: 50,
            wood: 20,
            gold: 20,
        },
        {
            id: 3,
            name: "Elephant",
            image: "elephant.png",
            metal: 20,
            wood: 20,
            gold: 20,
        },
        {
            id: 4,
            name: "Horse",
            image: "horse.png",
            metal: 50,
            wood: 20,
            gold: 20,
        },
    ];

    // Lager en dyp klone, slik at arrayet ikke kan endres utenfra
    const getAllAnimalsAndMachines = () => {
        return structuredClone(animalsAndMachines);
    };

    // Returnerer den dype klonen
    return {
        getAllAnimalsAndMachines,
    };
})();

// Her eksporteres modulen slik at den blir mulig å importere
export default AnimalsAndMachinesModule;
