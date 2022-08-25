import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContatoComponent } from './add-contato/add-contato.component';
import { ExibeContatoComponent } from './exibe-contato/exibe-contato.component';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './model/angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    AddContatoComponent,
    ExibeContatoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
