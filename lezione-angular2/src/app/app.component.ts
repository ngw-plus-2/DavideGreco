import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lezione-angular2';
  UserStato: string = 'ospite'; // Può essere 'admin', 'utente', o 'ospite'

}
