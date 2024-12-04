import { Component } from '@angular/core';

@Component({
  selector: 'app-persone',
  templateUrl: './persone.component.html',
  styleUrls: ['./persone.component.css']
})
export class PersoneComponent {
// Array di oggetti (persone) con nome ed età
persone = [
  { nome: 'Alice', eta: 25 },
  { nome: 'Bob', eta: 30 },
  { nome: 'Carola', eta: 28 },
  { nome: 'Davide', eta: 22 }
];
}
