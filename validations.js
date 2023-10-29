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
        this.submit();
    }
});