// Fade-in sections on scroll
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const reveal = () => {
        const trigger = window.innerHeight * 0.92;
        sections.forEach(sec => {
            const top = sec.getBoundingClientRect().top;
            if (top < trigger) sec.classList.add('visible');
            else sec.classList.remove('visible');
        });
    };
    window.addEventListener('scroll', reveal);
    reveal();
});
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