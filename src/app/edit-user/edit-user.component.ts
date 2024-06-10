import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {
  constructor(private http:UsersService){

  }

  editUser(){
    this.http.editUser().subscribe((data)=>{
      console.log(data)
    }),(err: string)=> {console.log("editdata"+err)}
  }



}
