import { Injectable } from '@angular/core';
import { AuthService } from "./auth.service";
import { User } from "../models/User"
import { Dinosaure } from "../models/Dinosaure"

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  constructor(public auth:AuthService) { }
  
  session(user: User){
    const res = this.auth.login(user)
    res.subscribe((user : User) =>{
        localStorage.setItem('username',user.username);
        localStorage.setItem('session',user.session);
    },(error:any)=>{
      localStorage.removeItem('session');
    });
  }
  logout(){
    localStorage.removeItem('session')
  }
  register(user: User){
    const res = this.auth.register(user)
    res.subscribe((user : User) =>{
        localStorage.setItem('username',user.username);
        localStorage.setItem('session',user.session);
    },(error:any)=>{
      localStorage.removeItem('session');
    });
  }
}
