import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  baseURL:string = "http://localhost:9003";

  constructor(private http:HttpClient) { }

  registerUser(user:User):Observable<any>{
    return this.http.post(`${this.baseURL}/register`,user);
  }

  loginUser(email:string, password:string):Observable<any>{
    return this.http.get(`${this.baseURL}/userdetail/${email}/${password}`);
  }

  addAccoutDetails(id:number, account:any):Observable<any>{
    return this.http.put(`${this.baseURL}/addAccount/${id}`, account);
  }

  getUserInfo(id:number):Observable<any>{
    return this.http.get(`${this.baseURL}/getUsers/${id}`);
  }

  depositeMoney(id:number, account:any):Observable<any>{
    return this.http.put(`${this.baseURL}/deposite/${id}`,account);
  }
getAllUsers():Observable<any>{
    return this.http.get(`${this.baseURL}/admin/getUserAccountDetails`);
  }
  deleteUsers(id:any):Observable<any>{
    return this.http.delete(`${this.baseURL}/admin/delete/${id}`);
  }

}
