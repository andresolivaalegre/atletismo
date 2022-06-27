import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginbtn: boolean = false;
  logoutbtn: boolean = false;
  entrenador:boolean =false;
  atleta:boolean=false;

  constructor(private dataService: ApiService, private router: Router, private location: Location) {
    dataService.getLoggedInName.subscribe((name) => this.changeName(name));
    if (this.dataService.isLoggedIn()) {
      console.log('loggedin');
      this.loginbtn = false;
      this.logoutbtn = true;
    } else {
      this.loginbtn = true;
      this.logoutbtn = false;
    }

  }
  ngOnInit(): void {
if (this.router.url==='/listadoEntrenadores') {
      this.entrenador=true;
    }else
      this.entrenador=false;

    if (this.router.url==='/listadoAtletas') {
      this.atleta=true;
    }else
      this.atleta=false;
  }

  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }
  logout() {
    this.dataService.deleteToken();
    this.changeName(false);
    this.router.navigate(['/login']);
    localStorage.clear();
  }
  goBack(){
    if (this.router.url ==='/listadoEntrenadores' || this.router.url === '/calendario') {
      this.logout();
    }else
      this.location.back();
  }
  registro(){
    this.router.navigate(['/registration']);
  }

  buscarEntrenador(texto:string){
    if (texto.length==0) {
      return;
    }else{
    this.router.navigate(['listadoEntrenadores', texto.replace(/\s+/g, '')]);
    }
  }
  buscarAtleta(texto:string){
    if (texto.length==0) {
      return;
    }else{
    this.router.navigate(['listadoAtletas', texto.replace(/\s+/g, '')]);
    }
  }


}
