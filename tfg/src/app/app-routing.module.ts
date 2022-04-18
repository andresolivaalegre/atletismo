import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarMascotaComponent } from './componentes/agregar-mascota/agregar-mascota.component';
import { ListarMascotasComponent } from './componentes/listar-mascotas/listar-mascotas.component';
import { EditarMascotaComponent } from './componentes/editar-mascota/editar-mascota.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  { path: "acerca-de", component: AcercaDeComponent },
  { path: "mascotas", component: ListarMascotasComponent },
  { path: "mascotas/agregar", component: AgregarMascotaComponent },
  { path: "mascotas/editar/:id", component: EditarMascotaComponent },
  { path: "", redirectTo: "/mascotas", pathMatch: "full" },// Cuando es la raíz
  { path: "**", redirectTo: "/mascotas" },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
