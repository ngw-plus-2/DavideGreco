import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/componenti/toggle-paragraph/Models/prodotti';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //step 1. importare http client module in app.module.ts
  //step 2. nel constructor del servizio importare http: HttpClient
  //step 3. creare la funzione di logica che si vuole richiedere

  constructor(private http: HttpClient) {}

   getAllProduct(): Observable< {drinks: IProduct[] }> {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';
    return this.http.get<{drinks: IProduct[]}>(url)
   }
}
