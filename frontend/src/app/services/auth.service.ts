import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUrl:string = "http://localhost:3000/api/sessions/"
  registerUrl:string = "http://localhost:3000/api/register/"
  constructor(private http:HttpClient) { }

  register(user: User) {
    return this.http.post<User>(this.registerUrl, user, httpOptions)
  }
  login(user: User):Observable<User>{
    return this.http.post<User>(this.loginUrl, user, httpOptions)
  }

  logout(){
    localStorage.removeItem('session')
  }

  getToken(){
    return localStorage.getItem('session')
  }

}
