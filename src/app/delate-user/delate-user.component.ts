import { Component } from '@angular/core';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-delate-user',
  templateUrl: './delate-user.component.html',
  styleUrl: './delate-user.component.css'
})
export class DelateUserComponent {

  constructor(private delateUser:UsersService){}

 dtUser(){
  this.delateUser.delateUser().subscribe(()=>{
    console.log("user delate")
  }) ,(err: any)=>{console.log(err)}
 }
 

}
