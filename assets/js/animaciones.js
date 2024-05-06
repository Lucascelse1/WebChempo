"use strict"

document.addEventListener('DOMContentLoaded', function() {
    let elemento = document.querySelector('.imagen-caja');

    function mostrarElemento() {
      let alturaViewport = window.innerHeight;
      let distanciaElemento = elemento.getBoundingClientRect().top;

      if (distanciaElemento < alturaViewport) {
        elemento.classList.add('slide-fwd-center');
      }
    }

    // Llama a la función al cargar la página y en eventos de scroll
    mostrarElemento();
    window.addEventListener('scroll', mostrarElemento);
  });