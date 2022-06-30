import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  @Input() fecha:string;
  @Input() id:any;

  title = 'chartAngular';

  chartDataRodaje = [
    {
      data: [],
      label: 'Pista (Distancia en Km)'
    }
  ];
  chartDataPista = [
    {
      data: [],
      label: 'Series (Distancia en metros)'
    },
    {
      data: [],
      label: 'Multisaltos (Nº de Series)'
    }
  ];
  chartDataFuerza = [
    {
      data: [],
      label: 'Pectoral (Kg)'
    },
    {
      data: [],
      label: 'Biceps (Kg)'
    },
    {
      data: [],
      label: 'Cuadriceps (Kg)'
    }
  ];

  chartLabels = [];

  chartOptions = {
    responsive: true
  };
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    let fechas=this.getfechas();
    for (let i = 0; i <= fechas; i++) {
      this.chartLabels.push(i);
    }
    this.getEntrenamientoHoy();
    console.log(this.chartDataPista);
    console.log(this.chartDataRodaje);
    console.log(this.chartDataFuerza);
  }

  getfechas(){
    let anio=this.fecha.substring(0,4);
    let auxA= Number(anio);
    let mes= this.fecha.substring(5,7);
    let auxM = Number(mes);
    return new Date(auxA, auxM, 0).getDate();
  }

  getEntrenamientoHoy() {
    this.apiService.getEntrenamiento().subscribe((data) => {
      for (let i of data) {
        if (i.fecha.substring(5,7) == this.fecha.substring(5,7)) {
          if (i.id_usuario == this.id) {
            let rodaje = JSON.parse(i.rodaje);
            let pista = JSON.parse(i.pista);
            let fuerza = JSON.parse(i.gimnasio);

            let auxF= Number(i.fecha.substring(8,10));
            this.chartDataRodaje[0].data[auxF]=Number(rodaje.km);
            this.chartDataPista[0].data[auxF]=Number(pista.series.distancia);
            this.chartDataPista[1].data[auxF]=Number(pista.multisalto.numero);
            this.chartDataFuerza[0].data[auxF]=Number(fuerza.tipo.pectoral.kg);
            this.chartDataFuerza[1].data[auxF]=Number(fuerza.tipo.biceps.kg);
            this.chartDataFuerza[2].data[auxF]=Number(fuerza.tipo.cuadriceps.kg);
          }
        }
      }
    });
  }
}
