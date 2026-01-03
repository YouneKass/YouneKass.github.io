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

const diplomas = [
  "diploma-php.pdf",
  "diploma-angular-componentes.pdf",
  "diploma-backend-nodejs.pdf",
  "diploma-beginner-core.pdf",
  "diploma-computacion-basica.pdf",
  "diploma-configuracion-windows.pdf",
  "diploma-css.pdf",
  "diploma-ecmascript-6.pdf",
  "diploma-excel-basico.pdf",
  "diploma-fundamentos-node.pdf",
  "diploma-gitgithub.pdf",
  "diploma-html-css.pdf",
  "diploma-html-practico.pdf",
  "diploma-ingenieria.pdf",
  "diploma-ingles-a1-principiantes.pdf",
  "diploma-intro-desarrollo-web.pdf",
  "diploma-javascript.pdf",
  "diploma-nodejs-microservicios.pdf",
  "diploma-nodejs.pdf",
  "diploma-pensamiento-logico-desafios.pdf",
  "diploma-pensamiento-logico-estructuras.pdf",
  "diploma-pensamiento-logico-lenguajes.pdf",
  "diploma-pensamiento-logico.pdf",
  "diploma-presente-simple-vocabulario-comun.pdf",
  "diploma-programacion-basica.pdf",
  "diploma-reactjs.pdf",
  "diploma-redes.pdf",
  "diploma-typescript.pdf",
  "diploma-verbo-tobe.pdf",
  "diploma-web-fundamentos.pdf",
  "diploma-web-prework.pdf"
];

function formatearNombre(nombre) {
  return nombre
    .replace("diploma-", "")      // quita prefijo
    .replace(".pdf", "")          // quita extensión
    .replace(/-/g, " ")           // guiones → espacios
    .replace(/\b\w/g, l => l.toUpperCase()); // capitaliza
}

const contenedor = document.getElementById("listaDiplomas");

diplomas.forEach(archivo => {

  const titulo = formatearNombre(archivo);

  const div = document.createElement("div");
  div.className = "diploma-item";
  div.onclick = () => abrirDiploma("img/" + archivo);

  div.innerHTML = `
    <embed src="img/${archivo}#view=FitH&toolbar=0&navpanes=0&scrollbar=0"
          type="application/pdf"
          class="diploma-preview">

    <span>${titulo}</span>
  `;

  contenedor.appendChild(div);
});