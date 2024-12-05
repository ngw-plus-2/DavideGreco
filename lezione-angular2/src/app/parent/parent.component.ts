import { Component } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  standalone: false,

 
})
export class ParentComponent {
  messaggio: string = '';

  // Metodo chiamato dal figlio
  mostraMessaggio(messaggioFiglio: string): void {
    this.messaggio = messaggioFiglio;
  }
}
