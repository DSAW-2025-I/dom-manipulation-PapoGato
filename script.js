const track = document.querySelector(".carousel-track");
const prevButton = document.querySelector(".left-btn");
const nextButton = document.querySelector(".right-btn");
const images = document.querySelectorAll(".carousel-track img");

let index = 0;
const totalImages = images.length;
const imageWidth = images[0].clientWidth;

// Función para actualizar el carrusel
function updateCarousel() {
    track.style.transform = `translateX(-${index * imageWidth}px)`;

    // Deshabilitar botones en los extremos
    prevButton.disabled = index === 0;
    nextButton.disabled = index === totalImages - 1;
}

// Mover a la imagen anterior
prevButton.addEventListener("click", () => {
    if (index > 0) {
        index--;
        updateCarousel();
    }
});

// Mover a la siguiente imagen
nextButton.addEventListener("click", () => {
    if (index < totalImages - 1) {
        index++;
        updateCarousel();
    }
});

// Inicializar el estado del carrusel
updateCarousel();
