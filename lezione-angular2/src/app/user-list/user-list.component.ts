import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { IUser } from '../esercizio-ngfor/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userDTO: UserService){

  }
  userList: IUser[] = [];

  ngOnInit(): void {
    this.userDTO.getAllUser(0, 10).subscribe({
      next:(res: {data: IUser[]})=>{
        this.userList = res.data
        console.log(res.data)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}