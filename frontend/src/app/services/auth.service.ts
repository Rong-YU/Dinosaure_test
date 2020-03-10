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
    const res = this.http.post<User>(this.registerUrl, user, httpOptions)
    return res;
  }
  login(user: User):Observable<User>{
    const res = this.http.post<User>(this.loginUrl, user, httpOptions)
    return res;
  }

}
