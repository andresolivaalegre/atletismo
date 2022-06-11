import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { Ejercicios } from '../../models/ejercicios';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entrenamiento',
  templateUrl: './entrenamiento.component.html',
  styleUrls: ['./entrenamiento.component.css']
})
export class EntrenamientoComponent implements OnInit {


  ejercicios: Ejercicios[]=[];

  constructor(private apiService: ApiService, private activatedRoute:ActivatedRoute) { }

  editar:any;
  disabled:boolean;
  fecha:string;
  id:string;

  ngOnInit(): void {
    this.editar = this.activatedRoute.snapshot.params['editar'];
    if (this.editar=='false') {
      this.disabled=true;
    }
    if(this.editar=='true'){
      this.disabled=false
    }
    this.id = localStorage.getItem('idAtleta');
    console.log(this.id);
    this.fecha = this.activatedRoute.snapshot.params['fecha'];

    this.listadoEjercicios();
    this.listadoValores();
  }


  listadoEjercicios(){
    this.apiService.getAllExercises().subscribe(data=>{
      this.ejercicios=data;
    })
  }
  listadoValores(){
    this.apiService.getEntrenamiento(this.id, this.fecha).subscribe(data=>{
      console.log(data);
    })
  }

}
