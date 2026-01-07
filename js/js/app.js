function login() {
    const role = document.getElementById("role").value;
    localStorage.setItem("role", role);
    window.location.href = "dashboard.html";
}

function loadRole() {
    const role = localStorage.getItem("role");
    if (role === "admin") {
        document.querySelectorAll(".admin-only")
            .forEach(el => el.style.display = "block");
    }
}
