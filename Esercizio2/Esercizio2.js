//Esercizio 2 shopping List
let shoppingList = [];
let continuaAstampare = true;

while(continuaAstampare){
let item = prompt("Cosa vuoi aggiungere alla lista della spesa?");
if(item){
 shoppingList.push(item); // Aggiungi l'elemento alla lista 
 console.log("Lista della spesa", shoppingList);// Stampa la lista nella console
 alert("Prodotto aggiunto alla lista!");//Mostra un allert
}
// Chiedi se continuare o terminare
let response = prompt("Vuoi aggiungere altri prodotti? (SI/NO/ESCI)").toUpperCase();
if(response=="NO"|| response === "ESCI"){
continuaAstampare = false;
}
}
//Stampa la lista 
console.log("lista finale della spesa",shoppingList);
alert("Lista Terminata");
