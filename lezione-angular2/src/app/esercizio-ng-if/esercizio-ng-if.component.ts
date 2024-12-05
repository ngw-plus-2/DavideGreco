import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-esercizio-ng-if',
  templateUrl: './esercizio-ng-if.component.html',
  styleUrls: ['./esercizio-ng-if.component.css'],
  standalone: false,
})
export class EsercizioNgIfComponent {

  isClicked = true;
  Testo: string = "Button"
  isLoading: boolean = false

  checkTasto(){
    if(this.isLoading)
      return;

    this.isLoading = true

    setTimeout(() => {
      this.isLoading = false;
      this.isClicked = !this.isClicked;
    }, 2000);
    console.log(this.isClicked)
  }
}
