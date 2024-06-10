import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CustomersComponent } from './customers/customers.component';
import {RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersService } from './users.service';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DelateUserComponent } from './delate-user/delate-user.component';
import { CommonInterceptor } from './common.interceptor';



const router:Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'customers',
    component:CustomersComponent
  },
  {
    path:'add-customer',
    component:AddCustomerComponent
  },
  {
    path:'edit-user/:id',
    component:EditUserComponent
  },
  {
    path:'delate-user/:id',
    component:DelateUserComponent
  }
]



@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    HomeComponent,
    AddCustomerComponent,
    EditUserComponent,
    DelateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(router),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    {
      provide:HTTP_INTERCEPTORS,
      useClass:CommonInterceptor,
      multi:true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
