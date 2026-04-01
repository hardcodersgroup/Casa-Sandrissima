function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Fecha o menu se clicar fora dele
window.onclick = function (event) {
    const menu = document.getElementById("menu");
    const btn = document.querySelector(".menu-btn");
    if (event.target != menu && event.target != btn) {
        menu.style.display = "none";
    }
}