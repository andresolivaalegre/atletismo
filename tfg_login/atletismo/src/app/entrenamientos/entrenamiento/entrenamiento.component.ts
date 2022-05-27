import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { Ejercicios } from '../../models/ejercicios';

@Component({
  selector: 'app-entrenamiento',
  templateUrl: './entrenamiento.component.html',
  styleUrls: ['./entrenamiento.component.css']
})
export class EntrenamientoComponent implements OnInit {


  ejercicios: Ejercicios[]=[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.listadoEjercicios();
  }


  listadoEjercicios(){
    this.apiService.getAllExercises().subscribe(data=>{
      console.log(data);
      this.ejercicios=data;
    })
  }

}
