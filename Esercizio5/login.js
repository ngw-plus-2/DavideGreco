const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

// Credenziali corrette
const validUsername="Davidedino";
const validPassword="Toro.2002";

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
 const username = document.getElementById("username").value.trim();
 const password = document.getElementById("password").value.trim();

 if(username === validUsername && password === validPassword) {
     // Salviamo l'utente in localStorage
     localStorage.setItem("username", username);
    window.location.href = "search.html"; // Reindirizza alla pagina di ricerca
 } else{
    errorMessage.textContent = "Credenziali non corrette!";
 }
});