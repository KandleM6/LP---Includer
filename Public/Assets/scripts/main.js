const menu = document.querySelector(".menu-horizontal");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
//Funcion para alternar la visibilidad del MENU
function toggleMenu() {
  menu.classList.toggle("menu_opened");
  if (menu.classList.contains("menu_opened")) {
    openMenuBtn.style.display = "none";
    closeMenuBtn.style.display = "block";
  } else {
    openMenuBtn.style.display = "block";
    closeMenuBtn.style.display = "none";
  }
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

//ajustar botones
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    menu.classList.remove("menu_opened");
    openMenuBtn.style.display = "none";
    closeMenuBtn.style.display = "none";
  } else {
    openMenuBtn.style.display = "block";
  }
});
