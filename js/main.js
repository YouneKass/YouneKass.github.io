import { frontendSkills, backendSkills, otherSkills } from "./skills.js";

// Formato responsive para mi nav 
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const infoTarjetas = {
  Informacion0: {
    titulo: "Mokepon",
    descripcion: `Juego de batalla de monstruos elementales desarrollado para practicar lógica de programación avanzada
                Incluye un sistema de selección dinámica de personajes, gestión de estados (vidas y ataques) mediante manipulación del DOM 
                y una lógica de combate basada en ventajas de tipos.`,
    imagen: "imagenes/mokepon2.png",
    link: "https://github.com/YouneKass/mokepon"
  },

  Informacion1: {
    titulo: "InfoJobs",
    descripcion: `bootcamp intensivo de JavaScript y desarrollo web full-stack diseñado para llevarte desde los fundamentos hasta las tecnologías 
                más avanzadas del ecosistema JavaScript. Veremos HTML, CSS, JavaScript, TypeScript, Node.js, SQL, CI/CD y Docker.`,
    imagen: "imagenes/infojobs.png",
    link: "https://github.com/YouneKass/InfoJobs"
  },

  Informacion2: {
    titulo: "Api Marvel",
    descripcion: `Aplicación web integrada con la API oficial de Marvel Comics para la visualización de héroes, cómics y eventos. 
                Implementé el consumo de datos mediante Fetch API con manejo de asincronismo (Async/Await), gestión de claves criptográficas (Hash MD5) 
                para la autenticación y renderizado dinámico de tarjetas optimizado para el rendimiento. (Hay que pagar MEMBRESIA para poder visualizar)`,
    imagen: "imagenes/Apimarvel1.png",
    link: "https://github.com/YouneKass/ApiMarvel"
  },

  Informacion3: {
    titulo: "Ahorcado",
    descripcion: `Juego interactivo donde el usuario debe adivinar una palabra oculta antes de agotar sus intentos. 
                Incluye una base de datos de palabras aleatorias, control de teclas presionadas para evitar repeticiones y 
                efectos visual (victoria o derrota).`,
    imagen: "imagenes/ahorcado2.png",
    link: "https://github.com/YouneKass/Ahorcado"
  }
  ,

  Informacion4: {
    titulo: "ConecMayor+",
    descripcion: `ConecMayor+ esta diseñado para el desarrollo social y la inclusión de la comunidad. 
                Poder ayudar a las personas que lo necesiten, poder ocupar las redes sociales de una manera sencilla.`,
    imagen: "imagenes/conecMayor.png",
    link: "https://github.com/YouneKass/ConecMayor"
  }
  ,

  Informacion5: {
    titulo: "Piedra, Papel y Tijera",
    descripcion: "Mini-juego desarrollado con JavaScript enfocado en la generación de números aleatorios, manejo de eventos de clic.",
    imagen: "imagenes/juegoPPT.png",
    link: "https://github.com/YouneKass/piedraPapelTijera"
  }
};

const botones = document.querySelectorAll(".btn-modal");
const modal = document.getElementById("modal");

const modalTitulo = document.getElementById("modalTitulo");
const modalTexto  = document.getElementById("modalTexto");
const modalImagen = document.getElementById("modalImagen");
const botonLink   = document.getElementById("modalBotonLink");
let linkActual = null; 

const cerrar = document.querySelector(".cerrar");

botones.forEach(boton => {
  boton.addEventListener("click", () => {

    const id = boton.dataset.id;   
    const data = infoTarjetas[id];

    if (!data) return;

    modalTitulo.textContent = data.titulo;
    modalTexto.textContent  = data.descripcion;

    if (data.imagen) {
      modalImagen.src = data.imagen;
      modalImagen.style.display = "block";
    } else {
      modalImagen.style.display = "none";
    }

    linkActual = data.link;

    modal.style.display = "flex";
  });
});

botonLink.addEventListener("click", () => {
  if (linkActual) {
    window.open(linkActual, "_blank");
  }
});

cerrar.addEventListener("click", () => modal.style.display = "none");

modal.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
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