const data = require("./data.json");
import images from "./index.js";

export function showMenu() {
    const content = document.querySelector("#content");

    const container = document.createElement("div");
    container.classList.add("container");

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    const menuBlock = document.createElement("div");
    menuBlock.classList.add("menu-block");

    const appetiserHeader = document.createElement("h1");
    appetiserHeader.classList.add("menu-header");
    appetiserHeader.textContent = "Appetisers";
    menuBlock.appendChild(appetiserHeader);

    loadFoodItems(data.appetisers, menuBlock);

    const mainHeader = document.createElement("h1");
    mainHeader.classList.add("menu-header");
    mainHeader.textContent = "Mains";
    menuBlock.appendChild(mainHeader);

    loadFoodItems(data.mains, menuBlock);

    const dessertHeader = document.createElement("h1");
    dessertHeader.classList.add("menu-header");
    dessertHeader.textContent = "Desserts";
    menuBlock.appendChild(dessertHeader);

    loadFoodItems(data.desserts, menuBlock);

    const beverageHeader = document.createElement("h1");
    beverageHeader.classList.add("menu-header");
    beverageHeader.textContent = "Beverages";
    menuBlock.appendChild(beverageHeader);

    loadFoodItems(data.beverages, menuBlock);

    container.appendChild(overlay);
    container.appendChild(menuBlock);

    content.appendChild(container);
}

function loadFoodItems(menuSection, menuBlock) {
    for (let obj of menuSection) {
        const foodItem = document.createElement("div");
        foodItem.classList.add("food-item");

        const foodInfo = document.createElement("div");
        foodInfo.classList.add("food-info");

        const foodName = document.createElement("h2");
        foodName.textContent = obj.name;

        const foodDescription = document.createElement("p");
        foodDescription.classList.add("food-description");
        foodDescription.textContent = obj.description;

        const foodPrice = document.createElement("p");
        foodPrice.textContent = obj.price;

        foodInfo.appendChild(foodName);
        foodInfo.appendChild(foodDescription);
        foodInfo.appendChild(foodPrice);

        const foodPicture = document.createElement("img");
        foodPicture.classList.add("food-picture");
        foodPicture.src = images[obj.src];

        foodItem.appendChild(foodInfo);
        foodItem.appendChild(foodPicture);

        menuBlock.appendChild(foodItem);
    }
}
