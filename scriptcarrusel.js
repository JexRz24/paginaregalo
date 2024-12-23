let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-track img');

const months = [
  { title: "Enero", description: "Te veias tan hermosa con tu cabello de fresita brillando en todos lados <3." },
  { title: "Febrero", description: "Este fue nuestro primer 14 de Febrero como novios <3." },
  { title: "Marzo", description: "CUANDO CUMPLIMOS UN PAPU AÑITO" },
  { title: "Abril", description: "Este fue el ultimo mes de tu cabello rojito " },
  { title: "Mayo", description: "Aqui volviste a ser la mas pelinegra de culiacan." },
  { title: "Junio", description: "AQUI TUVIMOS NUESTRO PRIMER VIAJE JUNTITOS JEJEEJ FUE EL MEJOR VIAJE DEL UNIVERSO." },
  { title: "Julio", description: "Amo esa foto de ti, te miras tan tierna tan hermosa." },
  { title: "Agosto", description: "Me encanta que nos tomemos fotitos sillys." },
  { title: "Septiembre", description: "No hablemos de septiembre." },
  { title: "Octubre", description: "No hablemos de octubre." },
  { title: "Noviembre", description: "Aqui fuimos al ramensito que tanto querias y estabas muy feliz" },
  { title: "Diciembre", description: "Este mes estuvo lleno de emociones y sin duda fue un mes de evolucion para nosotros 2, ha sido dificil pero no me arrepiento de nada y solo me he enamorado mas de ti" }
];

const monthTitle = document.getElementById('month-title');
const monthDescription = document.getElementById('month-description');
updateText(); // Actualiza el texto inicial

function moveSlide(step) {
  currentIndex += step;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  } else if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  const track = document.querySelector('.carousel-track');
  const slideWidth = slides[0].clientWidth;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  updateText();
}

function updateText() {
  monthTitle.textContent = months[currentIndex].title;
  monthDescription.textContent = months[currentIndex].description;
}
