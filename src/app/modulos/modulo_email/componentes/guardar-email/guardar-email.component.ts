import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guardar-email',
  templateUrl: './guardar-email.component.html',
  styleUrls: ['./guardar-email.component.css']
})
export class GuardarEmailComponent{

  public title = 'Guardar Email';
  public emailContacto : string;

  constructor() { }

  guardarEmail(){
    localStorage.setItem('emailContacto',this.emailContacto);
  }

}
