document.getElementById("register").addEventListener("submit", function(event) {
    event.preventDefault();
    let value = document.getElementById("email-input").value;
    if (value === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Seems like an invalid email',
            confirmButtonColor: 'hsl(4, 100%, 67%)',
          })
    } else {
            // Obtén el valor del correo electrónico ingresado por el usuario
            let email = document.getElementById("email-input").value;

            // Codifica el correo electrónico para que sea seguro en una URL
            var encodedEmail = encodeURIComponent(email);

            // Redirige a la página de éxito con el correo electrónico como parámetro de URL
            window.location.href = "thanks.html?email=" + encodedEmail;
    }
});