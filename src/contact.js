const data = require("./data.json");
import images from "./index.js";

export function showContact() {
    const content = document.querySelector("#content");

    const container = document.createElement("div");
    container.classList.add("container");

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    const menuBlock = document.createElement("div");
    menuBlock.classList.add("menu-block");

    const contactHeader = document.createElement("h1");
    contactHeader.textContent = "Contact Us";
    contactHeader.classList.add("menu-header");
    menuBlock.appendChild(contactHeader);

    const addressContainer = document.createElement("div");
    addressContainer.classList.add("contact-item");
    const addressIcon = document.createElement("i");
    addressIcon.classList.add("fa-solid", "fa-location-dot");
    addressContainer.appendChild(addressIcon);
    const address = document.createElement("p");
    address.textContent = "1 Bagshot Row, Hobbiton, The Shire";
    addressContainer.appendChild(address);
    menuBlock.appendChild(addressContainer);

    const openingHoursContainer = document.createElement("div");
    openingHoursContainer.classList.add("contact-item");
    openingHoursContainer.innerHTML =
        '<i class="fa-solid fa-clock"></i>' +
        "<div><p>Monday - Saturday: 1100 - 0200</p>" +
        "<p>Closed on Sunday</p></div>";
    menuBlock.appendChild(openingHoursContainer);

    const telephoneContainer = document.createElement("div");
    telephoneContainer.classList.add("contact-item");
    telephoneContainer.innerHTML =
        '<i class="fa-solid fa-phone"></i> <p>420-1337</p>';
    menuBlock.appendChild(telephoneContainer);

    const emailContainer = document.createElement("div");
    emailContainer.classList.add("contact-item");
    emailContainer.innerHTML =
        '<i class="fa-solid fa-envelope"></i> <p>swaggin_baggins@shire.com</p>';
    menuBlock.appendChild(emailContainer);

    const staffHeader = document.createElement("h1");
    staffHeader.textContent = "Our Staff";
    staffHeader.classList.add("menu-header");
    menuBlock.appendChild(staffHeader);

    loadStaff(menuBlock);

    container.appendChild(overlay);
    container.appendChild(menuBlock);

    content.appendChild(container);
}

function loadStaff(menuBlock) {
    for (let staff of data.staff) {
        const staffItem = document.createElement("div");
        staffItem.classList.add("staff-item");

        const staffInfo = document.createElement("div");
        staffInfo.classList.add("staff-info");

        const staffName = document.createElement("h2");
        staffName.textContent = staff.name;

        const staffRole = document.createElement("p");
        staffRole.classList.add("staff-role");
        staffRole.textContent = staff.role;

        staffInfo.appendChild(staffName);
        staffInfo.appendChild(staffRole);

        const staffPicture = document.createElement("img");
        staffPicture.classList.add("staff-picture");
        staffPicture.src = images[staff.src];

        staffItem.appendChild(staffInfo);
        staffItem.appendChild(staffPicture);

        menuBlock.appendChild(staffItem);
    }
}
