function validatePassword() {
    const password = document.getElementById("password").value.toLowerCase();
    const correctPassword = "info24";

    if (password === correctPassword) {
        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerText = "El fuego se apaga con un_______?";
       
    } else {
        document.getElementById("message").innerText = "Contraseña incorrecta. Inténtalo de nuevo.";
    }
}
