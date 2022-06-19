import hamburger from "./Menu.js";

const d = document;

d.addEventListener("DOMContentLoaded", (evento) => {
    hamburger(".panel-btn", ".panel", ".menu a");
});