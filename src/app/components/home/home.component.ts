import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Bienvenido a NG-ZOO';

  constructor() { }

  ngOnInit() {
    console.log("Componente home se cargo");
  }

}
