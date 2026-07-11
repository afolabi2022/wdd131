// Footer: current year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
    "Last Modification: " + document.lastModified;

// Hamburger menu toggle
const hamburgerBtn = document.getElementById("hamburger-btn");
const primaryNav = document.getElementById("primary-nav");

hamburgerBtn.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("open");
    hamburgerBtn.setAttribute("aria-expanded", isOpen);
    hamburgerBtn.querySelector(".hamburger-icon").innerHTML = isOpen
        ? "&times;"
        : "&#9776;";
});