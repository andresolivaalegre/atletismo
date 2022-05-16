import { Component } from '@angular/core';
import { Atleta } from '../model/Atleta';
import { Entrenador } from '../model/Entrenador';
import { AtletasService } from '../service/atletismo.service';


@Component({
  selector: 'app-entrenadores',
  templateUrl: './entrenadores.component.html',
  styleUrls: ['./entrenadores.component.css']
})
export class EntrenadoresComponent {
  title = 'entrenadores';
  atletas:Atleta[] | undefined;
  entrenador:string="";
  entrenadores:Entrenador[] | undefined;

  constructor(private service:AtletasService){
    this.listaEntrenadores();
  }

  listaEntrenadores(){
    this.entrenadores=[];
    this.service.entrenadores().subscribe(data=>this.entrenadores=data);
  }

 
  
}
