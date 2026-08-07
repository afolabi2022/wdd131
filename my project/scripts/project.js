document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

const services = [

    {
        title: "Web Development",
        image: "images/web-development.webp",
        description: "Professional websites built using modern web technologies."
    },

    {
        title: "Graphic Design",
        image: "images/graphic-design.webp",
        description: "Creative logos, flyers, banners, and branding materials."
    },

    {
        title: "AI Solutions",
        image: "images/ai.webp",
        description: "Artificial Intelligence tools that improve productivity."
    },

    {
        title: "Software Development",
        image: "images/software.webp",
        description: "Custom software and business applications."
    }

];
const container = document.querySelector("#serviceContainer");

services.forEach(service => {

    const card = document.createElement("div");
    card.classList.add("service-card");

    card.innerHTML = `

<img src="${service.image}"
alt="${service.title}"
loading="lazy">

<h3>${service.title}</h3>

<p>${service.description}</p>

<a href="services.html" class="btn">Learn More</a>

`;

    container.appendChild(card);

});

const contactForm = document.querySelector("#contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        const name = document.querySelector("#name").value.trim();

        if (name === "") {

            alert("Please enter your name.");

            event.preventDefault();

            return;

        }

        localStorage.setItem("visitorName", name);

    });

}
const welcome = document.querySelector("#welcomeMessage");

if (welcome) {

    const visitor = localStorage.getItem("visitorName");

    if (visitor) {

        welcome.textContent = `Welcome back, ${visitor}!`;

    }

}
const servicesPage = document.querySelector("#servicesPageContainer");

if (servicesPage) {

    services.forEach(service => {

        const card = document.createElement("div");

        card.classList.add("service-card");

        card.innerHTML = `
            <img src="${service.image}" alt="${service.title}" loading="lazy">

            <h3>${service.title}</h3>

            <p>${service.description}</p>
        `;

        servicesPage.appendChild(card);

    });

}