// Seleziona il form e il div per il risultato
const weatherForm = document.getElementById("weatherForm");
const weatherResult = document.getElementById("weatherResult");

// Aggiungi un event listener al form
weatherForm.addEventListener("submit", async function (event) {
    event.preventDefault(); // Previeni il comportamento predefinito del form

    // Ottieni il valore inserito dall'utente
    const city = document.getElementById("cityInput").value.trim();

    if (city === "") {
        weatherResult.innerHTML = `<p class="error">Per favore inserisci una città!</p>`;
        return;
    }

    // URL API di WeatherAPI con la chiave
    const apiKey = "cac078cab5bd473d844124923240710";
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    try {
        // Chiamata API con fetch
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Città non trovata");
        
        const data = await response.json();

        // Mostra i dati nella pagina
        weatherResult.innerHTML = `
            <h2>${data.location.name}, ${data.location.country}</h2>
            <p><strong>Temperatura:</strong> ${data.current.temp_c}°C</p>
            <p><strong>Condizioni:</strong> ${data.current.condition.text}</p>
            <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
        `;
    } catch (error) {
        weatherResult.innerHTML = `<p class="error">Errore: ${error.message}</p>`;
    }
});