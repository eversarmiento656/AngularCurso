import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-email',
  templateUrl: './main-email.component.html',
  styleUrls: ['./main-email.component.css']
})
export class MainEmailComponent{

  title = 'Modulo de email';
  emailContacto:string;

  guardarEmail(){
    localStorage.setItem('emailContacto', this.emailContacto);
  }

}
