const year = new date().getFullYear();

document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").textContent =
    'Last Modified: ${document.lastModified}';