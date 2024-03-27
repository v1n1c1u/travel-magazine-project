const toggleMenuButton = document.getElementById("toggle-button");
const menu = document.getElementById("menu");

if(toggleMenuButton) toggleMenuButton.addEventListener("click", toggleMenu);

function toggleMenu(){
    menu.classList.toggle("show-menu");
}