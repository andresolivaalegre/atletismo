import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  NgForm,
} from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../Services/api.service';
import { stringify } from 'querystring';
import { waitForAsync } from '@angular/core/testing';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  angForm: FormGroup;
  id:any;
  incluido=false;
  anterior:any;

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
      name: ['', Validators.required],
      password: ['', Validators.required],
      mobile: ['', Validators.required],
      esEntrenador: ['', Validators.required],
      grupo: ['', Validators.required],
    });
  }

  ngOnInit() {}

  postdata(angForm1: { value: { name: any; email: any; password: any; grupo: any; esEntrenador:any } }) {

    console.log("tamaño inicial",this.dataService.tamañoLista());
    this.dataService    //Primero registramos el nombre, mail, password, y si es entrenador en la tabla de usuarios
      .userregistration(
        angForm1.value.name,
        angForm1.value.email,
        angForm1.value.password,
        angForm1.value.esEntrenador 
      )
      .pipe(first())
      .subscribe(
        (data) => {
          this.router.navigate(['listadoEntrenadores']); //boton a lista de entrenadores
        },
        (error) => {}
      );

      

      if(angForm1.value.esEntrenador=="0"){  
          this.id =3;
        //Si no es entrenador obtenemos el id que se ha generado automaticamente
      this.dataService.registroGrupo(   //Registramos en la tabla de grupos el nombre, grupo, y entrenador
        angForm1.value.grupo,
        angForm1.value.grupo,
        this.id,
        angForm1.value.name
      );
      }
  

      console.log("tamaño final",this.dataService.tamañoLista());

  }



  get email() {
    return this.angForm.get('email');
  }
  get password() {
    return this.angForm.get('password');
  }
  get name() {
    return this.angForm.get('name');
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
  get nameNoValido() {
    return this.angForm.get('name').invalid && this.angForm.get('name').touched;
  }
}
