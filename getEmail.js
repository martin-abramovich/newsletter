// Función para obtener el valor del parámetro de URL
function getParametroURL(name) {
    var url = new URL(window.location.href);
    return url.searchParams.get(name);
}

// Obtén el valor del parámetro "correo" de la URL
var emailAddress = getParametroURL("email");

// Muestra el correo electrónico en la pantalla de éxito
document.getElementById("showEmail").textContent = decodeURIComponent(emailAddress);