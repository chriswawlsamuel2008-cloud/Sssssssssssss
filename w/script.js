// REGISTER
function register() {
    let user = {
        name: document.getElementById("regName").value,
        email: document.getElementById("regEmail").value,
        phone: document.getElementById("regPhone").value,
        pass: document.getElementById("regPass").value,
    };

    localStorage.setItem(user.email, JSON.stringify(user));
    alert("Account created!");
}

// LOGIN
function login() {
    let email = document.getElementById("logEmail").value;
    let pass = document.getElementById("logPass").value;

    let user = localStorage.getItem(email);
    if (!user) return alert("User not found!");

    let data = JSON.parse(user);
    if (data.pass !== pass) return alert("Wrong password!");

    localStorage.setItem("currentUser", email);
    window.location.href = "home.html";
}

// LOGOUT
function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}