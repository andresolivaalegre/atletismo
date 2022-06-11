import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  seleccionado: boolean= false;
  fecha: any;
  fechaString: string;
  id:number;

  constructor(private activatedRoute:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  verEntrenamiento(){
    console.log(this.id, this.fechaString);
    this.router.navigate(['/entrenamiento', this.id, this.fechaString, false ]);
  }

  editarEntrenamiento(){
    this.router.navigate(['/entrenamiento', this.id, this.fechaString, true ]);
  }

  dateChanged(date) {
    console.log(date.value._i);
    this.seleccionado= true;
    this.fecha=date.value._i;
    this.fechaString=this.setFechaString(this.fecha);
    console.log(this.fechaString);

  }

  setFechaString(fecha){
    if (fecha.month<10|| fecha.month>0) {
      fecha.month = `0${fecha.month}`;
    }
    if (fecha.date<10||fecha.date>0) {
      fecha.date=`0${fecha.date}`;
    }

    let fechaNew= `${fecha.year}-${fecha.month}-${fecha.date}`;
    return fechaNew;
  }


}
