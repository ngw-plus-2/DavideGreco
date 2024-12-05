import { Component, OnInit } from '@angular/core';
import { IProduct } from '../componenti/toggle-paragraph/Models/prodotti';
import { ProductService } from 'src/services/prodotti.service';

@Component({
  selector: 'app-product-api',
  templateUrl: './product-api.component.html',
  styleUrls: ['./product-api.component.css']
})
export class ProductApiComponent implements OnInit {

  //step 1. dischiarare nel constructor un nome destinato al servizio e assegnargli il servizio

  constructor(private productDTO: ProductService){}

  drink: IProduct[] = []

  ngOnInit(): void {
    this.productDTO.getAllProduct().subscribe({
      next: (res: { drinks: IProduct[] }) => {
        this.drink = res.drinks
        console.log(this.drink);
      },
      error:(err) => {
        console.error(err);
      }
    });
  }
}
