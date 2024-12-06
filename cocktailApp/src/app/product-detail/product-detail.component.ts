import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  cocktailName: string = '';
  cocktailDetails: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // Recupera il nome del cocktail dalla rotta
    this.cocktailName = this.route.snapshot.paramMap.get('name')!;

    // Chiamata API per cercare i dettagli del cocktail
    this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.cocktailName}`)
      .subscribe((response: any) => {
        this.cocktailDetails = response.drinks[0];
      });
  }
}