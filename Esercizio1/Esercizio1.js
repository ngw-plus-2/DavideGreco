// Esercizio 1: Stampa Messaggio
const numeroVolte = parseInt(prompt("Quante volte vuoi stampare il messaggio ?"),10);
const messaggio = prompt("Quale messaggio vuoi stampare?");
for (let i = 0; i < numeroVolte; i++){
    console.log(messaggio);
}

// Esercizio 2: Uscire dal messaggio
let input;
do{
input = prompt("Inserisci un messaggio (digita 'ESCI' per terminare):");
    if(input!=="Esci");
    {
        console.log(input);
    }
} while(input!=="Esci");    
  console.log("Programma Terminato");