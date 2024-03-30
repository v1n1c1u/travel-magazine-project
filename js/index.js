const toggleMenuButton = document.getElementById("toggle-button");
const menu = document.getElementById("menu");

if(toggleMenuButton) toggleMenuButton.addEventListener("click", toggleMenu);

function toggleMenu(){
    console.log("is working");
    menu.classList.toggle("show-menu");
}