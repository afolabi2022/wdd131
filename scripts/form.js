// Product Array

const products = [
    {
        id: "fc1888",
        name: "Flux Capacitor",
        averagerating: 4.5
    },
    {
        id: "fc2050",
        name: "Power Laces",
        averagerating: 4.7
    },
    {
        id: "fs1987",
        name: "Time Circuits",
        averagerating: 3.5
    },
    {
        id: "ac2000",
        name: "Low Voltage Reactor",
        averagerating: 3.9
    },
    {
        id: "jj1969",
        name: "Warp Equalizer",
        averagerating: 5.0
    }
];

// Select the dropdown

const productSelect = document.querySelector("#product");

// Create options

products.forEach(product => {

    const option = document.createElement("option");

    option.value = product.id;

    option.textContent = product.name;

    productSelect.appendChild(option);

});

// Footer

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;