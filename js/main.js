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
  try {
    const img = await cargarImagenConPromesa(skill);

    const div = document.createElement("div");
    div.classList.add("icono");

    const nombre = document.createElement("span");
    nombre.classList.add("nombre-skill");
    nombre.textContent = skill.nombre;

    const barra = document.createElement("div");
    barra.classList.add("barra-nivel", `nivel-${skill.nivel}`);

    div.appendChild(img);
    div.appendChild(nombre);
    div.appendChild(barra);

    return div; // Solo si todo fue bien
  } catch (error) {
    console.error(`Error al mostrar "${skill.nombre}": ${error.message}`);
    return null; // 👉 no se retorna nada visual
  }
}

// Función para renderizar skills de forma asíncrona
async function renderSkills(skills, contenedorId) {
  const contenedor = document.getElementById(contenedorId);

  for (const skill of skills) {
    const elemento = await crearSkillElemento(skill);
    if (elemento) contenedor.appendChild(elemento); // Solo si se creó
  }
}

// Renderizar todos
renderSkills(frontendSkills, "frontend");
renderSkills(backendSkills, "backend");
renderSkills(otherSkills, "other");