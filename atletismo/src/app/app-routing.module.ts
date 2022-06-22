import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListaEntrenadoresComponent } from './listas/lista-entrenadores/lista-entrenadores.component';
import { ListaAtletasComponent } from './listas/lista-atletas/lista-atletas.component';
import { EntrenamientoComponent } from './entrenamientos/entrenamiento/entrenamiento.component';
import { CalendarioComponent } from './entrenamientos/calendario/calendario.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegisterComponent },
  { path: 'listadoEntrenadores', component:ListaEntrenadoresComponent},
  { path: 'listadoAtletas', component: ListaAtletasComponent},
  { path: 'entrenamiento/:date/:editar', component: EntrenamientoComponent},
  { path: 'calendario', component: CalendarioComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
