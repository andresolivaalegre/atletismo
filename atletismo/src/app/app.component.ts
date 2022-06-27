import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  loginbtn: boolean = false;
  logoutbtn: boolean = false;
  entrenador:boolean =false;
  atleta:boolean=false;

  constructor() {
  }
  ngOnInit(): void {
   }


}
