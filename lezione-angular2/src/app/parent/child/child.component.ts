import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']

})
export class ChildComponent {
  @Output() childClicked = new EventEmitter<string>();

  inviaMessaggio(): void {
    this.childClicked.emit('Ciao Davide'); // Sostituisci [Tuo Nome] con il tuo nome
}
}
