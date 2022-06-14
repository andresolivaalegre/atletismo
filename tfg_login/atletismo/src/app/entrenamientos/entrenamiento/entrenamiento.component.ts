import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { Ejercicios } from '../../models/ejercicios';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-entrenamiento',
  templateUrl: './entrenamiento.component.html',
  styleUrls: ['./entrenamiento.component.css']
})
export class EntrenamientoComponent implements OnInit {
  editar:any;
  disabled:boolean;
  fecha:string;
  id:any;
  entreno={
    id_entrenamiento:'',
    id_usuario:'',
    fecha:'',
    rodaje:{
      km:'',
      tiempo:'',
      comentarios:''
    },
    pista:{
        series:{
          numero:'',
          distancia:'',
          tiempo:'',
          descanso:''
        },
        multisalto:{
          segundosTriple:'',
          numero:'',
          descanso:''
        },
        comentarios:''
    },
    gimnasio:{
      tipo:{
        pectoral:{
          repeticiones:'',
          kg:'',
          descanso:''
        },
        biceps:{
          repeticiones:'',
          kg:'',
          descanso:''
        },
        cuadriceps:{
          repeticiones:'',
          kg:'',
          descanso:''
        }
      },
      comentarios:''
    }
  };
  //rodajecheck:boolean;
  //pista:boolean;
  //series:boolean;
  //multi:boolean;
  //fuerza:boolean;
  //pectoral:boolean;
  //biceps:boolean;
  //cuadriceps:boolean;

  //entreno:Entreno;

  formularioEntreno: FormGroup;

  constructor(private apiService: ApiService, private activatedRoute:ActivatedRoute, private fb: FormBuilder) { }



  ngOnInit(): void {
    this.editar = this.activatedRoute.snapshot.params['editar'];
    if (this.editar=='false') {
      this.disabled=true;
    }
    if(this.editar=='true'){
      this.disabled=false
    }
    this.id = localStorage.getItem('idAtleta');
    this.fecha = this.activatedRoute.snapshot.params['date'];
    //this.listadoEjercicios();
    this.crearFormulario();
    this.getEntrenamientoHoy();
    //this.seleccionarEntrenamiento();
    //console.log(this.entreno.pista.series);

  }



  crearFormulario() {

    this.formularioEntreno = this.fb.group({
      rodaje: this.fb.group({
        km: [],
        tiempo: [],
        comentarios:[],
      }),
      pista: this.fb.group({
        series: this.fb.group({
          numero: [],
          distancia: [],
          tiempo: [],
          descanso: [],
        }),
        multisalto: this.fb.group({
          segundosTriple: [],
          numero: [],
          descanso: [],
        }),
        comentarios: [],
      }),
      gimnasio: this.fb.group({
        tipo: this.fb.group({
          pectoral: this.fb.group({
            repeticiones:[],
            kg:[],
            descanso:[],
          }),
          biceps: this.fb.group({
            repeticiones:[],
            kg:[],
            descanso:[],
          }),
          cuadriceps: this.fb.group({
            repeticiones:[],
            kg:[],
            descanso:[],
          }),
        }),
        comentarios: [],
      })

    })
  }


  getEntrenamientoHoy(){
    this.apiService.getEntrenamiento().subscribe(data=>{
      //console.log(data);
      for(let i of data){
        if (i.fecha== this.fecha) {
          if (i.id_usuario==this.id) {
            //this.entrenamientos.push(i);

            //console.log(JSON.parse(i.pista));
            //console.log(i.id_entrenamiento);

            this.igualarValores(i);

            //console.log(JSON.parse(i.pista).pista);
            //console.log(this.entreno);
          }
        }
      }
      //console.log(this.entrenamientos);
    })
  }

