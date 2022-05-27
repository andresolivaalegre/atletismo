import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrenadoresComponent } from './entrenadores/entrenadores.component';
import { AtletasEntrenadorComponent } from './atletas-entrenador/atletas-entrenador.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListaEntrenadoresComponent } from './listas/lista-entrenadores/lista-entrenadores.component';




@NgModule({
  declarations: [
    AppComponent, 
    EntrenadoresComponent,
    AtletasEntrenadorComponent,
    ListaEntrenadoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




