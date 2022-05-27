import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-lista-entrenadores',
  templateUrl: './lista-entrenadores.component.html',
  styleUrls: ['./lista-entrenadores.component.css']
})
export class ListaEntrenadoresComponent implements OnInit {


  entrenadores: Users[]= [];


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.listadoEntrenadores();
  }

  listadoEntrenadores(){
    this.apiService.getAllUsers().subscribe(data=>{
      console.log(data);
      for(let i of data){
        if (i.entrenador=== '1') {
          console.log(i);
          this.entrenadores.push(i);
        }
      }
      console.log(this.entrenadores);
    })
  }


}
