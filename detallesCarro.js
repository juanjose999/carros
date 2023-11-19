document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".carroGalery .slider");
    let slideIndex = 0;
    const intervalTime = 3000; // Tiempo entre transiciones

    function nextSlide() {
        slideIndex++;
        if (slideIndex >= slider.children.length) {
            slideIndex = 0;
            slider.style.transition = "none"; // Elimina la transición para que no sea visible al reiniciar
            slider.style.transform = `translateX(${-slideIndex * 100}%)`;
            void slider.offsetWidth; // Fuerza un reflow para aplicar el cambio sin la transición
            slider.style.transition = "transform 0.5s ease"; // Restaura la transición para las siguientes imágenes
        } else {
            updateSlider();
        }
    }

    function updateSlider() {
        slider.style.opacity = "0"; // Hace el carrusel transparente mientras se reinicia
        setTimeout(() => {
            slider.style.opacity = "1"; // Restablece la opacidad después del reinicio
            slider.style.transform = `translateX(${-slideIndex * 100}%)`;
        }, 0);
    }

    setInterval(nextSlide, intervalTime);
})
// Agrega un listener para el evento de scroll

