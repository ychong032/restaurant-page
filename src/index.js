import { pageLoad } from "./home";
import "./style.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

const content = document.querySelector("#content");
loadHeader();
pageLoad();
loadFooter();

function loadHeader() {
    const header = document.createElement("div");
    header.classList.add("header");

    const homeButton = document.createElement("button");
    homeButton.textContent = "Home";
    header.appendChild(homeButton);

    const menuButton = document.createElement("button");
    menuButton.textContent = "Menu";
    header.appendChild(menuButton);

    const contactButton = document.createElement("button");
    contactButton.textContent = "Contact";
    header.appendChild(contactButton);

    content.appendChild(header);
}

function loadFooter() {
    const footer = document.createElement("div");
    footer.classList.add("footer");

    const footerText = document.createElement("p");
    footerText.classList.add("footer-text");
    footerText.textContent = "Made by ychong032";
    footer.appendChild(footerText);

    const iconLink = document.createElement("a");
    iconLink.setAttribute("href", "https://github.com/ychong032");
    iconLink.setAttribute("target", "_blank");

    const githubIcon = document.createElement("i");
    githubIcon.classList.add("fa-brands", "fa-github", "fa-2x");
    iconLink.appendChild(githubIcon);

    footer.appendChild(iconLink);

    content.appendChild(footer);
}
