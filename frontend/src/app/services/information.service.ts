import { Injectable } from '@angular/core';
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
    return this.http.get<Dinosaure>(this.url + "information", httpOptions)
  }

  setInformation(dinosaure: Dinosaure):Observable<Dinosaure>{
    return this.http.put<Dinosaure>(this.url + "information", dinosaure, httpOptions)
  }

  getDinosaures(){
    return this.http.get<Dinosaure[]>(this.url + "list", httpOptions)
  }

  addFriend(id: string):Observable<{}>{
    return this.http.post(this.url + `friends/${id}`, httpOptions)
  }

  deleteFriend(id: string):Observable<{}>{
    return this.http.delete(this.url + `friends/${id}`, httpOptions)
  }

  addNewFriend(user: User, dinosaure: Dinosaure):Observable<any>{
    let ami = {
      username: user.username,
      password: user.password,
      name: dinosaure.name,
      age: dinosaure.age,
      famille: dinosaure.famille,
      race: dinosaure.race,
      nourriture: dinosaure.nourriture
    }
    return this.http.post<any>(this.url + "addAmi", ami, httpOptions)
  }

}
