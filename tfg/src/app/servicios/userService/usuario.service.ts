import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }


  login(correo: String, contrasena: String) {
    return this.http.post(`${this.baseUrl}/login.php`, { correo: correo, contrasena: contrasena });
  }

}
