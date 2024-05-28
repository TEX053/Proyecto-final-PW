//Ejecutando funciones
document
  .getElementById("btn__iniciar-sesion")
  .addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(
  ".contenedor__login-register"
);
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

//FUNCIONES

function anchoPage() {
  if (window.innerWidth > 850) {
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.display = "block";
  } else {
    caja_trasera_register.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.display = "none";
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_register.style.display = "none";
  }
}

anchoPage();

function iniciarSesion() {
  if (window.innerWidth > 850) {
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "10px";
    formulario_register.style.display = "none";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
  } else {
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_register.style.display = "none";
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.display = "none";
  }
}

function register() {
  if (window.innerWidth > 850) {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
  } else {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.display = "none";
    caja_trasera_login.style.display = "block";
    caja_trasera_login.style.opacity = "1";
  }
}

const form1 = document.getElementById("login");
const form2 = document.getElementById("register");
let xhr;

form1.addEventListener("submit", (event) => {
  event.preventDefault();
  enviarFormulario();
});

form2.addEventListener("submit", (event) => {
  event.preventDefault();
  enviarFormulario1();
});

function enviarFormulario() {
  const formData = {
    email: form1.email.value,
    password: form1.password.value,
  };
  const jsonData = JSON.stringify(formData);
  xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:8090/api/v1/usuario/auth");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = respuestaServidor;
  xhr.send(jsonData);
}

function enviarFormulario1() {
  const formData = {
    name: form2.name.value,
    lastName: form2.lastName.value,
    email: form2.email.value,
    password: form2.password.value,
  };
  const jsonData = JSON.stringify(formData);
  xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:8090/api/v1/usuario");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = respuestaServidor1;
  xhr.send(jsonData);
}

function respuestaServidor() {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    console.log(response);
    if (response) {
      window.alert("logeado");
      window.location.href = "http://127.0.0.1:5500/";
    }
    console.log("Éxito:", response.message);
  } else {
    console.error("Error:", xhr.statusText);
  }
}

function respuestaServidor1() {
  if (xhr.status >= 200 && xhr.status < 300) {
    const response = JSON.parse(xhr.responseText);
    console.log(response);
    if (response) {
      window.alert("creado usuario " + response.email);
      window.location.href = "http://127.0.0.1:5500/";
    }
    console.log("Éxito:", response.message);
  } else {
    console.error("Error:", xhr.statusText);
  }
}
