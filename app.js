let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function() {
    if (password.type === "password") {
        password.type = "text";
        eyeicon.src = "images/eye-open.png"; // Ensure this path is correct
    } else {
        password.type = "password";
        eyeicon.src = "images/eye-close.png"; // Ensure this path is correct
    }
}
