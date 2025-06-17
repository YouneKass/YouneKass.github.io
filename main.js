// Formato para ocultar la informacion de conocimiento y mostrar
const titulo = document.getElementById("titulo-conocimientos");
const contenido = document.getElementById("contenido-conocimiento");

titulo.addEventListener("click" , () => {
    if (contenido.style.display === "none" || contenido.style.display === "") {
        contenido.style.display = "block";
    }else {
    contenido.style.display = "none";
  }
});

// Formato responsive para mi nav 
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});