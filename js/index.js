const toggleMenuButton = document.getElementById("toggle-button");
const menu = document.getElementById("menu");

toggleMenuButton.addEventListener("click", toggleMenu);

function toggleMenu(){
    menu.classList.toggle("show-menu");
}