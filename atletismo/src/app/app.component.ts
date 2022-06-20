import { Component, OnInit } from '@angular/core';
import { ApiService } from './Services/api.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loginbtn: boolean;
  logoutbtn: boolean;

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
    this.changeName(false);
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

}
