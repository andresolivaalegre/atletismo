import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/userService/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from '../../servicios/userService/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() { }

  usuarioModel = new Usuario("", "", "", undefined, false);

  onLogin() {
    console.log(this.usuarioModel);
    this.usuarioService.login(this.usuarioModel.correo, this.usuarioModel.contrasena).subscribe();
  }

}
