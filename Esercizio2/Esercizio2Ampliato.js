// Esercizio 2: Shopping List Ampliato
let ListaSpesa = [];
let continuaAdaggiungere = true;

while(continuaAdaggiungere) {
    //chiediamo se aggiungere o rimuovere
    let azione = prompt("Vuoi aggiungere un prodotto o rimuovere l'ultimo prodotto? (AGGIUNGI/RIMUOVI/ESCI)").toUpperCase();
 switch(azione) {
    case "AGGIUNGI":
      let Aggiungioggetti = prompt("Cosa vuoi aggiungere alla lista della spesa?")
      if(Aggiungioggetti){
        ListaSpesa.push(Aggiungioggetti);
        console.log("Prodotto aggiunto: ", ListaSpesa);
        alert("Prodotto aggiunto alla lista!");
      }
      break;
      case "RIMUOVI":
        if(ListaSpesa.length>0){
         let RimuovereOggetti = ListaSpesa.pop();   
         console.log(`Hai rimosso "${RimuovereOggetti}". Lista aggiornata:`, ListaSpesa);
         alert(`Hai rimosso "${RimuovereOggetti}" dalla lista.`);
        }else{
            alert("La lista della spesa è vuota!");
        }
        break;
        
        case "ESCI":
            continuaAdaggiungere = false;
            break;
             default:
                alert("Scelta non valida!");
                break;
         }  

}
//Stampa la lista finale
console.log("Lista finale della spesa", ListaSpesa);
alert("Gestione della lista conclusa!");

