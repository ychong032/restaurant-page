function importAll(r) {
    r.keys().forEach(r);
}

import { showHome } from "./home";
import { showMenu } from "./menu";
import { showContact } from "./contact";
import "./style.css";
importAll(require.context("./assets/", false, /\.jpg\.svg\.png$/));
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

let currentTab = loadHeader();
const content = loadContent();
loadFooter();
showHome();

function loadHeader() {
    const header = document.createElement("div");
    header.classList.add("header");

    const buttons = document.createElement("div");
    buttons.classList.add("buttons");

    const homeButton = document.createElement("button");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", navigateHome);
    homeButton.classList.add("current-tab");
    buttons.appendChild(homeButton);

    const menuButton = document.createElement("button");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", navigateMenu);
    buttons.appendChild(menuButton);

    const contactButton = document.createElement("button");
    contactButton.textContent = "Contact";
    contactButton.addEventListener("click", navigateContact);
    buttons.appendChild(contactButton);

    header.appendChild(buttons);

    document.body.appendChild(header);

    return homeButton;
}

function loadContent() {
    const content = document.createElement("div");
    content.setAttribute("id", "content");
    document.body.appendChild(content);
    return content;
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

    document.body.appendChild(footer);
}

function navigateHome(e) {
    if (!e.target.classList.contains("current-tab")) {
        e.target.classList.toggle("current-tab");
        currentTab.classList.toggle("current-tab");
        currentTab = e.target;
        content.childNodes.forEach((child) => content.removeChild(child));
        showHome();
    }
}

function navigateMenu(e) {
    if (!e.target.classList.contains("current-tab")) {
        e.target.classList.toggle("current-tab");
        currentTab.classList.toggle("current-tab");
        currentTab = e.target;
        content.childNodes.forEach((child) => content.removeChild(child));
        showMenu();
    }
}

function navigateContact(e) {
    if (!e.target.classList.contains("current-tab")) {
        e.target.classList.toggle("current-tab");
        currentTab.classList.toggle("current-tab");
        currentTab = e.target;
        content.childNodes.forEach((child) => content.removeChild(child));
        showContact();
    }
}
