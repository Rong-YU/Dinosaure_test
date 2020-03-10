import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { InformationService } from '../services/information.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User = {username:"",password:"",session:""}

  constructor(public information:InformationService) { 
  }
  ngOnInit(): void {
      let username=localStorage.getItem('username')
      if(username){
        this.user.username=username
      }
  }

  login(){
    this.information.session(this.user);
  }
  register(){
    this.information.register(this.user);
  }
  logout(){
    this.information.logout();
  }
}
