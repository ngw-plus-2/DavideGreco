import { Component } from '@angular/core';

@Component({
  selector: 'app-tendina',
  templateUrl: './tendina.component.html',
  styleUrls: ['./tendina.component.css']
})
export class TendinaComponent {
// Array di nomi di paesi
paesi : string[] = ['Italia', 'Francia', 'Germania', 'Spagna', 'Portogallo'];


// Paese selezionato
selezionePaese : null = null;
}
