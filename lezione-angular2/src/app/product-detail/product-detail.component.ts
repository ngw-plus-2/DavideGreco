import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  imports: []
})
export class ProductDetailComponent {
  //@Input() product: any;//
  @Output() datiInviati: EventEmitter<string> = new EventEmitter<string>();

  PostData() {
    const dati = "Davide"
    this.datiInviati.emit(dati);
  }
}
