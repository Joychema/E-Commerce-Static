// function toggleTheme() {
//     const body = document.body;
//     body.classList.toggle("dark-mode");

//     // Save theme preference to local storage
//     if (body.classList.contains("dark-mode")) {
//         localStorage.setItem("theme", "dark");
//     } else {
//         localStorage.setItem("theme", "light");
//     }
// }

// Load saved theme preference on page load
// window.onload = function () {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme === "dark") {
//         document.body.classList.add("dark-mode");
//     }
// };

document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    document.addEventListener("click", function (event) {
        const isClickInsideMenu = navbarCollapse.contains(event.target);
        const isClickOnToggler = navbarToggler.contains(event.target);

        if (!isClickInsideMenu && !isClickOnToggler) {
            navbarCollapse.classList.remove("show"); // Closes the menu
        }
    });
});

document.querySelectorAll(".navbar-nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".navbar-collapse").classList.remove("show");
    });
});
