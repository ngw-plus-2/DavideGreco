import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/componenti/toggle-paragraph/Models/user';
;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  getAllUser(page: number, per_page: number):Observable<{data:IUser[]}>{
    const url = `https://reqres.in/api/users?page=${page}&per_page=${per_page}`
    return this.http.get<{data: IUser[]}>(url)
  }
}