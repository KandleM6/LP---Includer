// VALIDACIÓN DE FORMULARIO
const form = document.querySelector('form[name="frm"]');
form.addEventListener("submit", (event) => {
  const fname = form.elements["fname"].value;
  const fphone = form.elements["fphone"].value;
  const femail = form.elements["femail"].value;
  const fpassword = form.elements["fpassword"].value;

  // Validación de campos individuales con alertas específicas
  // Validar que los campos no estén vacíos
  if (!fname || !fphone || !femail || !fpassword) {
    event.preventDefault();
    alert("Por favor, complete todos los campos del formulario.");
  } else if (!validateEmail(femail)) {
    event.preventDefault();
    alert("Por favor, ingrese un correo electrónico válido.");
  } else if (!validateNumeros(fphone)) {
    event.preventDefault();
    alert("Por favor, ingrese solo números en celular.");
  }
});

//CREAR FUNCION validateEmail
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]/;
  return re.test(String(email).toLowerCase());
}
//CREAR FUNCION validar numeros para edad y celular
function validateNumeros(value) {
  const re = /^\d+$/; // Verifica que solo contenga dígitos
  return re.test(value);
}

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