  igualarValores(i:any){
    this.entreno.id_entrenamiento=i.id_entrenamiento;
    this.entreno.id_usuario=i.id_usuario;
    this.entreno.fecha=i.fecha;
    let rodaje =JSON.parse(i.rodaje).rodaje;
    this.entreno.rodaje.comentarios = rodaje.comentarios;
    this.entreno.rodaje.km=rodaje.km;
    this.entreno.rodaje.tiempo=rodaje.tiempo;

    let pista = JSON.parse(i.pista).pista;
    this.entreno.pista.comentarios= pista.comentarios;
    this.entreno.pista.series.descanso= pista.series.descanso;
    this.entreno.pista.series.distancia=pista.series.distancia;
    this.entreno.pista.series.numero= pista.series.numero;
    this.entreno.pista.series.tiempo=pista.series.tiempo;
    this.entreno.pista.multisalto.descanso=pista.multisalto.descanso;
    this.entreno.pista.multisalto.numero=pista.multisalto.numero;
    this.entreno.pista.multisalto.segundosTriple=pista.multisalto.segundosTriple;

    //console.log(i);

  //console.log(JSON.parse(i.gimnasio));
    let gimnasio = JSON.parse(i.gimnasio).gimnasio;
    this.entreno.gimnasio.comentarios= gimnasio.comentarios;
    this.entreno.gimnasio.tipo.pectoral.descanso= gimnasio.tipo.pectoral.descanso;
    this.entreno.gimnasio.tipo.pectoral.kg= gimnasio.tipo.pectoral.kg;
    this.entreno.gimnasio.tipo.pectoral.repeticiones= gimnasio.tipo.pectoral.repeticiones;
    this.entreno.gimnasio.tipo.biceps.descanso= gimnasio.tipo.biceps.descanso;
    this.entreno.gimnasio.tipo.biceps.kg= gimnasio.tipo.biceps.kg;
    this.entreno.gimnasio.tipo.biceps.repeticiones= gimnasio.tipo.biceps.repeticiones;
    this.entreno.gimnasio.tipo.cuadriceps.descanso= gimnasio.tipo.cuadriceps.descanso;
    this.entreno.gimnasio.tipo.cuadriceps.kg= gimnasio.tipo.cuadriceps.kg;
    this.entreno.gimnasio.tipo.cuadriceps.repeticiones= gimnasio.tipo.cuadriceps.repeticiones;

    return this.entreno;
    //console.log(this.entreno.rodaje);
  }

  igualarValoresFormulario(i:any){
    this.entreno.rodaje.comentarios = i.rodaje.comentarios;
    this.entreno.rodaje.km=i.rodaje.km;
    this.entreno.rodaje.tiempo=i.rodaje.tiempo;

    this.entreno.pista.comentarios= i.pista.comentarios;
    this.entreno.pista.series.descanso= i.pista.series.descanso;
    this.entreno.pista.series.distancia=i.pista.series.distancia;
    this.entreno.pista.series.numero= i.pista.series.numero;
    this.entreno.pista.series.tiempo=i.pista.series.tiempo;
    this.entreno.pista.multisalto.descanso=i.pista.multisalto.descanso;
    this.entreno.pista.multisalto.numero=i.pista.multisalto.numero;
    this.entreno.pista.multisalto.segundosTriple=i.pista.multisalto.segundosTriple;

    this.entreno.gimnasio.comentarios= i.gimnasio.comentarios;
    this.entreno.gimnasio.tipo.pectoral.descanso= i.gimnasio.tipo.pectoral.descanso;
    this.entreno.gimnasio.tipo.pectoral.kg= i.gimnasio.tipo.pectoral.kg;
    this.entreno.gimnasio.tipo.pectoral.repeticiones= i.gimnasio.tipo.pectoral.repeticiones;
    this.entreno.gimnasio.tipo.biceps.descanso= i.gimnasio.tipo.biceps.descanso;
    this.entreno.gimnasio.tipo.biceps.kg= i.gimnasio.tipo.biceps.kg;
    this.entreno.gimnasio.tipo.biceps.repeticiones= i.gimnasio.tipo.biceps.repeticiones;
    this.entreno.gimnasio.tipo.cuadriceps.descanso= i.gimnasio.tipo.cuadriceps.descanso;
    this.entreno.gimnasio.tipo.cuadriceps.kg= i.gimnasio.tipo.cuadriceps.kg;
    this.entreno.gimnasio.tipo.cuadriceps.repeticiones= i.gimnasio.tipo.cuadriceps.repeticiones;

    return this.entreno;
  }



  guardarinfo(entreno:any){
    //console.log(this.formularioEntreno.value);
    //console.log( JSON.stringify(this.formularioEntreno.value));
    //console.log(entreno);
    let aux=this.igualarValoresFormulario(this.formularioEntreno.value);
    console.log(aux);

  }


}
