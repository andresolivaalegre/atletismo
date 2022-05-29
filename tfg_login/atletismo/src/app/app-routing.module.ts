import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';
import { ListaEntrenadoresComponent } from './listas/lista-entrenadores/lista-entrenadores.component';
import { ListaAtletasComponent } from './listas/lista-atletas/lista-atletas.component';
import { EntrenamientoComponent } from './entrenamientos/entrenamiento/entrenamiento.component';
import { CalendarioComponent } from './entrenamientos/calendario/calendario.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'registration', component: RegisterComponent },
  { path: 'listadoEntrenadores', component:ListaEntrenadoresComponent},
  { path: 'listadoAtletas', component: ListaAtletasComponent},
  { path: 'entrenamiento/:id/:date/:editar', component: EntrenamientoComponent},
  { path: 'calendario/:id', component: CalendarioComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthguardGuard],
  },
  { path: 'bienvenida/:email', component: DashboardComponent },
  {
    path: 'bienvenida',
    component: DashboardComponent,
    canActivate: [AuthguardGuard],
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
