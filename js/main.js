import { frontendSkills, backendSkills, otherSkills } from "./skills.js";

// Formato responsive para mi nav 
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});



function crearSkillElemento(skill) {
  const div = document.createElement("div");
  div.classList.add("icono"); 

  const img = document.createElement("img");
  img.src = skill.imagen;
  img.alt = skill.nombre;
  img.title = skill.nombre;

  const nombre = document.createElement("span");
  nombre.classList.add("nombre-skill");
  nombre.textContent = skill.nombre;

  const estrellas = document.createElement("div");
  estrellas.classList.add("rating");
  
  const porcentaje = (skill.nivel / 5) * 100;
  estrellas.style.setProperty("--percent", `${porcentaje}%`);

  div.appendChild(img);
  div.appendChild(nombre);
  div.appendChild(estrellas);

  return div;
}

function renderSkills(skills, contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  skills.forEach(skill => {
    const elemento = crearSkillElemento(skill);
    contenedor.appendChild(elemento);
  });
}

renderSkills(frontendSkills, "frontend");
renderSkills(backendSkills, "backend");
renderSkills(otherSkills, "other");