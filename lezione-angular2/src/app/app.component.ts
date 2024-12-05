import { Component } from '@angular/core';
import { ProductListComponent } from "./product-list/product-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ProductListComponent]
})
export class AppComponent {
  title = 'lezione-angular2';
  UserStato: string = 'ospite'; // Può essere 'admin', 'utente', o 'ospite'

}
