import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosComponent } from './componentes/datos/dato.component';
import { HeaderComponent } from './componentes/header/header.component';

@NgModule({
  declarations: [	
    AppComponent,
      DatosComponent,
      HeaderComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
