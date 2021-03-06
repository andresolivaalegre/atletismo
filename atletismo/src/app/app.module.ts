import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ListaEntrenadoresComponent } from './listas/lista-entrenadores/lista-entrenadores.component';
import { ListaAtletasComponent } from './listas/lista-atletas/lista-atletas.component';
import { HeadComponent } from './components/head/head.component';
import { FooterComponent } from './components/footer/footer.component';
import { EntrenamientoComponent } from './entrenamientos/entrenamiento/entrenamiento.component';
import { CalendarioComponent } from './entrenamientos/calendario/calendario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatNativeDateModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MomentDateModule } from '@angular/material-moment-adapter';


import { ChartsModule } from 'ng2-charts';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MY_DATE_FORMATS } from './formato-fechas';
import {MatSelectModule} from '@angular/material/select';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MeteorologiaComponent } from './components/meteorologia/meteorologia.component';
import { GraficaComponent } from './components/grafica/grafica.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeadComponent,
    FooterComponent,
    ListaEntrenadoresComponent,
    ListaAtletasComponent,
    CalendarioComponent,
    EntrenamientoComponent,
    NavbarComponent,
    MeteorologiaComponent,
    GraficaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatCardModule,
    MatDatepickerModule,
    MatInputModule,
    MomentDateModule,
    FormsModule,
    MatSelectModule,
    ChartsModule,
  ],
  providers: [{provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS}],
  bootstrap: [AppComponent]
})
export class AppModule { }
