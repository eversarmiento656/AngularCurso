import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Componente animal se cargo");
  }

}
