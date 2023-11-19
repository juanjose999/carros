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


    document.addEventListener("DOMContentLoaded", function () {
        var pantallaInicio = document.getElementById("pantallaInicio");

        // Verificar si es la primera vez que se abre la aplicación
        if (localStorage.getItem("primeraVez") === null) {
            // Mostrar la pantalla de inicio
            pantallaInicio.style.display = "block";

            // Establecer una marca en localStorage para indicar que la aplicación ya se ha abierto
            localStorage.setItem("primeraVez", "false");

            // Ocultar la pantalla de inicio después de 3 segundos
            setTimeout(function () {
                pantallaInicio.style.display = "none";
            }, 3000);
        } else {
            // Si no es la primera vez, simplemente ocultar la pantalla de inicio
            pantallaInicio.style.display = "none";
        }
    });

// Agrega un listener para el evento de scroll

