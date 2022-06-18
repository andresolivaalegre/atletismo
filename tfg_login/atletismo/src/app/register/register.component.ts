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
  id:any;
  incluido=false;
  anterior:any;
  entrenadorBien=false;
  atletaBien=false;
  entrenadorOK=false;

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

  ngOnInit() {
    this.entrenadorBien=false;
    this.atletaBien=false;
    this.entrenadorOK=false;
  }

  postdata(angForm1: { value: { name: any; email: any; password: any; grupo: any; esEntrenador:any } }) {

    this.dataService
      .userregistration(
        angForm1.value.name,
        angForm1.value.email,
        angForm1.value.password,
        angForm1.value.esEntrenador
      )
      .pipe(first())
      .subscribe(
        (data) => {
          setTimeout(() => {
            console.log('registro bien');
            this.entrenadorOK=true;

          }, 1);

        },
        (error) => {}
      );

    setTimeout(() => {
      this.dataService.getAllUsers().subscribe(data=>{
        for(let i of data){
          if (i.email==angForm1.value.email) {
            this.id=i.id;
            console.log(this.id);
          }
        }
      })
    }, 500);

    setTimeout(() => {
      if(angForm1.value.esEntrenador=="0"){
      console.log('identrenador:'+angForm1.value.grupo+'idatleta:'+this.id+'nombre:'+angForm1.value.name);
      this.dataService.registroGrupo(
        angForm1.value.grupo,
        this.id,
        angForm1.value.name
      ).pipe(first())
      .subscribe(
        (data) => {
          console.log(`registro grupo bien ${data}`);
          this.atletaBien=true;
        },
        (error) => {console.log(error);}
      );
      }else{
        if (this.entrenadorOK) {
          this.entrenadorBien=true

        }
      }
    }, 1000);

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
