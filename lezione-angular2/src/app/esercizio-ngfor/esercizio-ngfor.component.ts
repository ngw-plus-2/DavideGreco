import { Component } from '@angular/core';

@Component({
  selector: 'app-esercizio-ngfor',
  templateUrl: './esercizio-ngfor.component.html',
  styleUrls: ['./esercizio-ngfor.component.css']
})
export class EsercizioNgforComponent {
  persone = [
    {
      nome: "Salvatore",
      eta: 19
    },
    {
      nome: "Pippo",
      eta: 16
    },
    {
      nome: "Riccardo",
      eta: 33
    }
  ];
  
  paesi: string[] = ["Italia", "Spagna", "Francia", "Portogallo", "Regno Unito"];
  selectedValue = null;
}

