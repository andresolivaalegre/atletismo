import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  mostrar: boolean= false;
  seleccionado: boolean= false;
  fecha: any;
  fechaString: string;
  id:any;
  idAtleta:any;

  constructor(private activatedRoute:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    localStorage.removeItem('idAtleta');
    this.id = localStorage.getItem('sessionId');
    console.log(this.id);
    this.idAtleta = this.activatedRoute.snapshot.queryParamMap.get('idAtleta')||0;;
    console.log(this.idAtleta);
  }

  verEntrenamiento(){
    this.mostrar=true;
    if (this.idAtleta==0) {
      localStorage.setItem('idAtleta', this.id);
      this.router.navigate(['/entrenamiento', this.fechaString, false ]);
    }else{
      localStorage.setItem('idAtleta', this.idAtleta);
      this.router.navigate(['/entrenamiento', this.fechaString, false ]);
    }
  }

  editarEntrenamiento(){
    this.mostrar=true;
    if (this.idAtleta==0) {
      localStorage.setItem('idAtleta', this.id);
      this.router.navigate(['/entrenamiento', this.fechaString, true ]);
    }else{
      localStorage.setItem('idAtleta', this.idAtleta);
      this.router.navigate(['/entrenamiento', this.fechaString, true ]);
    }
  }

  dateChanged(date) {
    console.log(date.value._i);
    this.seleccionado= true;
    this.fecha=date.value._i;
    this.fechaString=this.setFechaString(this.fecha);
    console.log(this.fechaString);

  }

  setFechaString(fecha){
    if (fecha.month<10&& fecha.month>=0) {
      fecha.month = `0${fecha.month +1}`;
    }
    if (fecha.date<10&&fecha.date>0) {
      console.log(fecha.date);
      fecha.date=`0${fecha.date}`;
    }

    let fechaNew= `${fecha.year}-${fecha.month}-${fecha.date}`;
    return fechaNew;
  }


}
