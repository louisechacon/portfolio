const btnMenu = document.getElementById("btn-menu");
const btnFechar = document.getElementById("btn-fechar");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector("header");

function abrirMenu() {
    navLinks.classList.add("active");
    header.classList.add("menu-open");
}

function fecharMenu() {
    navLinks.classList.remove("active");
    header.classList.remove("menu-open");
}

btnMenu.addEventListener("click", abrirMenu);
btnFechar.addEventListener("click", fecharMenu);