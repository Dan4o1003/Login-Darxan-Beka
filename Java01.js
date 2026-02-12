const form = document.getElementById("form");
const login = document.getElementById("login");
const password = document.getElementById("password");
const passwordPovtor = document.getElementById("passwordPovtor");
const TextVxod = document.getElementById("TextVxod");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const password2Error = document.getElementById("password2Error");

const loginRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRe = /^(?=.*\d)(?=.*[!@#$%^&])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&]{6,}$/;

function validate(data) {
    let ok = true;

    emailError.textContent = "";
    passwordError.textContent = "";
    password2Error.textContent = "";

    if (!data.email) {
        emailError.textContent = "Введите Email";
        ok = false;
    } else if (!loginRe.test(data.email)) {
        emailError.textContent = "Email неправильный";
        ok = false;
    }

    if (!data.password) {
        passwordError.textContent = "Введите пароль";
        ok = false;
    } else if (!passwordRe.test(data.password)) {
        passwordError.textContent = "Пароль слишком слабый";
        ok = false;
    }

    if (data.password !== data.password2) {
        password2Error.textContent = "Пароли не совпадают";
        ok = false;
    }

    return ok;
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const data = {
        email: login.value.trim(),
        password: password.value.trim(),
        password2: passwordPovtor.value.trim()
    };

    if (validate(data)) {
        TextVxod.textContent = "Вы успешно зарегистрировались!";
    } else {
        TextVxod.textContent = "";
    }
});