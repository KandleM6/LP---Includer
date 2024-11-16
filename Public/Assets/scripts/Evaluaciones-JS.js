//VALIDACION DE FORMULARIO
const form = document.querySelector('form[name="frm"]');
form.addEventListener("submit", (event) => {
  const nombrelugar = form.elements["nombrelugar"].value;
  const tipolugar = form.elements["tipolugar"].value;
  const comentadicional = form.elements["comentadicional"].value;

  if (!nombrelugar || !tipolugar || !comentadicional) {
    event.preventDefault();
    alert("Por favor, complete todos los campos del formulario");
  } else if (comentadicional.length < 5) {
    event.preventDefault();
    alert("El comentario adicional debe tener al menos 5 caracteres");
  }
});

const stars = document.querySelectorAll("#rating span");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    stars.forEach((s, i) => {
      if (i <= index) {
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
    });
  });
});

//MENU HAMBURGUESA

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
