import { Component, OnInit } from '@angular/core';
import { Dinosaure} from '../models/Dinosaure';
import { InformationService } from "../services/information.service";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  public dinosaure:Dinosaure={
    age: 3,
    famille: "hez",
    race: "ccc",
    nourriture: "frites",
    amis: [],
  }


  constructor(public information:InformationService) { 
  }

  ngOnInit(): void {
  }

  doSubmit(): void{

  }

}
