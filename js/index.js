const toggleMenuButton = document.getElementById("toggle-button");
const menu = document.getElementById("menu");
const nav = document.getElementsByTagName("nav")[0];

if(toggleMenuButton) toggleMenuButton.addEventListener("click", toggleMenu);

function toggleMenu(){
    console.log("is working");
    menu.classList.toggle("show-menu");
    if(menu.classList.contains("show-menu")){
        nav.style.backgroundColor = "rgba(4, 19, 42, 0.95)";
    }else{
        nav.style.backgroundColor = "transparent";
    }
}