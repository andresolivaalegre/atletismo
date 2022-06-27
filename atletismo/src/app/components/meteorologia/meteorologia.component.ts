import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-meteorologia',
  templateUrl: './meteorologia.component.html',
  styleUrls: ['./meteorologia.component.css']
})
export class MeteorologiaComponent implements OnInit {

  tiempo: any;
  aux:any;
  @Input() fecha:string;

  constructor(private httpservice: ApiService) { }

  ngOnInit(): void {
    this.httpservice.getTiempo(this.fecha).subscribe(data=>{
      this.aux= {...data}
      console.log(this.aux.days[0]);
      this.tiempo= this.aux.days[0];
      console.log(this.tiempo);
    })
  }


}
