import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { Grupo } from '../../models/grupo';

@Component({
  selector: 'app-lista-atletas',
  templateUrl: './lista-atletas.component.html',
  styleUrls: ['./lista-atletas.component.css']
})
export class ListaAtletasComponent implements OnInit {

  grupos:Grupo[]=[];
  id:any;
  buscador:boolean=false;
  texto:string;
  noHayNada:boolean=false;
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.noHayNada=false;
    this.buscador=false;
    this.id= localStorage.getItem('idEntrenador');
    this.activatedRoute.params.subscribe(params=>{
      if (params['texto']) {
        this.buscador=true
        this.texto= params['texto'];
      }
    })
    this.listadoAtletas();
  }

  listadoAtletas(){
    this.apiService.getListadoAtletas().subscribe(data=>{
      for(let i of data){
        if (i.id_entrenador=== this.id) {
          if (this.buscador) {
            let l = this.texto.length;
            let aux = i.nombre.replace(/\s+/g, '').toLowerCase();
            if(aux.substring(0,l)===this.texto){
              this.grupos.push(i);
            }
          }else
            this.grupos.push(i);
        }
      }
      if (this.grupos.length==0) {
        this.noHayNada=true;
      }
    })
  }
  verAtleta(idAtleta:any){
    console.log(idAtleta);
    this.router.navigate(['/calendario'], { queryParams: { idAtleta: idAtleta } });

  }

}
