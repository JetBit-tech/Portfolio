function generatePassword() {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let chars = "";

    if (document.getElementById("uppercase").checked) chars += upper;
    if (document.getElementById("lowercase").checked) chars += lower;
    if (document.getElementById("numbers").checked) chars += numbers;
    if (document.getElementById("symbols").checked) chars += symbols;

    if (chars.length === 0) {
        alert("Vyber alespon jednu moznost!");
        return;
    }

    const length = document.getElementById("length").value;
    let password = "";

    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById("password").value = password;
}

function copyPassword() {
    const password = document.getElementById("password");

    if (password.value === "") {
        alert("Nejdriv vygeneruj heslo.");
        return;
    }

    password.select();
    password.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(password.value);

    alert("Heslo zkopirovano!");
}