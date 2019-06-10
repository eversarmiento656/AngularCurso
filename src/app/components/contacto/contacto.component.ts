import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public emailContacto:string;

  constructor() { }

  ngOnInit() {
    console.log("Componente contacto se cargo");
  }

  guardarEmail(){
   localStorage.setItem('emailContacto',this.emailContacto);
  }

}
