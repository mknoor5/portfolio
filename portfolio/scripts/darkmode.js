function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
}

document.addEventListener("DOMContentLoaded", () => {
    const darkModeSetting = localStorage.getItem("darkMode");
    if (darkModeSetting === "true") {
        document.body.classList.add("dark-mode");
    }

    const darkModeToggle = document.getElementById("dark-mode-toggle");
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", toggleDarkMode);
    }
});