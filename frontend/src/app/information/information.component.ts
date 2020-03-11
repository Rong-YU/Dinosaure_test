import { Component, OnInit } from '@angular/core';
import { Dinosaure} from '../models/Dinosaure';
import { InformationService } from "../services/information.service";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  dinosaure: Dinosaure={
    age:0,
    race:"aa",
    famille:"zzz",
    nourriture:"zzz",
    amis:[]
  }
  constructor(public information:InformationService) { 
  }

  ngOnInit(): void {
      this.getInformation();
  }

  getInformation(){
    const res = this.information.getInformation()
    res.subscribe((dinosaure : Dinosaure) =>{
        this.dinosaure = dinosaure
    },(error:any)=>{
      console.log("error")
    });
  }

  setInformation(){
    const res = this.information.setInformation(this.dinosaure)
    res.subscribe((error:any)=>{
    console.log("error")
  });
  }
  doSubmit(): void{

  }

}
