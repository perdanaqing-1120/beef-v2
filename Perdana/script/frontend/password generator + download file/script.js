const passwordInput = document.getElementById('password');
const panjangPasswordInput = document.getElementById('panjang password');
const generateBtn = document.getElementById('generate');
const saveBtn = document.getElementById('save');

let makspw = 30;
let minpw = 8;

panjangPasswordInput.min = 8;
panjangPasswordInput.value = 8;

function panjangPassword() {
    if (panjangPasswordInput.value > makspw) {
        panjangPasswordInput.value = makspw;
    } else if (panjangPasswordInput.value < minpw) {
        panjangPasswordInput.value = minpw;
    }
}

function generate() {
    panjangPassword();
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = panjangPasswordInput.value;
    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        generatedPassword += chars.substring(randomNumber, randomNumber + 1);
    }
    passwordInput.value = generatedPassword;
    panjangPasswordInput.value = passwordLength;
}

// Generate password awal

function save() {
    let password = document.getElementById("password").value;
    let blob = new Blob([password], { type: "text/plain" });
    let anchor = document.createElement("a");
    anchor.download = "password.txt";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target = "_blank";
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}
