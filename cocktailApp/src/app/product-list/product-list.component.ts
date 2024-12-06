import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    cocktails: any[] = [];
  
    constructor(private http: HttpClient) {}
  
    ngOnInit(): void {
      // Ottieni l'elenco di cocktail alcolici dall'API
      this.http.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
        .subscribe((response: any) => {
          this.cocktails = response.drinks;
        });
    }
}
