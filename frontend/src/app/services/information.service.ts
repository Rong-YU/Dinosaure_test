import { Injectable } from '@angular/core';
import { AuthService } from "./auth.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { Dinosaure } from "../models/Dinosaure"

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  url:string = "http://localhost:3000/api/"
  constructor(private http:HttpClient) { }
  
  getInformation(){
    const res = this.http.get<Dinosaure>(this.url + "information", httpOptions)
    return res;
  }

  setInformation(dinosaure: Dinosaure):Observable<Dinosaure>{
    console.log("aaa")
    const res = this.http.post<User>("http://localhost:3000/api/sessions/", {username:"panda",password:"aaa"}, httpOptions)
    return this.http.put<Dinosaure>(this.url + "information", dinosaure, httpOptions)
  }

}
