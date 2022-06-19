import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-lista-entrenadores',
  templateUrl: './lista-entrenadores.component.html',
  styleUrls: ['./lista-entrenadores.component.css']
})
export class ListaEntrenadoresComponent implements OnInit {


  entrenadores: Users[]= [];


  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    localStorage.removeItem('idEntrenador');
    this.listadoEntrenadores();
  }

  listadoEntrenadores(){
    this.apiService.getAllUsers().subscribe(data=>{
      for(let i of data){
        if (i.entrenador=== '1') {
          this.entrenadores.push(i);
        }
      }
    })
  }

  registro(){
    this.router.navigate(['/registration']);
  }

  verListaAtletas(idEntrenador){
    localStorage.setItem('idEntrenador', idEntrenador);
    this.router.navigate(['/listadoAtletas']);
  }


}
