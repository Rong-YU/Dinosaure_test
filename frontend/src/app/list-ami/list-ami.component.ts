import { Component, OnInit } from '@angular/core';
import { Dinosaure } from '../models/Dinosaure';
import { InformationService } from "../services/information.service";

@Component({
  selector: 'app-list-ami',
  templateUrl: './list-ami.component.html',
  styleUrls: ['./list-ami.component.css']
})
export class ListAmiComponent implements OnInit {
  dinosaures:Dinosaure[]
  constructor(public information:InformationService) { }

  ngOnInit(): void {
    this.getInformation()
    
  }

  getInformation(){
    const res = this.information.getInformation()
    res.subscribe((dinosaure : Dinosaure) =>{
        this.dinosaures = dinosaure.amis;
    },(error:any)=>{
      console.log("error")
    });
  }

  deleteFriend(id:string){
    console.log(id)
    this.information.deleteFriend(id).subscribe()
  }

  selectedDinosaure: Dinosaure
  onSelect(dinosaure: Dinosaure): void {
    this.selectedDinosaure = dinosaure;
  }

}
