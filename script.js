const temaBtn = document.getElementById("tema-checkbox");
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "dark") {
    temaBtn.checked = true;
    document.body.classList.add("dark-mode");
}

temaBtn.addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("tema", "light");
        
    } else {
        document.body.classList.add("dark-mode");
        localStorage.setItem("tema", "dark");
    }
});


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