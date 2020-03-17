import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { InformationService } from '../services/information.service'
import { User } from '../models/User';
import { Dinosaure } from '../models/Dinosaure';

@Component({
  selector: 'app-add-ami',
  templateUrl: './add-ami.component.html',
  styleUrls: ['./add-ami.component.css']
})
export class AddAmiComponent implements OnInit {
  user:User={
    username:"",
    password:"",
    session:""
  };
  dinosaure: Dinosaure={
    name:"",
    age:null,
    race:"",
    famille:"",
    nourriture:"",
    amis:[]
  }
  constructor(public information:InformationService) { }

  ngOnInit(): void {
  }

  addAmi():void{
      this.information.addNewFriend(this.user,this.dinosaure).subscribe()
  }

}
