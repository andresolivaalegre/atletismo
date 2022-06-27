import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  redirectUrl: string;
  baseUrl: string = 'http://localhost/atletismo/atletismo/php';
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient: HttpClient) {}
  public userlogin(username: any, password: any) {
    return this.httpClient
      .post<any>(this.baseUrl + '/login.php', { username, password })
      .pipe(
        map((Users) => {
          this.setToken(Users[0].name);
          this.getLoggedInName.emit(true);
          return Users;
        })
      );
  }


  public registroGrupo( id_entrenador, id_atleta, nombre) {
    return this.httpClient
      .post<any>('http://localhost/atletismo/atletismo/php/registroGrupo.php', {  id_entrenador, id_atleta, nombre })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  public userregistration(name: any, email: any, pwd: any, esEntrenador:any) {
    return this.httpClient
      .post<any>('http://localhost/atletismo/atletismo/php/register.php', { name, email, pwd, esEntrenador })
      .pipe(
        map((Users) => {
          return Users;
        })
      );
  }

  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true;
    }
    return false;
  }

  isAdmin(){
   return true;
  }

  getAllUsers(){
    return this.httpClient.get<Users[]>("http://localhost/atletismo/atletismo/php/getAllUsers.php");

  }

  getAllExercises(){
    return this.httpClient.get<any[]>("http://localhost/atletismo/atletismo/php/getAllExercises.php");

  }

  saveStudent(student) {
    console.log(JSON.stringify(student));
  }

  getEntrenamiento(){
    return this.httpClient.get<any[]>(`http://localhost/atletismo/atletismo/php/getEntrenamiento.php`)
  }
  getListadoAtletas(){
    return this.httpClient.get<any[]>(`http://localhost/atletismo/atletismo/php/getListadoAtletas.php`)
  }

  public postEntreno(id_usuario,fecha,rodaje,pista,gimnasio) {
    return this.httpClient
      .post<any>('http://localhost/atletismo/atletismo/php/postEntrenamiento.php', { id_usuario,fecha,rodaje,pista,gimnasio })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
  public updateEntreno(id_entrenamiento,id_usuario, fecha, rodaje, pista, gimnasio){
    return this.httpClient.put<any>('http://localhost/atletismo/atletismo/php/updateEntrenamiento.php', { id_entrenamiento,id_usuario,fecha,rodaje,pista,gimnasio })
    .pipe(
      map((data) => {
        return data;
      })
    );
  }

  public getTiempo(fecha:string){
    return this.httpClient.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/madrid/${fecha}/${fecha}?unitGroup=metric&key=EMCP96KQG4N6BFYHT72ZUTJH9&contentType=json`)
  }
}
