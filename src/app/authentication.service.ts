import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  baseUrl='http://localhost:9003';

  constructor(private http:HttpClient) { }

  // to get dealer details
  getDealersList():Observable<any>
  {
    return this.http.get(`${this.baseUrl}`);
  }

  saveDealer(dealer:Object):Observable<Object>
  {
    return this.http.post(`${this.baseUrl}`,dealer);
  }

  // authenticate(username:string, password:string)
  // {
  //   // === (Triple equals) is a strict equality comparison operator in JavaScript, which returns false for the values which are not of a similar type.
  //   if (username === "admin" && password === "redhat") {
  //     sessionStorage.setItem('username', username)
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  
  // login(dealer:any):Observable<any>
  // {
  //   return this.http.post(`http://localhost:8085/ims/api/dealer`,dealer)
  // }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
 
  getId(){
    let userId = localStorage.getItem('userId');
    return userId
  }
 
  logOut() {
    sessionStorage.removeItem('username')
  }
}
