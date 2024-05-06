"use strict"

const navItem = document.querySelector('.nav-item1')
const navItem2 = document.querySelector('.nav-item2')
const navItem3 = document.querySelector('.nav-item3')
const seccionOculta = document.querySelector('.productos')
const seccionOcultaAbrasivos = document.querySelector('.productos2')
const seccionOculta2 = document.querySelector('.aplicaciones')
const btnApliaciones = document.getElementById('btn-phone-aplicaciones')
const btnAbrasivos = document.getElementById('btn-abrasivos')
const btnQuimicos = document.getElementById('btn-quimicos')
const sectionAbrasivos = document.getElementById('phone-abrasivos')
const sectionQuimicos = document.getElementById('phone-quimicos')
const menu = document.getElementById('nav-menu');
const burguerBtn = document.getElementById('burguer-btn');


// Función para alternar la visualización del menú
burguerBtn.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden')
    sectionAbrasivos.classList.add('hidden')
    sectionQuimicos.classList.add('hidden')
  } else {
    menu.classList.add('hidden')
  }
})


btnAbrasivos.addEventListener('click', () => {
  if (sectionAbrasivos.classList.contains('hidden')) {
    sectionAbrasivos.classList.remove('hidden')
    menu.classList.add('hidden')
    sectionQuimicos.classList.add('hidden')
  } else {
    sectionAbrasivos.classList.add('hidden')
  }
})


btnQuimicos.addEventListener('click', () => {
  if (sectionQuimicos.classList.contains('hidden')) {
    sectionQuimicos.classList.remove('hidden')
    sectionAbrasivos.classList.add('hidden')
    menu.classList.add('hidden')
  } else {
    sectionQuimicos.classList.add('hidden')
  }
})


btnApliaciones.addEventListener("click", () => {
  if (seccionOculta2.classList.contains("visible")) {
    seccionOculta2.classList.remove("visible");
  } else {
    seccionOculta2.classList.add("visible");
  }
})



navItem.addEventListener("mouseover", () => {
  seccionOculta.classList.add("visible")
  seccionOculta2.classList.remove("visible")
  seccionOcultaAbrasivos.classList.remove("visible")
})

navItem2.addEventListener("mouseover", () => {
  seccionOculta2.classList.add("visible")
  seccionOculta.classList.remove("visible")
  seccionOcultaAbrasivos.classList.remove("visible")
})

navItem3.addEventListener("mouseover", () => {
  seccionOculta2.classList.remove("visible")
  seccionOculta.classList.remove("visible")
  seccionOcultaAbrasivos.classList.add("visible")
})

seccionOculta.addEventListener("mouseleave", () => {
  seccionOculta.classList.remove("visible")
})

seccionOculta2.addEventListener("mouseleave", () => {
  seccionOculta2.classList.remove("visible")
})

seccionOcultaAbrasivos.addEventListener("mouseleave", () => {
  seccionOcultaAbrasivos.classList.remove("visible")
})





