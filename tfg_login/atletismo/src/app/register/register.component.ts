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

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  angForm: FormGroup;
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
    });
  }

  ngOnInit() {}

  postdata(angForm1: { value: { name: any; email: any; password: any } }) {

    this.dataService
      .userregistration(
        angForm1.value.name,
        angForm1.value.email,
        angForm1.value.password
      )
      .pipe(first())
      .subscribe(
        (data) => {
          this.router.navigate(['listadoEntrenadores']); //boton a lista de entrenadores
        },

        (error) => {}
      );

      //get usuarios, pillamos el id
      //post hacioa la tabla de los grupos con el id del atleta, el del entrenador del grupo y en nombre del atleta
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
