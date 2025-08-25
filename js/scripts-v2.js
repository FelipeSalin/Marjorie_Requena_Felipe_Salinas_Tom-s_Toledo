const form = document.getElementById('formulario_registro');

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const usuario = document.getElementById("usuario").value.trim();
    const mail = document.getElementById("mail").value.trim();
    const pass = document.getElementById("pass").value.trim();
    const pass2 = document.getElementById("pass2").value.trim();
    const fecha = document.getElementById("fecha").value;
    const domicilio = document.getElementById("domicilio").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,18}$/;

    if (!nombre) {
        alert("Por favor, complete con su nombre.");
        return;
    }

    if (!usuario) {
        alert("Por favor, complete con un nombre de usuario válido.");
        return;
    }

    if (!mail) {
        alert("Por favor, complete con un correo electrónico válido.");
        return;
    }

    if (!pass) {
        alert("Por favor, complete con una contraseña válida.");
        return;
    }

    if (!pass2) {
        alert("Por favor, complete con la misma contraseña.");
        return;
    }

    if (!fecha) {
        alert("Por favor, complete con una fecha válida.");
        return;
    }

    if (!emailRegex.test(mail)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return;
    }

    if (pass !== pass2) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    if (!passwordRegex.test(pass)) {
        alert("La contraseña debe tener entre 6 y 18 caracteres, incluir al menos un número y una letra mayúscula.");
        return;
    }

    alert("¡Registrado exitosamente!");
    form.submit();
});