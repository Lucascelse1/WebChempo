"use strict"

document.addEventListener('DOMContentLoaded', function () {
  const excerpt = document.querySelector('.excerpt');
  const modal = document.getElementById('myModal');
  const closeModal = document.getElementById('closeModal');
  const leerMasBtn = document.getElementById('leerMasBtn');

  leerMasBtn.addEventListener('click', function (event) {
    event.preventDefault();
    modal.style.display = 'block';
  });

  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });



  const excerpt2 = document.querySelector('.excerpt2');
  const modal2 = document.getElementById('myModal2');
  const closeModal2 = document.getElementById('closeModal2');
  const leerMasBtn2 = document.getElementById('leerMasBtn2');

  leerMasBtn2.addEventListener('click', function (event) {
    event.preventDefault();
    modal2.style.display = 'block';
  });

  closeModal2.addEventListener('click', function () {
    modal2.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal2) {
      modal2.style.display = 'none';
    }
  });


  const excerpt3 = document.querySelector('.excerpt3');
  const modal3 = document.getElementById('myModal3');
  const closeModal3 = document.getElementById('closeModal3');
  const leerMasBtn3 = document.getElementById('leerMasBtn3');

  leerMasBtn3.addEventListener('click', function (event) {
    event.preventDefault();
    modal3.style.display = 'block';
  });

  closeModal3.addEventListener('click', function () {
    modal3.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal3) {
      modal3.style.display = 'none';
    }
  });

  const excerpt4 = document.querySelector('.excerpt4');
  const modal4 = document.getElementById('myModal4');
  const closeModal4 = document.getElementById('closeModal4');
  const leerMasBtn4 = document.getElementById('leerMasBtn4');

  leerMasBtn4.addEventListener('click', function (event) {
    event.preventDefault();
    modal4.style.display = 'block';
  });

  closeModal4.addEventListener('click', function () {
    modal4.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal4) {
      modal4.style.display = 'none';
    }
  });

  const excerpt5 = document.querySelector('.excerpt5');
  const modal5 = document.getElementById('myModal5');
  const closeModal5 = document.getElementById('closeModal5');
  const leerMasBtn5 = document.getElementById('leerMasBtn5');

  leerMasBtn5.addEventListener('click', function (event) {
    event.preventDefault();
    modal5.style.display = 'block';
  });

  closeModal5.addEventListener('click', function () {
    modal5.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal5) {
      modal5.style.display = 'none';
    }
  });
});
