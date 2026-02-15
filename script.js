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