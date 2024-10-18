// Modul med alle krigerne --> id, navn, bilde og pris i gull
const WarriorModule = (() => {
    const warriors = [
        {
            id: 1,
            name: "Snake",
            image: "warrior-1.jpg",
            gold: 300,
        },
        {
            id: 2,
            name: "Giant",
            image: "warrior-2.jpg",
            gold: 500,
        },
        {
            id: 3,
            name: "Big Axe",
            image: "warrior-3.jpg",
            gold: 150,
        },
        {
            id: 4,
            name: "Thief",
            image: "warrior-4.jpg",
            gold: 50,
        },
        {
            id: 5,
            name: "Tanks",
            image: "warrior-5.jpg",
            gold: 120,
        },
        {
            id: 6,
            name: "Berserker",
            image: "warrior-6.jpg",
            gold: 75,
        },
    ];

    // Lager en dyp klone, slik at arrayet ikke kan endres utenfra
    const getAllWarriors = () => {
        return structuredClone(warriors);
    };

    // Returnerer den dype klonen
    return {
        getAllWarriors,
    };
})();

// Her eksporteres modulen slik at den blir mulig å importere
export default WarriorModule;
