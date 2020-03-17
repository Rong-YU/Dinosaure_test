import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { User } from '../models/user';
import { InformationService } from '../services/information.service';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User={
    username:"",
    password:"",
    session:""
  }

  constructor(public auth:AuthService, private router:Router) { 
  }
  ngOnInit(): void {
  
  }

  login(){
    console.log("user",this.user)
    const res = this.auth.login(this.user)
    res.subscribe((user : User) =>{
        localStorage.setItem('username',user.username);
        localStorage.setItem('session',user.session);
        this.router.navigate(['']);
    },(error:any)=>{
      localStorage.removeItem('session');
      alert("username or password incorrect")
    });
  }

  register(){
    const res = this.auth.register(this.user)
    res.subscribe((user : User) =>{
        //localStorage.setItem('username',user.username);
        //localStorage.setItem('session',user.session);
        //this.router.navigate(['']);
    },(error:any)=>{
      localStorage.removeItem('session');
    });
  }

  logout(){
    this.auth.logout();
    alert("successfully logged out!")
    this.router.navigate(['/login']);
  }
}
