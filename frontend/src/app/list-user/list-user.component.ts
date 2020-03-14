import { Component, OnInit, Input } from '@angular/core';
import { Dinosaure } from '../models/Dinosaure';
import { InformationService } from "../services/information.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  dinosaures: Dinosaure[]
  constructor(public information:InformationService) { }

  ngOnInit(): void {
    this.getDinosaures()
  }

  getDinosaures(){
    this.information.getDinosaures().subscribe((dinosaures : Dinosaure[]) =>{
        this.dinosaures = dinosaures
    });
  }

  addFriend(id:string){
    this.information.addFriend(id).subscribe()
  }

  selectedDinosaure: Dinosaure
  onSelect(dinosaure: Dinosaure): void {
    this.selectedDinosaure = dinosaure;
  }

}
