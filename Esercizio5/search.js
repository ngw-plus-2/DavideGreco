const MessaggioBenvenuto = document.getElementById('MessaggioBenvenuto');
const logoutButton = document.getElementById('logoutButton');
const searchInput= document.getElementById('searchInput');    
const searchButton = document.getElementById("searchButton");
const results = document.getElementById("results");

// Controlliamo se l'utente è loggato
const username = localStorage.getItem("username");

if (!username) {
window.location.href = "index.html";
}else {
    welcomeMessage.textContent = `Benvenuto, ${username}!`;
  }
  // Logout
logoutButton.addEventListener("click", function () {
    localStorage.removeItem("username");
    window.location.href = "index.html";
  });

// Funzione di ricerca cocktail
searchButton.addEventListener("click", function () {
    const query = searchInput.value.trim();
    if (!query) return;

    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + query)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            results.innerHTML = "";
            if (data.drinks) {
                data.drinks.forEach(function (drink) {
                    const div = document.createElement("div");
                    div.className = "cocktail";
                    div.innerHTML = `
                        <h3>${drink.strDrink}</h3>
                        <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" width="100">
                        <p>${drink.strInstructions}</p>
                    `;
                    results.appendChild(div);
                });
            } else {
                results.textContent = "Nessun cocktail trovato.";
            }
        })
        .catch(function (error) {
            console.error("Errore:", error);
        });
});