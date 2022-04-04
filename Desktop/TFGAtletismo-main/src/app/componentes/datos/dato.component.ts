import { Component, OnInit } from '@angular/core';
import { Dato } from 'src/app/entidades/dato';


@Component({
  selector: 'app-datos',
  templateUrl: './dato.component.html',
  styleUrls: ['./dato.component.css']
})
export class DatosComponent implements OnInit {


  listaDatos: Dato[] = []
  valor : string = "";
  
  


  constructor() { 
    
  }

  public insertar(){
    
    let dato : Dato = new Dato(this.valor);
      this.listaDatos.push(dato)
      this.vaciar()
  }

 
  public vaciar(){  
    this.valor = ""
  }
  
 
  
  ngOnInit() {

  }

}
