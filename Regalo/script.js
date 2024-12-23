// Variables
const targetNumber = 21; // Número final
const duration = 2000; // Duración en milisegundos (2 segundos)
const counterElement = document.getElementById('counter');

// Función de animación para el contador
function animateCounter(target, duration) {
  let start = 0; // Número inicial
  const increment = target / (duration / 10); // Cambio incremental
  const interval = setInterval(() => {
    start += increment;
    if (start >= target) {
      clearInterval(interval); // Detener animación
      start = target; // Asegurar que el número final sea exacto
      triggerConfetti(); // Llamar la función de confetti
      showImages(); // Llamar la función para mostrar imágenes
    }
    counterElement.textContent = Math.floor(start); // Actualizar número en pantalla
  }, 10); // Intervalo de actualización (10ms)
}

// Función para lanzar confetti
function triggerConfetti() {
  const duration = 2 * 1000; // Duración total del confetti (3 segundos)
  const end = Date.now() + duration;

  (function frame() {
    // Generar confetti en ráfagas
    confetti({
      particleCount: 5, // Cantidad de partículas por ráfaga
      angle: 60, // Ángulo de la ráfaga
      spread: 55, // Dispersión de las partículas
      origin: { x: 0 }, // Posición inicial (lado izquierdo)
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 }, // Posición inicial (lado derecho)
    });

    // Continuar animando mientras no se alcance la duración total
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

// Función para mostrar las imágenes
function showImages() {
  document.querySelectorAll(".side-image").forEach(image => {
    image.classList.add("show"); // Añadir la clase 'show' para que se animen
  });
}

// Iniciar la animación del contador
animateCounter(targetNumber, duration);