import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    { id: 1, name: 'Laptop', price: 1000, description: 'Alte performance per il laptop' },
    { id: 2, name: 'Smartphone', price: 700, description: 'modello vecchio per smartphone' },
    { id: 3, name: 'Telefono', price: 150, description: 'Notifiche Cancellate per il telefono' },
    { id: 4, name: 'Smartwatch', price: 200, description: 'Smartwatch ultimo modello' }
  ];
  selectedProduct: any = null;

  selectProduct(product: any) {
    this.selectedProduct = product;
  }
}
