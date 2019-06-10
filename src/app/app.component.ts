import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, DoCheck{
  title = 'NG-ZOO';
  public correo : string;

  ngOnInit(){
    this.correo = localStorage.getItem('emailContacto');
  }

  ngDoCheck(){
    this.correo = localStorage.getItem('emailContacto');
  }

  borrarEmail(){
    localStorage.clear();
    this.correo = null;
  }
}
