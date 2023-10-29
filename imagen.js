 // Función para cambiar la imagen en respuesta a la media query
 function cambiarImagen() {
    let imagen = document.getElementById('illustration-sign-up');
    
    if (window.matchMedia("(max-width: 659px)").matches) {
        imagen.src = "./assets/images/illustration-sign-up-mobile.svg";
        imagen.alt = "Image 2";
    } else {
        imagen.src = "./assets/images/illustration-sign-up-desktop.svg";
        imagen.alt = "Image 1";
    }
}

// Escucha cambios en la media query
let mediaQuery = window.matchMedia("(max-width: 659px)");
mediaQuery.addListener(cambiarImagen);

// Llama a la función para configurar la imagen inicial
cambiarImagen();