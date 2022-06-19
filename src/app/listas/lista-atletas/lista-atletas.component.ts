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
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id= localStorage.getItem('idEntrenador');
    this.listadoAtletas();
  }

  listadoAtletas(){
    this.apiService.getListadoAtletas().subscribe(data=>{
      console.log(data);
      console.log(this.id);
      for(let i of data){
        if (i.id_entrenador=== this.id) {
          console.log(i);
          this.grupos.push(i);
        }
      }
      console.log(this.grupos);
    })
  }
  verAtleta(idAtleta:any){
    console.log(idAtleta);
    this.router.navigate(['/calendario'], { queryParams: { idAtleta: idAtleta } });

  }

}
