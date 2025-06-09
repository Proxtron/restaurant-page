import "./styles.css";
import loadHomePage from "./home.js";

const content = document.getElementById("content");
content.appendChild(loadHomePage());
