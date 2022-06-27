import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/models/users';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-lista-entrenadores',
  templateUrl: './lista-entrenadores.component.html',
  styleUrls: ['./lista-entrenadores.component.css']
})
export class ListaEntrenadoresComponent implements OnInit {


  entrenadores: Users[]= [];
  buscador:boolean=false;
  texto:string;
  noHayNada:boolean=false;



  constructor(private apiService: ApiService, private router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.noHayNada=false;
    this.buscador=false;
    localStorage.removeItem('idEntrenador');
    this.activatedroute.params.subscribe(params=>{
      if (params['texto']) {
        this.buscador=true
        this.texto= params['texto'];
      }
    })
    this.listadoEntrenadores();

  }

  listadoEntrenadores(){
    this.apiService.getAllUsers().subscribe(data=>{
      for(let i of data){
        if (i.entrenador=== '1') {
          if (this.buscador) {
            let l = this.texto.length;
            let aux = i.name.replace(/\s+/g, '').toLowerCase();
            if(aux.substring(0,l)===this.texto){
              this.entrenadores.push(i);
            }
          }else
            this.entrenadores.push(i);
        }
      }
      if (this.entrenadores.length==0) {
        this.noHayNada=true;
      }
    })
  }


  verListaAtletas(idEntrenador){
    localStorage.setItem('idEntrenador', idEntrenador);
    this.router.navigate(['/listadoAtletas']);
  }


}
