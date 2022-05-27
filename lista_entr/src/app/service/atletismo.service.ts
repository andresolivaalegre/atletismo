import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entrenador } from '../model/Entrenador';
import { Atleta } from '../model/Atleta';

@Injectable({
  providedIn: 'root'
})
export class AtletasService {
  urlE:string="http://localhost/tfg_mascota/tfg_login/atletismo/php/getAllUsers.php";

  //url:string="Buscador";
  constructor(private http:HttpClient) { }


  entrenadores(){
    return this.http.get<Entrenador[]>(this.urlE);
  }







}
