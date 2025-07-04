import { frontendSkills, backendSkills, otherSkills } from "./skills.js";

//  Función que retorna una promesa al cargar una imagen
function cargarImagenConPromesa(skill) {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = skill.imagen;
    img.alt = skill.nombre;
    img.title = skill.nombre;

    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Error al cargar la imagen de ${skill.nombre}`));
  });
}

//  Crear div skill esperando la imagen con await
async function crearSkillElemento(skill) {
  const div = document.createElement("div");
  div.classList.add("icono");

  let img;
  try {
    img = await cargarImagenConPromesa(skill);
  } catch (error) {
    console.error(error.message);

    // Imagen alternativa por error
    img = document.createElement("div");
    img.textContent = "Img no cargada";
    img.classList.add("img-error");
  }

  const nombre = document.createElement("span");
  nombre.classList.add("nombre-skill");
  nombre.textContent = skill.nombre;

  const barra = document.createElement("div");
  barra.classList.add("barra-nivel", `nivel-${skill.nivel}`);

  div.appendChild(img);
  div.appendChild(nombre);
  div.appendChild(barra);

  return div;
}

// Función para renderizar skills de forma asíncrona
async function renderSkills(skills, contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  for (const skill of skills) {
    const elemento = await crearSkillElemento(skill);
    contenedor.appendChild(elemento);
  }
}

// Renderizar todos
renderSkills(frontendSkills, "frontend");
renderSkills(backendSkills, "backend");
renderSkills(otherSkills, "other");