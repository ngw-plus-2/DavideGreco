import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-paragraph',
  templateUrl: './toggle-paragraph.component.html',
  styleUrls: ['./toggle-paragraph.component.css']

})
export class ToggleParagraphComponent {
isVisible: boolean = true; // Variabile booleana per controllare la visibilità

// Metodo per alternare la visibilità
//toogleVisibility():void{
  //this.isVisible =!this.isVisible; // Toggle la visibilità

  toggleVisibility(): void {
    if (this.isVisible) {
      setTimeout(() => {
        this.isVisible = !this.isVisible;
      }, 500); // Simula un caricamento di mezzo secondo
    } else {
      this.isVisible = !this.isVisible;
    }
  }


}
//}
