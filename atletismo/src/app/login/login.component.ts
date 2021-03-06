import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../Services/api.service';
import { Users } from '../models/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;
  mal:boolean;
  constructor(
    private fb: FormBuilder,
    private dataService: ApiService,
    private router: Router
  ) {
    this.angForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.pattern(
            '^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$'
          ),
        ],
      ],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.mal=false;
  }
  postdata(angForm1: { value: { email: String; password: String } }) {
    this.dataService
      .userlogin(angForm1.value.email, angForm1.value.password)
      .pipe(first())
      .subscribe(
        (data) => {
          localStorage.setItem('sessionId', data[0].id)
          console.log(data[0].entrenador);
          console.log(data[0].id);
          if(data[0].entrenador==='1'){
            this.router.navigate(['/listadoEntrenadores']);
          }else{
            this.router.navigate(['/calendario']);
          }
          //const ruta = '/bienvenida';
          //const mail = angForm1.value.email;
          //console.log(mail);
          //const redirect = this.dataService.redirectUrl
          //  ? this.dataService.redirectUrl
          //  : ruta;
          //this.router.navigate([redirect, mail]);
        },
        (error) => {
          console.log(this.angForm);
          console.log(this.passwordNoValido);
          this.mal=true;
        }
      );
  }
  get email() {
    return this.angForm.get('email');
  }
  get password() {
    return this.angForm.get('password');
  }

  get emailNoValido() {
    return (
      this.angForm.get('email').invalid && this.angForm.get('email').touched
    );
  }
  get passwordNoValido() {
    return (
      this.angForm.get('password').invalid &&
      this.angForm.get('password').touched
    );
  }
}
