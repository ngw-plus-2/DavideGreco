import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-componenti',
  templateUrl: './componenti.component.html',
  styleUrls: ['./componenti.component.css']
})
export class ComponentiComponent {
@Output() datiInviati:EventEmitter<string> = new EventEmitter<string>();
//funzione per inviare dati
inviaDati(){
  const dati = 'Davide';
  this.datiInviati.emit(dati);//evento che inserisce Dati
}
}
