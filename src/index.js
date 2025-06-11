import "./styles.css";
import displayHomePage from "./home.js";
import displayMenuPage from "./menu.js";
import displayAboutPage from "./about.js";

export const contentDiv = document.getElementById("content");

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");

init();

function init() {
    displayHomePage();
    attachEventListeners();
}

function attachEventListeners() {
    homeBtn.addEventListener("click", () => {
        switchPage(displayHomePage);
    })
    menuBtn.addEventListener("click", () => {
        switchPage(displayMenuPage);
    });
    aboutBtn.addEventListener("click", () => {
        switchPage(displayAboutPage);
    });
}

function switchPage(displayMethod) {
    contentDiv.innerHTML = "";
    displayMethod();
}
