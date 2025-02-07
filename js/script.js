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

// document.addEventListener("DOMContentLoaded", function () {
//     const navbarToggler = document.querySelector(".navbar-toggler");
//     const navbarCollapse = document.querySelector(".navbar-collapse");
//     const overlay = document.getElementById("overlay");
//     const body = document.body; // Get body element

//     // Function to open mobile menu
//     function openMenu() {
//         navbarCollapse.classList.add("show");
//         overlay.style.display = "block";
//         body.style.overflow = "hidden"; // Disable scrolling
//     }

//     // Function to close mobile menu
//     function closeMenu() {
//         navbarCollapse.classList.remove("show");
//         overlay.style.display = "none";
//         body.style.overflow = ""; // Re-enable scrolling
//     }

//     // Open menu when clicking the toggler
//     navbarToggler.addEventListener("click", function () {
//         if (navbarCollapse.classList.contains("show")) {
//             closeMenu();
//         } else {
//             openMenu();
//         }
//     });

//     // Close menu when clicking the overlay
//     overlay.addEventListener("click", closeMenu);

//     // Close menu when clicking a nav link (optional)
//     document.querySelectorAll(".nav-link").forEach(link => {
//         link.addEventListener("click", closeMenu);
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    const overlay = document.getElementById("overlay");
    const body = document.body;

    // Get Bootstrap Collapse instance
    const bsNavbar = new bootstrap.Collapse(navbarCollapse, { toggle: false });

    // Function to open mobile menu
    function openMenu() {
        bsNavbar.show();
        overlay.style.display = "block";
        body.style.overflow = "hidden"; // Disable scrolling
    }

    // Function to close mobile menu
    function closeMenu() {
        bsNavbar.hide();
        overlay.style.display = "none";
        body.style.overflow = ""; // Re-enable scrolling
    }

    // Open menu when clicking the toggler
    navbarToggler.addEventListener("click", function () {
        if (navbarCollapse.classList.contains("show")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close menu when clicking the overlay
    overlay.addEventListener("click", closeMenu);

    // Close menu when clicking a nav link
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", closeMenu);
    });
});
