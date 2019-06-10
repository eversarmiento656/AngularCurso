import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cuidador',
  templateUrl: './cuidador.component.html',
  styleUrls: ['./cuidador.component.css']
})
export class CuidadorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("El componente cuidador se cargo");
  }

}
