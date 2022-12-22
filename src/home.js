export function pageLoad() {
    const content = document.querySelector("#content");

    const container = document.createElement("div");
    container.classList.add("container");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    container.appendChild(imageContainer);

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    const titleCard = document.createElement("div");
    titleCard.classList.add("titleCard");

    const title = document.createElement("h1");
    title.textContent = "Bilbo's Bistro";
    titleCard.appendChild(title);

    const subtitle = document.createElement("p");
    subtitle.textContent = "Food so good you'll be here and back again.";
    titleCard.appendChild(subtitle);

    container.appendChild(overlay);
    container.appendChild(titleCard);

    content.appendChild(container);
}
