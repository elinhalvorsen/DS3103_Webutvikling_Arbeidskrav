const LocalStorage = (() => {
    const resourceInventory = () => {
        let goldAmount = localStorage.getItem("goldAmount")
            ? parseInt(localStorage.getItem("goldAmount"))
            : 0;
        let metalAmount = localStorage.getItem("metalAmount")
            ? parseInt(localStorage.getItem("metalAmount"))
            : 0;
        let woodAmount = localStorage.getItem("woodAmount")
            ? parseInt(localStorage.getItem("woodAmount"))
            : 0;

        // Gull
        const displayGold = document.getElementById("gold-amount");
        displayGold.innerHTML = goldAmount;

        // Metall
        const displayMetal = document.getElementById("metal-amount");
        displayMetal.innerHTML = metalAmount;

        // Treverk
        const displayWood = document.getElementById("wood-amount");
        displayWood.innerHTML = woodAmount;
    };

    return {
        resourceInventory,
    };
})();

// Her eksporteres modulen slik at den blir mulig å importere
export default LocalStorage;
