document.addEventListener('DOMContentLoaded', function() {
    // Verificar si es la primera vez que se abre la aplicación
    if (!localStorage.getItem('primerInicio')) {
        // Mostrar la portada por 4 segundos
        document.querySelector('.portada').style.opacity = 1;
        setTimeout(function() {
            document.querySelector('.portada').style.opacity = 0;
        }, 4000);

        // Establecer el indicador de primerInicio en localStorage
        localStorage.setItem('primerInicio', true);
    } else {
        // No es la primera vez, ocultar la portada inmediatamente
        document.querySelector('.portada').style.display = 'none';
    }
});