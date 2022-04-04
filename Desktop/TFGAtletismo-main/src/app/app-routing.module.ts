import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DatosComponent } from './componentes/datos/dato.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'datos' },
  { path: 'datos', component: DatosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
