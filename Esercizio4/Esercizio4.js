// Selezioniamo il form e il div per mostrare i dati inseriti
const form = document.getElementById("formRegistrazione");
const datiInseriti = document.getElementById("datiInseriti");

// Aggiungiamo un event listener al submit del form
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Previene il comportamento predefinito di submit
  
  // Raccogliamo i dati inseriti
  const email = document.getElementById("email").value.trim();
  const nome = document.getElementById("nome").value.trim();
  const cognome = document.getElementById("cognome").value.trim();
  const password = document.getElementById("password").value.trim();
  
  // Controllo per verificare che i campi non siano vuoti
  if (!email || !nome || !cognome || !password) {
    console.error("Tutti i campi sono obbligatori.");
    alert("Compila tutti i campi.");
    return;
  }
  
  // Mostriamo i dati inseriti
  datiInseriti.innerHTML = `
    <h1>Benvenuto, ${nome}!</h1>
    <ul>
      <li>Email: ${email}</li>
      <li>Nome: ${nome}</li>
      <li>Cognome: ${cognome}</li>
    </ul>
  `;
});