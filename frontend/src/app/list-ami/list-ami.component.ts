import { Component, OnInit } from '@angular/core';
import { Dinosaure } from '../models/Dinosaure'
@Component({
  selector: 'app-list-ami',
  templateUrl: './list-ami.component.html',
  styleUrls: ['./list-ami.component.css']
})
export class ListAmiComponent implements OnInit {
  amis:Dinosaure[]
  constructor() { }

  ngOnInit(): void {
    this.amis=[
      {
      age: 12,
      famille: "aaa",
      race: "asdasd",
      nourriture: "asdasd",
      amis: null
      }
  ]
  }

}
