// script.js
function calculateWindChill(temp, windSpeed) {
    // Using Fahrenheit and mph formula (NWS)
    return 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
}

document.addEventListener('DOMContentLoaded', () => {
    // Footer current year and last modified
    const yearSpan = document.getElementById('currentYear');
    yearSpan.textContent = new Date().getFullYear();

    const modifiedSpan = document.getElementById('lastModified');
    modifiedSpan.textContent = document.lastModified;

    // Wind Chill Calculation (static values for Hawaii example)
    const tempF = 78;     // °F
    const windMph = 8;    // mph

    const windChillEl = document.getElementById('windChill');

    // Check conditions for viable calculation
    if (tempF <= 50 && windMph > 3) {
        const windChill = calculateWindChill(tempF, windMph).toFixed(1);
        windChillEl.textContent = `${windChill}°F`;
    } else {
        windChillEl.textContent = "N/A";
    }
});