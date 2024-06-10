import { HttpClient, HttpHeaders, HttpParams, withInterceptors } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface User{
  name:string,
  userName:string,
  email:string,
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { 
   
  }


  // PUT Method

  editUser(){

    const putdata = {
      name: "kesav",
      id:1,
    }

    const editHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      "editTokenKey":'name123'
    })

    const editParams = new HttpParams()
    .set("id",'name')


    return this.http.put("https://jsonplaceholder.typicode.com/users/1",putdata,{headers:editHeader, params:editParams})
  }



// POST method
  adduser(body: any){
   const postBody = {
    title: body.title,
    body: body.description,
  }

  const customHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'AuthenticationTokenKey':'12KJ584'
  })

  const customParam = new HttpParams()
  .set('title','description')


   return this.http.post("https://jsonplaceholder.typicode.com/users",body,{headers:customHeader, params:customParam})
  }


  // GET Method

  getUsers():Observable<User>{
    const headers2 = new HttpHeaders({
      'Content-Type': 'application/json',
      'AuthenticationToken': '123456',
    })

    const params2 = new HttpParams()
    .set('pagem','10')
    .set('pageSize','100')


    return this.http.get<User>("https://jsonplaceholder.typicode.com/users",{headers:headers2, params:params2})
  }

  // Delete Method

  delateUser(){
   return this.http.delete("https://jsonplaceholder.typicode.com/users/1")
  }


  // get url prj

  getUrl(paramm:any){
    // const paramOptions: any = {param1: 'All', param2: 'Tank Farm', param3: undefined, param4: '4', param5: undefined,useValue: 42}
    return  this.http.get("https://unilevertecheffapi.kindsea-e9a41305.eastus.azurecontainerapps.io/GetTagList",{params:paramm})
  }
}


//