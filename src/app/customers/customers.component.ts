import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit{

  users:any;

  constructor(private usersServices:UsersService){

  }

  ngOnInit(): void {

   this.usersServices.getUsers().subscribe((data)=>{
    this.users = data
   }), (err: any) =>{
    console.log("unable to get data from the URL:"+err)
   }

   const paramOptions: any = {param1: 'All', param2: 'Tank Farm', param3: undefined, param4: '4', param5: undefined,useValue: 42}

   this.usersServices.getUrl(paramOptions).subscribe((data)=>{
    console.log(data,"URL prj")
   }), (err:any)=>{
    console.log("URL ERR"+err)
   }
    
  }


}
