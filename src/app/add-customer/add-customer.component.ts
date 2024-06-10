import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {
  successMessage: string | undefined;

  constructor(private userServices:UsersService){

  }

  addCustomer(form: NgForm) {
      const postBody = {
        title: form.value.title,
        body: form.value.description,
      }
  
      this.userServices.adduser(postBody).subscribe((data)=>{  this.successMessage = 'Customer added successfully!';}), (err:any)=>{
        console.log("unable to add user"+err);
      }


    }
  

}
